import { Fragment } from "react";

export const InformationLeft = () => {
  return (
    <Fragment>
      <aside className="hidden md:flex md:flex-col md:w-[60%] md:pr-6 border-r border-r-gray-300">
        <img
          src="/src/assets/information-main.jpg"
          alt=""
          className="mb-8 drop-shadow-lg hover:scale-[1.02] ease-in-out duration-300"
        />
        <h2 className="text-3xl font-bold text-gray-700">
          It doesn't hurt to keep practicing
        </h2>
        <blockquote className="py-6 text-gray-500">
          "The aside element represents a section of a page that consists of
          content that is tangentially related to the content around the aside
          element, and which could be considered separate from that content.
          Such sections are often represented as sidebars in printed
          typography."
        </blockquote>
        Emanuel, Sr Strategist at Hiring.com
      </aside>
    </Fragment>
  );
};
