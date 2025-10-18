import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../resources/Boiler'
import campus1 from '../photos/campus1.jpg'
import office1 from '../photos/office1.jpg'
import professor1 from '../photos/professor1.jpg'
import student3 from '../photos/student3.jpg'

export default function Home() {

    const logout = (e) => {
        e.preventDefault()
        try {
            localStorage.removeItem('token')
            window.location.reload(true)
        }
        catch (err) {
            console.error('An unexpected error occurred')
        }
    }

    return (
        <div className="text-center py-5 fade-in-up">
            <h1 className="display-4 fw-bold">Class Map</h1>
            <h3 class name="mt-5"></h3>
            <div className="scroll-gallery">
                <img src={campus1} alt="Gallery 1" />
                <img src={office1} alt="Gallery 2" />
                <img src={professor1} alt="Gallery 3" />
                <img src={student3} alt="Gallery 4" />
            </div>
            <p>Welcome to Class Map! A place for students and teachers to build their schedules.</p>
            <div className="mt-4 d-flex flex-column align-items-center gap-3">
                {(localStorage.getItem("token")) ? (<button onClickCapture={logout} className="button-1 btn btn-primary btn-lg">Logout</button>) :
                    (<NavLink to="/signup"><Button text="Log In" classes="button-1 btn btn-primary btn-lg" /></NavLink>)}
                    {(localStorage.getItem("token")) ? <NavLink to="/schedule"><Button text="View Schedule" classes="btn btn-primary btn-lg2 button-2" /></NavLink> :
                    (null)}
                
            </div>
        </div>
    )
}


