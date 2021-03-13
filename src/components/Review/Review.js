import React, { useEffect, useState } from 'react';
import fakeData from '../../myResources/fakeData';
import { getDatabaseCart } from '../../myResources/utilities/databaseManager';

const Review = () => {
    const {cart, setCart} = useState([]);
    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cardProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            // product.quantity = savedCart[key];
            return product;
        });

        console.log(cardProducts);
    }, [])
    return (
        <div>
            This is review
        </div>
    );
};

export default Review;