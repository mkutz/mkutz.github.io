<!-- Timestamps in HTML comments refer to the YouTube recording. -->

![Title slide: Untangle Your Spaghetti Test Code](slides/01-title.webp)

<!-- 0:00:06 -->
Welcome, everybody, to my talk about untangling test code. I'm Michael, I come from Germany, from Cologne. I work for REWE, which – you may or may not know – is the second-biggest supermarket chain in Germany. Supermarkets are strange: they don't go across borders for some reason. I don't know why. Discounters do, of course.

I've been working at REWE for ten years now, and we're doing microservices. It's all nice and tidy most of the time. But eventually, a service is like four years old, and you haven't touched it for a year – it was running well, right? And then you get a new requirement, and you try to implement it.

<!-- 0:00:55 -->
I don't know if you know this, but test code can be really mean to us when we try to change something. I wrote that test code myself. I was passionate about testing, about test automation. I thought: I make a change, I run the tests, and I'm 89% sure this won't cause a problem. But still, that test code sucked.

## Why does the quality of test code matter?

![Why does the quality of test code matter?](slides/02-why-test-code-quality.webp)

So, why does the quality of test code matter? Or let me turn that question around: why doesn't it? Because what we do in test code, we would never do in production code. And that's what this talk is about: the sins we commit in test code that we'd never commit in production code. I wonder why that is. If anybody has an answer to the question why we're so sloppy with test code, I'd be interested to chat about it.

