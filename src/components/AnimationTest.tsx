import React from "react";
import { motion } from "framer-motion";
import "./AnimationTest.css";
const AnimationTest = () => {
  return (
    <>
      <div className="container">
        <motion.div className="circle2"></motion.div>
      </div>
      <motion.div
        className="circle"
        transition={{
          type: "spring",
          bounce: "0.5",
          duration: 2,
          repeat: Infinity,
        }}
        animate={{ y: [100, 0, 100, 0], rotate: [0, 200, 200, 0] }}
      ></motion.div>
    </>
  );
};

export default AnimationTest;
