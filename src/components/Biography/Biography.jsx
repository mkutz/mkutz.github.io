import styles from './Biography.module.css'

export default function Biography() {
  return (
    <section id="biography" className={styles.biography}>
      <h2>Biography</h2>
      <p>
        I&apos;ve been working in professional software development for more than 12 years now.
        I love to write working software, and I hate fixing bugs.
        Hence, I developed a strong focus on test automation, continuous delivery/deployment and agile principles.
      </p>
      <p>
        Later I came to the insight that the most sustainable way of fixing code is, to optimize those who code.
        For that reason I dug deeper into psychological safety, cognitive biases and ways to spread knowledge within software producing organizations.
      </p>
      <p>
        Since 2014 I work at REWE digital as a software engineer and internal coach for quality assurance and testing.
        As such my main objective is to support our development teams in QA and test automation to empower them to write awesome bug-free software fast.
      </p>
    </section>
  )
}