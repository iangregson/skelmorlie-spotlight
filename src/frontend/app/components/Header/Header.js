import React from 'react'

import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="brand">
          Skelmorlie spotlight
        </div>
        <div className="feedback">
          <a href="https://goo.gl/lOKbR6" target="_blank">
            <span className="fa fa-bullhorn"></span>
          </a>
        </div>
      </header>
    )
  }
}
