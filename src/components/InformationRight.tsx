import React from "react";
import { Link } from "react-router-dom";
import { infoData } from "./InformationData";

export const InformationRight = () => {
  return (
    <div className="md:w-[40%]">
      {infoData.map((info) => (
        <div
          key={info.id}
          className="p-4 md:flex border-b border-b-gray-300 hover:bg-stone-200 transition duration-700 ease-in-out"
        >
          <Link to={`/information/${info.slug}`} className="md:w-[35%]">
            <img
              src={info.desktopImg}
              alt={info.title}
              className="hidden md:flex drop-shadow-lg transition duration-300 ease-in-out hover:scale-[1.05]"
            />
            <img
              src={info.mobileImg}
              alt={info.title}
              className="w-full md:hidden"
            />
          </Link>

          <div className="pl-4 pt-4 md:w-[65%] md:items-center">
            <h3 className="pb-4 font-bold text-xl text-gray-700">
              {info.title}
            </h3>
            <p className="pb-4 text-gray-600">{info.description}</p>
            <Link
              to={`/information/${info.slug}`}
              className="text-blue-500 pb-4"
            >
              {info.linkText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
