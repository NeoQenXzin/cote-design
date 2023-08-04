import React from "react";
import { useState } from "react";
import styles from './Accordeon.module.css'

export default function Accordeon(props) {
  const [toggle, setToggle] = useState(props.state);
  const changeState = () => {
    const arrow = document.getElementById(`${props.title}`);
    !toggle
      ? (arrow.style.transform = "rotate(-180deg) translateY(25%)")
      : (arrow.style.transform = "rotate(0deg) translateY(0%)");
      setToggle(!toggle)
  };

  return (
  <li>
    <h3 onClick={() => changeState()}>
        {props.title} <span id={props.title} className={styles.arrow}></span> 
    </h3>
    <div className={toggle ? styles.open : styles.close }>{props.content}</div>
  </li>
    )
}
