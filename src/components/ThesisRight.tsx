export const ThesisRight = () => {
  return (
    <aside className="hidden md:w-[40%] md:flex md:flex-col">
      <div className="p-4 md:flex hover:bg-stone-300">
        <img
          src="/src/assets/thesis-fisma.jpg"
          alt="d-orientation"
          className="hidden md:flex md:w-[35%]"
        />
        <div className="pl-8 pt-4 md:w-[65%] md:items-center">
          <h3 className="pb-4 font-bold text-xl text-gray-700">
            Fisma: Design and Prototype
          </h3>
          <p className="pb-4 text-gray-600">
            Designer showcase of new prototype product
          </p>
          <a href="" className="text-blue-500 pb-4">
            Read more
          </a>
        </div>
      </div>

      <div className="p-4 md:flex hover:bg-stone-300">
        <img
          src="/src/assets/thesis-now-and-then.jpg"
          alt="d-orientation"
          className="hidden md:flex md:w-[35%] "
        />
        <div className="pl-8 pt-4 md:w-[65%] md:items-center">
          <h3 className="pb-4 font-bold text-xl text-gray-700">Now and then</h3>
          <p className="pb-4 text-gray-600">Research study abour New York</p>
          <a href="" className="text-blue-500 pb-4">
            Read more
          </a>
        </div>
      </div>
    </aside>
  );
};
