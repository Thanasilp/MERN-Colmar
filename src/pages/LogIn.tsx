import { useState } from "react";

export const LogIn = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mt-6 p-4 border border-gray-300 shadow-lg max-w-6xl mx-auto rounded-xl bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
        <img
          src="src/assets/login-page.jpg"
          alt=""
          className="w-full lg:w-[40%] rounded-lg mb-4 lg:mb-0 hover:scale-[1.01] duration-200"
        />
        <div className="w-full lg:w-[60%] items-center">
          <form
            action=""
            className="flex flex-col justify-center h-full pb-6 rounded-3xl w-full lg:w-[75%] mx-auto"
          >
            <h3 className="mb-3 text-3xl lg:text-4xl font-extrabold text-center text-dark-grey-900">
              Sign In
            </h3>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 text-base lg:text-lg text-stone-800"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="flex items-center w-full px-4 py-3 lg:py-4 text-base lg:text-lg bg-gray-100 focus:bg-stone-50 rounded-2xl mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-2 text-base lg:text-lg text-stone-900"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="flex items-center w-full px-4 py-3 lg:py-4 text-base lg:text-lg bg-gray-100 focus:bg-stone-50 rounded-2xl mt-1"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between mb-8 mt-4">
              <label className="relative inline-flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 rounded border border-stone-300 transition-all peer-checked:bg-stone-500 peer-checked:border-stone-500">
                  {isChecked && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white mx-auto mt-[2px]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="ml-3 text-sm font-normal text-grey-900">
                  Keep me logged in
                </span>
              </label>
              <a
                href="javascript:void(0)"
                className="mt-2 lg:mt-0 text-sm font-medium text-purple-blue-500"
              >
                Forget password?
              </a>
            </div>
            <button className="w-full px-6 py-4 lg:py-5 mb-5 mx-auto text-sm lg:text-base font-bold leading-none text-white transition duration-300 rounded-2xl bg-stone-500 hover:bg-stone-300 hover:text-stone-600">
              Sign In
            </button>
            <p className="text-sm lg:text-base leading-relaxed text-grey-900 mx-auto text-center">
              Not registered yet?{" "}
              <a href="javascript:void(0)" className="font-bold text-grey-700">
                Create an Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
