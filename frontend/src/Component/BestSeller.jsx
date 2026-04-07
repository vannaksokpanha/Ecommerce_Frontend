import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../Context/ShopContext'
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    
    useEffect(() => {
        if (products && products.length > 0) {
            const bestProduct = products.filter((item) => item.bestseller === true);
            setBestSeller(bestProduct.slice(0, 8));
        }
    }, [products]);
    
    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={"BEST"} text2={"SELLER"}></Title>
                <p className='w-3/4 m-auto text-sm sm:text-sm md-text-base text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Repudiandae obcaecati velit architecto eveniet perspiciatis, 
                    ipsum iusto debitis reiciendis ipsam minus voluptate in harum vitae? 
                    Obcaecati praesentium numquam sapiente recusandae iste!
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default BestSeller