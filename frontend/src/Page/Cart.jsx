import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Cart = () => {
  const { products, currency, cartItem, addToCart, removeFromCart, getCartCount } = useContext(ShopContext);
  
  // Convert cartItem object to array for rendering
  const getCartItemsArray = () => {
    const items = [];
    for (const productId in cartItem) {
      for (const size in cartItem[productId]) {
        const product = products.find(p => p._id === productId);
        if (product) {
          items.push({
            id: productId,
            size: size,
            quantity: cartItem[productId][size],
            name: product.name,
            price: product.price,
            image: product.image[0]
          });
        }
      }
    }
    return items;
  };
  
  const cartItemsArray = getCartItemsArray();
  
  // Calculate totals
  const subtotal = cartItemsArray.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 2.5 : 0;
  const total = subtotal + deliveryFee;
  
  // Delete item completely
  const deleteFromCart = (productId, size) => {
    let cartData = { ...cartItem };
    if (cartData[productId] && cartData[productId][size]) {
      delete cartData[productId][size];
      if (Object.keys(cartData[productId]).length === 0) {
        delete cartData[productId];
      }
      // You need to add this to ShopContext or implement here
      // For now, we'll remove by decreasing until zero
      const quantity = cartItem[productId]?.[size] || 0;
      for (let i = 0; i < quantity; i++) {
        removeFromCart(productId, size);
      }
    }
  };
  
  // SHOW EMPTY CART MESSAGE
  if (cartItemsArray.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20">
        <div className="text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any items yet</p>
          <Link 
            to="/" 
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition inline-block"
          >
            Buy Now
          </Link>
        </div>
      </div>
    );
  }
  
  // CART WITH ITEMS
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b font-semibold text-gray-600">
              <div className="col-span-5">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>
            
            {cartItemsArray.map((item, idx) => (
              <div key={`${item.id}-${item.size}-${idx}`} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50">
                <div className="md:col-span-5 flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    {item.size && (
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    )}
                    <button onClick={() => deleteFromCart(item.id, item.size)} className="text-red-500 text-sm mt-1 hover:text-red-600">
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex items-center justify-center">
                  <span className="font-medium">{currency}{item.price.toFixed(2)}</span>
                </div>
                
                <div className="md:col-span-3 flex items-center justify-center gap-3">
                  <button 
                    onClick={() => removeFromCart(item.id, item.size)} 
                    className="bg-gray-200 w-8 h-8 rounded-full hover:bg-gray-300 text-lg font-bold"
                  >
                    -
                  </button>
                  <span className="font-semibold w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => addToCart(item.id, item.size)} 
                    className="bg-blue-500 text-white w-8 h-8 rounded-full hover:bg-blue-600 text-lg font-bold"
                  >
                    +
                  </button>
                </div>
                
                <div className="md:col-span-2 flex items-center justify-end">
                  <span className="font-bold text-blue-600">{currency}{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 border-b pb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({getCartCount()} items)</span>
                <span>{currency}{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>{currency}{deliveryFee.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between mt-4 pt-2">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-xl text-blue-600">{currency}{total.toFixed(2)}</span>
            </div>
            
            <Link to="/placeOrder">
              <button className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;