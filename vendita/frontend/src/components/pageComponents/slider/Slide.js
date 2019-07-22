import React from 'react'

export default function Slide(props) {
    return (

        <div className="slide" >
            <div className="book-image">
                <img src="fe" alt="slider image" />
            </div>
            <div className="book-prop">
                <h4>Product Name</h4>
                <section className="prices">
                    <span className="old-price">500$</span> = <span className="new-price">400$</span>
                </section>
                <a className="product-info">View detail</a>
            </div>
        </div>
    )
}
