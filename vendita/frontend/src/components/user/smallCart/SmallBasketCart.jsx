import React from 'react'
//Router
import { Link } from "react-router-dom";
//CSS STYLES
import css from './SmallCart.css'


function SmallBasketCart(props) {
    return (
        <section className="small-cart">
            <div className="cart-image">
                <img src={props.book.image} alt="small-cart-image" />
            </div>
            <div className="cart-property">
                <h4>Book:   <span className="grey">{props.book.name}</span></h4>
                <h5>Author: <span className="grey">{props.book.author}</span></h5>
            </div>
            <div className="cart-property">
                <h5 className="max-price">
                    Owner Price: <span>{props.book.cost}$</span>
                </h5>
                <h5 className="max-price">
                    My Price: <span>{props.book.customer_price}$</span>
                </h5>
                <h2 className="book-cart-status">
                    Status: Wait for owner apply
                    </h2>
            </div>
            <div className="cart-button">
                <Link
                    to={`/vendita/book/${props.book.id}`}
                    className="small-btn btn-view">
                    View
                    </Link>
                <button
                    onClick={() =>
                        props.cencel(props.book.id, props.book.created_at)
                    }
                    className="small-btn btn-delete">
                    Cancel
                    </button>
            </div>
        </section >
    )
}

export default SmallBasketCart;
