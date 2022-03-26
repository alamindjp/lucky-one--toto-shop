import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {addToCart, product}=props
    const{name, price, image, id}=product
    return (
        <div className='Card'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h5>Price:$ {price}</h5>
            <button onClick={() => addToCart(product, id)} className='btn-cart'>Add Cart <FontAwesomeIcon icon={ faShoppingCart }/></button>

        </div>
    );
};

export default Product;