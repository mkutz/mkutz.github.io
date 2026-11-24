<!-- Timestamps in HTML comments refer to the YouTube recording. -->

![Title slide: How (not) to Measure Quality](slides/01-title.webp)

<!-- 0:00:01 -->
Thanks for the invitation. I'm happy to do this talk over and over again – I'm pretty proud of it.

As Jan already said, I'm working for REWE digital in Cologne-Mülheim. I've been there for almost nine and a half years and went with this company from one team to its current crazy size. Recently, we discussed a lot internally: How can we improve our quality? What is quality? We had those discussions over and over and over again, and this talk is basically the essence of those discussions.

<!-- 0:01:02 -->
First of all, I'd like to ask you to put your favorite quality metric in the chat. Think: what's the metric that, as far as you know, best measures quality? One that worked best for you, that you have good experiences with? Or just write "I don't like quality metrics at all." That's fine as well – it's a common answer, by the way.

While you do, I'll just start. I'll come back to your answers later in the talk. … Classics coming in. Good ones as well. Please don't stop putting them in the chat – I'll read through them in the second part.

## Why measure quality?

![Why Measure Quality?](slides/02-why-measure-quality.webp)

<!-- 0:02:11 -->
So first of all: why would we actually want to measure quality? What's the deeper meaning behind it? I thought about this quite a lot.

![Why do we need to talk about this? A scale weighing "improve quality" against "add new feature" – Goal: make better informed decisions about quality](slides/03-quality-vs-features.webp)

There are definitely different valid motivations behind measuring quality, but for me it all boiled down to that one point in development where you need to decide: should we invest in improving quality, or should we add a new feature? Is the product good enough to take on new complexity, or do we first need to do our homework?

That's an important decision, right? I don't know about you, but I've worked on a lot of products where that decision always fell on "add a new feature". And that caused so much pain afterwards. It eventually slowed down development so badly that the product needed to be rewritten – it was beyond repair – and everybody agreed that wasn't a good outcome.

So in my opinion, the most important motivation to measure quality is to make better informed decisions about quality over features.

## What could possibly go wrong?

![What Could Possibly Go Wrong?](slides/04-what-could-go-wrong.webp)

<!-- 0:04:05 -->
Another thing I've been studying a lot recently is cognitive biases and psychological effects that affect software developers. Because software developers are still human beings. That might change in the next couple of years, but we're still humans – and even our AI models are fed with human-generated data, so they're probably biased as well.

So what could possibly go wrong?

