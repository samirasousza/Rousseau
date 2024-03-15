import styles from "./Alertas.css"
import React from 'react'
function Alertas ({children}) {
  return (
    <section className={styles.alertas}>
      {children}
      Alertas
    </section>
  );
}

export default Alertas;
