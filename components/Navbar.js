"use client"
import React, { useState } from "react"

export default function Navbar() {
  const LINK_RESUME = "/Kevin_Lam_resume.pdf"
  const LINK_MAILTO = "mailto:kevin.quoct.lam+portfolio2@gmail.com"
  const LINK_BLOG =
    "https://github.com/kevin-lambda/kevin-lambda/blob/main/dev_log.md"

  const [isActive, setisActive] = useState(false)

  return (
    <nav
      className="navbar p-3 is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand pl-1">
        <a
          href="#section-hero"
          className="navbar-item is-size-3 p-1"
          id="navbar-logo"
        >
          KL
        </a>
        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu is-size-6 ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="#section-about">About</a>
          </div>
          <div className="navbar-item">
            <a href="#section-projects">Projects</a>
          </div>
          <div className="navbar-item">
            <a target="_blank" href={LINK_BLOG}>
              Developer Journal
            </a>
          </div>

          {/* <div className="navbar-item">
            <a href="/">Experimental</a>
          </div> */}

          {isActive ? (
            <div className="navbar-end">
              <div className="navbar-item">
                <a target="_blank" href={LINK_RESUME}>
                  Resume
                </a>
              </div>
              <div className="navbar-item">
                <a target="_blank" href={LINK_MAILTO}>
                  Email me
                </a>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button is-grey-lighter is-size-6"
                  id="navbar-resume-button"
                  href={LINK_RESUME}
                  target="_blank"
                >
                  Resume
                </a>
                <a
                  className="button is-size-6"
                  id="navbar-contact-button"
                  href={LINK_MAILTO}
                  target="_blank"
                >
                  <strong>Email me</strong>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
