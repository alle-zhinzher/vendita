import React, { Component } from 'react'
import { Link } from "react-router-dom";
//css
import css from './Slide.css'


function Slide(props) {
    const slideStatus = props.activeSlide === props.index ? "active" : "disable"
    return (
        <div className={slideStatus}>
            <div className="book-image">
                <img src={props.book.image} alt="slider-image" />
            </div>
            <div className="book-propeties">
                <h4>{props.book.name}</h4>
                <h4>{props.book.author}</h4>
                <section className="prices-block">
                    <span className="old-price">
                        {props.book.cost}$
                    </span>
                    =
                    <span className="new-price">
                        {props.book.cost * 0.75}$
                    </span>
                </section>
                <Link
                    className="slide-view"
                    to={`/vendita/book/${props.book.id}`}>
                    <img
                        className="img-buy-button"
                        src="http://127.0.0.1:8000/media/profile_pics/shopping-cart.svg"
                        alt="Logo" />
                </Link>
            </div>
        </div>
    )
}

export default Slide