import React from 'react'
import photoshopImg from '../../assets/photoshop.png'
import './Transaction.styles.css'
const Transaction = () => {
    return (
        <div className="transaction-wrapper">
            <div className="title">
                <h2>Transaction</h2>
                <p>
                    View All &gt;
                </p>
            </div>

            <div className="transaction-items">

                <div className="transaction-item">
                    <img src={photoshopImg} alt="" />
                    <div className="transaction-item-content">
                        <h4>Adobe Photoshop</h4>
                        <p>May 10, 2022 at 08:45</p>
                    </div>
                    <span>$115.67</span>
                </div>
                <div className="transaction-item">
                    <img src={photoshopImg} alt="" />
                    <div className="transaction-item-content">
                        <h4>Adobe Photoshop</h4>
                        <p>May 10, 2022 at 08:45</p>
                    </div>
                    <span>$115.67</span>
                </div>
                <div className="transaction-item">
                    <img src={photoshopImg} alt="" />
                    <div className="transaction-item-content">
                        <h4>Adobe Photoshop</h4>
                        <p>May 10, 2022 at 08:45</p>
                    </div>
                    <span>$115.67</span>
                </div>
            </div>
        </div>
    )
}

export default Transaction