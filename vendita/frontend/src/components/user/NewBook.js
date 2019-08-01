import React, { Component } from 'react';
import PropTypes from "prop-types";
//Router
import { Redirect } from "react-router-dom";
//CSS Styles
import { createBook } from "../../actions/user";
import { connect } from "react-redux";



class NewBook extends Component {

    static propTypes = {
        bookPosted: PropTypes.bool.isRequired,
        createBook: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        author: '',
        genre: '',
        discrition: '',
        pages: '',
        created_at: '',
        cost: '',
        is_hot_price: '',
        image: null,
    }


    onSubmit = e => {
        e.preventDefault();
        const {
            name,
            author,
            genre,
            discrition,
            pages,
            created_at,
            cost,
            image } = this.state;

        const newBook = new FormData();
        newBook.append('name', name)
        newBook.append('author', author)
        newBook.append('genre', genre)
        newBook.append('discrition', discrition)
        newBook.append('pages', pages)
        newBook.append('created_at', created_at)
        newBook.append('cost', cost)
        newBook.append('image', image, image.name)


        this.props.createBook(newBook);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    hendleFile = e => this.setState({ image: e.target.files[0] });
    render() {

        const {
            name,
            author,
            genre,
            discrition,
            pages,
            created_at,
            cost,
        } = this.state;

        if (this.props.bookPosted) {
            return <Redirect to="/vendita/user/books" />;
        }

        return (
            <div className="form-page">
                <div className="form-body">
                    <h2>New Book</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="book-name">Book Name</label><br />
                            <input
                                id="book-name"
                                type="text"
                                className="form-input"
                                name="name"
                                onChange={this.onChange}
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="book-author">Author</label><br />
                            <input
                                id="book-author"
                                type="text"
                                className="form-input"
                                name="author"
                                onChange={this.onChange}
                                value={author}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="book-genre">Book Genre</label><br />
                            <input
                                id="book-genre"
                                type="text"
                                className="form-input"
                                name="genre"
                                onChange={this.onChange}
                                value={genre}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="book-discription">Discription</label><br />
                            <input
                                id="book-discription"
                                type="text"
                                className="form-input"
                                name="discrition"
                                onChange={this.onChange}
                                value={discrition}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="book-pages">Pages</label><br />
                            <input
                                id="book-pages"
                                type="number"
                                className="form-input"
                                name="pages"
                                onChange={this.onChange}
                                value={pages}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="book-date">Created at</label><br />
                            <input
                                id="book-date"
                                type="date"
                                className="form-input"
                                name="created_at"
                                onChange={this.onChange}
                                value={created_at}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="book-price">Price</label><br />
                            <input
                                id="book-price"
                                type="number"
                                className="form-input"
                                name="cost"
                                onChange={this.onChange}
                                value={cost}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="book-image">Title Image</label><br />
                            <input
                                id="book-image"
                                type="file"
                                className="form-input"
                                name="image"
                                onChange={this.hendleFile}
                            />
                        </div>


                        <div className="form-group">
                            <button type="submit" className="register-submit">
                                Create New Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    bookPosted: state.userReducer.bookPosted,
});

export default connect(mapStateToProps, { createBook })(NewBook);