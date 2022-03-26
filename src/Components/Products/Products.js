import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Products.css'
const Products = () => {
    const[products, setProducts] = useState([])
    const[cart, setCart] = useState([])
    useEffect( () => {
        fetch('data.json').then(res=>res.json()).then(data=>setProducts(data))
    },[])
    const addToCart = (product, id) =>{
        if(cart.length < 4){
                const newCart=[...cart, product];
                setCart(newCart);
        }
        else{
               alert ('Opps fill four item')
        }
   }
    return (
        <div className='products-container'>
            <div className="product-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Products;