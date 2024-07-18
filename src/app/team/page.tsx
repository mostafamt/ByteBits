import React from "react";
import Connected from "@/components/Connected/Connected";
import Creative from "@/components/Creative/Creative";
import Join from "@/components/Join/Join";
import Team from "@/components/Team/Team";
import Leadership from "@/components/Leadership/Leadership";
import Developers from "@/components/Developers/Developers";
import Note from "@/components/Note/Note";
import TeamNote from "@/components/TeamNote/TeamNote";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Creative />
      <Connected />
      <Team>
        <Leadership />
        <Developers />
        <TeamNote />
      </Team>
      <Join />
    </>
  );
};

export default page;
