import React from 'react'
//Router
import { Link } from "react-router-dom";
//CSS STYLES
import css from './SmallCart.css'

function SmallCart(props) {
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
                    My Price: <span>{props.book.cost}$</span>
                </h5>
                <h5 className="max-price">
                    Current Price: <span>{props.book.customer_price}$</span>
                </h5>
            </div>
            <div className="cart-button">
                <Link
                    to={`/vendita/book/${props.book.id}`}
                    className="small-btn btn-view">View
                </Link>
                {props.book.customer_price === 0 ?
                    ""
                    :
                    <button
                        onClick={() => props.approve(
                            props.book.id,
                            props.book.created_at,
                        )}
                        className="small-btn btn-apply">Approve
                    </button>
                }
                <button
                    onClick={() => props.delete(props.book.id)}
                    className="small-btn btn-delete">
                    Delete
                </button>
            </div>
        </section >
    )
}

export default SmallCart;
