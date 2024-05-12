import React from "react";
import styles from "./Timeline.module.css";
import eventsData from "./eventsData";

const Timeline = () => {
  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <ul className={styles.timeline}>
          {eventsData.map((event, index) => (
            <li key={index} className={styles.timelineContent}>
              <div className={styles.date}>{event.date}</div>
              <div>
                <h2 className={styles.titulo}>{event.title}</h2>
                <p className={styles.text}>{event.description}</p>
              </div>
            </li>
          ))}
          <div className={styles.timelineLine}></div>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
