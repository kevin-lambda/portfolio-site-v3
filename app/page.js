export default function Home() {
  return (
    <main>
      <section className="hero is-fullheight-with-navbar" id="section-hero">
        <div className="hero-body" id="hero-body">
          <div>
            <p className="title" id="title">
              KEVIN LAM
            </p>
            <p className="subtitle" id="subtitle">
              Software Developer & Mechanical Engineer
            </p>
            <p id="hero-description">
              Building digital applications with a technical skillset and
              creative approach.
            </p>
          </div>
        </div>
      </section>

      <section className="section is-medium pt-0" id="section-about">
        <h2 className="pb-5" id="section-heading">
          ABOUT
        </h2>
        <div className="columns">
          <div className="column is-three-fifths">
            <p className="pb-5">
              I am a software developer that enjoys learning and creating new
              things. I've previously worked as a project mechanical engineer in
              the aerospace industry for eight years. In that time, growing my
              problem solving knowledge, collaboration experiences, and project
              management skills.
            </p>
            <p className="pb-5">
              My curiousity lead me to new concepts, and that energizes my
              enjoyment of learning and practicing software development. It's
              this process that lets me thrive in my work.
            </p>
            <p>
              I have a <a>blog/documentation</a> about my software development
              journey.
            </p>
          </div>
          <div className="column ">
            <img src="/holder.jpg" alt="sdf" />
          </div>
        </div>
        {/* <div>sub section skills TBD w/ demonstration of tech understanding and code application</div> */}
      </section>

      <section className="section is-medium" id="section-projects">
        <h2 className="pb-5" id="section-heading">
          FEATURED PROJECTS
        </h2>
        <div>
          <div className="columns pb-5">
            <div className="column is-two-fifths">
              <h3 className="is-size-5 pb-4" id="project-heading">
                Bowlerator - Business landing page
              </h3>

              <div className="pb-3 pl-4">
                <p>A landing page for a meal generation bowl app.</p>
                <ul>
                  <li> ➡️ UX focused design</li>
                  <li> ➡️ UX focused design</li>
                  <li> ➡️ UX focused design</li>
                </ul>
              </div>

              <div className="pb-3">
                <p>Bulma, React, Javascript </p>
              </div>

              <div className="pb-3">
                <p>live: code: more:</p>
              </div>
            </div>
            <div className="column is-three-fifths">
              <img src="/holder.jpg" alt="sdf" />
            </div>
          </div>

          <div className="columns">
            <div className="column is-three-fifths">
              <h3>FRONTEND// Title: Bowlerator - Business landing page</h3>
              <p>Description: A landing page for a meal generation bowl app.</p>
              <p>Features: UX focused website design </p>
              <p>Tech: Bulma css, React, Javascript </p>
              <p>live: code: more:</p>
            </div>
            <div className="column is-two-fifths">
              <img src="/holder.jpg" alt="sdf" />
            </div>
          </div>
          <div className="columns">
            <div className="column is-three-fifths">
              <h3>FRONTEND// Title: Bowlerator - Business landing page</h3>
              <p>Description: A landing page for a meal generation bowl app.</p>
              <p>Features: UX focused website design </p>
              <p>Tech: Bulma css, React, Javascript </p>
              <p>live: code: more:</p>
            </div>
            <div className="column is-two-fifths">
              <img src="/holder.jpg" alt="sdf" />
            </div>
          </div>
        </div>
        <div>
          <a>+++ Additional Projects +++</a>
        </div>
      </section>

      <section
        className="section is-large has-text-centered"
        id="section-contact"
      >
        <h2 className="pb-5" id="section-heading">
          CONTACT
        </h2>
        <p>Drop a message and lets talk!</p>
        <a className="button is-primary">
          <strong>Email me</strong>
        </a>
      </section>
    </main>
  )
}
