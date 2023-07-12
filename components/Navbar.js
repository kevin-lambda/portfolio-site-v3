"use client"
import React, { useState } from "react"

export default function Navbar() {
  const [isActive, setisActive] = useState(false)

  return (
    <nav className="navbar p-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item is-size-4" id="navbar-logo">
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
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="/">About</a>
          </div>
          <div className="navbar-item">
            <a href="/">Project</a>
          </div>
          <div className="navbar-item">
            <a href="/">Blog</a>
          </div>

          {/* <div className="navbar-item">
            <a href="/">Experimental</a>
          </div> */}

          {isActive ? (
            <div className="navbar-end">
              <div className="navbar-item">
                <a href="/">Resume</a>
              </div>
              <div className="navbar-item">
                <a href="/">Hire me</a>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-grey-lighter" id="navbar-resume-button">
                  Resume
                </a>
                <a className="button" id="navbar-contact-button">
                  <strong>Hire me</strong>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
