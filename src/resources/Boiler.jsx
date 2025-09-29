import React from "react";
import {
    NavLink
} from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <a href="/">Site Title/Logo</a>
            </div>
                <nav>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/signup">
                        Sign Up
                    </NavLink>
                    <NavLink to="/schedule">
                        Schedule
                    </NavLink>
                </nav>
            <div>
                <input type="text" name="search" id="search" placeholder='Search Anything' />
            </div>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <div>
                <p>&copy; Copyright 2025</p>
            </div>
        </footer>
    )
}

// Reuseable Button component with customizable classes for use site wide
function Button({text, classes }) {

    return (
        <>
            <a class={classes}>{text}</a>
        </>
    )
}

export { Header, Footer, Button }
