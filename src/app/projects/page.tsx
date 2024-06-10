import React from "react";
import Book from "@/components/Book/Book";
import Projects from "@/components/Projects/Projects";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Projects />
      <Book  />
    </>
  );
};

export default page;
