import { useParams } from "react-router-dom";
import { infoData } from "./InformationData";

export const InformationRightDetail = () => {
  const { slug } = useParams();
  const info = infoData.find((item) => item.slug === slug);

  if (!info) {
    return <div>Information not found</div>;
  }
  return (
    <div className="mt-4 p-4 border border-gray-300 shadow-lg max-w-lg mx-auto">
      <img
        src={info.desktopImg}
        alt={info.title}
        className="w-full mb-4 drop-shadow-lg hover:scale-[1.02] ease-in-out duration-300"
      />
      <h3 className="font-bold text-2xl mb-2">{info.title}</h3>
      <p className="text-gray-600 mb-4">{info.description}</p>
      <blockquote>{info.descriptionCard}</blockquote>
    </div>
  );
};
