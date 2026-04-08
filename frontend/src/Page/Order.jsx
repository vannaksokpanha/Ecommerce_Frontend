import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from '../Component/Title';

const Order = () => {

  const { products, currency, cartItem } = useContext(ShopContext);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const items = [];
    for (const productId in cartItem) {
      for (const size in cartItem[productId]) {
        const product = products.find(p => p._id === productId);
        if (product) {
          items.push({
            ...product,
            size: size,
            quantity: cartItem[productId][size]
          });
        }
      }
    }
    setOrderItems(items);
  }, [products, cartItem]);

  return (
    <div className='border-t pt-16'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          orderItems.slice(0,4).map((item,index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>{new Date().toLocaleDateString()}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
              </div>
            </div>
          ))
        }   
      </div>
    </div>
  )
}

export default Order