import React from 'react';

function ProductCard() {
    return (
        <div className="w-full m-auto sm:w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[300] bg-slate-500 m-2 rounded-md'>
                <img className="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
            </div>
            <div className="px-5 pb-5 text-left">
                <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
            </div>
        </div>
    );
}

export default ProductCard;
