import React from "react";

import styles from "./accordionContent.module.scss";
import Image from "next/image";

type Props = {
  service: {
    header: React.ReactNode;
    text: React.ReactNode;
    image: string;
  };
};

const AccordionContent = (props: Props) => {
  const { service } = props;

  return (
    <div className={styles["accordion-content"]}>
      <div>
        {service.header}
        {service.text}
      </div>
      <div>
        <Image src={service.image} alt={service.image} width={250} height={250} />
      </div>
    </div>
  );
};

export default AccordionContent;
