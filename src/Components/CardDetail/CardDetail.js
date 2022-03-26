import React from 'react';
import './CardDetail.css'
const CardDetail = (props) => {
    const {image, name, price}=props
    return (
        <div className='cart-product'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default CardDetail;