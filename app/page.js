import { ProjectFeatured, ProjectAdditional } from "@/components"

export default function Home() {
  // LINKS
  const LINK_MAILTO = "mailto:kevin.quoct.lam+portfolio2@gmail.com"
  const LINK_RESUME = "/Kevin_Lam_resume.pdf"
  const LINK_CURIOSITY_MEDIUM = "https://kevin-lambda.medium.com/"
  const LINK_BLOG =
    "https://github.com/kevin-lambda/kevin-lambda/blob/main/dev_log.md"

  const testObject = {
    text_title: "This title",
    text_description: "im describing things in htis sentence",
    text_features: ["feature 1", "feature 2", "feature 3"],
    text_technology: "bulma, css, javascript",
    link_proj_page: "https://www.wikipedia.org/",
    link_live: "https://www.wikipedia.org/",
    link_github: "https://www.wikipedia.org/",
    image_project: "/holder.jpg",
    active_icon_live: true,
    active_icon_github: true,
  }
  const testAddObject = {
    text_title: "This add title",
    text_description: "im describing things in htis add sentence",
    text_technology: "bulma, css, javascript",
    link_proj_page: "https://www.wikipedia.org/",
    link_live: "https://www.wikipedia.org/",
    link_github: "https://www.wikipedia.org/",
    active_icon_live: true,
    active_icon_github: true,
  }

  return (
    <main>
      <section className="hero is-fullheight-with-navbar" id="section-hero">
        <div className="hero-body" id="hero-body">
          <div>
            <p className="title" id="hero-title">
              KEVIN LAM
            </p>
            <p className="subtitle" id="hero-subtitle">
              Software Developer & Mechanical Engineer
            </p>
            <p id="hero-description">
              Building digital applications with a technical skillset and
              creative approach.
            </p>
          </div>
        </div>
      </section>

      <section className="section is-large pt-3" id="section-about">
        <h2 className="pb-5" id="section-heading">
          ABOUT
        </h2>
        <div className="columns">
          <div className="column is-three-fifths">
            <p className="pb-5">
              I am a software developer that enjoys learning and creating new
              things. Before working on software, I was a{" "}
              <a
                className="general-link-style"
                target="_blank"
                href={LINK_RESUME}
              >
                project mechanical engineer in aerospace
              </a>{" "}
              for eight years. In that time, growing my problem solving
              knowledge, collaboration experiences, and project management
              skills.
            </p>
            <p className="pb-5">
              My{" "}
              <a
                className="general-link-style"
                href={LINK_CURIOSITY_MEDIUM}
                target="_blank"
              >
                curiosity
              </a>{" "}
              leads me to new concepts, and that energizes my enjoyment of
              learning and practicing software development. It's this process
              that lets me thrive in my work.
            </p>
            <p>
              I write a{" "}
              <a
                className="general-link-style"
                target="_blank"
                href={LINK_BLOG}
              >
                developer blog
              </a>{" "}
              about my software development journey.
            </p>
          </div>
          <div className="column" id="about-image-wrapper">
            <img
              src="/images/prof.jpg"
              alt="profile picture"
              id="about-image"
            />
          </div>
        </div>
        {/* <div>sub section skills TBD w/ demonstration of tech understanding and code application</div> */}
      </section>

      {/* <section>experience</section> */}

      <section className="section is-medium pt-6" id="section-projects">
        <h2 className="pb-5" id="section-heading">
          FEATURED PROJECTS
        </h2>
        <div className="projects-all-wrapper">
          <ProjectFeatured projectData={testObject} />
          <ProjectFeatured projectData={testObject} />
          <ProjectFeatured projectData={testObject} />

          <div className="additional-projects">
            <h2 className="pb-4 pt-5" id="section-heading">
              Additional Projects
            </h2>
            {/* <h3 className="is-size-5 pb-4" id="project-heading">
              <a>View all projects</a>
            </h3> */}
            <div className="tile is-ancestor">
              <ProjectAdditional projectAddData={testAddObject} />
              <ProjectAdditional projectAddData={testAddObject} />
              <ProjectAdditional projectAddData={testAddObject} />
            </div>
            <div className="tile is-ancestor">
              <ProjectAdditional projectAddData={testAddObject} />
              <ProjectAdditional projectAddData={testAddObject} />
              <ProjectAdditional projectAddData={testAddObject} />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section is-medium has-text-centered"
        id="section-contact"
      >
        <h2 className="pb-5 is-size-1 " id="section-heading">
          CONTACT
        </h2>
        <a
          href={LINK_MAILTO}
          target="_blank"
          className="button is-size-6"
          id="navbar-contact-button"
        >
          <strong>Send me a message</strong>
        </a>
      </section>
    </main>
  )
}
