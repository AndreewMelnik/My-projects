import React, {Component} from 'react'
import './Drawer.css'
import Backdrop from '../Backdrop/Backdrop'

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
      <React.Fragment>
      <nav className={cls}>
        <ul>
          { this.renderLinks() }
        </ul>
      </nav>
      { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
      </React.Fragment>
    )
  }
}

export default Drawer