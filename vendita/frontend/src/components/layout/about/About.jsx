import React from 'react'
// CSS
import css from './About.css'


function About() {
    return (
        <div className="content-section">
            <div className="about-wrapp">
                <h3>About US</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                </p>
                <h3 className="cart-title">We Are Here</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20322.5990241334!2d30.443950649999998!3d50.45367469859341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce82b9bc8a47%3A0x47514e5d91216bf3!2z0JrQuNGX0LLRgdGM0LrQuNC5INC_0L7Qu9GW0YLQtdGF0L3RltGH0L3QuNC5INGW0L3RgdGC0LjRgtGD0YI!5e0!3m2!1suk!2sua!4v1565199927633!5m2!1suk!2sua"
                    className="about-cart"
                    frameBorder="0"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default About;
