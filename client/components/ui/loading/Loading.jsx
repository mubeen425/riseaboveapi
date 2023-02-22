import React from "react";
import styles from "./loading.module.css";

export default function Loading() {
    return (
        <div className={`${spinner-container}`}>
            <div className={`${loading-spinner}`}>
            </div>
        </div>
    );
}