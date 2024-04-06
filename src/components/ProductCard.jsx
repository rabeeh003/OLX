import React from 'react';

function ProductCard(product) {
    console.log(product);
    return (
        <div className="w-full m-auto sm:w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[200px] border m-2 rounded-md'>
                <img className="p-8 rounded-t-lg object-cover" src={product?.data.image} alt="product image" />
            </div>
            <div className="px-5 pb-5 text-left">
                <span className="text-xl font-bold text-gray-900 dark:text-white">₹{product?.data.price}</span>
                <p className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">{product?.data.name}</p>
                <p className="text-md tracking-tight text-gray-900 dark:text-white">{product?.data.disc}</p>
            </div>
        </div>
    );
}

export default ProductCard;
