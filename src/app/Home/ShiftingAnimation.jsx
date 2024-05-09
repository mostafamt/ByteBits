"use client";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/onesAndZeros.module.scss";

const ShiftingAnimation = () => {
  const [binaryStrings, setBinaryStrings] = useState([]);
  const intervalRef = useRef(null);
  const maxLength = 30;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setBinaryStrings((prevBinaryStrings) => {
        // Leverage a separate array for efficiency
        const newBinaryStrings = [];
        for (let i = 0; i < prevBinaryStrings.length; i++) {
          const offset = Math.floor(Math.random() * maxLength);
          const binaryString =
            prevBinaryStrings[i].string.slice(-offset) +
            prevBinaryStrings[i].string.slice(0, -offset);
          newBinaryStrings.push({
            string: binaryString,
            delay: prevBinaryStrings[i].delay,
          });
        }
        return newBinaryStrings;
      });
    }, 300);

    return () => clearInterval(intervalRef.current);
  }, [maxLength]); // Only re-run when maxLength changes

  useEffect(() => {
    const initialBinaryStrings = Array.from({ length: 10 }, () => {
      const binaryString = "10".repeat(maxLength);
      const delay = Math.floor(Math.random() * 500) + 100;
      return { string: binaryString, delay: delay };
    });
    setBinaryStrings(initialBinaryStrings);
  }, [maxLength]); // Only re-run when maxLength changes

  return (
    <div className={styles.container}>
      {binaryStrings.map((binaryString, index) => (
        <p key={index} style={{ animationDelay: `${binaryString.delay}ms` }}>
          {binaryString.string}
        </p>
      ))}
    </div>
  );
};

export default ShiftingAnimation;
