import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    console.log(products);
    
    return (
        <div className='my-10'>
            <div className="text-center py-8 text-3xl">
                <Title text1={"LATEST"} text2={"COLLECTION"}/>
                <p className='w-3/4 m-auto text-[12px] sm:text-[15px] md:text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate sequi in corporis! Illo vero molestias similique in nihil, omnis qui saepe quam ullam consequuntur exercitationem facere fugit reiciendis esse.</p>
            </div>
        </div>
    )
}

export default LatestCollection;