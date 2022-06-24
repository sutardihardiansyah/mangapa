import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-transparent w-full absolute top-0 flex left-0 items-center z-10">
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

                    <nav className="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                        <ul className="block lg:flex">
                            <li className="group">
                                <Link to="/" className="text-base text-dark py-2 mx-8">Home</Link>
                            </li>
                            <li className="group">
                                <Link to="/" className="text-base text-dark py-2 mx-8">Daftar</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar