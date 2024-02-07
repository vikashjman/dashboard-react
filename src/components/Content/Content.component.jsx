import React from 'react'
import './Content.styles.css'
import InfoCard from '../InfoCard/InfoCard.component'
import ApexChart from '../Chart/Chart.component'
import CreditCard from '../CreditCard/CreditCard.component'
import Transaction from '../Transaction/Transaction.component'
import Planning from '../Planning/Planning.component'
const Content = ({ visible, setVisible }) => {
    return (
        <>
            <div className="content-section">
                <div className='nav'>
                    <div className="hamburger-menu" onClick={() => setVisible(!visible)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h2>Dashboard</h2>
                </div>

                <div className="grid-container">
                    <InfoCard/>
                    <InfoCard/>
                    <InfoCard/>
                    <InfoCard/>
                <ApexChart/>
                <CreditCard/>
                <Transaction/> 
                </div>

                <Planning/>

            </div>
        </>
    )
}

export default Content