import Image from "next/image"
import extLink from "@/public/extLink.svg"
import github from "@/public/github.svg"

export default function Footer() {
  return (
    <footer className="footer pb-5" id="footer">
      <div className="content has-text-centered" id="footer-wrapper">
        <p className="mb-1">Built by Kevin Lam.</p>
        <p>
          Design based on{" "}
          <a href="https://brittanychiang.com/">Brittany Chiang</a>. Icons{" "}
          <a>attribution</a>.
        </p>
        <div className="pt-0 pb-0">
          <a className="px-2" href="">
            <Image
              src={extLink}
              width={25}
              height={25}
              alt="external link icon"
            />
          </a>
          <a className="px-2" href="">
            <Image
              src={github}
              width={25}
              height={25}
              alt="external link icon"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
