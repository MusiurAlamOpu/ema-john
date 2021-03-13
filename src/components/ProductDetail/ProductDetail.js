import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../myResources/fakeData';
import Product from '../Product/Product';
const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    
    return (
        <div>
            <h1>{productKey}Details coming soon</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;