import React from 'react'
import CreditCardImg from '../../assets/creditcard.png'
import './CreditCard.styles.css'
const CreditCard = () => {
    return (
        <div className="credit-card-wrapper">
            <img src={CreditCardImg} alt="" />
            <div className="content-1">
                <div className="balance">
                    <p>Your Balance</p>
                    <h3>$592.323</h3>
                </div>
                <div className="traffic">
                    <p>Traffic/Week</p>
                    <p className='fail'>-0.89%</p>
                </div>
            </div>

            <div className="content-2">
                <div className="item">
                    <p className='item-p'>Currency</p>
                    <h6>USD/US Dollar</h6>
                </div>

                <div className="item">
                    <p className='item-p'>Status</p>
                    <h6>Active</h6>
                </div>

                <div className="item">
                    <p className='item-p'>Exp</p>
                    <h6>12/14</h6>
                </div>
            </div>

            <button>
                + Add new card
            </button>
        </div>
    )
}

export default CreditCard