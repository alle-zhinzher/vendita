import React, { Component } from 'react';
import css from './BookCart.css';


class BookCart extends Component {
    render() {
        return (
            <section className='page-wrapp'>
                <div className="page-book-image">
                    <img src={this.props.book.image} alt="book-image" />
                </div>
                <div className="page-book-name">
                    <h3>{this.props.book.name}</h3>
                    <h4>Author:
                        <span className="page-book-author">
                            {this.props.book.author}
                        </span>
                    </h4>
                </div>

                <div className="page-book-discripion">
                    <p>
                        <span className="page-book-discription-title">
                            Discripion:
                        </span>
                        {this.props.book.discrition}
                    </p>
                    <p className="page-book-props">
                        <span className="page-book-date">
                            Writed at:
                            <span className="page-black">
                                {this.props.book.created_at.slice(0, 4)}
                            </span>
                        </span>
                        <span className="page-book-pages">
                            <span className="page-black">
                                {this.props.book.pages}
                            </span>
                            - pages
                        </span>
                    </p>
                </div>

                {this.props.book.is_hot_price ?
                    <div className="page-book-prices">
                        <span className="page-current-price">
                            Current Price: 0$
                        </span>
                        <span className="page-owner-price">
                            Owner Price: {this.props.book.cost * 0.75}$
                            <span className="page-sale">25%</span>
                        </span>
                    </div>
                    :
                    <div className="page-book-prices">
                        <div className="buy-book-form">
                            <form>
                                <button type="submit" className="buy-submit">
                                    <img src="http://127.0.0.1:8000/media/profile_pics/shopping-cart.svg" alt="Logo" />
                                </button>
                                <input
                                    type="number"
                                    id="user-price"
                                    className="page-form-input"
                                    name="current_price"
                                />
                            </form>
                        </div >
                        <span className="cart-price page-current-price">
                            Current Price:<br />
                            <span className="page-price">
                                0$
                            </span>
                        </span>
                        <span className="cart-price cart-owner-price">
                            Owner price:<br />
                            <span className="page-price">
                                {this.props.book.cost}$
                            </span>
                        </span>
                    </div>
                }

            </section>
        )
    }
}


export default BookCart;
