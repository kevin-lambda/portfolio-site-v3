export default function Home() {
  return (
    <main>
      <section className="hero is-fullheight" id="section-hero">
        <div className="hero-body">
          <div>
            <p className="title">KEVIN LAM</p>
            <p className="subtitle">Software Developer & Mechanical Engineer</p>
            <p>
              Building digital applications with my technical skillset and
              creative approach
            </p>
          </div>
        </div>
      </section>
      <section className="section" id="section-about">
        <h2>ABOUT</h2>
        <div className="columns">
          <div className="column">
            <p>
              I am a software developer that enjoys learning and creating new
              things. I've previously worked as a project mechanical engineer in
              the aerospace industry for eight years. In that time, growing my
              problem solving knowledge, collaboration experiences, and project
              management skills.
            </p>
            <p>
              I let my curiousity lead me to new concepts, and that energizes my
              enjoyment of learning and practicing software development. It's
              this process that lets me thrive in my work.
            </p>
          </div>
          <div className="column">
            <img src="/holder.jpg" alt="sdf" />
          </div>
        </div>
        {/* <div>sub section skills TBD w/ demonstration of tech understanding and code application</div> */}
      </section>

      <section className="section" id="section-projects">
        <h2>FEATURED PROJECTS</h2>
        <div>
          <div className="columns">
            <div className="column">
              <h3>FRONTEND// Title: Bowlerator - Business landing page</h3>
              <p>Description: A landing page for a meal generation bowl app.</p>
              <p>Features: UX focused website design </p>
              <p>Tech: Bulma css, React, Javascript </p>
              <p>live: code: more:</p>
            </div>
            <div className="column">
              <img src="/holder.jpg" alt="sdf" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h3>Title: page</h3>
              <p>Description: A landing page for a meal generation bowl app.</p>
              <p>Features: UX focused website design </p>
              <p>Tech: Bulma css, React, Javascript </p>
              <p>live: code: more:</p>
            </div>
            <div className="column">
              <img src="/holder.jpg" alt="sdf" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h3>Title: </h3>
              <p>Description: A landing page for a meal generation bowl app.</p>
              <p>Features: UX focused website design </p>
              <p>Tech: Bulma css, React, Javascript </p>
              <p>live: code: more:</p>
            </div>
            <div className="column">
              <img src="/holder.jpg" alt="sdf" />
            </div>
          </div>
        </div>
        <div>
          <a>+++ Additional Projects +++</a>
        </div>
      </section>

      <section className="section" id="section-contact">
        <h2>CONTACT</h2>
        <p>Drop a message and lets talk!</p>
        <a className="button is-primary">
          <strong>Email me</strong>
        </a>
      </section>
    </main>
  )
}
