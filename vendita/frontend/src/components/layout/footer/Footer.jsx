import React from 'react';
import css from './Footer.css'


function Footer() {
    return (
        <footer>
            <p className="text-footer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul >
                <li><a className="social-media" href="#" target="_blank">Facebook</a></li>
                <li><a className="social-media" href="#" target="_blank">Instagramm</a></li>
                <li><a className="social-media" href="#" target="_blank">You Tube</a></li>
            </ul>
        </footer>
    )
}

export default Footer
