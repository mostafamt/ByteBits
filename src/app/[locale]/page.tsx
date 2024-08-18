import GetBussiness from "@/components/GetBussiness/GetBussiness";
import Header from "@/components/Header/Header";
import Meet from "@/components/Meet/Meet";
import Process from "@/components/Process/Process";
import WeAre from "@/components/WeAre/WeAre";
import { useTranslations } from "next-intl";

export default function Home() {
  return (
    <>
      <Header />
      <WeAre />
      <Process />
      <GetBussiness />
      <Meet />
    </>
  );
}
