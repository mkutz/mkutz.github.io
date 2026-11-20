<!-- Timestamps in HTML comments refer to the Cvent recording; the keynote starts at 0:09:46. -->

<!-- 0:09:46 -->
![Title slide: With Great Trust Comes Great Responsibility](slides/01-title.webp)

Hi. I've been coming here since 2011, and you will hear why that's important.

In 2011, I sat here in the audience and got so much encouragement to follow what I thought was right: to help my fellow developers – because I'm a developer, not a tester – to produce better software products that actually help people. This community is so great for learning and helping each other out.

And now they trusted me to do this keynote, which is a real full-circle moment for me. It's incredible. So thank you, people, and thank you for trusting me with this.

Talking about trust: this talk is called "With Great Trust Comes Great Responsibility", and it's of course taken from the Spider-Man law, where Uncle Ben reminds Peter that with his great power – these spider superpowers – comes the great responsibility to use them for something good.

I think in software development we often get it backwards. We expect our software developers, our teams, to be absolutely responsible, to actively take responsibility, to be agile, to work for the team, stuff like that.

<!-- 0:11:52 -->
But a lot of organizations that produce software withhold the power people need to actually take this responsibility.

## Origin story

![Back in 2010…](slides/02-back-in-2010.webp)

This is my origin story. It begins in 2010. That's 16 years ago. I think it was the iPhone 4. I had something about AI in my studies, but nobody had ever heard of an LLM. So, quite long ago.

![Comic illustration: a frustrated developer in a bleak, noisy open-plan office](slides/03-bleak-project.webp)

This was my first project. The picture is a little bit Americanized, so it looks more like Spider-Man, but that was my expression most of the time. You might recognize some of the ingredients of this project I was thrown into as a green developer.

It was for a traditional German company, so they did all the things that you do. Release trains every six months – we shouldn't rush things, right? Feedback? Sure, you get feedback. And it will be bad. Those release trains left on ridiculous schedules, and sometimes they just added something, so we couldn't really finish whatever we started.

<!-- 0:13:28 -->
And after that, we had these bug-fixing weekends. They were fun. We could order pizza that we had to pay for ourselves. Yeah, they weren't fun.

Oh, and we had departments, right? You cannot have testers in the same team as developers – not in 2010. That was unprofessional. You don't do that! If testers knew what the code does, their judgment would be clouded, I think. And developers shouldn't talk to testers. That's a waste of time. They should code. That's more important. That's the value, right?

So development teams were measured by how many features they could produce, and testers were measured by how many bugs they could find. Sure, I don't see a problem here.

Oh, and architects. I love these architects. They made such great architecture plans that just didn't work with anything. But those boxes and lines – they were beautiful.

And of course, scope is fixed, because we have to deliver this. We only deliver every six months, so it has to be everything, right?

<!-- 0:14:58 -->
Quality? Flawless. Why would you build buggy software in this setup? And six months – that's a given.

Great project. Still gives me goosebumps. This is how I envision it in an abstract way.

![The bleak project: release trains, bug-fixing weekends, Dev vs QA vs Architecture, scope, quality and time fixed](slides/04-bleak-project-annotated.webp)

## Bitten by a radioactive spider

And then something really weird happened. Have you ever done an agile transformation? A good one? Who has done a bad one? That's roughly all of you. Who has done a good one? I see some shaky hands. Good for you.

Well, this one actually worked. Surprise!

![1 year later…](slides/05-one-year-later.webp)

Just a year later – I had been away from the project for some time to do some work for my employer; I was a contractor back then – I came back and they had reassembled the whole thing. And suddenly we had these Scrum Masters. Anybody remember these? They were taking care of the process. And the process was no longer a strange Frankenstein thing stitched together from control-freakish mechanisms.

![Comic illustration: a developer and a tester pairing, AHA!](slides/06-aha.webp)

<!-- 0:16:31 -->
It was Scrum. It wasn't perfect. But it really gave us some traction. Some purpose.

So what did we do? What were the differences?

We had actual plannings with clearly communicated goals. Not "do this, then do that, then do that", but rather: "We would like to create a payments tool here, so people can use it to pay their bills." Cool. I understand what the problem is. I understand where the value lies. And now I can make up the steps that will take me there.

Actual commitment. When we said we couldn't make it in that time frame, we didn't. And we did not pretend that we could.

