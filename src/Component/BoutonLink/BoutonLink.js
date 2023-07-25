import React from 'react'
import Link from 'next/link'
import styles from './BoutonLink.module.css'

export default function BoutonLink(props) {
    return (
        <Link href={props.link}>
            <button className={styles.prezButton}>
                <span className={styles.textContainer}>
                    <span className={styles.text}>{props.textButton}</span>
                </span>
            </button>
        </Link>
    )
}
