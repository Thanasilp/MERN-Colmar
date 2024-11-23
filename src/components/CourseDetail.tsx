import { courses } from "./CourseData";
import { useParams } from "react-router-dom";

export const CourseDetails = () => {
  const { slug } = useParams();
  const courseInfo = courses.find((item) => item.slug === slug);

  if (!courseInfo) {
    return <div>Course not found</div>;
  }

  return (
    <div className="mt-4 p-4 border border-gray-300 shadow-lg max-w-lg mx-auto">
      <img
        src={courseInfo.img}
        alt={courseInfo.title}
        className="w-full mb-4 drop-shadow-lg hover:scale-[1.02] ease-in-out duration-300"
      />
      <h3 className="font-bold text-2xl mb-2">{courseInfo.title}</h3>
      <p className="text-gray-600 mb-4">{courseInfo.description}</p>
      <blockquote></blockquote>
    </div>
  );
};
