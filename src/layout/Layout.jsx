import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <main className={styles.outlet}>
            <Outlet/>
        </main>
        <Footer className={styles.footer}/>
    </div>
  )
}

export default Layout