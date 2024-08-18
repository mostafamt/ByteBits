import React from "react";
import Book from "@/components/Book/Book";
import Projects from "@/components/Projects/Projects";
import Header from "@/components/Header/Header";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Header />
      <Projects />
      <Book />
    </>
  );
};

export default page;
