import React from 'react'
//Router
import { Link } from "react-router-dom";
//CSS STYLES
import css from './SmallCart.css'

function SmallPurcaseCart(props) {
    return (
        <section className="small-cart">
            <div className="cart-image">
                <img src={props.book.image} alt="small-cart-image" />
            </div>
            <div className="cart-property">
                <h4>
                    Book: <span className="grey">{props.book.name}</span>
                </h4>
                <h5>
                    Author: <span className="grey">{props.book.author}</span>
                </h5>
            </div>
            <div className="cart-property">

                <h5 className="max-price">
                    {props.sold ? 'My Price: ' : "Owner Price: "}
                    <span>{props.book.cost}$</span>
                </h5>
                <h5 className="max-price">
                    {props.sold ? "Customer price: " : 'My Price: '}
                    <span>{props.book.customer_price}$</span>
                </h5>

                {props.sold ?
                    <h2 className="book-cart-status">
                        Status: Book sold out!
                    </h2>
                    :
                    <h2 className="book-cart-status">
                        Status: Its your book!
                    </h2>
                }
            </div>
            <div className="cart-button">
                <Link
                    to={`/vendita/book/${props.book.id}`}
                    className="small-btn btn-view btn-purc">
                    View
                </Link>
            </div>
        </section >
    )
}

export default SmallPurcaseCart;
