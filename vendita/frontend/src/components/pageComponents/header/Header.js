import React from 'react'
import { Link } from "react-router-dom";
import css from './Header.css'


function Header() {
    return (
        <header>

            <div className="logo">
                <i className="fas fa-gavel"></i>
                <h1>Vendita all`astera</h1>
            </div>
            <nav>
                <input type="checkbox" name="toggle" id="menu" className="toggleMenu" />
                <label htmlFor="menu" className="toggleMenu"><i className="fa fa-bars"></i>Меню</label>
                <ul>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li>
                        <input type="checkbox" name="toggle" className="toggleSubmenu" id="sub_m1" />
                        <span className="link">hot prices</span>
                        <label htmlFor="sub_m1" className="toggleSubmenu"><i className="fa"></i></label>
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
            
