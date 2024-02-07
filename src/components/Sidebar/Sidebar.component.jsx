import React, { useState } from 'react'
import Sideitem from '../SideItems/Sideitem.component'
import BugTab from './BugTab/Bugtab.component'
import logoImg from '../../assets/applepay.png'
import crossImg from '../../assets/cross.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRightFromBracket, faHandshakeAngle, faGear, faClipboard, faCreditCard, faFileInvoice, faTableColumns, fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faTableColumns, faCreditCard, faFileInvoice, faClipboard, faGear, faHandshakeAngle, faRightFromBracket)
import './Sidebar.styles.css'

const Sidebar = ({visible, setVisible}) => {
    
    return (
        <>
            <div className={`sidebar ${visible ? 'show' : ''}`}>
                <div className="logo">
                    <img src={logoImg} alt="" />
                    <img className='cross' onClick={() => setVisible(!visible)} src={crossImg} alt="cross" />
                </div>
                <div className="sideitems-container">
                    <Sideitem title="Dashboard" icon={faTableColumns} />
                    <Sideitem title="Transaction" icon={faFileInvoice} />
                    <Sideitem title="Payment" icon={faCreditCard} />
                    <Sideitem title="Planning" icon={faClipboard} />
                    <Sideitem title="Setting" icon={faGear} />
                    <hr />
                    <Sideitem title="Help" icon={faHandshakeAngle} />
                    <Sideitem title="Logout" icon={faRightFromBracket} />
                </div>
                <BugTab />
            </div>
        </>
    )
}

export default Sidebar