Efficient retros to get better continuously. That's a good retro. That's something I really yearn for. Sadly, these days I mostly look at Miro boards and wonder why. But back then, it was really great.

We had testers on the team. And we did crazy stuff. We did pair programming in the beginning.

<!-- 0:17:55 -->
And then we realized we could do pair testing. I learned so much. I didn't know what I didn't know back then. And now I have all of you, and so many of you are my friends, and I learned so much from you. And it all started in this project.

This is where I actually learned to respect the profession of testing, and to want to be good at it myself. My unit tests before that? Something like `assertTrue(true)`. After that, it was: oh, it's not about coverage. It's about risks, and how we can mitigate them. I learned so much there. I still get a warm feeling right now.

Together, in this pair testing, we thought: that's kind of stupid. The testers don't have anything to do at the beginning of the sprint and are stressed at the end. And the developers have all the stress at the beginning of the sprint and nothing to do while the testers do what they do.

<!-- 0:19:19 -->
That's actually one of the reasons why we started pair testing: because I was bored. But then we realized the testers were bored at the beginning of the sprint. So we started to do ATDD – acceptance test-driven development.

We sat down with them and implemented a failing test. That was the first thing we did. On the API, on the UI, whatever was the end-to-end. We created these tests at the beginning of the sprint. And sometimes we were surprised that they turned green while we were still developing. Then we thought: are we done? No, actually, we aren't done. Then the test isn't complete! Let's fix that test so it fails. Fixing a test to fail – that's an interesting concept.

That way of working was just so amazing. We really felt like we'd been bitten by a radioactive spider – which is probably not a good idea in real life.

![The super team: good planning and clear goals, actual commitments, efficient retros, testers on the team, pair programming, pair testing, ATDD – and a spider](slides/07-super-team-practices.webp)

<!-- 0:20:26 -->
But let's assume we're in a comic book and we develop superpowers instead of just dying. We felt like Spider-Man. Spider people.

## Copying the super team

![Comic illustration: leaving the team, head full of ideas](slides/08-leaving-the-team.webp)

Eventually, I left this project. Yes, my beard looked like that back then. And I had my head full of great ideas and wanted to do them everywhere.

This was 2011-ish. Not quite November – I think it was October. I came back to the company, and my boss, Mario, said: "I want you to be the champion of QA for this software development company. You should go to a conference – I think you should go to Agile Testing Days."

I already had all these ideas, but I had my doubts that they were actually good, because we had just cooked them up under pressure. And I came here, and everybody on the stage was basically preaching what I thought was right. That was so much encouragement at just the right moment.

<!-- 0:21:42 -->
It propelled me forward like a rocket. So, thanks again to this conference for that.

And then I thought: let's reproduce this team wherever I go. I don't want to work like before anymore. Never again.

![…well](slides/09-well.webp)

So I sat down in my next team and started implementing – furiously – ATDD. Acceptance test… there it was. ATDD, whatever. I started to implement an acceptance test-driven development framework right away. I did not listen to anybody on the team, because I thought: I need this. I want to work like this again, so I need this.

And some teams let me do this, but they weren't in it. It was like: "Oh yeah, you're doing that thing. It looks shaky. It's failing again. Your tests – I don't think they bring much value, to be honest. But okay, let him do this, otherwise he'll cry."

![Comic illustration: presenting an ATDD framework to an unconvinced team](slides/10-copying-practices.webp)

So they realized it was important to me,

<!-- 0:23:09 -->
but I failed to recognize that it wasn't the most important thing for this team. No payoff, no faith in what I brought.

I also tried to get pairing into these teams, because I envisioned true cross-functionality. Everybody working on the same thing. All the professions and experiences mingling together and creating something truly awesome. When you're on a team and the team is bigger than the sum of its skills – that was what I wanted.

But people don't like that.

<!-- 0:24:01 -->
I mean, bosses – this was still early, right? Pairing was basically seen as two people doing a one-person job. Nobody really recognized that the software is not the only product of software development. The software developers are also a product. The team is also a product. And we should recognize that.

But even when their bosses weren't that pushy, a lot of the folks I worked with had that stuff in their heads. They felt like: I don't feel productive right now. It's the obsession with individual performance, and it still happens. Too busy to improve – that could be the bottom line.

![Comic illustration: pairing under (imagined) pressure](slides/11-pairing-under-pressure.webp)

