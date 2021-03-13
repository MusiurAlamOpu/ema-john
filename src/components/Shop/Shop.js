import React from 'react';
import fakeData from '../../myResources/fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../../components/Product/Product.js';
import CartItems from '../../components/CartItems/CartItems.js';
import { Link } from 'react-router-dom';
import { addToDatabaseCart } from '../../myResources/utilities/databaseManager';
const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (props) => {
        const newCart = [...cart, props];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === props.key);
        const count = sameProduct.length;
        addToDatabaseCart(props.key , count);
    }

    return (
        <div className="shop-container">
            <div className="productsContainer">
                {
                    products.map( item => <Product
                        key={item.key}
                        handleAddProduct = {handleAddProduct}
                        product={item}
                        ></Product>)
                }   
            </div>
            <div className="cartContainer">
                    <h2>Order Summary</h2>
                    <h5>Items orderd: {cart.length}</h5>
                    <CartItems cart={cart}></CartItems>
                    <Link to="/review">
                        <button>Pay now!</button>
                    </Link>
            </div>
        </div>
    );
};

export default Shop;