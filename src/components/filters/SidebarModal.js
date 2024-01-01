import React from 'react'
import styles from './SidebarModal.module.css'
import Sidebar from './Sidebar'

const SidebarModal = ({showFilter}) => {
  return (
    <div className={styles.container}>
        {/* <Sidebar/> */}
        {/* {showFilter&&<h1>hello</h1>} */}
    </div>
  )
}

export default SidebarModal