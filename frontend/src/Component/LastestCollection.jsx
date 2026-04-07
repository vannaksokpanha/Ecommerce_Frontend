import React, { useContext , useState , useEffect} from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [lastesProducts,setlastesProducts] = useState([]);
    
    useEffect (()=>{
        setlastesProducts(products.slice(0,10));
    },[products])
    
    return (
        <div className='my-10 mb-15'>
            <div className="text-center py-8 text-3xl">
                <Title text1={"LATEST"} text2={"COLLECTION"}/>
                <p className='w-3/4 m-auto text-[12px] sm:text-[15px] md:text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate sequi in corporis! Illo vero molestias similique in nihil, omnis qui saepe quam ullam consequuntur exercitationem facere fugit reiciendis esse.</p>
            </div>
            {/* render product*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    lastesProducts.map((item , index) =>(
                        <ProductItem key={index}  id={item._id}  image={item.image}  name={item.name} price={item.price}/>
                    ))
                }
            </div>
        </div> 
    )
}

export default LatestCollection;