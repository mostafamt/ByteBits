import React from "react";

import styles from "./story.module.scss";
import Image from "next/image";

type Props = {};

const Story = (props: Props) => {
  return (
    <div className="container">
      <div className={styles.story}>
        <div>
          <Image src="/story.svg" alt="story" width={600} height={600} />
        </div>
        <div>
          <h2>
            Our <span>Story</span>
          </h2>
          <p>
            Our journey began with a simple yet powerful idea: to create a flexible workspace where
            top IT professionals could collaborate seamlessly, regardless of location. We knew that
            diversity drives innovation, so our global team reflects this value. Since our founding,
            we've built a vibrant community of developers, designers, engineers, and IT specialists,
            all sharing a passion for technology and problem-solving. Our remote setup lets us
            leverage the best minds from various time zones, cultures, and backgrounds, resulting in
            unique and dynamic solutions. Our story is about innovation, collaboration, and a
            commitment to excellence. We're excited to continue our journey, constantly evolving and
            pushing boundaries. Join us as we shape the future together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
