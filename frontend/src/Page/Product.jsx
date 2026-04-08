import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../Component/RelatedProduct';

const Product = () => {
  const {productId} = useParams();
  const {products , currency , addToCart} = useContext(ShopContext);  
  const [productData , setproductData] = useState(false);
  const [image,setimage] = useState('')
  const [size,setsize] = useState('')
  
  const fetchProductData = async () => {
    products.map((item)=>{
      if(item._id === productId){
        setproductData(item)
        setimage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[products,productId]);

  return productData ? (
    <div>
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/*product data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/*PRODUCT IMAGE*/}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {
                productData.image.map((item, index) => (  
                  <img onClick={()=>setimage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex shrink-0 cursor-pointer bg-gray-100 p-1 rounded' alt=''></img> 
                ))
              }
            </div>
            <div className="flex-1 bg-gray-100 p-4 rounded-lg">
              <img src={image} className='w-full sm:w-[80%] rounded-lg mx-auto' alt=''></img>
            </div>
          </div>
          
          {/*INFO*/}
          <div className="flex-1">
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className='w-3.5' />
              <img src={assets.star_icon} alt=""  className='w-3.5' />
              <img src={assets.star_icon} alt=""  className='w-3.5' />
              <img src={assets.star_icon} alt=""  className='w-3.5' />
              <img src={assets.star_icon} alt=""  className='w-3.5'   />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            
            <div className="mt-5 text-3xl font-medium">
              <p>Select Size</p>
              <div className="flex gap-2 mt-5">
                {productData.sizes.map((item,index)=>{
                  return(
                    <button onClick={()=>{setsize(item)}} className={`border py-2 px-4 my-5 bg-gray-100 ${item === size ? 'border-orange-400' : ''}`} key={index}>{item}</button>
                  )
                })}
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-7'>ADD TO CART</button> 
              <hr className='mt-7 my-4 SM:W-4/5 border-gray-800'></hr>
              <div className="text-lg text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original Product</p>
                <p>Cash on delivery is available for this product</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
            </div>
          </div>    
        </div>
        
        {/* DESCRIPTION  */}
        <div className="mt-20">
          <div className="flex my-5 ">
            <p className='border px-5 py-3 text-lg'>Description</p>
            <p className='border px-5 py-3 text-lg'>Review (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-lg text-gray-500 items-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fugiat pipsum repellat eius delectus doloribus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.rem!</p>
          </div>
        </div>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory}></RelatedProduct>
      </div>
    </div>
  ) :
  <div className="opacity-0"></div>
}

export default Product
