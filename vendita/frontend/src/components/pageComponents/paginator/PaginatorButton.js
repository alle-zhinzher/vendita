import React from 'react'

function PaginatorButton(props) {
    return (
        <button
            className={props.status ? "disable" : props.displayClass}
            onClick={() => props.action(props.actionValue, props.actionPageName)}>
            {props.buttonText}
        </button>
    )
}

export default PaginatorButton;
/*

<section className="paginator">
                <button
        className={this.props.activePage === 1 ? "disable" : "paginator-scroll"}
                        onClick={() => this.props.prevPage(this.props.activePage)}>
                        &#x2039;
                    </button>

                    <button
                        className={this.props.activePage === 1 ? "disable" : ""}
                        onClick={() => this.props.jumpToPage(this.props.activePage - 1)}>
                        {this.props.activePage - 1}
                    </button>

                    <button
                        className={this.props.sortedBooks.length === 0 ? "disable" : ""}
                        id="paginator-active">
                        {this.props.checkSum === this.props.sortedBooks.length ?
                            this.props.activePage
                            :
                            this.props.resetPaginator(this.props.sortedBooks.length)}
                    </button>

                    <button
                        className={
                            this.props.activePage >= this.props.sortedBooks.length / 4 ?
                                "disable" : ""
                        }
                        onClick={() => this.props.jumpToPage(this.props.activePage + 1)}>
                        {this.props.activePage + 1}
                    </button>

                    <button
                        className={this.props.activePage >= this.props.sortedBooks.length / 4 ?
                            "disable" : "paginator-scroll"
                        }
                        onClick={() => this.props.nextPage(this.props.activePage)}>
                        &#x203a;
                    </button>
                </section >
*/