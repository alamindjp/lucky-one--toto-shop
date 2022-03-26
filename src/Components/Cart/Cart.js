
import React from 'react';
import CardDetail from '../CardDetail/CardDetail';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div id='cart-detail' className='Cart'>
            <h2>Cart</h2>
            <h6>Select Item: {cart.length}</h6>
            {
                cart.map( products=><CardDetail
                    key={products.id}
                    name = {products.name}
                    image = {products.image}
                    price = {products.price}
                    ></CardDetail>
                   )
                }
                <button className='reset-btn'>Reset</button>
                <button className='select-btn'>Choose One</button>
        </div>
    );
};

export default Cart;