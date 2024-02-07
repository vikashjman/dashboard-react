import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sideitem.styles.css'

const Sideitem = ({ title, icon }) => {
  const iconStyle = {
    fontSize: "1.5rem",
    width: "25px",
    height: "25px",
    backgroundColor: "hsl(192, 22%, 95%)",
    padding: "0.5rem",
    borderRadius: "5px"
  }
  return (
    <div className='icon-wrapper'>
      <FontAwesomeIcon style={iconStyle} icon={icon} />
      <span>{title}</span>
    </div>
  )
}

export default Sideitem