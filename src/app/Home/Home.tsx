// pages/index.js
import Link from "next/link";

import ShiftingAnimation from "./ShiftingAnimation";
import HomeHeader from "./HomeHeader";
const Home = () => {
  return (
    <>
      <div>
        <ShiftingAnimation />
        <HomeHeader />
      </div>
    </>
  );
};

export default Home;
