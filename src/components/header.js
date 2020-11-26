import React from "react"

const Header = ({ handleClick }) => {
  return (
    <header>
      <nav className="container">
        <h1>Photo Gallery</h1>
        <ul>
          <li onClick={handleClick}>
            <a href="#top">All</a>
          </li>
          <li onClick={handleClick}>Dancing</li>
          <li onClick={handleClick}>Afro</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
