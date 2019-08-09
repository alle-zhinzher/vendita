import React from 'react'
//css
import css from './SlideControler.css'


function SlideControler(props) {
    return (
        <button className="slider-controler"
            onClick={() => props.hendleFunc()}>
            {props.controlerText}
        </button >
    )
}

export default SlideControler