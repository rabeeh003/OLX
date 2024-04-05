import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { auth, db } from '../conf/firebase'

function Signup() {
    const dbRef = collection(db, "userDetails")

    const [name, setName] = useState('')
    const [number, setNumber] = useState(null)
    const [address, setAddress] = useState('')
    const navigate = useNavigate()
    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')
    // const [password2, setPassword2] = useState('')
    const userId = JSON.parse(localStorage.getItem("authToken"))?.user_id;
    console.log("userId", userId);
    const [error, setError] = useState(false)

    const register = async (e) => {
        e.preventDefault()
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res.user);
            await sendEmailVerification(auth.currentUser)
            await addDoc(dbRef, {
                address: address,
                email: email,
                name: name,
                phone: number,
                userId: userId
            })
            navigate('/signin')

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <img src={logo} className="h-10 mb-6" alt="Logo" />
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <div className='md:flex justify-between'>
                            <div className='px-2 py-3 mb-2 rounded-lg border border-gray flex text-sm align-middle'>
                                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className='mr-2' alt="google" width={30} />
                                <span className='m-auto'>Signup with Google</span>
                            </div>
                            <div className='px-2 py-3 mb-2 rounded-lg border border-gray flex text-sm align-middle'>
                                <img src="https://freelogopng.com/images/all_img/1664035778meta-icon-png.png" className='mr-2' alt="meta" width={30} />
                                <span className='m-auto'>Signup with Meta</span>
                            </div>
                        </div>
                        <p className='my-2'>or</p>
                        <form onSubmit={register} className="space-y-4 md:space-y-6 text-left">
                            <div>
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arakkal abu" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" value={email} onChange={(e) => setMail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number</label>
                                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arakkal abu" required="" />
                            </div>
                            <div>
                                <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <input type="textarea" value={address} onChange={(e) => setAddress(e.target.value)} name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arakkal abu" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type='submit' className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to={'/signin'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup