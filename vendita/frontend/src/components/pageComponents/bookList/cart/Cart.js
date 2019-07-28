import React, { Component } from 'react'

//CSS Styles
import css from './Cart.css'


class Cart extends Component {
    render() {

        const max = this.props.active_page * 4;
        const min = max - 4;

        const page_status = this.props.index >= min & this.props.index < max ?
            "active-page book-cart"
            :
            "disable"

        return (

            <div className={page_status}>
                <div className="book-cart-image">
                    <img src={this.props.book.image} alt="book image" />
                </div>
                <div className="book-name">
                    <h3>{this.props.book.name}</h3>
                    <h4><span className="cart-book-author">Author: </span>{this.props.book.author}</h4>
                </div>
                <div className="book-discripion">
                    <p><span className="book-diskription-title">Discripion: </span>{this.props.book.discrition.substr(0, 75)}...</p>
                    <h4><span className="book-pages">{this.props.book.pages}</span> - pages</h4>
                </div>
                <div className="cart-prices">
                    <h2>Price: <span className="book-price">
                        {this.props.book.is_hot_price ?

                            <span className="cart-current-price">
                                {this.props.book.cost * 0.75}$
                                <span className="sale">25%</span>
                            </span>

                            :
                            <span className="cart-price">{this.props.book.cost}$</span>
                        }
                    </span></h2>
                </div>
                <button className="btn-buy cart-buy">
                    <img src="http://127.0.0.1:8000/media/profile_pics/shopping-cart.svg" alt="Logo" />
                </button>

            </div >
        )
    }
}

export default Cart