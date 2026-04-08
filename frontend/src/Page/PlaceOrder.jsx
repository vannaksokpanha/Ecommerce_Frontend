import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Component/Title'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {
  const { products, currency, cartItem, getCartCount } = useContext(ShopContext)

  // Get cart items array
  const getCartItemsArray = () => {
    const items = []
    for (const productId in cartItem) {
      for (const size in cartItem[productId]) {
        const product = products.find(p => p._id === productId)
        if (product) {
          items.push({
            id: productId,
            size: size,
            quantity: cartItem[productId][size],
            name: product.name,
            price: product.price,
            image: product.image[0]
          })
        }
      }
    }
    return items
  }

  const cartItems = getCartItemsArray()
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = subtotal > 0 ? 2.5 : 0
  const total = subtotal + deliveryFee

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      <div className='flex flex-col gap-4 w-full sm:max-w-120'>

        <div className='text-x1 sm:text-2x1 my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Email address'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone number'/>
      </div>

      <div className='mt-8 w-full sm:max-w-80'>
        <div className='bg-white rounded-lg shadow-sm p-6'>
          <h2 className='text-xl font-bold mb-4'>Order Summary</h2>
          
          <div className='space-y-3 border-b pb-4'>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Subtotal ({getCartCount()} items)</span>
              <span>{currency}{subtotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Delivery Fee</span>
              <span>{currency}{deliveryFee.toFixed(2)}</span>
            </div>
          </div>
          
          <div className='flex justify-between mt-4 pt-2'>
            <span className='font-bold text-lg'>Total</span>
            <span className='font-bold text-xl text-blue-600'>{currency}{total.toFixed(2)}</span>
          </div>
          
          <Link to='/order'>
            <button className='w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition'>
              PLACE ORDER
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder