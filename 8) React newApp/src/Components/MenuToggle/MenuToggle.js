import React from 'react'
import './MenuToggle.css'

const MenuToggle = props => {
  let cls = 'MenuToggle'

  if (props.isOpen) {
    cls += ' fa fa-times'
    cls += ' open'
  } else {
    cls +=' fa fa-bars'
  }

  return (
    <i
      className={cls}
      onClick={props.onToggle}
    />
  )
}

export default MenuToggle