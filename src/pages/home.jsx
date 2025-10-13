import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../resources/Boiler'
import campus1 from '../photos/campus1.jpg'
import office1 from '../photos/office1.jpg'
import professor1 from '../photos/professor1.jpg'

export default function Home() {
    return (
        <div className="text-center py-5">
            <h1 className="display-4 fw-bold">Class Map</h1>
            <h3 class name ="mt-5"></h3>
                <div className="scroll-gallery">
                    <img src={campus1} alt="Gallery 1" />
                    <img src={office1} alt="Gallery 2" />
                    <img src={professor1} alt="Gallery 3" />
                </div>
            <p>Welcome to Class Map! A place for students and teachers to build their schedules.</p>
            <div className="mt-4 d-flex flex-column align-items-center gap-3">
                <NavLink to="/signup" className="btn btn-primary btn-lg"><Button text="Log In" classes="button-1" /></NavLink>
                <NavLink to="/schedule" className="btn btn-primary btn-lg"><Button text="View Schedule" classes="button-1" /></NavLink>
            </div>
        </div>
    )
}


