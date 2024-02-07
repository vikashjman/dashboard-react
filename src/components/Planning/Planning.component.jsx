import React from 'react'
import './Planning.styles.css'
const Planning = () => {
    return (
        <div className="planning-wrapper">
            <div className="title">
                <h2>Planning</h2>
                <p>
                    App name &gt;
                </p>
            </div>

            <div className="planning-items">
                <div className="planning-item">
                    <h4>Buy a house</h4>
                    <p>$8999/$565</p>
                    <progress value="70" max="100">70 %</progress>
                </div>
                <div className="planning-item">
                    <h4>Buy a house</h4>
                    <p>$8999/$565</p>
                    <progress value="70" max="100">70 %</progress>
                </div>
            </div>
        </div>
    )
}

export default Planning