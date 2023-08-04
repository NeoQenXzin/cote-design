// AccordeonPlus.jsx
import React, { useRef, useState, useEffect } from "react";
import styles from "./AccordeonPlus.module.css";

export default function AccordeonPlus(props) {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    // Récupérer la hauteur réelle de la div content lorsqu'elle est ouverte
    if (props.active) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [props.active]);

  const changeState = () => {
    // On inverse l'état de l'accordeon si celui-ci est déjà ouvert.
    if (props.active) {
      props.onChange(-1); // On envoie une valeur "-1" pour indiquer de fermer l'accordeon.
    } else {
      props.onChange(props.index);
    }
  };

  return (
    <div onClick={() => changeState()} className={`${styles.accordeonPlus} ${props.active ? styles.open : ""}`}>
      <h3>
        <span className={styles.arrow}>{props.active ? "-" : "+"}</span>
        {props.title}
      </h3>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ maxHeight: `${contentHeight}px` }}
      >
        {props.content}
      </div>
    </div>
  );
}
