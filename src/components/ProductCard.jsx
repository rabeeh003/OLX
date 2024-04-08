import React, { useState } from 'react';

function ProductCard(product) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="w-full m-auto sm:w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={openModal}>
                <div>
                    <img className=" h-[200px] w-full object-cover p-2 rounded-t-xl" src={product?.data.image} alt="product image" />
                </div>
                <div className="px-5 pb-5 text-left">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">₹{product?.data.price}</span>
                    <p className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">{product?.data.name}</p>
                    <p className="text-md font-semibold tracking-tight text-gray-500 dark:text-white">{product?.data.category}</p>
                    <p className="text-md tracking-tight text-gray-900 dark:text-white">{product?.data.disc}</p>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-5xl p-4 bg-white bg-opacity-90 rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center border-b pb-4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Product Details</h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <img className="h-[400px] w-full object-cover rounded-lg mb-4" src={product?.data.image} alt="product image" />

                        <div className='md:flex justify-between'>
                            <div className="p-4 text-left">
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">₹{product?.data.price}</p>
                                <p className="text-base font-medium text-gray-700 dark:text-gray-300">{product?.data.name}</p>
                                <p className="text-base text-gray-600 dark:text-gray-400">{product?.data.category}</p>
                                <p className="text-base text-gray-700 dark:text-gray-300">{product?.data.disc}</p>
                            </div>
                            <div className="p-4 text-left">
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">₹{product?.data.price}</p>
                                <p className="text-base font-medium text-gray-700 dark:text-gray-300">{product?.data.name}</p>
                                <p className="text-base text-gray-600 dark:text-gray-400">{product?.data.category}</p>
                                <p className="text-base text-gray-700 dark:text-gray-300">{product?.data.disc}</p>
                            </div>
                        </div>
                        <button className='bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg'>Chat with Owner</button>

                    </div>
                </div>
            )}
        </>
    );
}

export default ProductCard;
