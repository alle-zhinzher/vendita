import React, { Component } from 'react'
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
//Redux reducers
import {
    getBooksByGenre,
    sortBooksByPrice,
    sortBooksByPages,
    getBooks,
} from '../../../actions/books';
//Components
import Search from './searchGroup/Search';
import FilterByGenre from './filterGroup/FilterByGenre';
import SortBlock from './sortGroup/SortBlock';
//CSS Styles
import css from './Aside.css';


class Aside extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        sortedBooks: PropTypes.array.isRequired,

        getBooks: PropTypes.func.isRequired,
        getBooksByGenre: PropTypes.func.isRequired,
        sortBooksByPrice: PropTypes.func.isRequired,
        sortBooksByPages: PropTypes.func.isRequired,
    }
    componentWillMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <aside>
                <input type="checkbox" name="toggle" id="aside" className="toggleMenu" />
                <label htmlFor="aside" className="toggleMenu">
                    <img src="http://127.0.0.1:8000/media/profile_pics/search.svg" />
                </label>

                <div className="filter-wrapp">
                    <FilterByGenre getBooksByGenre={this.props.getBooksByGenre} />
                    <SortBlock
                        first={true}
                        blockName={"Price"}
                        sortFunc={this.props.sortBooksByPrice}
                        sortArrey={this.props.sortedBooks}
                    />
                    <SortBlock
                        first={false}
                        blockName={"Pages"}
                        sortFunc={this.props.sortBooksByPages}
                        sortArrey={this.props.sortedBooks}
                    />
                    <Search />
                </div>
            </aside >
        )
    }
}


const mapStateToProps = state => ({
    books: state.booksReducer.books,
    sortedBooks: state.booksReducer.sortedBooks,
});

export default connect(mapStateToProps, { getBooks, getBooksByGenre, sortBooksByPrice, sortBooksByPages })(Aside);