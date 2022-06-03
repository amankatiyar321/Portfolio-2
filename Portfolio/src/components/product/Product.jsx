import React from "react";
import styles from "./product.module.css";
import html from "../../img/html_5.png";
import css from "../../img/css_3.png";
import javascript from "../../img/javascript.png";
import react from "../../img/react.png";
import redux from "../../img/redux.png";
import nodejs from "../../img/nodejs_icon.png";
import expressjs from "../../img/express.png";
import mongodb from "../../img/mongodb.png";
import github from "../../img/github_icon.png";
import dsa from "../../img/ds-removebg-preview.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Product = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let data = [
    {
      title: "HTML",
      image: html,
    },
    {
      title: "CSS",
      image: css,
    },
    {
      title: "Javascript",
      image: javascript,
    },
    {
      title: "React",
      image: react,
    },
    {
      title: "Redux",
      image: redux,
    },
    {
      title: "NodeJS",
      image: nodejs,
    },
    {
      title: "ExpressJS",
      image: expressjs,
    },
    {
      title: "MongoDB",
      image: mongodb,
    },
    {
      title: "Github",
      image: github,
    },
    {
      title: "DS & ALgo",
      image: dsa,
    },
  ];

  return (
    <div className={styles.container} id="Skilles" style={{backgroundColor: darkMode && "#333"}}>
      <div className={styles.heading} style={{backgroundColor: darkMode && "#333"}}>Skills & Interests</div>
      <div className={styles.aligner} style={{backgroundColor: darkMode && "#333"}}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.listItem} style={{backgroundColor: darkMode && "#333"}}>
              <img src={item.image} alt={item.title} style={{backgroundColor: darkMode && "#333"}}/>
              <div className={styles.title} style={{backgroundColor: darkMode && "#333"}}>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
