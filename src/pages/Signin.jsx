import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link, json, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../conf/firebase'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

function Signin() {
    const navigate = useNavigate()
    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')

    const getUserData = async () => {
        try {
            const collectionRef = collection(db, 'userDetails');
            const querySnapshot = await getDocs(collectionRef);
            const filteredData = querySnapshot.docs
                .filter(doc => doc.data().email === email)
                .map(doc => ({ ...doc.data(), id: doc.id }));

            console.log(filteredData);
            return filteredData[0];
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error;
        }
    };
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log("start to find user data");
            const userData = await getUserData();
            if (userData) {
                console.log("User data:", userData);
                localStorage.setItem('user', JSON.stringify(user.user));
                localStorage.setItem('userDetail', JSON.stringify(userData));
                navigate('/');
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <img src={logo} className="h-10 mb-6" alt="Logo" />
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login your account
                        </h1>
                        <div className='md:flex justify-between'>
                            <div className='px-2 py-3 mb-2 rounded-lg border border-gray flex text-sm align-middle'>
                                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className='mr-2' alt="google" width={30} />
                                <span className='m-auto'>Login with Google</span>
                            </div>
                            <div className='px-2 py-3 mb-2 rounded-lg border border-gray flex text-sm align-middle'>
                                <img src="https://freelogopng.com/images/all_img/1664035778meta-icon-png.png" className='mr-2' alt="meta" width={30} />
                                <span className='m-auto'>Login with Meta</span>
                            </div>
                        </div>
                        <p className='my-2'>or</p>
                        <div className="space-y-4 md:space-y-6 text-left" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" value={email} onChange={(e) => setMail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>


                            <button onClick={login} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                New in OLX ? <Link to={'/signup'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signin