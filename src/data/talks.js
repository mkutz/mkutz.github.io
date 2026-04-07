export const talks = [
  {
    id: "trust-responsibility",
    title: "With Great Trust Comes Great Responsibility – How to Super Empower Teams to Continuously Deliver High Quality Software",
    paragraphs: [
      "16 years ago I worked as a junior developer on a huge project. The situation was bleak. Release trains with rigid schedules, only to be followed by long bug fixing phases. It was close to unbearable, probably nobody enjoyed working there, and the delivered quality was way below desired standards. One year later, many things had changed in the project's structure. Suddenly, I worked on a team that delivered high quality even before deadlines were met, which found their own creative ways to do so and had a lot of fun at work. It was like we were bit by a radioactive spider and developed superpowers.",
      "Ever since that team, I tried to reproduce that spirit in any team I joined. To find the radioactive spider that bit us. Sometimes I succeeded, sometimes I did not.",
      "In this keynote, I will tell you about my attempts. About things that seemed super important, but turned out to be mere details. And about details that seemed unimportant, yet turned out to be essential. About why today I think that trust is the most important and first component, and what other components are essential when building a team with the super power to continuously deliver high quality software in the most efficient way.",
    ],
    keyLearnings: [
      "Understand how more trust and less control can turn into true ownership.",
      "Learn which other crucial components are required to build a super empowered team and how to figure out which your team is yet missing.",
      "Acquire ways to demonstrate responsible behavior and ownership to deepen trust.",
    ],
    materials: [
      { label: "Slides", url: "https://slides.com/mkutz/trust-responsibility", note: "work in progress" },
    ],
  },
  {
    id: "hexagonal-test-pyramid",
    title: "The Hexagonal Test Pyramid – Cover More Risk with Less Test Effort Using Hexagonal Architecture",
    paragraphs: [
      "When starting a new (micro) service, it seems to be a good idea to write a lot of tests for the application as a whole. Frameworks like Spring Boot make that style of testing fairly easy. But after some time, the runtime of these tests becomes a burden.",
      "Concentric architectures can help here by isolating business code from infrastructure adapters. This allows us to test the business logic with simple, fast, and reliable unit tests, while the remaining integration tests for the adapters can focus on risks that arise solely from integration.",
      "In this talk, I'll demonstrate how we learned to take advantage of this architecture to push much of the risk to lower levels of the test automation pyramid and improve our tests' code and runtime dramatically. I will show this using real Spring Boot service in simple Hexagonal Architecture. Further technologies used will be JUnit 6, Testcontainers, AssertJ, and my own ApproveJ. All code will be shared.",
    ],
    keyLearnings: [
      "Learn about the basics of hexagonal architecture and how it helps to organize your Spring Boot service.",
      "See how technically complex integration test cases can be pushed down the test pyramid using hexagonal architecture.",
      "Discover how to write concise, fast, and minimal tests that cover the remaining integration risk.",
    ],
    materials: [
      { label: "Slides", url: "https://slides.com/mkutz/hexagonal-test-pyramid", note: "work in progress" },
    ],
  },
  {
    id: "wtfm",
    title: "WTFM: Where's the F****** Manual⁈ – Why we avoid writing documentation, why we shouldn't, and how to keep it useful with minimal pain",
    paragraphs: [
      "RTFM – \"read the f****** manual!\" – is one of the most famous acronyms in software development. But in many projects, the real problem is WTFM: Where's the f****** manual⁈",
      "Writing documentation isn't a popular task among development teams. \"Why should we document this while it keeps changing?\", \"Who needs this documentation anyway?\", \"The wiki is a mess, why bother?\" are among the top 10 of complaints heard and spoken by myself. But this leads to a mess of outdated, hard-to-find, or nonexistent documentation. We feel the pain when we have to dig through source code or test cases to understand how something works… or worse, why it was built that way in the first place. Without good documentation, simplifying or improving a system becomes a risky guessing game.",
      "In this talk, I'll demonstrate some practical guidelines that help to categorize your team's information to figure out if, how, and where to document it. No AI-generated snake oil, no \"just use doc generators\", but realistic strategies to make documentation less painful (and maybe even fun).",
    ],
    keyLearnings: [
      "Understand what makes writing documentation so daunting.",
      "Acquire some simple guidelines and techniques to detect knowledge that needs to be documented in what way.",
      "Learn how to make writing and maintaining documentation rewarding and enjoyable.",
    ],
    materials: [
      { label: "Slides", url: "https://slides.com/mkutz/wtfm" },
      { label: "Workshop Template", url: "https://miro.com/templates/wtfm-documentation-workshop/" },
    ],
  },
  {
    id: "level-up-your-testing-toolkit",
    title: "Level Up Your Testing Toolkit!",
    paragraphs: [
      "Have you ever heard about property-based testing? Do you know about mutation testing? Are you familiar with approval testing? What is your opinion about fuzzing?",
      "Many terms, techniques, and tools have come up since the invention of unit testing. But who has time to look into all of them?",
      "Thankfully, over the last few years, we were fortunate enough to have that time. In this talk, we want to share the insights we gained with you. Hence, we will lead you through each of the terms, explain their most important characteristics, and in which cases they hold value.",
      "This may not make you an expert, but gives you enough of an impression, to judge for yourself if a topic is worth further investigation.",
    ],
    keyLearnings: [
      "Learn about new and specialized testing terms, techniques, and tools.",
      "Be able to judge if they are applicable and valuable to your specific situation.",
      "Be aware of potential alternative solutions for classic testing.",
    ],
    materials: [
      { label: "Slides", url: "https://slides.com/mkutz/level-up-your-testing-toolkit" },
      { label: "Example Code", url: "https://github.com/mkutz/level-up-your-testing-toolkit" },
    ],
  },
  {
    id: "measure-quality-talk",
    title: "How (Not) to Measure Quality",
    paragraphs: [
      "As software developers, my team and I were repeatedly in the situation of fighting for more quality and less feature pressure. In doing so, we often achieved concessions, but often the time we were given was insufficient and the result correspondingly unsatisfactory. If I am honest, we ourselves were not in a position to say exactly how bad the quality actually was.",
      "Moreover, I have noticed time and again that developers, users and managers of software have fundamentally different priorities when it comes to quality. Developers often think about internal aspects like code quality and maintainability, users think about external features like bugs and usability, and managers need predictability and efficiency in the development process.",
      "Of course, there are various metrics that try to measure the quality(s) of software, but these often only refer to very small sub-aspects and have more or less harmful side effects.",
      "In my talk I would like to point out the side effects of quality measurements and show a method for finding metrics that work better. I will point out weaknesses of single classical quality metrics and suggest better suited alternatives. In the end, this results in a network in which each metric is justified by a clear goal and a concrete question and in which weaknesses are mutually balanced.",
    ],
    keyLearnings: [
      "Identify different approaches on how (not) to measure quality.",
      "Assess commonly used quality metrics against different purposes.",
      "Be aware of possible side effects of measurements.",
      "Understand how metrics can be combined to even out each other's weaknesses.",
    ],
    materials: [
      { label: "English Slides", url: "https://slides.com/mkutz/measure-quality" },
      { label: "German Slides", url: "https://slides.com/mkutz/qualitaet-messen" },
      { label: "Article on InfoQ", url: "https://www.infoq.com/articles/metrics-quality-software/" },
    ],
  },
  {
    id: "wiring-tests-like-shakespeare-talk",
    title: "Writing Tests Like Shakespeare",
    paragraphs: [
      "Automated tests—especially UI tests—often lack readability. They have either a very fine-grained description of the performed actions, or a too sophisticated abstraction which leaves the reader guessing or digging deep into the code base. This becomes a serious problem when we try to understand the context of a test failure. A NoSuchElementException only tells us which element was missing, not why we expected it to be there at the specific point in our test.",
      "Another common issue in complex tests is code duplication. Either we just copy and paste long sequences of dull commands, or we forget to use the functions and utils we hide. This makes maintenance a very frustrating experience. Finally, such code is often not fit for being shared among teams working on the same product, or for being reused in different tests.",
      "The Screenplay pattern offers a user-centric way of writing tests which abstracts fine-grained interactions into simple non-technical tasks and questions. These make it easy to introduce just the right level of abstraction for the use case at hand. The resulting test code is almost plain natural language with only a few extra \"cody\" characters. As every failure is happening in the context of performing a task or answering a question, understanding failures also automatically becomes a much easier endeavor. Sharing Screenplay code between tests or even among teams is pretty easy as the tasks and questions are implemented as simple immutable objects. This also makes it easy to implement Screenplays in any preferred language and framework.",
    ],
    keyLearnings: [
      "Learn what the Screenplay pattern is and how it can help you to write better tests.",
      "Get to know the key concepts of Screenplay to implement your own or use an existing framework supporting it.",
      "Discover how object-oriented design can help to make test code less cumbersome.",
      "Find out about a way to keep your tests concise and readable, while using all the Selenium tweaks and tricks to keep them fast and reliable.",
      "See how Screenplays allow you to write tests that use different media – like web, email or APIs – a surprisingly easy experience.",
    ],
    materials: [
      { label: "Slides", url: "https://slides.com/mkutz/writing-tests-like-shakespeare" },
      { label: "Example Code", url: "https://github.com/mkutz/writing-tests-like-shakespeare" },
      { label: "Shakespeare Framework", url: "https://shakespeareframework.org" },
    ],
  },
  {
    id: "fantastic-biases-talk",
    title: "Fantastic Biases & Where to Find Them in Software Development",
    coPresenter: "João Proença",
    paragraphs: [
      "Why did all our test cases fail because of this simple bug? Nobody tried that out before? How did five people agree to implement this terrible feature? Why are our estimates always so far off?",
      "There are many possible answers to those questions and none of them will be the whole truth. However, certain common cognitive biases might play a main role in all the events leading to those questions. We all have them.",
      "They help us to think faster, but they also make us less rational than we think we are. They hinder our best judgement! In this talk I'll demonstrate some of the most severe biases, explain their background, point out how they typically influence our professional decisions, and suggest some strategies to mitigate their effect.",
      "Being able to recognize and overcome biases in us and others is a long, challenging road for anyone – you won't be able to do that journey with this talk alone, but you'll certainly take your first step!",
    ],
    keyLearnings: [
      "Understand what cognitive biases are.",
      "Acknowledge that you are biased – like everyone else is as well.",
      "Get to know some of the most severe biases.",
      "Learn about some mitigation strategies.",
    ],
    materials: [
      { label: "Slides", url: "https://prezi.com/view/lL151ndDvqRnfvAUm4ix/" },
    ],
  },
  {
    id: "from-monolith-testing-to-microservice-qa-talk",
    title: "From Monolith Testing to Microservice Quality Assurance",
    paragraphs: [
      "When REWE digital started to sell groceries online, we launched with a massive monolithic piece of software developed in only six months by a software agency.",
      "Right after launch we started to build up our own software teams to take over further development, but we had a hard time developing new features without breaking existing functionality…",
      "…today the monolith is still in place, but most of its functionality has been replaced by microservices which are communicating via asynchronous messaging and deliver their own frontends.",
      "In this session we will talk about challenges we faced over the past three years: optimizing the monolith's architecture for faster feature development, breaking it apart into microservices, adjusting the QA strategy from a single deployment release process to 40 teams deploying their services whenever they want to, developing new types of testing for microservices and micro-frontends, solving problems with testing asynchronously-communicating microservices, and organizing QA in a rapidly growing company.",
    ],
    materials: [
      { label: "New English slides", url: "https://slides.com/mkutz/from-monolith-testing-to-microservice-quality-assurance" },
      { label: "Old English slides", url: "https://prezi.com/view/GB4HxiAlvj5Z7HodWgBP/" },
      { label: "Old German slides", url: "https://prezi.com/view/M5eJU9FdwPgUayF1rBP3/" },
      { label: "Video (German)", url: "https://youtu.be/_FYL9zdR-qU" },
    ],
  },
  {
    id: "team-driven-microservice-qa-talk",
    title: "Team-Driven Microservice Quality Assurance",
    paragraphs: [
      "While the Microservice architectural style has a lot of benefits, it makes certain QA practices impractical: there is no big release candidate that can be tested before put to production, no single log file to look into for root cause analysis and no single team to assign found bugs to. Instead, there are deployments happening during test runs, as many log files as there are microservices, and many teams to mess with the product.",
      "At REWE digital we took a strictly team-driven QA approach. Our teams tried a lot of good and bad ideas to QA our microservice ecosystem. This involves automated testing, but also monitoring, logging and alerting practices.",
      "In this talk I will present some of the best of those ideas, like testing microservices in isolation including UI tests, posting deployment events to a chat room, add team names to log lines or team-driven monitoring on service metrics.",
      "Also, I will talk about some ideas that failed for us, like building a comprehensive test suit for the overall product or a company-wide QA guild.",
    ],
    materials: [
      { label: "New slides", url: "https://slides.com/mkutz/team-driven-microservicequality-assurance" },
      { label: "Old slides", url: "https://prezi.com/view/23yuS2Xm0KizIIeFaRqn/" },
    ],
  },
  {
    id: "microservice-test-lib-talk",
    title: "How to Build a Test Library for a Microservices-Based Web Application with Geb & Spock",
    paragraphs: [
      "At REWE digital we are building & maintaining a Microservice based e-commerce web application. Our service teams work quite autonomous & are responsible for their own services' quality. They decide which measures are appropriate & efficient in order ensure no bugs in production. Many have a reasonable code coverage via unit tests, a good lot of service tests – including UI tests – & a sufficient monitoring & alerting system.",
      "However, several teams felt the need for a more integrated testing of the whole system to prevent CSS clashes, errors due to interface changes or eventual inconsistency disasters & many many unforeseen issues.",
      "To support these teams, we decided turn our old retired comprehensive test suite into a test library to enable teams to write their own system tests without the need to implement every stupid step in every team.",
      "In this talk I'd like to present our lessons learned & developed design patterns from implementing such a test library with Geb & Spock.",
    ],
    materials: [
      { label: "Slides", url: "https://speakerdeck.com/michakutz/how-to-build-a-test-lib-for-a-microservice-based-web-application-with-geb-and-spock" },
      { label: "Video from Greach 2019", url: "https://youtu.be/swEX1LrokbU" },
    ],
  },
  {
    id: "trust-is-better-talk",
    title: "Vertrauen ist besser, Kontrolle ist schädlich",
    lang: "de",
    subtitle: "Pecha Kucha",
    paragraphs: [
      "Klassisch werden Software-Projekte häufig mit separierten Entwicklungs- und Test-Teams durchgeführt, während in der agilen Softwareentwicklung in der Regel Tester und Entwickler in einem Team zusammengefasst werden. Letzteres fühlt sich für mich persönlich sehr viel besser an, aber warum ist das so?",
      "In diesem Vortrag gehe ich auf verschiedene Aspekte ein, die aus meiner Sicht die Verwendung eines separaten Test-Teams regelrecht umständlich und sogar kontraproduktiv ist und was den agilen Ansatz so viel erfolgreicher und sinnvoller macht.",
    ],
    materials: [
      { label: "Folien", url: "https://speakerdeck.com/michakutz/vertrauen-ist-besser-kontrolle-ist-schadlich-pecha-kucha" },
    ],
  },
];