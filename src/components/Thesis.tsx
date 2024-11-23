import React from "react";
import { ThesisLeft } from "./ThesisLeft";
import { ThesisRight } from "./ThesisRight";

const Thesis = () => {
  return (
    <section className="max-w-[1440px] mx-auto md:py-4">
      <h2 className="text-4xl font-bold text-stone-700 pt-4 pb-8 text-center w-full">
        Thesis exhibits
      </h2>

      <div className=" md:flex md:pr-6">
        <ThesisLeft></ThesisLeft>
        <ThesisRight></ThesisRight>
      </div>
    </section>
  );
};

export default Thesis;
