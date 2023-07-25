import { ProjectFeatured, ProjectAdditional } from "@/components"

export default function Home() {
  const LINK_MAILTO = "mailto:kevin.quoct.lam+portfolio2@gmail.com"
  const LINK_RESUME = "/Kevin_Lam_resume.pdf"
  const LINK_CURIOSITY_MEDIUM = "https://kevin-lambda.medium.com/"
  const LINK_BLOG =
    "https://github.com/kevin-lambda/kevin-lambda/blob/main/dev_log.md"

  const projectFeat1 = {
    text_title: "Quality Chords - Fullstack guitar chord rendering database",
    text_description: "Shows guitar chords from a database with CRUD function",
    text_features: [
      "API data endpoints",
      "Data to svg rendering",
      "Admin CRUD console for all 5 schema",
    ],
    text_technology: "Nextjs, Prisma, Typescript",
    link_proj_page: "https://quality-chords.vercel.app/",
    link_live: "https://quality-chords.vercel.app/",
    link_github:
      "https://github.com/kevin-lambda/kevin-lambda/blob/main/dev_log.md#quality-chords",
    link_medium: "",
    image_project: "/images/guitar.jpg",
    active_icon_live: true,
    active_icon_github: true,
    active_icon_medium: false,
  }
  const projectFeat2 = {
    text_title: "Bowlerator - Business Landing Page",
    text_description: "Landing page for a food bowl generator app",
    text_features: ["Product story emphasized design", "Wireframed layout"],
    text_technology: "Nextjs, Bulma, Typescript",
    link_proj_page: "https://bowlerator.vercel.app/",
    link_live: "https://bowlerator.vercel.app/",
    link_github: "https://github.com/kevin-lambda/bowlerator",
    link_medium:
      "https://kevin-lambda.medium.com/jr-dev-asks-whats-a-basic-website-layout-to-use-for-a-business-35ff4a7ef700",
    image_project: "/images/bowl.jpg",
    active_icon_live: true,
    active_icon_github: true,
    active_icon_medium: true,
  }
  const projectFeat3 = {
    text_title: "Gardening Suggestor - Fullstack recommendation algorithm app",
    text_description: "Suggests suitable gardening plants per user conditions.",
    text_features: [
      "Recommendation algorithm based on user",
      "CRUD operations via database, ORM, API backend",
      "User Authentication",
    ],
    text_technology: "Firebase, p5js, Express, Postgres",
    link_proj_page: "https://wormseye-d1c52.web.app/",
    link_live: "https://wormseye-d1c52.web.app/",
    link_github: "https://github.com/kevin-lambda/fsa-worms-eye-view",
    link_medium: "",
    image_project: "/images/worm.jpg",
    active_icon_live: true,
    active_icon_github: true,
    active_icon_medium: false,
  }

  const projectAdd1 = {
    text_title: "Solari - Data calculation & visualization",
    text_description:
      "Planning tool that simulates energy output of a solar project. Managed bulk data to do backend calculations. Results visualized with recharts.",
    text_technology: "Recharts, Nextjs, Bulma",
    link_proj_page: "https://solari-kl.vercel.app/",
    link_live: "https://solari-kl.vercel.app/",
    link_github: "https://github.com/kevin-lambda/solari",
    link_medium: "",
    active_icon_live: true,
    active_icon_github: true,
    active_icon_medium: false,
  }
  const projectAdd2 = {
    text_title: "Dakine Ipsum - Ruleset based text generator",
    text_description:
      "Lorem Ipsum filler text using Hawaii Creole English. Generated with a Context Free Grammar based on formal english grammar production ruleset.",
    text_technology: "Custom Context Free Grammar, Tracery, React",
    link_proj_page: "https://kevin-lambda.github.io/dakine-ipsum/",
    link_live: "https://kevin-lambda.github.io/dakine-ipsum/",
    link_github: "https://github.com/kevin-lambda/dakine-ipsum",
    link_medium: "",
    active_icon_live: true,
    active_icon_github: true,
    active_icon_medium: false,
  }
  const projectAdd3 = {
    text_title: "Creative projects portfolio - CMS integrated portfolio",
    text_description: "Portfolio for my non-software focused creative projects",
    text_technology: "Gatsbyjs, Contentful CMS, Netlify",
    link_proj_page: "https://kevin-lam.netlify.app/",
    link_live: "https://kevin-lam.netlify.app/",
    link_github: "https://github.com/kevin-lambda/personal-portfolio",
    link_medium: "",
    active_icon_live: true,
    active_icon_github: true,
    active_icon_medium: false,
  }
  const projectAdd4 = {
    text_title: "Bitbot - Exploration of chatGPT interaction methodologies",
    text_description:
      "Proof of concept exploring a non-text based user interaction contexted AI chatbot.",
    text_technology: "OpenAI chatGPT, NextJS, Bulma",
    link_proj_page: "https://hello-ai-seven.vercel.app/",
    link_live: "https://hello-ai-seven.vercel.app/",
    link_github: "",
    link_medium: "",
    active_icon_live: true,
    active_icon_github: false,
    active_icon_medium: false,
  }
  const projectAdd5 = {
    text_title: "National Park Stamps - Data fetch & rendering",
    text_description: "A minimalist app that finds national park stamps.",
    text_technology: "React, Pico, Javascript",
    link_proj_page: "https://kevin-lambda.github.io/nat-park-stamps/",
    link_live: "https://kevin-lambda.github.io/nat-park-stamps/",
    link_github: "https://github.com/kevin-lambda/nat-park-stamps",
    link_medium: "",
    active_icon_live: true,
    active_icon_github: true,
    active_icon_medium: false,
  }
  const projectAdd6 = {
    text_title: "Hiking map redesign - hi-fi prototype in UX case study",
    text_description:
      "High fidelity prototype redesign of the Washington Trails Association maps feature. Focusing on hike discoverability and informational visibility.",
    text_technology: "Figma, Dot vote ideation, User story design approach",
    link_proj_page:
      "https://www.figma.com/proto/yP1A1ZnipOg4OKj0XNO6Rr/WTA-project?page-id=0%3A1&node-id=67-552&viewport=-810%2C149%2C0.11&scaling=scale-down&starting-point-node-id=67%3A552&show-proto-sidebar=1",
    link_live:
      "https://www.figma.com/proto/yP1A1ZnipOg4OKj0XNO6Rr/WTA-project?page-id=0%3A1&node-id=67-552&viewport=-810%2C149%2C0.11&scaling=scale-down&starting-point-node-id=67%3A552&show-proto-sidebar=1",
    link_github: "",
    link_medium: "",
    active_icon_live: true,
    active_icon_github: false,
    active_icon_medium: false,
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
              I write a lengthy and detailed{" "}
              <a
                className="general-link-style"
                target="_blank"
                href={LINK_BLOG}
              >
                developer journal
              </a>{" "}
              about my software learning journey. I am open to fullstack
              development roles.
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
      </section>

      {/* <section>experience</section> */}
      {/* <div>sub section skills TBD w/ demonstration of tech understanding and code application</div> */}

      <section className="section is-medium pt-6" id="section-projects">
        <h2 className="pb-5" id="section-heading">
          FEATURED PROJECTS
        </h2>
        <div className="projects-all-wrapper">
          <ProjectFeatured projectData={projectFeat1} />
          <ProjectFeatured projectData={projectFeat2} />
          <ProjectFeatured projectData={projectFeat3} />

          <div className="additional-projects">
            <h2 className="pb-4 pt-5" id="section-heading">
              Additional Projects
            </h2>
            {/* <h3 className="is-size-5 pb-4" id="project-heading">
              <a>View all projects</a>
            </h3> */}
            <div className="tile is-ancestor">
              <ProjectAdditional projectAddData={projectAdd1} />
              <ProjectAdditional projectAddData={projectAdd2} />
              <ProjectAdditional projectAddData={projectAdd3} />
            </div>
            <div className="tile is-ancestor">
              <ProjectAdditional projectAddData={projectAdd4} />
              <ProjectAdditional projectAddData={projectAdd5} />
              <ProjectAdditional projectAddData={projectAdd6} />
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
