import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTriangleExclamation, fas} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas,faTriangleExclamation)
import './Bugtab.styles.css'
const BugTab = () => {
    return (
        <>
            <div className="bug-wrapper">
                <h2>Found a bug?</h2>
                <p>Report now to us if you found any bugs</p>
                <button>
                    <FontAwesomeIcon style={{marginRight:"10px"}} icon={faTriangleExclamation} />Report
                </button>
            </div>
        </>
    )
}

export default BugTab