import React, {Component} from 'react'
import './Drawer.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../Backdrop/Backdrop'

const links = [
  {to:'/', label:'List', exact: true},
  {to:'/auth', label:'Authorization', exact: false},
  {to:'/quiz-creator', label:'Make a test', exact: false},
]

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={'active'}
            onClick={this.clickHandler}
           >
            {link.label}
          </NavLink>
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