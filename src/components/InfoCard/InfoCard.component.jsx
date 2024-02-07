import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
library.add(faWallet)
import './InfoCard.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InfoCard = () => {
    const iconStyle = { 
        width: "25px", 
        height: "25px",
        backgroundColor: "hsl(192, 22%, 95%)",
        padding: "0.7rem",
        borderRadius: "10px"
    }
    return (
        <div className="info-card">
            <div className="icons">
                <FontAwesomeIcon icon={faWallet} style={iconStyle} />
                <span>. . .</span>
            </div>
            <h4>Balance</h4>
            <div className="numerical">
                <h3>$592.323</h3>
                <p className='pass'>-0.89%</p>
            </div>
        </div>
    )
}

export default InfoCard