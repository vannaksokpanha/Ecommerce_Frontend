import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../Component/Title'
import { useEffect } from 'react';
import ProductItem from '../Component/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)  
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);  
  const [category, setCategory] = useState([]);  
  const [subCategory, setSubCategory] = useState([]);  
  const [sortType, setsortType] = useState('relevant')    
  
  useEffect(() => {
    if (products) {
      setFilterProduct(products);  // ✅ FIXED: Now passes products array
    }
  }, [products])  

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))   
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => { 
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))  
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    if (!products) return;
    let productCopy = [...products]; 
    
    if (showSearch && search) {
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProduct(productCopy);
  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, search, showSearch]); 

  const sortProduct = () => {
    let priceProduct = [...filterProduct];
    switch(sortType) {
      case 'low-high':
        setFilterProduct(priceProduct.sort((a,b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProduct(priceProduct.sort((a,b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10'>  
      {/* filter options  */}
      <div className="min-w-72">
        <p onClick={() => { setShowFilter(!showFilter) }} className='my-2 text-2xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-5 flex items-center sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt=''></img>
        </p>
        
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 pt-5 pb-8 pr-5 mt-8 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-xl font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-3 text-lg font-light text-gray-700">
            <p className='flex gap-2 cursor-pointer'>
              <input className='w-4' type='checkbox' onChange={toggleCategory} value={'Men'} /> MEN
            </p>
            <p className='flex gap-2 cursor-pointer'>
              <input className='w-4' type='checkbox' onChange={toggleCategory} value={'Women'} /> WOMEN
            </p>
            <p className='flex gap-2 cursor-pointer'>
              <input className='w-4' type='checkbox' onChange={toggleCategory} value={'Kids'} /> KIDS
            </p>
          </div>
        </div>

        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 pt-5 pb-8 pr-5 mt-8 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-xl font-medium'>TYPE</p>
          <div className="flex flex-col gap-3 text-lg font-light text-gray-700">
            <p className='flex gap-2 cursor-pointer'>
              <input className='w-4' type='checkbox' onChange={toggleSubCategory} value={'Pants'} /> Pants
            </p>
            <p className='flex gap-2 cursor-pointer'>
              <input className='w-4' type='checkbox' onChange={toggleSubCategory} value={'Jacket'} /> Jacket
            </p>
            <p className='flex gap-2 cursor-pointer'>
              <input className='w-4' type='checkbox' onChange={toggleSubCategory} value={'Hoodie'} /> Hoodie
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between sm:text-2xl md:text-2xl lg:text-2xl">
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select onChange={(e) => { setsortType(e.target.value) }} className='mt-0 border-2 border-gray-300 text-sm px-2'>  
            <option value="relevant">Sort by : Relevant</option> 
            <option value="low-high">Sort by : Low to High</option> 
            <option value="high-low">Sort by : High to Low</option>  
          </select>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 mt-10">  
          {
            filterProduct?.map((item, index) => {  
              return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} /> 
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Collection