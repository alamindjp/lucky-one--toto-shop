import { getElementError } from '@testing-library/react';
import React from 'react';
import CardDetail from '../CardDetail/CardDetail';
import './Cart.css'

const Cart = ({cart}) => {
const reset=()=>{
    document.getElementById('cart-detail').innerText=''

}
    return (
        <div className='Cart'>
            <h2>Cart</h2>
            <h6>Select Item: {cart.length}</h6>
            {
                cart.map( products=><CardDetail id='cart-detail'
                    key={products.id}
                    name = {products.name}
                    image = {products.image}
                    price = {products.price}
                    ></CardDetail>
                   )
            }
            <div className='button-group'>
                <button className='select-btn'onClick={()=>select()}>Select One</button>
                <button className='reset-btn'onClick={()=>reset()}>Reset Cart</button>
            </div>
        </div>
    );
};

export default Cart;