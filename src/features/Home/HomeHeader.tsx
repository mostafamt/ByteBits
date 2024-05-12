import styles from "./styles/homeHeader.module.scss";

export default function HomeHeader() {
  return (
    <>
      <header className={styles.homeHeader}>
        <section>
          <div>
            <h1>Welcome</h1>
            <h2>
              to <span>Byte</span>Bits!
            </h2>
          </div>
          <div>
            <h4>The best, Designed for you.</h4>
            <br />
            <p>
              At ByteBits, we&apos;re not just your typical software engineering consultancy,
              we&apos;re specialists, adaptable, and approachable. Rooted in problem solving, we
              blend our extensive technical expertise with a human touch to deliver software
              solutions that drive results. <br />
              <br /> Whether you&apos;re looking to enhance your digital product, improve your
              team&apos;s performance and delivery, or optimize your business operations, we&apos;re
              here to customize a team from our exceptional talent pool to meet your specific needs.
            </p>
          </div>
        </section>
        <img src="/waveBottom.svg" alt="wave" />
      </header>
    </>
  );
}
