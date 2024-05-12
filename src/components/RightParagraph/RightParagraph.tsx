import styles from "./styles/rightParagraph.module.scss";

export default function RightParagraph(props: {
  image: string;
  alt: string;
  heading: string | JSX.Element;
  paragraph: string;
}) {
  return (
    <>
      <section className={styles.rightParagraph}>
        <div className={styles.right}>
          <img src={props.image} alt={props.alt} />
        </div>
        <div className={styles.left}>
          <h1>{props.heading}</h1>
          <p>{props.paragraph}</p>
        </div>
      </section>
    </>
  );
}
