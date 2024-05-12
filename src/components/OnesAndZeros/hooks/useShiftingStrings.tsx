import { useEffect, useState } from "react";

interface ShiftingString {
  string: string;
  delay: number;
}

export default function useShiftingStrings(string: string) {
  const [strings, setStrings] = useState([] as ShiftingString[]);

  useEffect(() => {
    const maxLength = 45;

    if (!strings.length) {
      setStrings(
        Array.from({ length: 10 }, () => ({ string: string.repeat(maxLength), delay: 300 }))
      );
    }

    const interval = setInterval(() => {
      setStrings(prevBinaryStrings =>
        prevBinaryStrings.map(str => {
          const offset = Math.floor(Math.random() * maxLength);
          return {
            string: str.string.slice(-offset) + str.string.slice(0, -offset),
            delay: Math.floor(Math.random() * 500) + 100,
          };
        })
      );
    }, 300); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [strings.length, string]);

  return strings;
}
