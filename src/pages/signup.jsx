import React from 'react'
import { Button } from '../resources/Boiler'


export default function SignUp(){
    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="card bg-dark text-light p-4">
                <h2 className="mb-4 text-center">Login</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email: </label>
                        <input type="email" className="form-control" placeholder="Enter your email" required />
                    </div>
                    <br></br>
                    <div className="mb-3">
                        <label className="form-label">Password: </label>
                        <input type="password" className="form-control" placeholder="Enter your password" required />
                    </div>
                    <br></br>
                    <Button text="Login" classes="graybutton" />
                </form>
            </div>
        </div>
    )
}