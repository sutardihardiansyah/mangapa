import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dataSearch, setDataSearch] = useState([]);
  const searchData = async (e) => {
    const res = await axios.get(`http://localhost:5000/manga/search/${e}`);
    console.log(res.data);
    setDataSearch(res.data.manga_list);
  };
  return (
    <header className="bg-[#070720] w-full absolute top-0 flex left-0 items-center z-10 text-white">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <p className="py-6 font-bold text-blue-400 block text-lg">Logo</p>
          </div>
          <div className="flex items-center px-4">
            {/* <button id="hamburger" type="button" className="block absolute right-4 lg:hidden">
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button> */}

            <nav className="absolute hidden lg:block py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <ul className="block lg:flex relative">
                <li className="group">
                  <Link to="/" className="text-base text-dark py-2 mx-8">
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link to="/anime" className="text-base text-dark py-2 mx-8">
                    Anime
                  </Link>
                </li>
                <li className="group">
                  <Link to="/" className="text-base text-dark py-2 mx-8">
                    Manhua
                  </Link>
                </li>
                <li className="group">
                  <Link to="/" className="text-base text-dark py-2 mx-8">
                    Manhwa
                  </Link>
                </li>
                <li className="group">
                  <label
                    for="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block py-2 px-12 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      onChange={(e) => searchData(e.target.value)}
                    />
                  </div>
                  <ul className="absolute bg-blue-900 w-[15.5rem] mt-2 rounded-lg h-80 overflow-y-scroll">
                    {dataSearch.length > 0 &&
                      dataSearch.map((data) => (
                        <li className="border-b-[1px] border-b-sky-200 px-2 py-2">
                          <div className="grid grid-rows-4 grid-flow-col">
                            <div>
                              <img
                                src={`${data.thumb}`}
                                alt=""
                                className="h-20"
                              />
                            </div>
                            <p>{data.title}</p>
                          </div>
                        </li>
                      ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
