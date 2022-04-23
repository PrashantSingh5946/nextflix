import React from "react";
import styles from "./css/video.module.css";
export default function video() {
  return (
    <div className={styles.background}>
      <div className={styles.logo}></div>
      <div className={styles.video_card}>
          <video autoPlay="true" controls >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></source>
          </video>

          <div className="video_details">
              <div className="Name">
                Sample Bunny
              </div>
              <small>Lorem ipsum dolor whatever maybe the description</small>
          </div>
      </div>
    </div>
  );
}