But in the end, it was also my failure. Because what I did was try to implement these ideas – to transplant these organs from a completely different organism: from a different project, a different team structure, a different organization,

<!-- 0:25:29 -->
with people with different experiences than the teams I worked with now.

The first thing, if you want somebody to trust your ideas, to buy into your ideas, is that you need to pay attention to what they want. And I didn't. I just wanted to blindly apply my nice framework. That was clearly on me.

## Finding the spider

![Comic illustration: the spider – ???](slides/12-the-spider.webp)

So I tried to figure out why the hell this didn't work. What was the radioactive spider to begin with? And 14 years later, that process finally dinged and said: hey, I have an answer. There was a lot of log output from that process before that. It wasn't great. But I think now I might have found that damn spider.

![The bleak project and the super team side by side](slides/13-old-vs-new.webp)

In the old project, I realized, this was roughly the process. It's basically Waterfall 101. Requirements, analysis, architecture, coding, testing, operations. All separate people, all separate departments, all separate. And of course you have checkpoints at each of these steps.

<!-- 0:27:04 -->
You want to make sure that the quality of each of these increments is great, so you implement checkpoints. And it's really hard to get back once you've passed a checkpoint. When a mistake from analysis survives and you only notice it way down here, it's really hard to go back to them and fix that thing. So you work around it instead. What could go wrong?

Oh, rigid prioritization, of course. That's important. The business has a certain way of prioritizing things. Have you ever heard the term HiPPO? The highest-paid person's opinion? These folks are all up here. They're not here. And certainly not here.

Then we had the architects, who created such nice plans that didn't work out as soon as you tried to implement them. But they were so detailed you had to follow them, otherwise they would get upset.

And then we had metrics that measured us: features implemented in X time, bugs found before reaching production, stuff like that.

<!-- 0:28:29 -->
And they kept changing all the time. Maybe that's even good, but we didn't really know what to optimize for.

And of course, we always had tight budgets. Couldn't just go to a conference. That's not possible. That's too expensive.

All these fun things. So what are these? What do these things do? These are mechanisms of control. Of distrust. You don't need all of this. It's not necessary. Why do you do this? Because you don't trust people to do their damn job.

And I get it. You're investing a lot of money in something, so you want to make sure you don't misinvest. I get it.

![The waterfall process with checkpoints, rigid prioritization, detailed planning, changing metrics and tight budgets – all signs of distrust](slides/14-waterfall-distrust.webp)

![The bleak project and the super team side by side](slides/13-old-vs-new.webp)

In the new style of the better project, where the super team happened, we basically had Scrum. So we had loose prioritization – everybody could move a sticky note. Flexible planning – we drew on the walls, on whiteboards, and we could always go there and get rid of a line that wasn't going to happen.

<!-- 0:29:54 -->
Stable metrics: burn-down charts. I hate them today, but at least they were there, they stayed there, and it was always the same thing.

And we still had a checkpoint at the end. That's fair. But they left us alone in between. We could work the way we wanted to work. They only gave us the what – and also the why, which is very important. And we just worked happily on figuring out the how. Awesome.

![The Scrum process with loose prioritization, flexible planning, stable metrics and a checkpoint at the end – trust](slides/16-scrum-trust.webp)

(This is a clicker that turned itself off.)

So now we could think: let's fight these things. Fight the checkpoints, the budgets, the plans, the prioritization, and the metrics. Anybody tried to do that? Some? How did it go? I would say it doesn't work at all. Never.

You could fight them. Maybe you'll recognize this. What's that? What is he fighting? Windmills.

These are all symptoms. The true problem is that there is no trust.

![Don Quixote fighting the windmills of control mechanisms](slides/17-fighting-windmills.webp)

## The vicious cycle of control

<!-- 0:31:47 -->
So why does this happen? This is the assumption: you add controls, you get more quality. You add more controls, even more quality.

But the fact of life is: people who feel controlled feel less responsible. Can you imagine how this works? I say, "Tidy up your room," and I'll leave you to it. And then I come by every ten minutes to see how you're doing. Well, I'll just pick up one toy at a time, wait ten minutes, and wait for the feedback, right? You don't feel that responsible when you're tightly controlled.

So what happens when you feel less responsible? You care less. And the result is ultimately less quality. Not more – less.

And of course, if you constantly deliver bad quality, why should I trust you? Your work sucks, so… I might add more control! Full circle. This is the vicious cycle of control.

