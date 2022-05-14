import React from 'react'
import styles from '../components/Header.module.css'

const Header = () => {
    return (
        <div className={styles.header} >
            <h1 className={styles.title} > Piedra, Papel o Tijera</h1>
        </div>
    )
}

export default Header