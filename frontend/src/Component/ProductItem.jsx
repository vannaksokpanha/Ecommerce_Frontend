import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    
    return (
        <div>
            <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
                <div className="overflow-hidden bg-gray-50 ">
                    <img 
                        className='w-full h-65 sm:h-75 md:h-85 lg:h-100  hover:scale-110 transition-all ease-in-out object-cover ' 
                        src={image[0]} 
                        alt={name}
                        style={{ backgroundColor: '#f5f5f5' }}
                    />
                </div>
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='text-sm font-medium'>{currency}{price}</p>
            </Link>
        </div>  
    );
}

export default ProductItem;