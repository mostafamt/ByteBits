import OnesAndZeros from "@/components/OnesAndZeros/OnesAndZeros";
import RightParagraph from "@/components/RightParagraph/RightParagraph";
import HomeHeader from "@/features/Home/HomeHeader";
import OurProcess from "@/features/Home/OurProcess";
import Navbar from "@/features/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <h1>home</h1>

      <div>
        {/* <OnesAndZeros />
        <HomeHeader />
        <RightParagraph
          image="image.svg"
          alt="image"
          heading={
            <>
              We are Byte<span className="blueText">Bits</span>
            </>
          }
          paragraph={`We are a team of innovative thinkers, driven by a passion for technology and a commitment to excellence. 
        We specialize in creating IT solutions that help businesses thrive in a rapidly evolving digital landscape. 
        Our diverse backgrounds and skills enable us to tackle challenges with creativity and deliver results that exceed expectations. 
        We are dedicated to open communication, customer-centric practices, and continuous improvement. 
        At our core, we believe that technology has the power to transform businesses, and we are here to guide you on that journey. 
        We are more than just IT experts; we are your partners in success.`}
        />
        <OurProcess /> */}
      </div>
    </>
  );
}
