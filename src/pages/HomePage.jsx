import React from 'react'
import ProductCard from '../components/ProductCard'

function HomePage() {
    return (
        <div className='px-5 w-[100%] lg:w-[70%]'>
            <h2 className='text-left text-xl mb-4 sm:text-2xl'>Fresh recommendations</h2>
            <div className='flex flex-wrap gap-4 sm:justify-between justify-evenly'>
                {Array(10).fill().map((_, index) => (
                    <ProductCard key={index}/>
                ))}
            </div>
        </div>
    )
}

export default HomePage