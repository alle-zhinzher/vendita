import React from 'react'

function PaginatorButton(props) {
    return (
        <button
            className={props.status ? "disable" : props.displayClass}
            onClick={() => props.action(props.actionValue)}>
            {props.buttonText}
        </button>
    )
}

export default PaginatorButton;