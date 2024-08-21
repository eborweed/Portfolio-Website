import React from "react";
import { motion, useAnimate } from "framer-motion";
import "./AnimationTest.css";
const AnimationTest = () => {
  return (
    <>
      <div className="container">
        <motion.div className="circle2"></motion.div>

        <motion.div
          className="circle"
          initial={{ y: 0, opacity: 0 }}
          transition={{ duration: 3 }}
          animate={{
            y: [100, 0, 100, 80],
            opacity: 0.3,
            scale: [1, 1, 1, 1, 1, 2, 3, 2],
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default AnimationTest;
