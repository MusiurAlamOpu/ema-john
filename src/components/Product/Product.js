import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div className="productImage">
                <img src={img} alt=""/>
            </div>
            <div className="productDetails">
                <h4 className="productName"><Link to={"/product/"+key}>{name}</Link></h4>
                <br></br>
                <p> <small>by: {seller}</small> </p>
                <p>$ {price}</p>
                <p>Only {stock} left in stock - order soon</p>
                {!props.showAddToCart &&
                    <button onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                }
                
            </div>
        </div>
    );
};

export default Product;