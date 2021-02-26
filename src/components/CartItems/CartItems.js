import React from 'react';
import './CartItem.css';
const CartItems = (props) => {
    console.log(props);
    let totalItemPrice = 0;
    let totalShippingCost = 0;
    let totalEstimatedTax = 0;
    let totalBeforeTex = 0;
    let grandTotalCost = 0;
    for(let i = 0; i < props.cart.length; i++){
        totalItemPrice = totalItemPrice + props.cart[i].price;
        totalShippingCost = totalShippingCost + props.cart[i].shipping;
        totalEstimatedTax = totalEstimatedTax + ((totalItemPrice + totalShippingCost)*0.1);
        totalBeforeTex = totalBeforeTex + (totalItemPrice + totalShippingCost);
        grandTotalCost = grandTotalCost + (totalItemPrice + totalShippingCost + totalEstimatedTax);
    }
    console.log(totalItemPrice);
    return (
        <div>
            <div className="detailsDivs">
                <div>Items:</div>
                <div className="prices">{(totalItemPrice).toFixed(2)}$</div>
            </div>
            <div className="detailsDivs">
                <div>Shipping and handling:</div>
                <div className="prices">{(totalShippingCost).toFixed(2)}$</div>
            </div>
            <div className="detailsDivs">
                <div>Total before TAX:</div>
                <div className="prices">{(totalBeforeTex).toFixed(2)}$</div>
            </div>
            <div className="detailsDivs">
                <div>Estimated TAX:</div>
                <div className="prices">{(totalEstimatedTax).toFixed(2)}$</div>
            </div>
            <div className="detailsDivs" id="grandPrice">
                <div>Order Total:</div>
                <div className="prices">{(grandTotalCost).toFixed(2)}$</div>
            </div>
        </div>
    );
};

export default CartItems;