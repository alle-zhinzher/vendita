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
                    <li><Link className="link" to="/">Home</Link></li>
                    <li>
                        <input type="checkbox" name="toggle" className="toggleSubmenu" id="sub_m1" />
                        <span className="link" id="sub_m1">hot prices <span className="row">&#x203a;</span></span>
                        <label htmlFor="sub_m1" className="toggleSubmenu"></label>
                        <ul>
                            <li><Link className="link" to="/">Одежда</Link></li>
                            <li><Link className="link" to="/">Продукты питания</Link></li>
                            <li><Link className="link" to="/">Электроника</Link></li>
                            <li><Link className="link" to="/">Быт. химия</Link></li>
                            <li><Link className="link" to="/">Инструменты</Link></li>
                        </ul>
                    </li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/topics">Topics</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

