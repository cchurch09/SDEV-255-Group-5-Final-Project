import React from "react";
import {
    NavLink
} from "react-router-dom";
import { useAuth } from "../scripts/auth";

function Header() {
    return (
        <header>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
</svg>
                <a href="/SDEV-255-Group-5-Final-Project/">MyClassMap</a>
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
                    <NavLink to="/student">
                        Student
                    </NavLink>
                </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <div class = "footer">
                <p>&copy; Copyright 2025</p>
            </div>
        </footer>
    )
}

// Reuseable Button component with customizable classes for use site wide
function Button({ text, classes, onClick }) {
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}

export { Header, Footer, Button }
