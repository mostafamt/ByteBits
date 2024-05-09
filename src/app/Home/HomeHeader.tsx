import styles from "../../styles/homeHeader.module.scss";
import ShiftingAnimation from "./ShiftingAnimation";

const HomeHeader = () => {
  const metadata = {
    title: "Welcome.",
    description: (
      <span>
        to <strong>Byte</strong>Bits!
      </span>
    ),
    title2: "The best, Designed for you.",
    description2: (
      <span>
        At ByteBits, we're not just your typical software engineering
        consultancy—we're specialists, adaptable, and approachable. Rooted in
        problem-solving, we blend our extensive technical expertise with a human
        touch to deliver software solutions that drive results. <br />
        <br /> Whether you're looking to enhance your digital product, improve
        your team's performance and delivery, or optimize your business
        operations, we're here to customize a team from our exceptional talent
        pool to meet your specific needs.
      </span>
    ),
  };
  return (
    <>
      <div className={styles.homeHeader}>
        <img className={styles.firstwave} src="/waveDark.svg" alt="wave" />
        <img className={styles.secondwave} src="/waveGray.svg" alt="wave" />

        <section>
          <div>
            <h1>{metadata.title}</h1>
            <h2>{metadata.description}</h2>
          </div>
          <div>
            <h4>{metadata.title2}</h4>
            <br />
            <p>{metadata.description2}</p>
          </div>
        </section>
      </div>
      {/* until here */}
    </>
  );
};
export default HomeHeader;
