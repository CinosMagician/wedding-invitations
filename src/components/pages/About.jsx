import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ReactImg from '../../assets/react.png'
import HtmlImg from '../../assets/html.png'
import CssImg from '../../assets/css.png'
import JsImg from '../../assets/javascript.png'
import NodeImg from '../../assets/node.png'
import MongoImg from '../../assets/mongo.png'
import PostgresqlImg from '../../assets/postgresql.png'
import ExpressImg from '../../assets/express.png'
import "./About.css";
import profileImage from '../../assets/newProfile.png';

export default function About() {
  const textBoxRef = useRef(null);

  useEffect(() => {
    // Ensure the text boxes are initially hidden
    if (textBoxRef.current) {
      textBoxRef.current.style.opacity = "0"; // Ensure it's hidden initially
      textBoxRef.current.animate(
        { opacity: [0, 0.4, 0.8, 1] },
        { duration: 2000, easing: "ease-in-out", fill: "forwards" }
      );
    }
  }, []);

  // Function to create wave effect on the second paragraph
  const createWave = (text) => {
    return text.split('').map((letter, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }} // Start from below
        animate={{ opacity: 1, y: 0 }} // Animate to original position
        transition={{
          duration: 0.5,
          delay: index * 0.03 // Stagger the animation
        }}
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className="backgroundImage">
      <div className="pageBox">
        <div className="textBox" ref={textBoxRef}>
          <div className="hello">
            <motion.h3
              initial={{ opacity: 0, color: "#fff" }}
              animate={{ opacity: 1, color: "#14dee9" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="textColorAnimation"
            >
              Hi there! My name is Lachlan ✌️
            </motion.h3>
          </div>
          <div className="info">
            <motion.h1
              initial={{ opacity: 0, color: "#fff" }}
              animate={{ opacity: 1, color: "#f0f0f0" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              An upcoming and aspiring software engineer with a passion for expanding my web skills.
            </motion.h1>
          </div>
          <div className="personal">
            <motion.p
              initial={{ opacity: 0, color: "#fff" }}
              animate={{ opacity: 1, color: "#f0f0f0" }}
              transition={{ duration: 0, delay: 0 }}
            >
              {createWave("Having spent the majority of my life in front of a computer, and with the drive to always become better, I know that becoming a part of the programming world was something I have always wanted to do.")}
            </motion.p>
          </div>
        </div>

        <div className="spacerBox"></div>


        <div className="secondHalf">
        <motion.div
          className="imageBox"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
        >
          <div className="image">
            <img
              className="profileImage"
              src={profileImage}
              alt="Profile Image"
            />
          </div>
        </motion.div>
        <div className="tooling">
            <div className="tooling-title">
              <h2>Skillset</h2>
            </div>
            
            <div className="tooling-box">
            <div className="box-content">
                <div className="box-icon">
                <img className="icon" src={MongoImg}/>
                </div>
                <div className="box-text">
                  <p>MongoDB</p>
                </div>
              </div>
              <div className="box-content">
                <div className="box-icon">
                <img className="icon" src={ExpressImg}/>
                </div>
                <div className="box-text">
                  <p>Express Js</p>
                </div>
              </div>
              <div className="box-content">
                <div className="box-icon">
                <img className="icon" src={ReactImg}/>
                </div>
                <div className="box-text">
                  <p>React</p>
                </div>
              </div>
              <div className="box-content">
                <div className="box-icon">
                <img className="icon" src={NodeImg}/>
                </div>
                <div className="box-text">
                  <p>Node</p>
                </div>
              </div>
              <div className="box-content">
                <div className="box-icon">
                <img className="icon" src={PostgresqlImg}/>
                </div>
                <div className="box-text">
                  <p>PostgreSQL</p>
                </div>
              </div>
              <div className="box-content">
                <div className="box-icon">
                  <img className="icon" src={HtmlImg}/>
                </div>
                <div className="box-text">
                  <p>HTML</p>
                </div>
              </div>
              <div className="box-content">
                <div className="box-icon">
                <img className="icon" src={JsImg}/>
                </div>
                <div className="box-text">
                  <p>Javascript</p>
                </div>
              </div>
              <div className="box-content">
                <div className="box-icon">
                <img className="icon" src={CssImg}/>
                </div>
                <div className="box-text">
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
