import Image from "next/image"
import extLink from "@/public/extLink.svg"
import github from "@/public/github.svg"

import { ProjectFeatured } from "@/components"

export default function Home() {
  // LINKS
  const LINK_MAILTO = "mailto:kevin.quoct.lam+portfolio2@gmail.com"
  const LINK_RESUME = "/Kevin_Lam_resume.pdf"
  const LINK_CURIOSITY_MEDIUM = "https://kevin-lambda.medium.com/"
  const LINK_BLOG =
    "https://github.com/kevin-lambda/kevin-lambda/blob/main/dev_log.md"

  const LINK_PROJ_1_PAGE = "/"
  const LINK_PROJ_1_EXT = "/"
  const LINK_PROJ_1_GITHUB = "/"

  const LINK_PROJ_2 = "/"
  const LINK_PROJ_3 = "/"

  const LINK_PROJ_ADD_1_PAGE = "/"
  const LINK_PROJ_ADD_1_EXT = "/"
  const LINK_PROJ_ADD_1_GITHUB = "/"

  const svg_icon_size_h = 25
  const svg_icon_size_w = 25

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

      <section className="section is-medium pt-6" id="section-projects">
        <h2 className="pb-5" id="section-heading">
          FEATURED PROJECTS
        </h2>
        <div className="projects-featured-wrapper">
          <ProjectFeatured projectData={testObject} />
          <div className="columns pb-5 pr-2">
            <div className="column is-two-fifths">
              <h3 className="pb-4" id="project-heading">
                <a className="general-link-style" href={LINK_PROJ_1_PAGE}>
                  Bowlerator - Business landing page
                </a>
              </h3>

              <div className="pb-3">
                <p>A landing page for a meal generation bowl app.</p>
                <ul>
                  <li> • UX focused designasdf sdf </li>
                  <li> • UX focused design</li>
                  <li> • UX focused design</li>
                </ul>
              </div>

              <div className="pb-2" id="project-tech">
                <p>Bulma, React, Javascript </p>
              </div>

              <div className="pb-3">
                <a className="px-2" href={LINK_PROJ_1_EXT} id="icon-hover-fill">
                  <Image
                    src={extLink}
                    width={svg_icon_size_w}
                    height={svg_icon_size_h}
                    alt="external link icon"
                  />
                </a>
                <a
                  className="px-2"
                  href={LINK_PROJ_1_GITHUB}
                  id="icon-hover-fill"
                >
                  <Image
                    src={github}
                    width={25}
                    height={25}
                    alt="external link icon"
                  />
                </a>
              </div>
            </div>
            <div className="column is-three-fifths" id="project-image-wrapper">
              <a href={LINK_PROJ_1_PAGE} id="project-image">
                <img src="/holder.jpg" alt="sdf" id="project-image" />
              </a>
            </div>
          </div>
          <div className="columns pb-5 pr-2">
            <div className="column is-two-fifths">
              <h3 className="pb-4" id="project-heading">
                Bowlerator - Business landing page
              </h3>

              <div className="pb-3">
                <p>A landing page for a meal generation bowl app.</p>
                <ul>
                  <li> ￭ UX focused design</li>
                  <li> ￭ UX focused design</li>
                  <li> ￭ UX focused design</li>
                </ul>
              </div>

              <div className="pb-2" id="project-tech">
                <p>Bulma, React, Javascript </p>
              </div>

              <div className="pb-3">
                <a className="px-1" href="/">
                  <Image
                    src={extLink}
                    width={svg_icon_size_w}
                    height={svg_icon_size_h}
                    alt="external link icon"
                  />
                </a>
                <a className="px-1" href="/">
                  <Image
                    src={extLink}
                    width={25}
                    height={25}
                    alt="external link icon"
                  />
                </a>
                <a className="px-1" href="/">
                  <Image
                    src={extLink}
                    width={25}
                    height={25}
                    alt="external link icon"
                  />
                </a>
              </div>
            </div>
            <div className="column is-three-fifths" id="project-image-wrapper">
              <img src="/holder.jpg" alt="sdf" id="project-image" />
            </div>
          </div>

          <div className="columns pb-5 pr-2">
            <div className="column is-two-fifths">
              <h3 className="pb-4" id="project-heading">
                Bowlerator - Business landing page
              </h3>

              <div className="pb-3">
                <p>A landing page for a meal generation bowl app.</p>
                <ul>
                  <li> ➡️ UX focused design</li>
                  <li> ➡️ UX focused design</li>
                  <li> ➡️ UX focused design</li>
                </ul>
              </div>

              <div className="pb-2" id="project-tech">
                <p>Bulma, React, Javascript </p>
              </div>

              <div className="pb-3">
                <a className="px-1" href="/">
                  <Image
                    src={extLink}
                    width={25}
                    height={25}
                    alt="external link icon"
                  />
                </a>
                <a className="px-1" href="/">
                  <Image
                    src={extLink}
                    width={25}
                    height={25}
                    alt="external link icon"
                  />
                </a>
                <a className="px-1" href="/">
                  <Image
                    src={extLink}
                    width={25}
                    height={25}
                    alt="external link icon"
                  />
                </a>
              </div>
            </div>
            <div className="column is-three-fifths" id="project-image-wrapper">
              <img src="/holder.jpg" alt="sdf" id="project-image" />
            </div>
          </div>

          <div className="additional-projects">
            <h2 className="pb-4 pt-5" id="section-heading">
              Additional Projects
            </h2>
            {/* <h3 className="is-size-5 pb-4" id="project-heading">
              <a>View all projects</a>
            </h3> */}
            <div className="tile is-ancestor">
              <div className="tile is-parent" id="tile-parent">
                <article className="tile is-child" id="tile">
                  <header>
                    <h3 className="pb-2" id="project-add-heading">
                      <a
                        className="general-link-style"
                        href={LINK_PROJ_ADD_1_PAGE}
                      >
                        Bowlerator
                      </a>
                    </h3>
                    <div className="pb-3 is-size-6">
                      <p>
                        A landing page for a meal generation bowl app. sadflk
                        awle f lsadf sldksdf waeoif jweo;f wnefo w en folwekj
                        flwaek fmawelk fnweal ;fkwnae;l fwen f;lwkeanf ;lwaeknf
                        wa;lekf nsea;ljf n seark fjnes
                      </p>
                    </div>
                  </header>
                  <footer>
                    <div className="pb-2 mb-0" id="project-add-tech">
                      <p>Bulma, React, Javascript </p>
                    </div>
                    <div className="pt-0 pb-0">
                      <a
                        className="px-2"
                        href={LINK_PROJ_ADD_1_EXT}
                        id="icon-hover-fill"
                      >
                        <Image
                          src={extLink}
                          width={25}
                          height={25}
                          alt="external link icon"
                        />
                      </a>
                      <a
                        className="px-2"
                        href={LINK_PROJ_ADD_1_GITHUB}
                        id="icon-hover-fill"
                      >
                        <Image
                          src={github}
                          width={25}
                          height={25}
                          alt="external link icon"
                        />
                      </a>
                    </div>
                  </footer>
                </article>
              </div>
              <div className="tile is-parent" id="tile-parent">
                <article className="tile is-child" id="tile">
                  <header>
                    <h3 className="pb-2" id="project-add-heading">
                      Bowlerator
                    </h3>
                    <div className="pb-3 is-size-6">
                      <p>A landing</p>
                    </div>
                  </header>
                  <footer>
                    <div className="pb-2 mb-0" id="project-add-tech">
                      <p>Bulma, React, Javascript </p>
                    </div>
                    <div className="pt-0 pb-0">
                      <a className="px-1" href="/">
                        <Image
                          src={extLink}
                          width={25}
                          height={25}
                          alt="external link icon"
                        />
                      </a>
                      <a className="px-1" href="/">
                        <Image
                          src={extLink}
                          width={25}
                          height={25}
                          alt="external link icon"
                        />
                      </a>
                      <a className="px-1" href="/">
                        <Image
                          src={extLink}
                          width={25}
                          height={25}
                          alt="external link icon"
                        />
                      </a>
                    </div>
                  </footer>
                </article>
              </div>
              <div className="tile is-parent" id="tile-parent">
                <article className="tile is-child" id="tile">
                  <header>
                    <h3 className="pb-2" id="project-add-heading">
                      Bowlerator
                    </h3>
                    <div className="pb-3 is-size-6">
                      <p>A landing page for a meal gene</p>
                    </div>
                  </header>
                  <footer>
                    <div className="pb-2 mb-0" id="project-add-tech">
                      <p>Bulma, React, Javascript </p>
                    </div>
                    <div className="pt-0 pb-0">
                      <a className="px-1" href="/">
                        <Image
                          src={extLink}
                          width={25}
                          height={25}
                          alt="external link icon"
                        />
                      </a>
                      <a className="px-1" href="/">
                        <Image
                          src={extLink}
                          width={25}
                          height={25}
                          alt="external link icon"
                        />
                      </a>
                      <a className="px-1" href="/">
                        <Image
                          src={extLink}
                          width={25}
                          height={25}
                          alt="external link icon"
                        />
                      </a>
                    </div>
                  </footer>
                </article>
              </div>
            </div>

            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Title</p>
                  <p>description</p>
                  <p>tech</p>
                  <p>links</p>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Title</p>
                  <p>description</p>
                  <p>tech</p>
                  <p>links</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Title</p>
                  <p>description</p>
                  <p>tech</p>
                  <p>links</p>
                </article>
              </div>
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