![The vicious cycle of control: more control, less responsibility, less quality, less trust](slides/18-vicious-cycle.webp)

## Gaining trust

<!-- 0:33:11 -->
![Gaining Trust](slides/19-gaining-trust.webp)

So what can we do to improve trust? I hope we're all on the same page that gaining trust is probably better than fighting windmills. Can we agree? Cool.

So what can we do to gain trust? Let me give you a nice quote from Henry L. Stimson, a former Secretary of War – so, kind of a diplomat – and later Secretary of State. It was still called the Ministry of War back then. This is not the new stuff.

He once famously said: "The only way to make a person trustworthy is to trust them. And the surest way to make them untrustworthy is to distrust them and show your distrust."

![Quote by Henry L. Stimson: The only way to make a person trustworthy is to trust them; and the surest way to make them untrustworthy is to distrust them and show your distrust.](slides/20-stimson-quote.webp)

If you think about it: if you have 100% distrust in a person, it's basically a self-fulfilling prophecy. Because they can't do anything right. If they did, you'd say: that's due to my control. You need to give people some leeway to actually shine.

<!-- 0:34:40 -->
And if you distrust a lot, people distrust back. Imagine what happened when you felt distrusted. Did you trust the person who distrusted you and showed it openly? I don't think so. I can cook up a lot of examples. That's a problem.

So what's the opposite of… who do you trust? Do you trust shady people? That's not the right attribute. Do you trust responsible people? Yeah, sure. But ultimately, it boils down to the term *credible*. If a person is credible, they are usually trustworthy.

Stephen Covey, in his book *The Speed of Trust*, created this metaphor of a tree. He says the roots, which you can never see but can find hints of, are integrity: you're doing what you preach. You have a clear compass. You're a moral person. If you say you'll do something, you do it.

And then there are intentions. I can trust your intentions.

<!-- 0:36:04 -->
I think your intentions are good. These are the attributes of character.

If you think of any politician, you might have doubts that they have your best interests in mind. But think of, let's say, a plumber – a contractor who comes by to fix your bathroom. You ask them to do something, and they say: "Oh, that's not the right thing to do. Here's the better thing to do, and it'll be cheaper." And then they do it. That's good character. You'd trust this plumber more than the guy who comes by and says: "No, no, no, I'm not doing that. You need to buy the more expensive stuff." Rather not.

Capabilities: if the plumber fails to fix your bathroom and your flat is under water – probably not capable. And if you heard that this plumber does that all the time, he doesn't have a good track record. These are attributes of competence. Covey says these are the fruits and the branches of the tree.

