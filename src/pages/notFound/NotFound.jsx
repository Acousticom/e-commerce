import React from 'react'
import styles from './NotFound.module.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.errorCode}>404</p>
        <h2>Page not found 🔍</h2>
        <p className="">Sorry, we couldn't find the page you are looking for.</p>
        <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={()=>navigate('/')}>Back to Home</button>
            <button className={styles.supportButton} onClick={()=>navigate('/')}>Contact support</button>
        </div>
      </div>
    </div>
  )
}

export default NotFound