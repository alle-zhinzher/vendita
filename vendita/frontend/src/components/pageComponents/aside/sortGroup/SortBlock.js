import React from 'react'
//Router
import { Link } from "react-router-dom";


function SortBlock(props) {
    return (
        <div className="category">
            <h2 className={props.first ? "" : "disable"} >Sort by:</h2>
            <h4>{props.blockName}</h4>
            <Link className="asideButton"
                onClick={() => props.sortFunc(props.sortArrey, false)}
                to="/vendita/books">From lesser to greater</Link>
            <Link className="asideButton"
                onClick={() => props.sortFunc(props.sortArrey, true)}
                to="/vendita/books">From greater to lesser</Link>
        </div>
    )
}

export default SortBlock