![Covey's tree of credibility: character (integrity, intent) and competence (capabilities, results)](slides/21-credibility-tree.webp)

<!-- 0:37:30 -->
So if we prove that we are credible, we can expect to gain trust, I think. How do we do that? Let me tell you a couple of stories I experienced.

### Confront reality and clarify expectations

On one of my projects, this situation came up. We had two stakeholders. We had one project, and it was a solution, not a problem. It's always great when they make you build solutions without telling you what the problem is. And these two clearly had two different problems they wanted to fix.

The first problem was cost reduction: our costs were too high. The other one was UX improvements, because the customer experience in customer communication wasn't great. We had other priorities too, but nobody ever talked about them, because these two were both number one.

So, an incredible team… no, that's the wrong word, isn't it? An uncredible team – does that work?

<!-- 0:38:50 -->
Whatever. A non-credible team would just code along. And we did that for quite some time. The result? Straight into the gutter, because nobody liked it. The UX was terrible, and the cost reduction wasn't where it should have been.

We lost an opportunity to prove that we were credible. Because what could we have done instead? We could have said: "Nope, that doesn't work. You tell us what you want." "I want this." "I want that." Sure. What is enough cost reduction? Zero cost? That's maybe a tall order, but it could be. Okay, we'll try to find a way to – I don't know – send doves for customer communication. Or is it 50%? Cool, 50%. Is that okay? Okay, we'll do that. Now, what's a great user experience in this case? That the customer has to do nothing at all? Or just a shinier user interface? Tell us. We'll do it.

<!-- 0:40:22 -->
When this feature was revamped, we did exactly that. We threw away all the code we had created in two months and started over. And then we had clear success criteria. So we failed at first, but we came back stronger, because now we knew what the actual problem was.

This is what I call *confront reality and clarify expectations*. If there are two people arguing with each other without even talking to each other – which is usually what stakeholders do – confront them. Tell them: "You're saying potato, they're saying something else." Bring them together and let them fight it out. Throw a knife in. What could go wrong?

And clarify expectations. Find metrics. Find success criteria that are clear, not fuzzy. That always works.

![Two stakeholders with two priority-one goals – Confront Reality & Clarify Expectations](slides/22-confront-reality.webp)

### Get better and deliver results

Another story. This was actually the system we inherited. It was an online shop that had been created in six months under really high pressure. And I don't blame the contractor who did this,

<!-- 0:41:45 -->
but it basically looked like that. We had a lot of services drilling directly into the database, doing all kinds of stuff, foreign keys all over the place. Nobody could touch it. I actually had a drawing of this as a Mikado stack, because whatever you touched, something else would move.

We started working on it because we had to. And we didn't look competent. We screwed up all the time. Whatever we touched, we had to roll back two or three times. Would you trust us? We didn't trust ourselves. So please don't trust us. Don't trust people who don't trust themselves – that's just unfair to them. Ask them what they need.

A bad team would just go ahead and say yes, yes, yes to every feature they're asked to develop. Do you know that pattern? It's called people pleasing. And this is what failures versus deliveries might look like for that team.

<!-- 0:42:59 -->
At first, they don't get worse. Not much – a little bit. But in the long run, they will get much worse. That's what happens when you say yes to everything. Those yeses don't mean anything.

A good team, a credible team, would say no. "Let me do some improvements first. I will do what you want, no worries. It will happen. Just give me some time to tidy up that exact area we're talking about. Let me repair some of the damage first, so I'm sure I'm delivering things the way you need them."

And this is roughly what our graphs looked like back then. Our failures went up a little bit, because we needed to touch the damn Mikado stack. And our deliveries even dipped a little, because we spent time refactoring. But ultimately, we made the system a lot better, and so we got better at delivering. This is a credible team.

<!-- 0:44:15 -->
It shows character, because it says: I can't do this right now. I care about this product. You don't have to tell me to tidy up – I'm telling you I want to tidy up. And it shows competence, because they came up with this improvement plan. Competence and character are pretty much shown by saying no in order to have meaningful yeses.

![A Mikado-stack system, saying yes vs. saying no – Get Better & Deliver Results](slides/23-get-better.webp)

### Practice accountability and straight talk

Next one. That was one of the worst times at work. We shipped a feature. We did a lot of testing, really. We did our due diligence. But we completely overlooked a different system that depended on our APIs – and we had changed them. A tiny bit, but it was enough.

So management looked into this, and they weren't happy. Revenue just hit the floor for three hours, and we're talking about seven-digit revenue.

Now let's imagine a dev team B – which never existed, by the way, I made it up. They would just say: "Oh, no. We couldn't know that they were using our API,

<!-- 0:45:43 -->
so we're blaming a different team." Maybe the testers. Isn't that fun – blame the testers? "Why didn't they catch the bug?" And the testers say: "Why did you put it in there?" Which is fair.

But this is unproductive, and this is not a credible team. They're not taking accountability. They're not taking responsibility. They're deflecting. They're finding excuses. Would you trust a plumber who tells you, "I didn't know this wouldn't work"? They seem incompetent, and they seem to have poor character, because they just try to avoid the blame. And by the way, if your org chart is way bigger than this, there are way more directions to point to.

So this is what actually happened. We held a postmortem. We invited management. We told them: here's the timeline. Here's what happened. These were our assumptions. This is where we went wrong. And here's our plan for how this will never happen again.

<!-- 0:47:08 -->
We sat down and implemented new tests. We implemented new checks in the deployment: after deploying, we would test the thing in the integrated system, so these API contract breakages would never happen again.

And we implemented metrics, because we thought: this was one thing that could happen. But what about the unknown unknowns we still have? So let's implement a metric that tells us immediately if we screwed up.

And it happened again. But the next time something like that happened, we reacted within five minutes. You couldn't even spot it in the revenue chart unless you zoomed in all the way.

Do you trust a team that does something like that? They screwed up. They have a dent in their track record, for sure. But they bounced back. And I think that's even more trustworthy than a team that always looks innocent. Never trust a team that never fails. Because they do.

<!-- 0:48:27 -->
They're just good at hiding it. I'd rather trust a team that screws up sometimes – but not when it's important.

![Production down, management, dev teams and testing department – Practice Accountability & Straight Talk](slides/24-accountability.webp)

### Step up and claim responsibility

Do you have a fridge in the office? Does it roughly look like this? If not, good for you. Ours looked roughly like this.

![Comic illustration: a messy office fridge](slides/25-office-fridge.webp)

Why does this happen? An office fridge is everybody's problem and nobody's responsibility. It's sitting right there. Everybody could take care of it. This is diffusion of responsibility. Do you know the bystander effect? "Yeah, Chris can do it." And he should. Chris, I know that's yours. That Thai food from three weeks ago.

So what's the way to deal with this situation that gains you trust? Step up and just do it. Ask Chris to help you, because that's fair. And establish a feeling of "I trust you to clean up your mess. It's okay to make a mess, but please clean it up. Let's find a plan to do this together.

<!-- 0:50:03 -->
Let's form a group to do this together."

Coming back to IT: on one project, every single team had the same problem, which was consuming Kafka messages in a stupid way. And every team had a different solution. They were all kind of good, but also all kind of different, which caused different problems. That wasn't great.

So eventually one team stepped up and said: "We're building a library. We'll use it in our microservices. You're welcome to join the party." And they created that library, and it was actually great. And finally, that proverbial fridge looked like this. Because everybody was using the library. Nobody ever thought about implementing their own Kafka client again, because that library was so great, and several teams joined in, contributed fixes, made it better, documented it. That was just awesome.

![Comic illustration: a clean office fridge – Step Up & Claim Responsibility](slides/26-step-up.webp)

And did this group gain trust? Nobody told them to do it. Why would they?

<!-- 0:51:17 -->
You could go to management and say: somebody needs to clean up this mess. But why go to management? They don't understand the problem. Have you ever gone to management, complained about something, and they just shrugged? Maybe that's because it's not a problem on their level. It's on your level. So organize yourselves.

Do you know how much trust that can gain you with management? If you prove that you clean up your own messes, that builds a ton of trust. They won't push any controls at you. They'll say: "No, no, they've got that covered." And if any problems come up, they'll shield you from whatever comes down from further up the mountain. Because they know you've got their backs, so they'll have yours.

## The virtuous cycle

So, coming back to this vicious cycle. What can we do? Let's try less control. Let's remove something. Not all of it – please don't. That's not a good idea. That's abandonment.

<!-- 0:52:32 -->
Give people some control over how they work to begin with. Don't tell a cook how to hold a spoon. Just let them do it. Taste the food. If it's not good, add salt – do something about it. Talk to them about what you didn't like about the food. Talk to them about what you didn't like about the software. And give them some wiggle room to implement their own good measures. That will gain you a lot of quality.

And by the way, people will be way happier. That's also nice, right? That should be a goal, not just a by-product.

And so you can trust more. And so you can lessen control even more. Because you know what control is, first and foremost? It's expensive. It costs a ton of time. All these handovers between departments – they're terrible. I always have to wait for the testers to have time to test my software. That's stupid, right?

![The virtuous cycle: less control, more responsibility, more quality, more trust](slides/27-virtuous-cycle.webp)

<!-- 0:53:47 -->
So let's work together. Let's trust each other. Let's trust in each other's ability to create great products.

## Dear teams, dear managers

So, dear teams: don't wait for trust. You cannot make somebody trust you. That doesn't work. Don't fight the symptoms – the windmills, the gates, the reports, the metrics. Forget about them. They're there for a reason, and you need to attack the reason. Be the team they'd feel foolish not to trust. You can't make them trust you, but you can remove every reason for them not to.

![Dear Teams: Don't wait for trust. Don't fight the symptoms. Be the team they'd feel foolish not to trust.](slides/28-dear-teams.webp)

And dear managers: I get it. But you hold the trust, so you have to make the first step. It doesn't need to be a huge step. It can be one tiny thing that signals: I trust you more than you think.

Going first is not letting go. Hand over the responsibility – and the capability to hold it. Don't just remove the control, because that's not what happened with us. We still had to do testing, even though there was no test department anymore.

<!-- 0:55:20 -->
We just did it ourselves. We removed a lot of unnecessary testing and added a lot that was missing from the test strategy. Trust without that capability – the testers on the team – is not trust. It's abandonment. And that doesn't feel great. It happened to me in other agile transformations, and I think it happened in a lot of agile transformations: this abandonment.

![Dear Managers: You hold the trust – so you go first. Going first isn't letting go. Trust without capability isn't trust – it's abandonment.](slides/29-dear-managers.webp)

Here are some books that helped me finally find that damn spider. Daniel Pink, *Drive*. It's a classic – if you haven't read it, do. *Turn the Ship Around!* That one surprised me. It's written by a submarine captain in the U.S. Navy. Agility in the military – it works surprisingly well. And *The Speed of Trust* by Stephen Covey is the hero book for this talk. It gave me so much insight into the whole topic.

![Books: Drive by Daniel H. Pink, Turn the Ship Around! by L. David Marquet, The Speed of Trust by Stephen M. R. Covey](slides/30-books.webp)

So: with great trust comes great responsibility. Please try it. Thank you!

![Comic illustration: Michael Kutz as a superhero in a green spider hoodie swinging through the city, saying "With great trust comes great responsibility"](slides/31-thank-you.webp)

## Q&A

![Photo: Michael Kutz on stage, listening to a question from the audience](q-and-a.webp)

<!-- 0:57:01 -->
**Audience:** If you dig back into your memories – the case you mentioned where you were eagerly pushing something you strongly believed in without paying attention to the others: what was the trigger that made you notice something wasn't quite clicking? That your eagerness to improve quality and get the team towards the goal wasn't landing? Was there something that helped you realize you were going in the wrong direction?

**Michael:** A lot of micro-triggers. There wasn't one trigger. It was a slow – way too slow – realization that this wasn't working. It was how my team reacted to my changes. I did something in the ATDD framework and they said: "Sure, whatever." And there was my own frustration that whatever I did didn't land with my teammates. And then finally we sat down and had an honest talk.

It happened in several projects, so it's a different story for each of them. But there's one I remember pretty precisely. It was like the tenth time I tried this and failed. A colleague sat down with me and said: "Look at it. Your tests keep failing. Nobody cares. We'll deploy anyway, because they don't give us a good signal." That was brutally honest, and just the right thing for me to hear – it frustrated me enough to finally abandon the damn thing and find something better to do with my time. Thanks for the question.

<!-- 0:59:17 -->
**Audience:** Congratulations on your excellent keynote. You mentioned one metric you implemented – which one was that?

**Michael:** Oh, I was referring to burn-down charts, and I think they're stupid…

**Audience:** No, the metric that tells you something went wrong – the unknown unknowns. After the postmortem, you said you implemented a metric.

<!-- 0:59:57 -->
**Michael:** Yes, sorry – I'm telling too many stories in this talk. The metrics we created were basically our own business metrics. It gets pretty technical, but we figured: on the highest possible level, on the API level, if this fails, that can't be good. So we had metrics like how many requests per minute we get. We knew they would fall and rise depending on the time of day, but we knew they could never go to zero.

By the way, funny story – this is why diversity matters. I worked for REWE, so we were in Cologne, and we were measuring how many bookings we were getting from each zip code. And suddenly one zip code – only one, in the center of Cologne – dropped to zero. We said: that can't be. That's wrong. Everybody agreed this must be a problem. So we started digging, trying to figure out what the hell was going on. Eventually we called the folks who configure the system and asked them: "What the hell is going on? Did you just drop that zip code? It's in the center of Cologne!" And they said: "Yes – that's the Christopher Street Day parade. You're not getting any delivery through that." So, this is why diversity matters.

<!-- 1:01:38 -->
**Audience:** If you give trust, there's a risk of somebody not returning it. If you trust somebody and they betray that trust – what then?

**Michael:** I assume that has happened to you. Yes, it happens.

If somebody betrays your trust constantly… Once or twice, that can happen. You can understand the circumstances they were in. But I deeply believe it's human nature that if somebody trusts you without having a clear reason, you have a really strong drive to justify that trust. I think that's a fundamental mechanism in the human brain.

So if somebody betrays your trust every time, that can be an actual flaw in their character, and that's a problem if you can't fix it. Don't work with people you don't trust – that would be my honest advice.

But if they betrayed your trust, try to understand why. Pay attention to what they say, to why they did it. Give them a chance to justify their actions, because usually people have reasons, and they won't be small ones. "I was overworked." "I was under a lot of pressure." "I had problems at home." There are a ton of reasons why people might betray your trust. Pay attention to what they say. Take an interest in their situation. I think that will trigger something in them to try harder next time.
