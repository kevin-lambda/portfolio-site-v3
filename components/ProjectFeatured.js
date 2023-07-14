import Image from "next/image"

export default function ProjectFeatured(props) {
  const ICON_SIZE = 25
  const ICON_GITHUB = "/github.svg"
  const ICON_LIVE = "/extLink.svg"

  const {
    text_title,
    text_description,
    text_features,
    text_technology,
    link_proj_page,
    link_live,
    link_github,
    image_project,
    active_icon_live,
    active_icon_github,
  } = props.projectData

  return (
    <div className="columns pb-5 pr-2">
      <div className="column is-two-fifths">
        <h3 className="pb-4" id="project-heading">
          <a className="general-link-style" href={link_proj_page}>
            {text_title}
          </a>
        </h3>

        <div className="pb-3">
          <p>{text_description}</p>
          <ul>
            {text_features.map((elem) => (
              <li> • {elem}</li>
            ))}
          </ul>
        </div>

        <div className="pb-2" id="project-tech">
          <p>{text_technology}</p>
        </div>
        <div className="pb-3">
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
      </div>
      <div className="column is-three-fifths" id="project-image-wrapper">
        <a href={link_proj_page} id="project-image">
          <img src={image_project} alt="project image" id="project-image" />
        </a>
      </div>
    </div>
  )
}