![Test code is code. What's considered bad in production code is bad in test code. Its intention should be immediately obvious. Its functionality should not be obscured. Its results should be meaningful. Its failure causes should be easy to find. Its maintenance should not be hard.](slides/03-test-code-is-code.webp)

<!-- 0:02:00 -->
So I've been thinking about what good test code is. One of the most fundamental things: test code is just code. We can't act like we don't need to maintain it, because we do. Otherwise, we could just not write it – and we know that doesn't end well, right? Anybody want to object? Okay. So what's considered bad in production code, we should not do in test code. Simple as that.

<!-- 0:02:44 -->
In addition to what's bad in production code, for test code I think it's very important that we can see the intention of the test very clearly. We shouldn't have to guess. Has anybody ever come back to a test they wrote two years earlier and been flabbergasted: what was that test supposed to do? Why is it here in the first place? And how the hell does it work? I think the most terrible thing is when you really end up guessing what your intention was back then.

Its functionality should not be obscured. I already spoiled that one. You look at the test, it fails, and you really don't know why. It just fails, and you don't get how the test is technically set up.

<!-- 0:03:38 -->
Its results should be meaningful. Spoiled that as well. When I have a failing test, I should immediately know what's wrong. Is this bad? Or is it okay-ish, because I just made a change and this test was supposed to fail, because it described the previous behavior?

And failure causes should be easy to find. That sounds like the same thing, but it isn't. When I add a lot of abstraction to my tests – which sometimes solves the first problem – I can obscure the failure causes. There's no Cmd-click that takes me right to where the error began; it might take me a while to click through all the abstraction layers.

And its maintenance should not be hard. Okay, that's the same for production code, I guess.

## Arrange, Act, Assert

![Arrange, Act, Assert: all tests have three parts (or less) – Arrange/Given sets everything up (optional), Act/When is the interaction with the unit under test, Assert/Then checks the effects of act](slides/04-arrange-act-assert.webp)

<!-- 0:04:41 -->
The first untangle – I want to start with it because I'll refer to it for the whole talk, and I realized we need to talk about it. Who knows about Arrange, Act, Assert? Yeah. Anybody who doesn't? Okay. Given, When, Then – yeah, it's basically the same idea.

<!-- 0:05:12 -->
We have three parts to a test. One part where we set stuff up. One part where we interact with the unit under test. And a final part where we verify what happened.

The first part can sometimes be omitted if we don't need to set up much. In a lot of unit tests – let's say we test a method that adds two integers – there's not much to set up, right? And act and assert can sometimes be one line, because we just call a function and immediately check the result.

But this is a good structure. I'd go so far as to say each of these should be roughly one thing… I'll get to that. This structure is just a good way to structure your tests. Sometimes you'll be tempted to add a second act and a second assert. Don't.

## Hidden Arrange

![Hidden Arrange: tests rely on non-obvious setup mechanisms and/or test data](slides/05-hidden-arrange.webp)

<!-- 0:06:10 -->
Okay: Hidden Arrange. Hidden Arrange is when a test implicitly relies on certain things happening outside of the test.

![Hidden Arrange example: a Spring Boot test expecting exactly one unicorn, with the data coming from an implicitly executed SQL script](slides/06-hidden-arrange-code.webp)

Here's an example. It's Java – I hope you can abstract from the language if you don't like Java. Nobody really does, but everybody knows it, so I figured it would be okay. This is a Spring Boot test, where we fire up a whole microservice and then just call the API to check whether it does what it should.

<!-- 0:06:51 -->
First, we have this `restTemplate.getForEntity`. We call some URL and expect a string as a result. Fine. Then we do some assertions. The status should be HTTP OK – fine. The body should be JSON, apparently, because we're using an object mapper to read it. Okay. The body should not be null. Fine. The body is an array. And its size should be one.

Why one? Why not zero? There's nothing up here. We just initialize that object mapper and inject the base URL, and up here are some annotations that don't give us any information. Does anybody know how this witchcraft happens?

<!-- 0:07:42 -->
You can put a script in your project – it needs to be in `src/test/resources` and be named something like `anything.sql` – and it will be executed implicitly before your tests run. This is convenient. I was delighted when I found that feature once. And by the way, it's fine for setting up your schema or something. But don't add data through that mechanism.

Because now, let's say we need more than this one unicorn in our database. So we change that script to have two unicorns – and now this test fails for all the wrong reasons. So don't do this.

![Hidden Arrange violates: functionality not obscured, failure causes easy to find](slides/07-hidden-arrange-verdict.webp)

<!-- 0:08:43 -->
So in my opinion, hidden arrange violates some of the properties of good tests. It obscures the functionality. There are additional failure causes we don't know about. And we can't reference the data that was implicitly added to the database.

### Untangle: Test Data Manager

![Test Data Manager: directly set up the database according to your tests' needs](slides/08-test-data-manager.webp)

What we can do about it is something I call a test data manager. There are several ways to implement this.

![The test before adding a test data manager](slides/09-test-data-manager-before.webp)

![The test with testDataManager.clean().withUnicorn(…) in the arrange block](slides/10-test-data-manager-test.webp)

<!-- 0:09:10 -->
Basically, we take this test – it stays the same – and we just add this. This is the test data manager, as I call it. I call `clean()`, which basically truncates all the tables – I don't want any data in the database from another test that ran before. And then `withUnicorn()`, with the one unicorn that I have in my test.

![The TestDataManager class using a JdbcTemplate to insert unicorns](slides/11-test-data-manager-class.webp)

And this is the test data manager. It uses a database connection and basic SQL, again, to put data into the database. And `clean()` is `TRUNCATE TABLE`.

![Test Data Manager makes the intention obvious and the results meaningful](slides/12-test-data-manager-verdict.webp)

<!-- 0:10:07 -->
This way, we have full control over what's in the database in any test case. We can now also test that there's nothing in the database – maybe in that case we expect something other than HTTP OK. Maybe we can test what happens if there's too much in the database, something like that. So now we have full control. And we can reference the data we put in in the arrange block in the assert block, which is usually a good thing to do.

<!-- 0:10:38 -->
So we have a clear intention, because now the arrange block says: there's one unicorn in the database. You don't need to state that in the name of the test; it's just obvious. The next test case might be something like "empty database", a special case, where we just call `testDataManager.clean()`. So we don't rely on the test name; we can just look at the arrange block to figure out what's different, what's special about this test.

That's the underrated property of arrange blocks: they tell me what's different. Lots of tests are very technical in the arrange part, because it's considered "just setup".

## Magic Values

![Magic Values: literal values in the test code chosen for no immediately obvious reason](slides/13-magic-values.webp)

<!-- 0:11:26 -->
Magic values. Anybody familiar with the concept? I think so. Basically, these are literal values like 42, 23, 123 in your code, without any hint why they were chosen. Sometimes we use a value like 123 and think it'll be obvious that I just picked any integer. Sometimes it isn't. Sometimes it was important that it's above 120, for example, or below 1,000. We can't see these properties when we're facing magic values, because they're magic.

![Magic Values example: a unicorn created with random-looking literals and an age assertion of 61](slides/14-magic-values-code.webp)

<!-- 0:12:16 -->
So here we see something. This is the smallest, most terrible test I've ever written. I wrote it myself, and not for the sake of a bad example – I really did it.

It's pretty easy, right? You have this unicorn object with a bunch of properties. It's a really simple record class, nothing special about it; it doesn't even have proper methods. And I'm just calling the constructor.

<!-- 0:12:55 -->
`randomUUID()` – that doesn't matter, I guess. Obviously. Well, does it? Maybe it needs to be random, because there's already something in the database, and if I put another thing with the same UUID in the database, it would fail. I don't know. "Gilly" – probably not important. I don't know. Mane color red – I guess that's random. 111 – sounds random. Whatever.

And now here we have 62 years plus one day, and here we have 61. Is there a relationship? It's not that hard to figure out that there is one. But I'm guessing at least. And maybe it's a mistake – maybe it was supposed to be minus days or something like that. So it's really not obvious what's important here. I need to go through all these things, and I'm still guessing what this means.

(And then I added highlight steps and forgot about them.)

![Magic Values violates: intention obvious, functionality not obscured, maintenance not hard](slides/15-magic-values-verdict.webp)

<!-- 0:13:58 -->
So this is a bad practice in production code, and it's also a bad practice in test code. For some reason, it's the most common thing people do anyway. If anybody has an explanation why magic values are considered okay in test code, let's talk. I guess it's just for the sake of coming up with examples quickly. But still, it's bad.

It obscures the intention: why was that value chosen? Is there some property of the value that I can't see? The functionality can sometimes be obscured by magic values. And maintenance is hard, especially when there's a hidden property in the magic value and it changes. Because then we have to go through all the tests that use the same magic value and update them.

## Long Arrange

![Long Arrange: e.g. data objects created with all fields, even if the value doesn't matter for the case](slides/16-long-arrange.webp)

<!-- 0:15:00 -->
Oh, right – somebody forgot about his own structure.

![Long Arrange example: the full unicorn constructor with all its fields](slides/17-long-arrange-code.webp)

The same example also shows something else: this is a long arrange. These are quite a few lines. I don't like it. If the next test was, let's say, 62 years without the plus-days part, a lot of lines would be the same, and only that one line would differ. That's bad. As I just said, arrange blocks should indicate what's different in the test. If I have a lot of boilerplate lines, they obscure the difference. So the intention is no longer immediately obvious.

![Long Arrange violates: intention obvious](slides/18-long-arrange-verdict.webp)

### Untangle: Test Data Builder

![Test Data Builder: use a builder class to create whatever object is required for the test; make massive use of defaults and data generators](slides/19-test-data-builder.webp)

<!-- 0:16:02 -->
What we can do – as Richard Bradshaw also suggested yesterday – is use the builder pattern. Anybody familiar with the builder pattern? Okay, it's pretty common, right?

![The long arrange before using a test data builder](slides/20-test-data-builder-before.webp)

![Test Data Builder: aUnicorn().dateOfBirth(…).build() – only the relevant property is set explicitly](slides/21-test-data-builder-test.webp)

So in test code, we can replace this with this one line. Well, it could be one line, but I like to spread it over several lines. And now we only set the date of birth explicitly. So the next test, with another example – oh, I just realized I used a different example – would be obviously different.

![The UnicornTestDataBuilder class with defaults, modifiers and build()](slides/22-test-data-builder-class.webp)

<!-- 0:16:41 -->
The test data builder has some properties that are set constant, and some that are random, but with explicit constraints – for example, here, 1 to 101. It has an initializer and some modifiers, so it can change whatever I need to change for a certain test case. And then I can build it.

<!-- 0:17:13 -->
And this is now the only place in my whole test code where this constructor is called. So if I add another property to that object, I'll probably only need to go into this builder, and all the tests will be fine. I'll probably need to add some test cases, but I don't need to revise all the other test cases.

![Test Data Builder makes the intention obvious and maintenance easier](slides/23-test-data-builder-verdict.webp)

So we have a very clear intention, because we've shortened our arrange block to the bare minimum – the part that really differs. And maintenance is way easier, because we now have one central file with all the example data and the properties that example data should have.

<!-- 0:18:03 -->
Who uses Instancio? Instancio is really great. It basically gives you a generic way to get these builders, so you don't need to write them yourself. To be honest, I went back to writing my own builders, because it felt right. But if you have really, really huge data objects – especially ones with complex properties, like a unicorn having a sub-object that you need to fill as well – it really sucks. With Instancio you just say: give me an instance of this class, and it gives you a filled instance. If it's a list, there will be a list with 20 or 21 elements or whatever. Check it out if you have that problem with huge data classes – more than 20 properties or so. Then it really makes sense.

<!-- 0:19:10 -->
By the way, I'm fine with you asking questions in between, so go ahead. I like it.

## Long/Technical Act

![Long/Technical Act: multiple acts in one test case; the act is bloated with technical details](slides/24-long-technical-act.webp)

![Long/Technical Act example: a REST call with headers and URL building in the test](slides/25-long-technical-act-code.webp)

Right: long technical act. We already saw that – these are quite a few lines of code, right? This is a test that posts a unicorn as a JSON object to the API and then makes some assertions. – Sorry, I have a cold. – I don't really care about this header right now. It's a technical detail; I'm not interested in it.

![Long/Technical Act violates: intention obvious, maintenance not hard](slides/26-long-technical-act-verdict.webp)

<!-- 0:19:54 -->
Also this URL: if I change the API URL, I need to update all the tests that have the same code. So this can be a maintenance burden as well. The functionality is pretty obvious, because we're just calling the API like we would in production code. But it's too much detail, right?

### Untangle: Act Helper

![Act Helper (Method): use a method to avoid code duplication and make the unit under test more obvious](slides/27-act-helper.webp)

<!-- 0:20:14 -->
What we can do is use an act helper method. I call it an act helper; you could also call it an actor.

![The long act before extracting an act helper](slides/28-act-helper-before.webp)

I can replace this with one class that I call `FrontendActHelper`, because what I'm doing here is acting like the front end would. So I decided to put all the methods that behave on behalf of the real front end into a front-end act helper.

![Act Helper: frontend.postUnicorn(garryJson) and the FrontendActHelper class](slides/29-act-helper-code.webp)

<!-- 0:20:56 -->
This is quite nice, because it adds one more useful piece of information to the test: which component this is important for. If this API was broken, my front end would be broken – that's what this line also tells me. And inside, we have the same code we had before. Pretty easy.

(Forgot to set my timer. Okay, sorry.)

![Act Helper makes the intention obvious and maintenance easier](slides/30-act-helper-verdict.webp)

So now we have a much better intention. And maintenance is easier, because again we have one central class where we keep, for example, the information on how we build the base URL.

<!-- 0:21:43 -->
Questions?

## Long Assert

![Long Assert: verify multiple aspects in one test case; check properties of data objects one by one](slides/31-long-assert.webp)

Long assert. A lot of things in tests can get long and confusing, and long assert is basically the other side of it.

![Long Assert example: a wall of assertions checking each JSON property one by one](slides/32-long-assert-code.webp)

So here we're using a builder – nice. We only need a standard unicorn, which is interesting; we don't need any special properties. We use the test data manager to clear the database and put that one unicorn in. Then we use the front-end act helper – nice – to get the unicorn. And now we have this.

![Long Assert violates: intention obvious, failure causes easy to find](slides/33-long-assert-verdict.webp)

<!-- 0:22:35 -->
Why is this dangerous? Any idea?

One danger is that I won't read this, because it's basically a wall of text. I don't want to read it. I'll assume these are all the properties of a unicorn. Spoiler: they aren't. One is missing. And I'll also assume that this isn't important – it's basically just an equals. A sophisticated equals: I get JSON out, and I compare it with the unicorn I put into the database in the first place. That's what this intends to do. But that intention isn't visible.

<!-- 0:23:21 -->
Maybe there's one value that I changed for some reason – maybe it was plus one, because the unicorn got older or something. I don't know. And failure causes aren't easy to find either, because we have a lot of potential errors, and now we need to figure out why that value changed.

### Untangle: Assert Helper

![Assert Helper (Method): group long asserts that check one logical thing in verification methods](slides/34-assert-helper.webp)

<!-- 0:24:07 -->
So what we can do, again, is use a helper method – or a helper. In this case, an assert helper.

![The long assert before extracting an assert helper](slides/35-assert-helper-before.webp)

![Assert Helper: assertHelper.assertEquals(response.getBody(), unicorn)](slides/36-assert-helper-test.webp)

Instead of this – I shortened it a bit because the code got too long – we can use the assert helper: `assertHelper.assertEquals(…)`. These aren't the same type: this one is a string and this one is a unicorn object. But I don't care. I'll just implement it the same way the test looked before. But now my intention is obvious: I want to check whether these are equal.

![The AssertHelper class comparing the JSON with the unicorn field by field](slides/37-assert-helper-class.webp)

<!-- 0:24:40 -->
[Audience remark]

All right. Good – somebody paid attention.

<!-- 0:24:59 -->
Another solution that I didn't put on the slides: approval testing. Anybody familiar with approval testing? Approval testing takes the string – the JSON – and the first time you run the test, it writes that JSON into a file, which you'll then find next to your test code. When you rename it to "approved" or something like that, the next run will compare the result against the previous result. So you get a nice diff: this is missing, this has changed. A diff that everybody understands: this line has changed, this line has changed. And you're definitely checking all the values. So this is a really good thing. Especially when you have huge data objects, I'd point you to approval testing instead.

![Assert Helper makes the intention obvious and maintenance easier](slides/38-assert-helper-verdict.webp)

<!-- 0:26:00 -->
[Audience remark: with the assert helper, the failure causes are still hard to find.]

Yes, you're right. The failure cause is still hard to find – the helper just doesn't make it worse either. You're right, I shouldn't have marked that. Very good.

<!-- 0:27:30 -->
[Audience suggestion from the back: construct a unicorn from the JSON and simply compare with equals.]

Yes, that would also be an option: something that takes the JSON and tries to construct a unicorn from it, and then you simply use equals. That would also be a good option, I think – though it's debatable whether it's a good idea, to be honest. Sometimes that's not possible. Sometimes something is missing, or it's not directly convertible. Then the failure would be in constructing the comparison unicorn instead of in the test. I think I have it on the cheat sheet that I'll show you later. But it's debatable.

<!-- 0:28:20 -->
Anyway: try to get away from this block of assertions and try to express your intent. That's the goal. I don't have a perfect solution, to be honest. Approval testing is quite close, but then you have that comparison file somewhere – also not ideal, I think, but way better when you have really huge result objects. So make your intention clear. What are you comparing? Is it an equals comparison? Or is it a diff against what you put into the database before? And it also leaves less code scattered all over your test base, right?

## Lying, Inconsistent and Bad Names

![Lying/Inconsistent/Bad Names: test case names don't reflect the actual test content; names are chosen inconsistently](slides/39-bad-names.webp)

<!-- 0:29:12 -->
This is my favorite part of this presentation, because usually a lot of people don't like it: test case names. Who likes naming test cases? Okay – what's wrong with you?

In some test frameworks, you don't even have to. RSpec, Richard? In RSpec you don't even write test names? Okay. There are test frameworks where you don't really have to name tests, but in Java you do.

<!-- 0:29:58 -->
So, all the time, in all the examples, it was kind of a micro-aggression: I put really randomly named tests in there, with no pattern at all.

![Lying name: testHDNotGivenResultsIn500 actually expects 400 and sets the horn diameter to 0](slides/40-bad-names-code.webp)

Here: `testHDNotGivenResultsIn500`. Last time I checked, this wasn't 500. And "not given" – well, it's zero. That's not "not given", in my opinion. So how did this happen? Most of the time, I copy-pasted a test case and kind of updated the name, but I didn't pay much attention. And test case names – if you put everything in there, they get that long, right? So I just leave it like that.

<!-- 0:31:00 -->
But this is a problem, because it leads us to wrong conclusions. We might wonder: is the name wrong, or is the implementation wrong? That's not a good place to be in.

![Inconsistent names in UnicornTest and UnicornApiTest](slides/41-bad-names-classes.webp)

In unit tests, you might have something like `ageWorks`, `ageWorksHereToo`, `ageWorksHereAlso`. I'm exaggerating, I think, but I've found something like that. And in API tests, we might have `getUnicornsWorksAndReturnsNonEmptyList`. That's not interesting. I'll probably never read it, and I'll probably never update it. So it'll be wrong eventually.

![Lying/Inconsistent/Bad Names violates: intention obvious, results meaningful, maintenance not hard](slides/42-bad-names-verdict.webp)

<!-- 0:31:47 -->
So the problem is that the intention is now obscured, because I have two different sources of truth. One is the actual source of truth: the code. Code always tells the truth – I like code. The other is the comment – the name – which will lie eventually.

Results: this is really important, because the test case names are what ends up in the test report. They can really put us in the wrong position: we thought this was broken, but it wasn't – it was something different, and we just copy-pasted the name.

And maintenance: if you have these long test names, they're really hard to maintain. So we don't.

### Untangle: Consistent & Concise Test Case Names

![Consistent & Concise Test Case Names: apply a consistent test case naming scheme](slides/43-consistent-names.webp)

<!-- 0:32:35 -->
So why don't we use consistent and concise test names? I put the emphasis on concise. Because I think the longer and more formal a test name is, the less I like it. Or rather, the more work it is to read it and understand: what's the difference between these two test cases? Because they're both named that long. And the other thing is: I need to update them all the time, right?

![Important info about a test: unit under test (class + method under test), expected behavior, state under test](slides/44-test-name-info.webp)

<!-- 0:33:13 -->
So what's the important information about a test case? I think it's the unit under test – in Java, that might be the class plus the method under test. The expected behavior: do I expect it to fail? How do I expect it to fail? And the state under test. Anything missing? Okay. There are several patterns using these or similar words – I think there's one that splits the state under test into two – but it's basically this.

![Naming pattern: test<methodUnderTest>Should<expectedBehavior>With<stateUnderTest>](slides/45-name-pattern-1.webp)

<!-- 0:33:50 -->
Now we can come up with a pattern. `<ClassUnderTest>Test` – that's pretty standard in Java. It's what most people do, and I don't object; this way I can tie a test case directly to code. And then `test<MethodUnderTest>Should<ExpectedBehavior>With<StateUnderTest>`. Do you like that? Still quite long, isn't it?

![Naming pattern: <methodUnderTest>_<stateUnderTest>_<expectedBehavior>](slides/46-name-pattern-2.webp)

How about this: `<methodUnderTest>_<stateUnderTest>_<expectedBehavior>`. Better? I like this way better.

![Naming pattern: <methodUnderTest>_<stateUnderTest> – see the assert code for the expected behavior](slides/47-name-pattern-3.webp)

<!-- 0:34:33 -->
Okay, let's take this: `<methodUnderTest>_<stateUnderTest>`, and we just omit the expected behavior. Why would I do that? Because otherwise it gets way too long. The expected behavior is already described in the code. Just read the damn code! Why would you put it in the name? If you have a test with the exact same unit under test and the same state under test, why do you need to specify the expected behavior? It must be the same, right? Those are the inputs, basically, and the expected behavior is just the output.

<!-- 0:35:30 -->
[Audience remark: but then the intent is not in the name – and the intent isn't in the code either.]

That's true. Yeah, the intent is not in the name. Maybe the intent should be in the name, because it's not in the code. I was discussing this with Richard, and I think he has a point. But I don't know how to express the intent properly.

![Naming pattern: <methodUnderTest>Test.test<Counter>](slides/48-name-pattern-4.webp)

<!-- 0:36:00 -->
So here's another example – what did I do? Right: a test counter. This is maybe a bit extreme: just call them `test1`, `test2`, `test3`. Well, at least they won't be lying, and naming tests wouldn't be annoying. That's true. But the report will be pretty useless.

![Favorite naming pattern: <methodUnderTest>_<stateUnderTest>](slides/49-name-pattern-favorite.webp)

<!-- 0:36:20 -->
So my favorite one is this. It doesn't express the intent, but it's concise. When I sort my test cases, they're sorted by unit under test, which I like a lot. I don't specify the state under test when it's the happy case – I just name it after the method I call. This doesn't express the intent; it doesn't solve that problem. But it's easy, and in my opinion it makes it really easy to find a specific test case.

And one danger I see with really long test names is that you write a test case again because you didn't realize it was already there. I've done that several times. If names are that concise, it's very unlikely that I miss one. So, as I said, I put the emphasis on conciseness – not on correctness, and not on the missing intent. Yes, it's missing. But I think the state under test can express the intent to some extent, especially for unit tests, where everything is rather technical, right?

![Renamed unit tests: age_birthday_whole_years_ago, age_birthday_years_plus_ago, age_birthday_years_minus_ago, age_birthday_in_future](slides/54-unit-test-names.webp)

<!-- 0:37:52 -->
So let's apply that to the unit tests. `ageWorks` becomes `age_birthday_whole_years_ago`. `ageWorksHereToo` becomes `age_birthday_years_plus_ago`, and so on. Now I have all the special cases figured out, and I can sort them and see that everything is about `age`.

<!-- 0:38:30 -->
Usually in unit tests, the method name would be just one word, or camel case, right? The rest is basically a sentence, and I like proper separators there. But you can come up with something else – say, camel case, with separators only between the parts. To be honest, this is pure taste. Do whatever works best for you. I just want to suggest: don't make it as correct as possible; make it as short as possible.

By the way, the idea comes from Chris Beams' article on how to write commit messages. Because commit messages also get way too long, and then it's really hard to find the right one. I think he had a point there.

![The API test names before renaming](slides/55-api-test-names-before.webp)

<!-- 0:39:35 -->
And for the API tests, we can do something like `GET_unicorns`, `GET_unicorn`, `POST_unicorn`. Pretty easy to find as well.

![Renamed API tests: GET_unicorns, GET_unicorn, POST_unicorn, POST_unicorn_invalid_hornLength, POST_unicorn_invalid_hornDiameter](slides/56-api-test-names.webp)

This is just one suggestion. My main suggestion is: find one that's good for you and apply it to your whole test suite. Don't do campsite rules here. Just sit down for an hour and rename all your tests. Otherwise you'll have broken windows everywhere.

![Consistent & Concise Test Case Names makes the intention obvious, the results meaningful and maintenance easier](slides/57-consistent-names-verdict.webp)

<!-- 0:40:11 -->
So the intention can be a bit more obvious now – especially since you no longer have two competing things telling you what the expected result is. And maintenance is easier if the test names are really short.

![Article: How to Name Tests for Maintainability](slides/58-naming-article.webp)

I wrote an article – I don't know how many pages, a ten-minute read – where I put much more effort into explaining why I think this method is good.

<!-- 0:40:47 -->
And we're almost out of time, I guess. Right?

## Behaviour Over-Specification

![Behaviour Over-Specification: massive use of mocks can lead to a very brittle test suite; tests break even for trivial refactoring](slides/59-behaviour-over-specification.webp)

So the last thing I only want to tease here – you'll get the slides right away – is behavior over-specification. What I really mean is the use of mocking frameworks. Don't do it. Just stop doing it. I know there's a lot of debate we could have here. But try to use mocking frameworks as little as possible. Because mocking frameworks make you specify your internal APIs, and when you change those, refactoring becomes really, really hard.

![Controller, service and repository: the controller test mocks the service](slides/60-over-specification-diagram.webp)

![Mock-based controller test with when(…).thenReturn(…) and verify(…)](slides/62-over-specification-mock-code.webp)

![Behaviour Over-Specification violates: intention obvious, maintenance not hard](slides/63-over-specification-verdict.webp)

### Untangle: Nullable Infrastructure

![Nullable Infrastructure: instead of mocks, use nullables to stub infrastructure components](slides/64-nullable-infrastructure.webp)

<!-- 0:41:30 -->
Recently I came across James Shore's article on testing with nullables – "Testing Without Mocks". I just want you to try it. It made maintaining our test suite so much easier, because we didn't need to update all the mocks. That was just great. It's a bit confusing for Java developers, because James Shore always codes in JavaScript, and JavaScript is so not Java.

![Controller test using UnicornRepository.createNullable() instead of a mocked service](slides/66-nullable-code.webp)

![Nullable Infrastructure makes maintenance easier](slides/67-nullable-verdict.webp)

![James Shore: Testing Without Mocks – A Pattern Language](slides/68-testing-without-mocks.webp)

## Cheat Sheet

<!-- 0:42:12 -->
Okay. If you'd like to apply this to your own test suites: in the background you can see a folded piece of paper. That's the cheat sheet I created from this talk, with the tangles and the untangles, so you can apply them. And if you'd like the slides, they're behind this QR code.

Thank you very much!
