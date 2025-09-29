import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../resources/Boiler'


export default function Home() {
    return (
        <div className="text-center py-5">
            <h1 className="display-4 fw-bold">Welcome to Schedule Builder</h1>
            <div className="mt-4 d-flex flex-column align-items-center gap-3">
                <NavLink to="/signup" className="btn btn-primary btn-lg"><Button text="Log In" classes="purplebutton" /></NavLink>
                <NavLink to="/schedule" className="btn btn-primary btn-lg"><Button text="View Schedule" classes="graybutton" /></NavLink>
            </div>
        </div>
    )
}

