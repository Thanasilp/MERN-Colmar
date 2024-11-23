import React from "react";

export const ThesisLeft = () => {
  return (
    <div className="md:w-[60%] md:px-6">
      <video
        src="/src/assets/thesis.mp4"
        controls
        className="pb-6 md:pb-0"
      ></video>

      <div className="hidden md:flex md:flex-col pt-6 pb-2 ">
        <h3 className="font-bold text-2xl text-stone-700">Reimagine urban</h3>
        <blockquote className="text-gray-500 py-6">
          "The aside element represents a section of a page that consists of
          content that is tangentially related to the content around the aside
          element, and which could be considered separate from that content.
          Such sections are often represented as sidebars in printed
          typography."
        </blockquote>
      </div>
    </div>
  );
};
