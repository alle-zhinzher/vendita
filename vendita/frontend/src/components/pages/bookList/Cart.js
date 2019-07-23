import React, { Component } from 'react'

class Cart extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.book.name}</h2>
                <h2>{this.props.book.author}</h2>
                <h2>{this.props.book.cost}</h2>
                <h2>{this.props.book.pages}</h2>

            </div>
        )
    }
}

export default Cart