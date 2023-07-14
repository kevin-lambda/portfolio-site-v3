import Image from "next/image"
import extLink from "@/public/extLink.svg"

export default function Home() {
  const svg_icon_size_h = 25
  const svg_icon_size_w = 25

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
              things. Before software, I was a project mechanical engineer in
              aerospace for eight years. In that time, growing my problem
              solving knowledge, collaboration experiences, and project
              management skills.
            </p>
            <p className="pb-5">
              My curiousity leads me to new concepts, and that energizes my
              enjoyment of learning and practicing software development. It's
              this process that lets me thrive in my work.
            </p>
            <p>
              I write a <a>developer blog</a> about my software development
              journey.
            </p>
          </div>
          <div className="column" id="about-image-wrapper">
            <img src="/holder.jpg" alt="sdf" id="about-image" />
          </div>
        </div>
        {/* <div>sub section skills TBD w/ demonstration of tech understanding and code application</div> */}
      </section>

      <section className="section is-medium" id="section-projects">
        <h2 className="pb-5" id="section-heading">
          FEATURED PROJECTS
        </h2>
        <div>
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
                      Bowlerator
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
        <a className="button is-size-6" id="navbar-contact-button">
          <strong>Send me a message</strong>
        </a>
      </section>
    </main>
  )
}
