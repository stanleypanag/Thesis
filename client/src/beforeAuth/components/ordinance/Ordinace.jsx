import React from 'react'
import '../resolution/resolution.css';

const Ordinace = () => {
  return (
    <>
       <div className="resolution-container">
        <h1 className="text-4xl sm:text-6xl text-green-300 dark:text-gray-200 mb-10 mt-10 tracking-widest">
          Search Naic Ordinances
        </h1>

        <div>
          <label for="hs-trailing-button-add-on-with-icon" class="sr-only">
            Label
          </label>
          <div class="flex rounded-lg shadow-sm">
            <input
              type="text"
              id="hs-trailing-button-add-on-with-icon"
              name="hs-trailing-button-add-on-with-icon"
              class="py-3 px-4 block w-full border border-gray-900 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />
            <button
              type="button"
              class="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-green-800 text-white hover:bg-green-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                class="flex-shrink-0 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

        </div>

        {/* CARDS */}

        <div className="max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid lg:grid-row-4 lg:gap-y-16 gap-10">
            {/* <!-- Card --> */}
            <div className="rounded-tr-lg rounded-tl-lg rounded-br-lg rounded-bl-lg flex flex-col bg-white border border-gray-400 shadow-sm dark:bg-sky-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="rounded-tr-lg rounded-tl-lg bg-green-800 border-b py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
                <p className="mt-1 text-sm text-white dark:text-white">
                  Series of 2023
                </p>
              </div>
              <div className="p-2 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Ordinance No. 1
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Open
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
    </>
  )
}

export default Ordinace