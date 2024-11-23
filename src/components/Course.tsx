import { courses } from "./CourseData";
import { Link } from "react-router-dom";

export const Course = () => {
  return (
    <section
      id="course"
      className="py-8 md:bg-stone-300 hover:md:bg-stone-200 ease-in-out duration-300 bg-stone-100 max-w-[1440px] mx-auto md:px-8"
    >
      <h2 className="text-center text-4xl font-bold mb-8">Start learning</h2>
      <div className="mx-auto text-gray-700">
        <ul className="grid gap-4 md:gap-8 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-stretch drop-shadow-lg">
          {courses.map((course) => (
            <li
              key={course.id}
              className="bg-stone-300 p-6 md:p-0 text-left text-xl font-bold hover:bg-stone-400 transition md:bg-white md:hover:bg-stone-100 ease-in-out duration-300"
            >
              <Link to={`/course/${course.slug}`}>
                <img
                  src={course.img}
                  alt={course.title}
                  className="hidden md:flex w-full relative scale-100 transition-all duration-300 hover:scale-[0.94] object-fill"
                />
                <div className="md:px-4 md:pt-4 md:pb-2">
                  <h3 className="md:pb-4">{course.title}</h3>
                  <div className="hidden md:inline-flex md:text-base md:font-normal md:flex-col text-gray-500">
                    <p className="pb-4">COURSES</p>
                    <p className="pb-4">{course.description}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
