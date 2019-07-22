import React, { Component } from 'react'
import css from './Slider.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHootBooks } from '../../../actions/books';

class Slider extends Component {

    static propTypes = {
        hoot_books: PropTypes.array.isRequired,
        getHootBooks: PropTypes.func.isRequired,

    }
    componentWillMount() {
        this.props.getHootBooks();
        this.setState({
            slide_index: 0,
            img: '',
            name: '',
            author: '',
            price: '',
        })

    }

    getNextItem() {
        if (this.state.slide_index === (this.props.hoot_books.length - 1)) {
            this.setState({
                slide_index: 0
            })
            this.setState({
                name: this.props.hoot_books[this.state.slide_index].name,
                img: this.props.hoot_books[this.state.slide_index].img,
                author: this.props.hoot_books[this.state.slide_index].author,
                price: this.props.hoot_books[this.state.slide_index].price,
            })
        } else {
            this.setState({
                slide_index: this.state.slide_index + 1
            })
            this.setState({
                name: this.props.hoot_books[this.state.slide_index].name,
                img: this.props.hoot_books[this.state.slide_index].image,
                author: this.props.hoot_books[this.state.slide_index].author,
                price: this.props.hoot_books[this.state.slide_index].cost,
            })
        }

    }
    render() {
        return (

            <section className="slider" >
                {this.state.img ?

                    <div className="slide" >
                        <div className="book-image">
                            {this.state.img}
                            <img src={this.state.img} alt="slider image" />
                        </div>
                        <div className="book-prop">
                            <h4>{this.state.name}</h4>
                            <h4>{this.state.author}</h4>
                            <section className="prices">
                                <span className="old-price">{this.state.price}$</span> = <span className="new-price">{this.state.price * 0.9}$</span>
                            </section>
                            <a className="product-info">View detail</a>
                        </div>
                    </div>
                    :
                    <h1>Show me books</h1>
                }

                <button onClick={() => this.getNextItem()}>Prev</button>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    hoot_books: state.booksReducer.hoot_books,
});

export default connect(mapStateToProps, { getHootBooks })(Slider);
