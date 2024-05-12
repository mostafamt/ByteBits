import styles from "./styles/ourProcess.module.scss";
export default function OurProcess() {
  return (
    <section className={styles.ourProcess}>
      <h1>
        Our <span style={{ color: "#2ec4b6" }}>Process</span>
      </h1>
      <img src="waveTop.svg" alt="wave" />
      <div className={styles.background}>
        <div className={styles.row}>
          <div>
            <span>1</span>
            <h2>Meet with you</h2>
            <p>Gather requirements, understand your needs, and clarify any ambiguities.</p>
          </div>
          <div>
            <span>2</span>
            <h2>Give a quote</h2>
            <p>Defining the scope, estimating costs, and presenting the details.</p>
          </div>
          <div>
            <span>3</span>
            <h2>Development and Testing</h2>
            <p>
              Project development, unit testing, integration testing, and user acceptance testing
            </p>
          </div>
          <div>
            <span>4</span>
            <h2>Deployment and Maintenance</h2>
            <p>
              Deploy the software to the production environment, making it available for use by
              end-users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
