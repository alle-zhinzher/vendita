import React, { Component } from 'react';
//Router
import { Redirect } from "react-router-dom";
//CSS Styles
import css from './BookCart.css';


class BookCart extends Component {
    state = {
        customer_price: 0,
        error: '',
    }
    onSubmit = e => {
        e.preventDefault();
        if (this.state.customer_price > this.props.book.customer_price) {
            this.props.newCustomer(
                this.props.book.id,
                this.props.user.id,
                this.props.book.created_at,
                this.state.customer_price
            );
        } else {
            this.setState({ error: "New price must bee bigger then current" })
        }
    };

    onChange = e => this.setState({ customer_price: e.target.value });
    render() {
        if (this.props.customerLoading) {
            return <Redirect to="/vendita/user/book/basket" />;
        }
        return (
            <section className='page-wrapp'>
                <p className="error-box">{this.state.error}</p>
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


                <div className="page-book-prices">
                    <div className="buy-book-form">
                        {
                            this.props.book.owner !== this.props.user.id ?
                                <form onSubmit={this.onSubmit}>
                                    <button type="submit" className="buy-submit">
                                        <img src="http://127.0.0.1:8000/media/profile_pics/shopping-cart.svg" alt="Logo" />
                                    </button>
                                    <input
                                        type="number"
                                        id="user-price"
                                        className="page-form-input"
                                        onChange={this.onChange}
                                        name="current_price"
                                    />
                                </form>
                                :
                                ""
                        }
                    </div>
                    <span className="page-price-w page-current-price">
                        Current Price:<br />
                        <span className="page-price">
                            {this.props.book.customer_price}
                        </span>
                    </span>
                    <span className="page-price-w cart-owner-price">
                        Owner price:<br />
                        <span className="page-price">
                            {this.props.book.is_hot_price ?
                                <span>
                                    <span className="page-price">
                                        {this.props.book.cost * 0.75}$
                                    </span>
                                    <span className="page-sale">25%</span>
                                </span>
                                :
                                <span>
                                    <span className="page-price">
                                        {this.props.book.cost}$
                                    </span>
                                </span>
                            }
                        </span>
                    </span>
                </div>



            </section>
        )
    }
}


export default BookCart;
