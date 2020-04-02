import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './Inter.module.css';
import tstyles from '../Transaction.module.css'
import InterInputItem from './InterInputItem';
import InterOutput from './InterOutput';

const Inter = props => {
    let { id } = useParams();

    return (

        <div className={styles.Inter}>
            <div className={styles.InputContainer}>
                {[0, 1, 3, 4].map((value) => {
                    return (<div className={styles.InterInput}>
                        {[0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17].map((value) => {
                            return <InterInputItem key={value} />
                        })}
                    </div>)
                })}
            </div>
            <div className={tstyles.TransactionNode}>
                {/* <TransactionNode /> */}
            </div>
            <div className={styles.OutputContainer}>
                {[0, 1, 2].map((value) => {
                    return <InterOutput key={value} />
                })}
            </div>
        </div >

    )
}

export default Inter;