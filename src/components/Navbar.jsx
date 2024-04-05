import React, { useState } from 'react';
import logo from '../assets/images/logo.png'
import sell from '../assets/images/sell-button.png'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../conf/firebase';

function Navbar() {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const user = localStorage.getItem("user")
    const toggleLang = () => {
        setIsLangOpen(!isLangOpen);
    };

    const logout = async () => {
        await signOut(auth)
        localStorage.removeItem("user")
        localStorage.removeItem("authToken")
    }

    return (
        <>
            <nav className='fixed w-[100vw] bg-white bg-opacity-90 border-b-2' >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to={'/'} className="flex-2 items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Logo" />
                    </NavLink>
                    <div className='flex'></div>
                    <div className='hidden md:flex'>
                        <form className="flex items-center max-w-sm mx-auto">
                            <label className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
                            </div>
                            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                    </div>
                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                        <div className='hidden mx-auto px-1 rounded-md justify-center items-center h-full bg-gray-50 sm:flex'>
                            <svg
                                className="w-5 h-5 rounded-full me-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 3900 3900"
                            >
                                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                                <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300" />
                                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                            </svg>
                            <select
                                id="small"
                                className="block p-2 text-sm text-gray-900 border border-gray-50 rounded-lg bg-gray-50 dark:bg-gray-50 dark:border-gray-50 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-50 dark:focus:border-gray-50"
                            >
                                <option selected value="US">English</option>
                                <option value="CA">Malayalam</option>
                                <option value="FR">Hindi</option>
                                <option value="DE">Arabic</option>
                            </select>
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={toggleLang}
                                className="inline-flex items-center font-medium justify-center px-4 py-2 mx-1 text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <img src='https://cdn-icons-png.freepik.com/256/1177/1177568.png' width={35} />
                                <span className='pl-2'>Login</span>
                            </button>
                            <div className={`z-50 ${isLangOpen ? 'block' : 'hidden'
                                } absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 min-w-[150px]`}
                                id="language-dropdown-menu">
                                {user ? (
                                    <ul className="py-2 font-medium" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                                <div className="flex-col">
                                                    <img className='m-auto' src='https://cdn-icons-png.freepik.com/256/1177/1177568.png' width={45} />
                                                    <h3>Name</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li onClick={logout}>
                                            <Link to={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="py-2 font-medium" role="none">
                                        <li>
                                            <Link to={'/signin'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/signup'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                                Register
                                            </Link>
                                        </li>

                                    </ul>
                                )}
                            </div>
                        </div>
                        <NavLink to={'/sell'} className='relative cursor-pointer'>
                            <img className='rounded-xl' src={sell} width={80} />
                            <span className='absolute top-1 left-4 font-bold' >+ Sell</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div className='h-[100px]'></div>
            <div className='flex justify-center'>
                <Outlet />
            </div>
        </>
    );
}

export default Navbar;
