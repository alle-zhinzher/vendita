import React from 'react'
//Router
import { Link } from "react-router-dom";
//CSS Styles
import css from './FilterByGenre.css';


function FilterByGenre(props) {
    return (
        <div className="category">
            <h2>Filter by:</h2>
            <h4>Genre</h4>
            <Link className="asideButton"
                onClick={() => props.getBooksByGenre("history")}
                to="/vendita/books">Historycal</Link>
            <Link className="asideButton"
                onClick={() => props.getBooksByGenre("roman")}
                to="/vendita/books">Romans</Link>
            <Link className="asideButton"
                onClick={() => props.getBooksByGenre("novel")}
                to="/vendita/books">Novella</Link>
            <Link className="asideButton"
                onClick={() => props.getBooksByGenre("fantasy")}
                to="/vendita/books">Fantasy</Link>
        </div>
    )
}

export default FilterByGenre