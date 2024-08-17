import { useEffect, useState } from "react";

interface ShiftingString {
  string: string;
  delay: number;
}

export default function useShiftingStrings(inputString: string) {
  const [strings, setStrings] = useState([] as ShiftingString[]);

  const generateRandomBinaryString = (length: number) => {
    return Array.from({ length }, () => (Math.random() < 0.5 ? "0" : "1")).join("");
  };

  useEffect(() => {
    const maxLength = 45;
    const stringLength = 100;
    const numStrings = 17;

    if (!strings.length) {
      setStrings(
        Array.from({ length: numStrings }, () => ({
          string: generateRandomBinaryString(stringLength),
          delay: Math.floor(Math.random() * 500) + 500, // Initialize with a random delay
        }))
      );
    }

    const intervals = strings.map((str, index) =>
      setInterval(() => {
        setStrings(prevBinaryStrings =>
          prevBinaryStrings.map((s, i) => {
            if (i === index) {
              const offset = Math.floor(Math.random() * maxLength);
              return {
                string: s.string.slice(-offset) + s.string.slice(0, -offset),
                delay: s.delay, // Maintain the existing delay
              };
            }
            return s;
          })
        );
      }, str.delay)
    );

    return () => intervals.forEach(clearInterval); // Clear all intervals on cleanup
  }, [strings.length]);

  return strings;
}
