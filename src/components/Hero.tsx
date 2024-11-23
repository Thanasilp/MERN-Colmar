export const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-[1440px] mx-auto md:flex py-8 px-6 bg-stone-200 w-full items-center hover:bg-stone-100 duration-300"
    >
      <img
        src="/src/assets/banner.jpg"
        alt=""
        className="md:w-[60%] hover:scale-[1.02] ease-in-out duration-300"
        loading="lazy"
      />
      <div className="md:w-[33%] md:ml-6">
        <h1 className="text-5xl text-slate-800 hover:text-stone-800 py-8 font-bold">
          Learn something new everyday
        </h1>
        <p className="text-base pb-6 font-bold text-stone-500">
          Lorem upsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-stone-600 hover:bg-stone-400 hover:text-gray-800 text-white py-2 w-full rounded-lg font-semibold">
          Start here
        </button>
      </div>
    </section>
  );
};
