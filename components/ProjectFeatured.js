import Image from "next/image"

export default function ProjectFeatured(props) {
  const ICON_SIZE = 25
  const ICON_GITHUB = "/github.svg"
  const ICON_LIVE = "/extLink.svg"
  const ICON_MEDIUM = "/medium1.svg"
  const ICON_JOURNAL = "/journal.svg"

  const {
    text_title,
    text_description,
    text_features,
    text_technology,
    link_proj_page,
    link_live,
    link_github,
    link_medium,
    link_journal,
    image_project,
    active_icon_live,
    active_icon_github,
    active_icon_medium,
    active_icon_journal,
  } = props.projectData

  return (
    <div className="columns pb-6 pr-2">
      <div className="column is-two-fifths">
        <h3 className="pb-4" id="project-heading">
          <a className="general-link-style" href={link_proj_page}>
            {text_title}
          </a>
        </h3>

        <div className="pb-3">
          <p className="pb-0">{text_description}</p>
          <ul className="pb-2">
            {text_features.map((elem, index) => (
              <li key={index}> ⇢ {elem}</li>
            ))}
          </ul>
        </div>

        <div className="pb-2" id="project-tech">
          <p>{text_technology}</p>
        </div>
        <div className="pb-3">
          {active_icon_live ? (
            <a
              className="px-2"
              target="_blank"
              href={link_live}
              id="icon-hover-fill"
            >
              <Image
                src={ICON_LIVE}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt="live link icon"
                title="Live demo"
              />
            </a>
          ) : null}
          {active_icon_github ? (
            <a
              className="px-2"
              target="_blank"
              href={link_github}
              id="icon-hover-fill"
            >
              <Image
                src={ICON_GITHUB}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt="github link icon"
                title="Github"
              />
            </a>
          ) : null}
          {active_icon_medium ? (
            <a
              className="px-2"
              target="_blank"
              href={link_medium}
              id="icon-hover-fill"
            >
              <Image
                src={ICON_MEDIUM}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt="medium link icon"
                title="Medium article"
              />
            </a>
          ) : null}
          {active_icon_journal ? (
            <a
              className="px-2"
              target="_blank"
              href={link_journal}
              id="icon-hover-fill"
            >
              <Image
                src={ICON_JOURNAL}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt="journal link icon"
                title="Journal Entry"
              />
            </a>
          ) : null}
        </div>
      </div>
      <div className="column is-three-fifths" id="project-image-wrapper">
        <a href={link_proj_page}>
          <img src={image_project} alt="project image" id="project-image" />
        </a>
      </div>
    </div>
  )
}
