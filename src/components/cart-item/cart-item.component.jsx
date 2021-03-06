import React, { Component } from 'react'
import "./cart-item.styles.scss"

export const CartItemComponent = ({ item: { imageUrl, name, price, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt={"item"} />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price"> {quantity}* ${price}</span>

        </div>
    </div>
)




export default CartItemComponent
