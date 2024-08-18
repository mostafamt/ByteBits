import React from "react";
import Connected from "@/components/Connected/Connected";
import Creative from "@/components/Creative/Creative";
import Join from "@/components/Join/Join";
import Team from "@/components/Team/Team";
import Leadership from "@/components/Leadership/Leadership";
import Developers from "@/components/Developers/Developers";
import TeamNote from "@/components/TeamNote/TeamNote";
import MeetTeam from "@/components/MeetTeam/MeetTeam";
import Header from "@/components/Header/Header";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Header />
      <Creative />
      <Connected />
      <Team>
        <MeetTeam />
        <Leadership />
        <Developers />
        <TeamNote>Feel like you may fit in? Introduce yourself to us!</TeamNote>
      </Team>
      <Join />
    </>
  );
};

export default page;
