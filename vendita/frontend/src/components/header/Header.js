import React from 'react'
import { Link } from "react-router-dom";
import css from './Header.css'


function Header() {
    return (
        <header>
            <nav>
                <div class="logo">
                    <i class="fas fa-gavel"></i>
                    <h1>Vendita all`astera</h1>
                </div>
                <input type="checkbox" name="toggle" id="menu" class="toggleMenu" />
                <label for="menu" class="toggleMenu"><i class="fa fa-bars"></i>Меню</label>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m1" />
                        <a href="#">hot prices</a>
                        <label for="sub_m1" class="toggleSubmenu"><i class="fa"></i></label>
                        <ul>
                            <li><a href="#">Одежда</a></li>
                            <li><a href="#">Электроника</a></li>
                            <li><a href="#">Продукты питания</a></li>
                            <li><a href="#">Инструменты</a></li>
                            <li><a href="#">Быт. химия</a></li>
                        </ul>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

