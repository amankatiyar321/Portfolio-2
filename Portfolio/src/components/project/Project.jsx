import React from "react";
import styles from "./project.module.css";
import { ProjectCard } from "./ProjectCard";
import masai1 from "../../assets/practo1.jpg"
import masai2 from "../../assets/practo2.jpg"
import masai3 from "../../assets/practo3.jpg"
import masai4 from "../../assets/practo4.jpg"
import masai5 from "../../assets/practo5.jpg"
import masai6 from "../../assets/practo6.jpg"
import masai7 from "../../assets/practo7.jpg"
import masai8 from "../../assets/practo8.jpg"
import masai9 from "../../assets/practo9.jpg"
import masai10 from "../../assets/practo10.jpg"
import masai11 from "../../assets/practo11.jpg"
import masai12 from "../../assets/practo12.jpg"
import masai13 from "../../assets/practo13.jpg"
import masai14 from "../../assets/practo14.jpg"
import masai15 from "../../assets/practo15.jpg"
import masai16 from "../../assets/practo16.jpg"

const Project = () => {
  

  let data = [
    {
      title: "Apple Tv+",
      image: [
        { src: masai1, alt: "Masai Refresh SS" },
        { src: masai2, alt: "Masai Refresh SS" },
        { src: masai3, alt: "Masai Refresh SS" },
        { src: masai4, alt: "Masai Refresh SS" },
      ],
      about:
        "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids' entertainment, comedies and more — with new Apple Originals added every month.",
      tech_stack: [
        "HTML",
        "CSS",
        "Styled components",
        "Bootstrape",
        "NodeJS",
       
      ],
      links: [
        "https://github.com/codewithritik/tvapple-Clone",
       
      ],
      badge: "Live Project",
    },
    {
      title: "Uboric Clone",
      image: [
        { src: masai5, alt: "Practo Clone SS" },
        { src: masai6, alt: "Practo Clone SS" },
        { src:masai7, alt: "Practo Clone SS" },
        { src: masai8, alt: "Practo Clone SS" },
      ],
      about: "Kitchen Ware - Uboric : Grocery Delivery India | Online Electric Appliances. FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500. Men's footwear.",
      tech_stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "NodeJS",
        "BootStrapes",
        "ES6",
      ],
      links: [
        "https://github.com/amankatiyar321/UboricUboric",
        
      ],
    },
    {
      title: "Fraazo Clone",
      image: [
        { src: masai9, alt: "ParkEasy SS" },
        { src: masai10, alt: "ParkEasy SS" },
        { src: masai11, alt: "ParkEasy SS" },
        { src: masai12, alt: "ParkEasy SS" },
      
      ],
      about:
        "Fraazo was launched in 2016 as a fresh produce store in the posh locality of Powai with a clear vision of serving the customers with farm-fresh groceries delivered at the doorstep.",
      links: [
        "https://github.com/amankatiyar321/Farrroz-fro",
       
      ],
      tech_stack: [
        "React",
        "Material UI",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Socket.io",
      ],
      badge: "Hackathon project",
    },
    {
      title: "SmallCase Clone",
      image: [
        { src: masai13, alt: "Goodreads clone SS" },
        { src: masai14, alt: "Goodreads clone SS" },
        { src: masai15, alt: "Goodreads clone SS" },
        { src: masai16, alt: "Goodreads clone SS" },
      ],
      about:
        "Smallcases are a curated theme-based portfolios, developed by Smallcase Technologies, a fintech company launched in 2016 by three IIT Kharagpur graduates. It allows investors to park their funds according to their conviction and lately they have become the talk of the town.",
      tech_stack: ["JavaScript", "ES6", "BootStrape", "JSON Server","HTML","CSS"],
      links: [
        "https://github.com/SaravanakumarJN/Goodreads---Charlie",
        "https://goodreads-iota.vercel.app/",
      ],
    },
   
  
  ];

  return (
    <div className={styles.container} id="Blog">
      <div className={styles.heading}>Projects</div>
      <div className={styles.aligner}>
        {data?.map((item, i) => {
          return <ProjectCard key={i} item={item}/>;
        })}
      </div>
    </div>
  );
};

export default Project;
