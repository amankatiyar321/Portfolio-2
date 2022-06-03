import React from "react";
import styles from "./header.module.css";
import Me from "../../img/me.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Intro from "../intro/Intro";
// import ScrollAnimation from "react-animate-on-scroll";

const Header = () => {
  const handleGithub = () => {
    window.open("https://github.com/amankatiyar321");
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/aman-katiyar-428050233/");
  };



  const handleResume = () => {
    window.open(
      "https://docs.google.com/document/d/1QhHPyT7Q5lQJi9kcarlskw96HIA7N_6A/edit?usp=sharing&ouid=103174325408584291780&rtpof=true&sd=true"
    );
  };

  return (
    <div className={styles.container} id="Home">
      <div className={styles.content_container}>
        <div className={styles.demo}>

          <Intro />
        <div className={styles.res}>
        <div className={styles.connect}>
          <FaGithub onClick={handleGithub} size='1.5em' />
          <FaLinkedin onClick={handleLinkedin} size='1.5em' />
        </div>
          <div className={styles.resu}>
        <button onClick={handleResume}>Resume</button>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <img src={Me} alt='User Pic' />
        </div>
      </div>
    </div>
  );
};

export default Header;





