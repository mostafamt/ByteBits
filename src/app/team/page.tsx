import Connected from "@/components/Connected/Connected";
import Creative from "@/components/Creative/Creative";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Creative />
      <Connected />
    </>
  );
};

export default page;
