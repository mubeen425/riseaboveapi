import React from "react";
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={`${styles.main}`}>
            <h6>Rise Artist Collective DAO</h6>
            <h6>4.1K members</h6>
            <button className='btn btn-primary'>Join</button>

            <div className={`${styles.flexCol} ${styles.options} mt-4`}>
                <h6>Proposals</h6>
                <h6>New Proposal</h6>
                <h6>Treasury</h6>
                <h6>About</h6>
                <h6>Settings</h6>
            </div>
        </div>
    );
}