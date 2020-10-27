import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-dark sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-center">
        <a className="py-2" href="#">
        </a>
        <a className="py-2 d-none d-md-inline-block mr-5 text-white text-decoration-none font-weight-bold" href="/">Home</a>
        <a className="py-2 d-none d-md-inline-block mr-5 text-white text-decoration-none font-weight-bold" href="/about">About</a>
        <a className="py-2 d-none d-md-inline-block text-white text-decoration-none font-weight-bold" href="/works">Works</a>
      </div>
    </nav>
  )
}
