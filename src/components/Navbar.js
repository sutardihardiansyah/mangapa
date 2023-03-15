import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import anime from "../apis/anime";

const Navbar = () => {
  const [dataSearch, setDataSearch] = useState([]);
  const [listSearch, setListSearch] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isMenuNav, setIsMenuNav] = useState(false);

  const location = useLocation();
  let url = "/";
  // The current location.
  console.log(location.pathname);
  if (location.pathname === "/" || location.pathname === "manga") {
    url = url + "manga/search/";
  } else {
    url = url + "anime/search/";
  }
  const searchData = async (e) => {
    const res = await anime.get(`${url}${e}`);
    console.log(res.data);
    console.log(e);
    if (e.length > 0) {
      setListSearch(true);
    } else {
      setListSearch(false);
    }
    setDataSearch(res.data.data_list);
    console.log(listSearch);
  };

  const btnHamburger = () => {
    if (isHamburgerActive) {
      setIsHamburgerActive(false);
      setIsMenuNav(false);
    } else {
      setIsHamburgerActive(true);
      setIsMenuNav(true);
    }
    // isHamburgerActive
    //   ? setIsHamburgerActive(false)
    //   : setIsHamburgerActive(true);
  };

  const changeBackground = () => {
    // if (window.scrollY >= 50) {
    //   setIsNavbarActive(true);
    // }

    window.scrollY >= 50 ? setIsNavbarActive(true) : setIsNavbarActive(false);
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`bg-[#070720] w-full absolute top-0 flex left-0 items-center z-10 text-white ${
        isNavbarActive ? "navbar-active" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <p className="py-6 font-bold text-blue-400 block text-lg">
              Mangapa
            </p>
          </div>
          <div className="flex items-center px-4">
            <button
              onClick={() => btnHamburger()}
              id="hamburger"
              type="button"
              className={`block absolute right-4 lg:hidden ${
                isHamburgerActive ? "hamburger-active" : ""
              }`}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left "></span>
            </button>

            <nav
              id="nav-menu"
              className={`absolute ${
                isMenuNav ? "" : "hidden"
              } py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    to="/"
                    className="text-base py-2 mx-8 flex group-hover:text-blue-600 text-black lg:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/anime"
                    className="text-base py-2 mx-8 flex group-hover:text-blue-600 text-black lg:text-white"
                  >
                    Anime
                  </Link>
                </li>
                {/* <li className="group">
                  <Link
                    to="/"
                    className="text-base py-2 mx-8 flex group-hover:text-blue-600 text-black lg:text-white"
                  >
                    Manhua
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-blue-600 text-black lg:text-white"
                  >
                    Manhwa
                  </Link>
                </li> */}
                <li className="group">
                  <label
                    htmlFor="default-search"
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
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
                  {listSearch ? (
                    <ul className="absolute bg-blue-900 w-[15.5rem] mt-2 rounded-lg h-80 overflow-y-scroll">
                      {dataSearch.length > 0 &&
                        dataSearch.map((data, i) => (
                          <li
                            className="border-b-[1px] border-b-sky-200 px-2 py-2"
                            key={i}
                          >
                            <Link
                              className="group flex items-center"
                              to={`/manga/detail/${data.endpoint}`}
                            >
                              <img
                                src={`${data.thumb}`}
                                alt=""
                                className="h-14"
                              />
                              <div className="ml-2">
                                <p>{data.title}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  ) : (
                    ""
                  )}
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
