import React from 'react'
import { Link } from "react-router-dom";
import css from './Header.css'


function Header() {
    return (
        <header>

            <div className="logo">
                <img src="http://127.0.0.1:8000/media/profile_pics/logo.svg" alt="Logo" />
                <h1>Vendita all`astera</h1>
            </div>
            <nav>
                <input type="checkbox" name="toggle" id="menu" className="toggleMenu" />
                <label htmlFor="menu" className="toggleMenu"><img src="http://127.0.0.1:8000/media/profile_pics/burger.svg" /></label>
                <ul>
                    <li><Link className="link" to="/vendita/">home</Link></li>
                    <li><Link className="link" to="/vendita/books">books</Link></li>
                    <li>
                        <input type="checkbox" name="toggle" className="toggleSubmenu" id="sub_m1" />
                        <span className="link" id="sub_m1">genres <span className="row">&#x203a;</span></span>
                        <label htmlFor="sub_m1" className="toggleSubmenu"></label>
                        <ul>
                            <li><Link className="link" to="/books/">romans</Link></li>
                            <li><Link className="link" to="/books/">historycal</Link></li>
                            <li><Link className="link" to="/books/">novell</Link></li>
                            <li><Link className="link" to="/books/">fanasy</Link></li>
                            <li><Link className="link" to="/books/">all</Link></li>
                        </ul>
                    </li>
                    <li><Link className="link" to="/about">about</Link></li>
                    <li><Link className="link" to="/about">register</Link></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header

