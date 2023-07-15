import Image from "next/image"
import linkedin from "@/public/linkedin.svg"
import medium from "@/public/medium1.svg"
import github_square from "@/public/github_square.svg"

export default function Footer() {
  return (
    <footer className="footer pb-5" id="footer">
      <div className="content has-text-centered" id="footer-wrapper">
        <p className="mb-1">Built by Kevin Lam.</p>
        <p>
          Design based from{" "}
          <a href="https://brittanychiang.com/" className="general-link-style">
            Brittany Chiang
          </a>
          . Icons{" "}
          <a
            href="https://www.svgrepo.com/collection/wolf-kit-rounded-line-icons/"
            className="general-link-style"
          >
            attribution
          </a>
          .
        </p>
        <div className="pt-0 pb-0">
          <a
            className="px-2 "
            href="https://www.linkedin.com/in/kevin-q-lam/"
            id="icon-hover-fill"
          >
            <Image src={linkedin} width={25} height={25} alt="linkedin icon" />
          </a>
          <a
            className="px-2"
            href="https://github.com/kevin-lambda"
            id="icon-hover-fill"
          >
            <Image
              src={github_square}
              width={25}
              height={25}
              alt="github icon"
            />
          </a>
          <a
            className="px-2"
            href="https://kevin-lambda.medium.com/"
            id="icon-hover-fill"
          >
            <Image src={medium} width={25} height={25} alt="medium icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}
