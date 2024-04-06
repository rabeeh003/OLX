import React, { createContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../conf/firebase'

function HomePage() {
    const AllProducts = createContext({})
    const getCollection = collection(db, "products")
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const data = await getDocs(getCollection)
        const data2 = data.docs.map((doc) => (
            { ...doc.data(), id: doc.id }
        ))
        setProducts(data2)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <AllProducts.Provider value={products}>
            <div className='px-5 w-[100%] lg:w-[70%]'>
                <h2 className='text-left text-xl mb-4 sm:text-2xl'>Fresh recommendations</h2>
                <div className='grid md:grid-cols-2 2xl:grid-cols-3 gap-4'>
                    {products.map((product, index) => (
                        <ProductCard key={index} data={product} />
                    ))}
                </div>
            </div>
        </AllProducts.Provider>
    )
}

export default HomePage