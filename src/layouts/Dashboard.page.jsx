import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar.component'
import Content from '../components/Content/Content.component'
import './Dashboard.styles.css'
const Dashboard = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
        <div className="dashboard-wrapper">
            <Sidebar visible={visible} setVisible={setVisible}/>
            <Content visible={visible} setVisible={setVisible}/>
        </div>
    </>
  )
}

export default Dashboard