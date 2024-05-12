"use client";
import useShiftingStrings from "./hooks/useShiftingStrings";
import styles from "./styles/onesAndZeros.module.scss";

export default function ShiftingAnimation() {
  const binaryStrings = useShiftingStrings("10");
  return (
    <div className={styles.container}>
      {binaryStrings.map((binaryString, index) => (
        <p key={index} style={{ animationDelay: `${binaryString.delay}ms` }}>
          {binaryString.string}
        </p>
      ))}
    </div>
  );
}
