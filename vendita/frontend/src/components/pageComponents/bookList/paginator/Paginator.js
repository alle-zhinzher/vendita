import React from 'react';

import PaginatorButton from './PaginatorButton';


//CSS Styles
import css from './Paginator.css'

function Paginator(props) {
    return (
        <section className="paginator">
            <PaginatorButton
                status={props.activePage === 1}
                activePage={props.activePage}
                action={props.prevPage}
                actionValue={props.activePage}
                buttonText={"<"}
                displayClass="paginator-scroll"
            />
            <PaginatorButton
                status={props.activePage === 1}
                activePage={props.activePage}
                action={props.jumpToPage}
                actionValue={props.activePage - 1}
                buttonText={props.activePage - 1}
                displayClass=""
            />
            <PaginatorButton
                status={props.booksCount === 0}
                activePage={props.activePage}
                action={props.jumpToPage}
                actionValue={props.activePage}
                buttonText={props.activePage}
                displayClass="paginator-active"
            />
            <PaginatorButton
                status={props.activePage >= props.booksCount / 4}
                activePage={props.activePage}
                action={props.jumpToPage}
                actionValue={props.activePage + 1}
                buttonText={props.activePage + 1}
                displayClass=""
            />
            <PaginatorButton
                status={props.activePage >= props.booksCount / 4}
                activePage={props.activePage}
                action={props.nextPage}
                actionValue={props.activePage}
                buttonText={'>'}
                displayClass="paginator-scroll"
            />

            {props.checkSum === props.booksCount ?
                null
                :
                props.resetPaginator(props.booksCount)
            }
        </section>

    )
}

export default Paginator;