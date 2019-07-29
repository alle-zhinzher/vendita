import React from 'react'
//css
import css from './SlideControler.css'


function SlideControler(props) {
    const controlerText = props.controlerText === "left"
    return (
        <button className="slider-controler"
            onClick={() => props.hendleFunc(props.activeSlide, props.slideLength)}>
            {props.controlerText}
        </button >
    )
}

export default SlideControler