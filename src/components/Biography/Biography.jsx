import styles from './Biography.module.css'

export default function Biography() {
  return (
    <section id="biography" className={styles.biography}>
      <div className="section-inner">
        <h2>Biography</h2>
        <p>
          I'm a Software Engineer with a passion for systems, quality, and the people who build them.
          In June 2026, I'm joining <a href="https://entropy-data.com" target="_blank" rel="noopener noreferrer">Entropy Data</a> as a Staff Engineer.
          Prior to that, I spent almost 12 years as a Principal Engineer at <a href="https://www.rewe-digital.com" target="_blank" rel="noopener noreferrer">REWE digital</a>, where I played a key role in shaping agile development, test automation, and SRE practices.
        </p>

        <p>
          I am particularly fascinated by the intersection of code and psychology:
          How do cognitive biases influence our software architecture?
          How do metrics drive our behavior?
          I regularly <a href="#talks">speak</a> and <a href="https://medium.com/@MichaKutz" target="_blank" rel="noopener noreferrer">write</a> about these topics at <a href="#tour">international conferences</a> and on platforms like <a href="https://www.infoq.com/profile/Michael-Kutz/" target="_blank" rel="noopener noreferrer">InfoQ</a>.
        </p>

        <p>
          A big part of my heart goes into open-source.
          I am the creator and maintainer of tools like <a href="https://approvej.org" target="_blank" rel="noopener noreferrer">ApproveJ</a>, <a href="https://stubit.org" target="_blank" rel="noopener noreferrer">Stubit</a>, and the <a href="https://shakespeareframework.org" target="_blank" rel="noopener noreferrer">Shakespeare Framework</a>.
        </p>

        <p>
          When I'm not analyzing complex systems or tinkering with new tools, you'll likely find me lacing up my running shoes, playing video games, or relaxing in distant sci-fi universes.
        </p>
      </div>
    </section>
  )
}
