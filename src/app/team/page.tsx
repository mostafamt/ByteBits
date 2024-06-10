import React from "react";
import Connected from "@/components/Connected/Connected";
import Creative from "@/components/Creative/Creative";
import Join from "@/components/Join/Join";
import OurTeam from "@/components/OurTeam/OurTeam";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Creative />
      <Connected />
      <OurTeam />
      <Join />
    </>
  );
};

export default page;