![Goodhart's Law: "When a measure becomes a target, it ceases to be a good measure."](slides/05-goodharts-law.webp)

One thing: Goodhart's law. Goodhart's law basically says: when a measure becomes a target, it ceases to be a good measure.

<!-- 0:04:51 -->
Why is that? If you over-focus on fulfilling a measure, you will almost always neglect the actual goal. You forget about it. The goal was to produce a better product, but now you're only thinking about the measurement. That can cause a lot of harm – but hey, you'll get great numbers! Humans are lazy. So if you set the goal "eat five apples", humans will find a way to eat five apples by cheating, because that was the goal, right?

![Negative Impact on Motivation/Collaboration](slides/06-motivation-collaboration.webp)

<!-- 0:05:45 -->
Another negative effect – sorry, as Jan said, I'm still a bit ill.

Is anybody here working solo on a software product? I guess not. Software development is usually teamwork, and teamwork means collaboration. Now, when you have measurements for quality, they can easily be interpreted as performance metrics for individuals. Performance metrics for teams would be better, but even those can boil down to performance metrics for individuals again.

<!-- 0:06:36 -->
The negative effect is that everybody will think about their performance metrics. And when I help somebody, that usually drags down my own performance metrics.

You might say: okay, then only measure the performance of teams. Find metrics that only measure collectives. Nice. But the problem is that those collectives, again, won't help each other out. And a lot of times, if only two teams had talked to each other at an early stage, a product that failed terribly wouldn't have failed. So by measuring the performance of groups or individuals, you harm your collaborative spirit. And that can ultimately cause a collapse of much-needed collaboration.

<!-- 0:07:24 -->
It also has a well-researched negative effect on creativity and on motivation in general. When you measure somebody, that's an extrinsic motivation: get better at this, and you'll be rewarded. Even if it's just a pat on the shoulder, it's still a reward. And it's well known that creative work isn't positively affected by extrinsic motivators. Creative workers are usually intrinsically motivated, and you need to cater to that intrinsic motivation. If you add too much extrinsic motivation – bonuses and stuff like that – creativity usually takes a dive. That's a really well-researched effect. I have some literature on the last slide for you.

<!-- 0:08:47 -->
Let me look at the chat. "Defects per software release, cycle time, time to recovery, lead time. How fast can we deliver a change?" Whoever wrote that has read the same books as I did – probably *Accelerate*. I actually started with a really old one, *Lean Software Development*. That's not my Bible, but my favorite one. It's sometimes embarrassing how old the solutions are that we've just forgotten about, right?

"Number of defects" – thanks for giving me that one. I'll get to it later. And "developer happiness" – I really like that one.

## How to find metrics

![How to Find Metrics?](slides/07-how-to-find-metrics.webp)

<!-- 0:10:01 -->
Before we discuss these metrics, I want to discuss how we find good metrics.

I had been discussing this with our engineering managers. They wanted to get an idea of how good our quality is. Their plan was: can't we just look into Sonar – you know, the static code analysis stuff? And they asked me what I thought about that. I was the quality engineer back then, the advocate for quality in the company. And I thought: well, technically, yes. But I really didn't like it. I couldn't really voice my concern. I just said: "Please don't do that. Let me think about why. But please don't do that. I have a terrible feeling about it."

<!-- 0:11:16 -->
And then I looked for a method to find new metrics that would actually work. Because a lot of the time, I think, we look at what we already have. We have Jira tickets? Cool, let's do some measurements with them. We're often biased towards using data that's already there. But that can be so terrible. Just because the data is there, just because it's cheap to measure, doesn't mean it's valuable. Often it doesn't add any value at all.

![Goal → Question → Metric: "Are we going in the right direction?" (compass), "Where are we?" (sextant)](slides/08-goal-question-metric.webp)

One method – even more ancient than lean software development, I think – is Goal → Question → Metric.

The idea is: you set a goal. For example, I want to go to a certain geographic location. Then you ask yourself: what do I need to know to reach that goal? Which questions do I need answers to? One obvious one is: are we going in the right direction? We could use something like a compass to verify that.

<!-- 0:12:56 -->
But usually, the answer to one question is not enough. We need different perspectives, otherwise we'd definitely fall for Goodhart's law. So another important question is: where are we right now? And we can find another tool for that, like a sextant.

This chain from the goal, over concrete questions, to actual metrics allows us to always question our metrics. Right now, these are the best metrics we can get to reach our goal. Eventually, things might change. Our goal might shift a bit. The questions we asked might not have been ideal, and we find new questions that are even more important because the playing field has changed. Or some new metric comes around and answers multiple questions at once, or allows us to ask even deeper questions that we couldn't ask before.

<!-- 0:14:08 -->
By keeping this chain, this hierarchy of goal, questions and metrics, we always have a clear understanding of how a metric is still related to reaching our goal. Usually it's not a direct path. The metric doesn't point us straight in the right direction – it's always somehow off.

## Which quality?

![Which Quality?](slides/09-which-quality.webp)

<!-- 0:14:51 -->
Another basic question: which quality do you actually want to measure? What is quality to begin with?

I really like the delivery metrics in the chat. But in my opinion, they only refer to one kind of quality. I was inspired by Dan Ashby's article – I always forget the number, I think it's eight perspectives on software quality. He put different stakeholders into those perspectives, and I stole that idea here.

![Three overlapping circles: outer quality (users), inner quality (developers), process quality (managers)](slides/10-three-qualities.webp)

<!-- 0:15:39 -->
In my opinion, there's an **outer quality**. That's the quality most testers think about, because it's the quality that people who use the product can perceive. Users – and usually testers too, when they do black-box testing, because they take the perspective of a user. Product owners, of course, think mainly about outer quality, because in the end, that's what makes a product successful in the market.

<!-- 0:16:28 -->
Another kind of quality is the **inner quality**. That's what you always get when you ask the developers how the quality of the product is. It's more about maintainability, ease of use of the code, discoverability and all that stuff. Inner quality affects outer quality, but users can't really tell whether it's good. It usually shows in something like performance, or in how many updates I get per year. Bad inner quality often makes frequent releases quite hard, and the price of the product can go up terribly. But there's no direct perception of inner quality by users.

<!-- 0:17:28 -->
And the final one is **process quality**. Process quality is a bit of both, and it's what managers care about a lot. It also contains the factor I missed in outer and inner quality: the team. Do I have the right developers for the product? If I have a Java product but only PHP developers, that's not a good match. Or I have too many developers, or too few, or no front-end developers. Or I don't have any DevOps engineers and nobody knows what they're doing on AWS. That's the part of quality that's mainly in the staff, and in how the staff is managed and supported.

## Outer quality

![Outer quality](slides/11-outer-quality.webp)

<!-- 0:18:43 -->
So let's have a look at some metrics for outer quality. Somebody already put "number of defects" in the chat. But let's ask a question first, right?

![Outer quality questions: How defective? How well liked? How functional?](slides/12-outer-quality-questions.webp)

I came up with these three questions. How defective is the product? That's kind of a negative measure. How well is the product liked? And how functional is it – how well does it cater to the needs of its users? That's not the same as being liked: if it's ugly but it works, it's quite functional, but probably not liked that much. So I drew a line between those two.

### How defective?

![Number of Found Bugs in Staging vs Production – not "How defective?" but "How effective is the test process?"](slides/13-found-bugs.webp)

<!-- 0:19:30 -->
The classic metric I always get here is the number of found bugs – or "number of defects", as it said in the chat. So what's the problem with the number of bugs? Any idea what might be wrong with that metric?

… "If this is a target, then you'll find an infinite number of those." Yes. And "not all bugs are born equal – some of them we might not even care about." Yes.

<!-- 0:20:09 -->
Another problem: the number of defects is never what is actually measured. You can't find all defects. You'd only find all of them with an infinite amount of time for testing. You cannot have 100% functional coverage – maybe for really, really small products, but usually not.

So what's actually measured most of the time is the number of bugs found in staging versus those that escaped to production. But again, we can game that easily. In the end, what this actually measures is how effective our testing process is: how many bugs are prevented from escaping to production.

<!-- 0:21:17 -->
But is that really quality? If those defects were never created in the first place, because my developers don't make defects, the quality of the product would clearly be better. So this isn't really a quality metric. It's a performance metric for my testers – and not even a good one. Because if I'm really motivated to find bugs, I'll find a lot of bugs, right?

So I hope it's clear that this is not a really good metric. I wouldn't even look at that number if it was there, because I think it will lead me in a terrible direction.

<!-- 0:22:08 -->
The way we work is a zero-bug policy. Whenever we learn about a defect, we fix it immediately. There's no backlog of bugs in my team. We do have change requests from users – "could you improve the design of this?" – and those go into the backlog. But if it's an actual defect, if something doesn't work, we fix it immediately. That's the deal in the whole business, and I think that's the way we should work. Then you don't have this metric to begin with.

![Broken Service Level Objectives – How defective?](slides/14-service-level-objectives.webp)

But how can we actually measure how defective a product is?

<!-- 0:23:05 -->
Does anybody know site reliability engineering? Already heard of it? Okay.

I'm part developer, part tester. And it's so sad to see that on the operations side they invented this SRE thing, and on the tester side they invented observability, and these two groups don't talk to each other. They don't do the exact same thing, but close. Part of the problem is vocabulary: the SRE material is written by people who do operations. It's very technical and goes into a lot of detail about networking and stuff, so it's sometimes really hard to understand.

<!-- 0:24:00 -->
But the basic idea is that you get metrics for actual user satisfaction. You find a critical user journey and you try to find measurements – indicators – that tell you the critical user journey is working. And not only working, but working well enough to satisfy the user. Not better, but also not worse.

For example, you could measure the response time of some requests. You can measure it right at the users, which is usually not such a good idea, because there's a lot of network between the user and you, and that can give you a lot of false negatives. Or you can measure it right back at your services – at the last service that's actually needed to produce the result. Or somewhere in between. You should do all of this, by the way. That way you get a decent signal of how good the user experience is, and also of the root cause.

<!-- 0:25:24 -->
So measure all the endpoints involved in a critical user journey: for performance, and for traffic as well. If traffic drops drastically, you usually have a problem. If response time rises terribly, you have a problem. If error responses rise: problem. And so on. You can measure a lot that almost immediately tells you: somebody is having a bad time right now. And that way, you can tell much better whether your product is perceived as defective or as satisfying.

### How well liked?

![Outer quality questions: How defective? How well liked? How functional?](slides/15-outer-quality-questions-2.webp)

<!-- 0:26:23 -->
So, how well is your product liked?

![Number of customer service complaints/contacts – not "How well liked?" but "How many people complaining?"](slides/16-customer-complaints.webp)

One measurement usually taken here, if you have a customer service, is the number of contacts: the number of people calling, writing emails, reporting issues. Certainly that number should be really low. But again, we can game this a lot – for example by making customer service hard to reach. Have you ever tried to call Amazon? It's really hard to even find a phone number. And you can also just ignore the complaints, right?

<!-- 0:27:12 -->
But the main problem here is survivorship bias. You only measure the opinion of unhappy users – and not even those who are angry but never call. You don't measure the potential counter-opinion of people who are actually happy. And you also ignore those who don't even care anymore and just stop using your product because they find it so terrible.

<!-- 0:28:00 -->
There's also a negativity bias. As I said, you might ignore the opinion of happy users. That can lead you to over-focus on a loud, nagging minority and ultimately ruin your product. So relying on a complaint metric alone is probably not a good idea. You're not measuring how well your product is liked, but rather how many people are complaining. And that might not be a good measure at all.

![User Surveys or Platform Ratings – How well liked?](slides/17-surveys-ratings.webp)

<!-- 0:28:52 -->
Another way of doing this is to just send out surveys. This is dangerous, and it's an art. Please don't just do something.

Don't tell my colleagues who are doing this – I haven't found out who it is – but the feedback form for the REWE Lieferservice in Germany is terrible. It's so long. It takes forever to fill out. It doesn't ask the questions I want to answer, and it doesn't let me skip the questions I don't want to answer. So if you don't want feedback, just make it really, really long and only ask for free text.

<!-- 0:29:47 -->
Okay, never mind. Customer or user surveys are a good idea, but they need to be short. They need to be accessible and easy to use. If somebody just wants to rant about how bad the product is, the survey should cater to that need. And if somebody wants to say "I just find this amazing" and doesn't want to elaborate, that should be possible as well. Keep it simple and stupid is my recommendation here.

<!-- 0:30:32 -->
The simplest and easiest thing is a five-star rating, in app stores for example. That's also a nice source of feedback. But both are a bit biased again, because you have a selection bias: you only get people who like to fill out surveys, or who like to give star ratings. You lose a lot of your user base that way. So selecting users, asking them, and maybe giving them a little incentive for doing the survey might give you a better data basis than relying on volunteers.

<!-- 0:31:20 -->
But that's also a bit problematic. People who get an incentive are known to rate the product a little better than they would have without it, because they feel like they owe you.

As I said, outer quality is actually terribly hard to measure. I haven't found any great metric for it. I promise it gets better with the other ones.

### How functional?

![Outer quality questions: How defective? How well liked? How functional?](slides/12-outer-quality-questions.webp)

<!-- 0:31:42 -->
How functional? I don't have enough time to go into all the questions, but the best thing I found here was some kind of user tracking. Again a bit like SRE: you basically measure how long people take to fulfill a use case. That might be a good way to test how functional a product is if you don't want to rely purely on user feedback.

![Outer quality metrics: UX testing, user tracking, observability, service level objectives, customer service complaints](slides/22-outer-quality-metrics.webp)

<!-- 0:32:24 -->
So this is the green bubble, outer quality.

## Inner quality

![Inner quality](slides/23-inner-quality.webp)

And now let's go to inner quality.

<!-- 0:32:33 -->
For inner quality, there are like a trillion metrics from static code analysis alone, I think. Which is nice, but they're also very detailed. You have measurements for all kinds of tiny little details, and they don't necessarily give you a clear picture of the overall quality of the code. And they usually don't tell you anything about the coverage of documentation, for example.

![Inner quality questions: How well protected? How confident is the team? How maintainable?](slides/24-inner-quality-questions.webp)

So I, as a developer, asked myself: I need to take over this code base with my team. What would be the most important question I'd want answered by the team that wrote it?

<!-- 0:33:31 -->
First of all: how well is this product protected? If I make a random change here that looks good to me, how likely is it that the test suite, or some other mechanism, tells me I just broke something? How easily can I introduce a defect into production when I have no idea what I'm doing?

How confident is the team with the product? This already brings in the team component a bit. I just took over the service – oh, it's written in Scala. Nice. What is Scala? Okay, that's probably not a good confidence value.

<!-- 0:34:24 -->
And how maintainable is it? How much effort will it take me to… I don't know – recently, Spring Boot 2 went out of support, and I've spent a lot of time migrating services from Spring Boot 2 to Spring Boot 3 these days. For some services, the migration guide just worked great. And some services were a real piece of work, because they use technologies that changed terribly – what the hell is Jakarta? – and lots of terrible hours of work were spent.

### How well protected?

![Code Coverage – not "How well protected?" but "How much code is not executed by tests?"](slides/25-code-coverage.webp)

<!-- 0:35:14 -->
So how would we measure how well the product is protected? When I asked my team what metric we need before we take over a service, almost everybody wrote down code coverage. How well is it covered, right?

So here's a little example. It's a bowling kata – pretty simple code, it needed to fit on the slide. On the left-hand side, you have a test. On the right-hand side, you have the code. If I execute this test, I get pretty decent coverage. Only two lines missed – those will hopefully be covered by another test case. Nice.

<!-- 0:36:15 -->
Okay: which part of the test code could I just delete and still get the same coverage? Given, when or then? … Yes, that's right, as someone in the chat says. I can just remove the assertion, and it still gives me the same coverage. Now, isn't the assertion kind of the important part? Yes. Unless the code is supposed to throw an exception, the assertion is a really important part.

<!-- 0:37:04 -->
So code coverage really doesn't tell me how well the code is protected, but rather how much code is not executed by tests. And that's not what I asked. That's not even something I want to know. How much code is executed by tests – that's basically no information. How much code is not executed – okay, that's at least a red flag if the value is really high. So if code coverage is extremely low, that's usually a red flag. But if it's really high, it doesn't give me any information at all.

![Mutation Testing: Surviving Mutations – How well protected?](slides/26-mutation-testing.webp)

<!-- 0:37:52 -->
So what's an alternative? Has any of you ever heard of mutation testing?

Mutation testing basically mutates my production code, executes the tests, and expects a failing test. And this works: if I omit the assertion on the left-hand side, a mutation would probably survive. The code got mutated, and no test is failing.

<!-- 0:38:38 -->
So this is great. It gives me a much better feeling for how well the code is actually covered. The downside is that it takes quite a lot longer. Measuring code coverage is the first step of mutation testing, and then it needs to mutate the code and execute all the tests that cover each mutated line, over and over and over again. That adds a lot of execution time to your test suite. I mainly use it to write my initial test suite, and maybe in nightly builds. But if I really need to know how well the code is protected – for example, before I take over a code base – maybe run mutation testing first. Much better information.

### How confident is the team?

![Inner quality questions: How well protected? How confident is the team? How maintainable?](slides/27-inner-quality-questions-2.webp)

<!-- 0:39:33 -->
How confident is the team? Well, how would I measure that? Ask the team. I like pretty simple questions:

![Team Surveys – How confident is the team?](slides/28-team-surveys.webp)

- How effectively can you work with the code?
- How confident are you to deploy to production?
- What would you need to improve the above answers?

That's all. Simple. You could do that once a week. When you change the team – when a key developer leaves, or a lot of new developers join – these surveys usually change dramatically. And that's okay. You just need to keep an eye on how they develop. I'm not a big fan of weekly surveys, but do them once in a while, just to get an idea of how well the team is doing with the product.

### How maintainable?

![Inner quality questions: How well protected? How confident is the team? How maintainable?](slides/32-inner-quality-questions-3.webp)

<!-- 0:40:45 -->
As for maintainability, there are some metrics I came across. I'd mainly go for the DORA metrics here, which come in the third part, because in the end maintainability has a huge overlap with process quality.

![Inner quality metrics: code smells, code complexity, mutation testing, team surveys](slides/33-inner-quality-metrics.webp)

So for now: team surveys, mutation testing – and for maintainability also code complexity, or just lines of code. Yes, lines of code, that terrible thing you should never measure! It actually tells you how many lines of code a team is maintaining. And unless most of those lines are pure bullshit, that's actually quite a valid measure. So if you really need a bird's-eye view, lines of code is okay.

<!-- 0:41:39 -->
I'd rather use something like cyclomatic complexity – there are a lot of different types of complexity you can analyze in code. That's also quite interesting to know. Just to get an idea: how much cognitive load is on that team? How much complexity are they maintaining?

And the number of code smells – so, static code analysis. I omitted it here, because most people know about this stuff. But do look into static code analysis; it gives you a lot of information. I'm not a big fan of the A, B, C, D ratings Sonar gives you, because they hide too much. But as a high-level index, and as long as only developers look at it – people who can interpret the deeper details – I really don't mind. I think it's valid as an early-warning indicator.

<!-- 0:42:57 -->
I really don't like it when managers look at it, because they don't really know what it means, right? So please don't. Unless you want to give me time – not weeks, not months, just enough time – to fix it. Then we can talk.

## Process quality

![Process quality](slides/34-process-quality.webp)

<!-- 0:43:20 -->
Speaking of managers. I thought hard about this, because I actually like our engineering managers. They're good guys, and they really meant well. And I felt like: I get you. You should have some way of telling whether a team is in trouble or not. I get that you need that to prioritize recruiting, for example. So I thought hard about things I would trust managers with.

![Process quality questions: How safe? How fast? How productive?](slides/35-process-quality-questions.webp)

<!-- 0:44:00 -->
Ultimately, I came up with these questions for management: How safe, how fast and how productive is the development process? Because in the end, managers need to care about the return on investment, and this is basically what they – our engineering managers – need to know.

### How fast?

![Velocity – not "How fast?" but "How good are our estimations?"](slides/36-velocity.webp)

<!-- 0:44:28 -->
One metric many people know for how fast the process is: velocity. With velocity, a team estimates the complexity of a feature, then builds it. And the velocity is basically the estimated complexity divided by the time they needed to implement it.

And that's terrible. Because here you give control over the metric's value to the very people it's supposed to measure. The same people who estimate the effort are the ones doing the work – which makes sense, because only they can know how much effort it is, right? But that's not really what you want.

<!-- 0:45:35 -->
Because what you get really fast when velocity gets into managers' heads is point inflation. I've seen it happen. A five becomes an eight. An eight becomes a 20. A 20 becomes a 40. It's awful, and it doesn't tell you anything anymore.

Why is velocity even popular? Because it measures reliability – how well we can estimate how long something takes. And that's actually a good question. It's nice to know. But it's not a management metric; it's a team metric. The team wants to know how predictable their work is. And if that's good enough, nobody should care about the actual values. But I'm not a big fan of it either way.

![Delivery Lead Time – How fast?](slides/37-delivery-lead-time.webp)

<!-- 0:46:37 -->
A much simpler metric that looks almost the same is delivery lead time. You just omit the flawed estimates and ask: how long does it take the team to deliver something meaningful to production? That's it.

If you have a bad code base, this will go up. If you lose two developers, this will go up. If one team has too many services or too much complexity on its shoulders – guess what – their delivery lead time won't be great. And if you solve those problems – and you can, because you're a manager: you can put new developers on the team, take complexity away from it, solve the bigger problems the team can't solve on its own – then delivery lead time will get better.

<!-- 0:47:51 -->
So this is a much better metric for a manager who wants to notice when a team is in trouble. If the delivery lead time is bad, that's not great. If it's constant, you probably don't have a recent problem that needs solving.

### How safe?

![Process quality questions: How safe? How fast? How productive?](slides/40-process-quality-questions-2.webp)

<!-- 0:48:12 -->
The other question I looked into was: how safe is the process?

![Change Fail Rate: failed changes divided by total changes – How safe?](slides/41-change-fail-rate.webp)

Imagine a product that consists of different components. We do some deployments, migrate some databases and so on. Then a defect happens and gets fixed. Then we make some more changes, another defect happens and gets fixed, then we deploy some more services, and everything's fine.

<!-- 0:48:57 -->
We can take these data points – basically this system log – and calculate the following: the number of failed changes divided by the total number of changes equals your change fail rate. As you might guess, this should be close to zero and very far away from one.

<!-- 0:49:30 -->
And that's quite nice. – Sorry, my voice is going somewhere. – If you're able to make a lot of small changes that don't cause much damage – they could cause small damage, but not big damage – that's actually good. That's a desirable state. You can make a lot of small changes. Cool. And your change fail rate will be close to zero, because you just make so many changes.

And if you're really good at preventing failed changes, that would be good as well. You don't make that many changes, but you're really good at preventing failures. I think we can agree both are desirable states.

<!-- 0:50:30 -->
If you just don't know whether something will break when you do it – which, in my experience, is still the way a lot of people do platform work – you'll have a lot of failed changes, over and over and over again. Then this metric will look really bad. And rightfully so.

![Mean Time to Restore Service – How safe?](slides/42-mean-time-to-restore.webp)

<!-- 0:51:04 -->
Another one, same scenario: the mean time to restore service. Here we take the time we were in a defect state and divide it by the number of defect events. That gives us the average time we spent in a defect state.

<!-- 0:51:37 -->
So if we're really good at detecting that we're in a defect state… A lot of software products I know aren't. They deploy to production, something breaks, some customer calls customer service – that's how they find out something broke. That's the worst-case scenario, in my opinion. But if you have measurements like SRE, you'll know immediately: oh, we just did an oopsie. And you can roll back immediately.

So just knowing that you broke something improves this metric. And you want to be good at knowing that something broke; that's definitely desirable. And if you rarely ever break anything, that's also a good thing, right?

![Process quality questions: How safe? How fast? How productive?](slides/35-process-quality-questions.webp)

![Process quality metrics: mean time to recovery, change fail rate, delivery lead time, deployment frequency](slides/45-process-quality-metrics.webp)

## Putting it all together

<!-- 0:52:34 -->
Okay – sorry, my voice is really bad now – so let's wrap this up.

![All three qualities with their metrics in the overlapping circles](slides/46-all-qualities.webp)

If we take all these metrics together: as you can see, I deliberately put some of them into the overlapping areas of the Venn diagram.

Mean time to recovery is definitely something the user perceives, because the service is down. – Duh, GitHub, maybe just work on that. – Change failure rate definitely affects the developers, because the deployment process is blocked too often. The confidence of the team is also very much affected by how well the process is managed: if my team is understaffed, I won't have a lot of confidence. Code complexity definitely has some influence on the user experience, as I said earlier.

<!-- 0:53:46 -->
How frequent are deliveries? That's something I personally get annoyed by a lot. I use a product, I want this update, and I wait for it forever. That's not a good user experience.

And service level objectives are very much in the outer quality. They're actually quite technical, but they're tied to user experience, so I like them a lot. They certainly have some overlap with inner quality as well.

## Further reading

![Further reading: Accelerate, Site Reliability Engineering, The Site Reliability Workbook, Drive, Thinking Fast and Slow; the InfoQ article; quote: "Not everything that counts can be counted, and not everything that can be counted counts."](slides/47-books-and-quote.webp)

<!-- 0:54:43 -->
One of the crystallization points of this talk was certainly the book *Accelerate*. Basically, the whole yellow bubble – process quality – is the four key metrics from that book, also known as the DORA metrics. I very much recommend it.

What I like about these metrics: they are management metrics, and they're not very opinionated about the process. It doesn't matter if you do Scrum, if you're agile, if you do waterfall, V-model, or something crazy new. If your delivery lead time is bad, that's not good for business. If your change fail rate is high – not good for business, and also no fun. These metrics don't care how you do it. They just measure how well you do it, or are able to do it.

<!-- 0:55:55 -->
In my opinion, if all of these metrics are great, it's probably fun to work on that product. And they balance each other out: if you over-focus on development speed, your change fail rate will probably go up. If you over-focus on one of the four, you'll affect another one negatively.

<!-- 0:56:20 -->
As I said, site reliability engineering – SRE for short: there's a whole website, sre.google, with a lot of free e-books. I read some of them. It's quite technical vocabulary – I'm a developer, and I found them hard to read sometimes. So, word of warning, but really great stuff.

If you want to know more about negative effects on motivation, and how to actually influence motivation positively, I recommend *Drive* by Daniel Pink. Really solid groundwork. Easy to read, not a big book. And this one is not a small book: *Thinking, Fast and Slow* by Daniel Kahneman. There are some better books on this topic, I think, but all of them quote this one, so it's kind of the original.

<!-- 0:57:41 -->
You can also find a longer article by me on InfoQ. Yes, there are a lot of typos in that article. I tried to fix them, especially in the diagram – I need to update that, but it's not in my hands.

And I want to conclude this talk by quoting Albert Einstein: "Not everything that counts can be counted, and not everything that can be counted counts."

With that, I hope you enjoyed the talk.
