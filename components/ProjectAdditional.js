import Image from "next/image"

export default function ProjectAdditional(props) {
  const ICON_SIZE = 25
  const ICON_GITHUB = "/github.svg"
  const ICON_LIVE = "/extLink.svg"

  const {
    text_title,
    text_description,
    text_technology,
    link_proj_page,
    link_live,
    link_github,
    active_icon_live,
    active_icon_github,
  } = props.projectAddData

  return (
    <div className="tile is-parent" id="tile-parent">
      <article className="tile is-child" id="tile">
        <header>
          <h3 className="pb-2" id="project-add-heading">
            <a className="general-link-style" href={link_proj_page}>
              {text_title}
            </a>
          </h3>
          <div className="pb-3 is-size-6">
            <p>{text_description}</p>
          </div>
        </header>
        <footer>
          <div className="pb-2 mb-0" id="project-add-tech">
            <p>{text_technology}</p>
          </div>
          <div className="pt-0 pb-0">
            {active_icon_live ? (
              <a className="px-2" href={link_live} id="icon-hover-fill">
                <Image
                  src={ICON_LIVE}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  alt="live link icon"
                />
              </a>
            ) : null}
            {active_icon_github ? (
              <a className="px-2" href={link_github} id="icon-hover-fill">
                <Image
                  src={ICON_GITHUB}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  alt="github link icon"
                />
              </a>
            ) : null}
          </div>
        </footer>
      </article>
    </div>
  )
}
