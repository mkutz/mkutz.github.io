export const workshops = [
  {
    id: "untangle-spaghetti-test-code-workshop",
    title: "How to Untangle Your Spaghetti Test Code",
    coPresenter: "Christian Baumann",
    coPresenterUrl: "https://linktr.ee/chrissbaumann",
    paragraphs: [
      "In many teams we worked in, test code was treated much less carefully than production code. It was expected to just work. Mindless copy and paste of setup code from one test case to another was never seen problematic, duplications widely accepted, and things were named randomly. This always leads to problems: gaps in assertions become pretty non-obvious; consolidating long-running test suites becomes a cumbersome task; magic numbers need to be changed all across the suite, when they become outdated.",
      "All of this affects the overall maintainability of our code base. Over the years we identified several good practices to prevent these problems and keep test code maintainable. Some borrowed from general good code quality standards, some specific for test code.",
      "In this workshop, we are going to briefly discuss the properties of good test code. Then we'll present our good practices and let you apply these to a prepared test suite. Lastly you will discuss action items in your day job.",
    ],
    keyLearnings: [
      "Learn code quality criteria that apply to test code.",
      "Recognize anti-patterns in your test code.",
      "Apply some simple good practices that help to keep your test code maintainable.",
      "Take away concrete action items for your day job.",
    ],
    materials: [
      { label: "Code", url: "https://github.com/mkutz/untangle-your-spaghetti-test-code" },
      { label: "Slides", url: "https://slides.com/mkutz/untangle-your-spaghetti-test-code" },
      { label: "Cheat Sheet", url: "resources/untangle-cheat-sheet.pdf" },
    ],
  },
  {
    id: "lets-get-into-coding-workshop",
    title: "Let's Get Into Coding",
    coPresenter: "Stefan Scheidt",
    paragraphs: [
      "Coding is often seen as a kind of superpower. Only the \"chosen ones\" are able to practice this art. That's wrong! Coding can be learned by anyone! In fact, a lot of developers learned coding on their own. Most of them started with just some initial knowledge and a motivation to make the machine do something they wanted.",
      "In this workshop we aim to give you that experience. We will provide you with that initial knowledge and setup to get you going and let your own motivation do the rest, step by step.",
      "We will provide you with a prepared project, give an introduction to its structure and make sure that everyone is able to work on it. Next you will alter existing functionality to get into the programming language. In the end, you will get the chance to build a completely new feature into the script.",
      "These exercises aim to get you hooked onto coding. To keep you going after the workshop, we also offer you to stay connected as a community of learners. For that we will set up a Slack channel you can join for getting and (eventually) giving support.",
    ],
    keyLearnings: [
      "Experience the power of coding and how it can help you with your daily work.",
      "Learn the basics of a scripting language to get your coding journey started.",
      "Create your very first self-built tool custom-fit to your recurring tasks.",
      "Join a community of fellow learners to keep you going.",
    ],
  },
  {
    id: "meet-your-own-biases-workshop",
    title: "Meet your own Biases",
    coPresenter: "João Proença",
    paragraphs: [
      "You've certainly heard that word before: \"bias\". Today, a lot of controversial topics surround that word and for a good reason. After all, bias is at the core of a lot of discrimination and prejudice issues in our world.",
      "However, did you know there are many types of biases that influence our judgement every day and are not related with discrimination?",
      "For instance, have you heard of Loss Aversion? It states that humans experience losing something much more intensely than they do when acquiring it. It really affects our judgement, for instance, when you are contemplating on the idea of deleting an automated test!",
      "Maybe the Gambler's fallacy influences the way you handle flaky tests? Or perhaps the Spotlight Effect blocks you from driving changes in your organization?",
      "In this workshop, we want you to experience some of these cognitive biases first-hand! After all, acknowledging that our behavior, as human beings, is impacted by these factors is the first step in learning how to improve our rational judgement. We're also going to try to relate these behaviors with our professional lives. Maybe you can even come up with your own ideas on how cognitive biases hinder our abilities as testers and engineers.",
      "Let's learn together! So join us and, please, bring your cognitive biases with you!",
    ],
    keyLearnings: [
      "Experience for yourself some cognitive biases that affect our day-to-day rational judgement.",
      "Understand how cognitive biases are connected to some of our behaviors as professionals.",
      "Learn about materials you can follow up on if you're interested in knowing more about cognitive biases.",
    ],
  },
  {
    id: "exploratory-testing-workshop",
    title: "Exploratory Testing Workshop",
    paragraphs: [
      "In this workshop I explain the basics of exploratory testing.",
      "By taking this workshop, you will learn what exploratory testing is and how it might be useful to you. In the exercises you will either explore your own product or a similar commonly known one in order to deepen you understanding of the principles of exploration.",
    ],
    materials: [
      { label: "Slides", url: "https://slides.com/mkutz/exploratory-testing-introduction" },
    ],
  },
  {
    id: "spock-testing-workshop",
    title: "Spock Testing Workshop",
    paragraphs: [
      "This workshop is about the Groovy-based testing framework Spock.",
      "By taking this workshop, you will learn how to add the framework to an existing JVM project and its benefits for your testing.",
    ],
    materials: [
      { label: "Code", url: "https://github.com/mkutz/spock-testing-workshop" },
    ],
  },
  {
    id: "geb-testing-workshop",
    title: "Geb Testing Workshop",
    paragraphs: [
      "This workshop is about the Groovy and Selenium-based web testing framework Geb.",
      "By taking this workshop, you will learn how to create readable, semantic and maintainable tests for an existing website or application.",
    ],
    materials: [
      { label: "Code", url: "https://github.com/mkutz/geb-testing-workshop" },
    ],
  },
  {
    id: "groovy-workshop",
    title: "Groovy Workshop for Java\u2122 Developers",
    paragraphs: [
      "This workshop introduces the Groovy language as an alternative to Java\u2122.",
    ],
    materials: [
      { label: "Code", url: "https://github.com/mkutz/groovy-workshop" },
    ],
  },
];