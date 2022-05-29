import React, {Component} from 'react'
import './Drawer.css'

const links = [
  1, 2, 3
]

class Drawer extends Component {

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link {link}</a>
        </li>
      )
    })
  }

  render() {
    let cls = 'Drawer'
 
    // Если меню закрыто, то добавляем класс 'close'
    if (!this.props.isOpen) {
      cls += ' close'
    }

    return (
      <nav className={cls}>
        <ul>
          { this.renderLinks() }
        </ul>
      </nav>
    )
  }
}

export default Drawer