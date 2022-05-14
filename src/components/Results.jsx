import React, { Fragment } from 'react';
import styles from './Results.module.css';

const Results = ({ result }) => {

    //Si no hay resultado se retorna un fragmento vacio para no cubrir el campo
    if (!result) {
        return <Fragment />
    }

    return (
        <div className={styles.results}>
            <h1> {result} </h1>
        </div>
    )
}

export default Results