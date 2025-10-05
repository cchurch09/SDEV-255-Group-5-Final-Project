import React from 'react'
import { Button } from '../resources/Boiler';

export default function Schedule(){
const courses = [
    {id: 1, title: 'SDEV255',  description: 'This is a computer course'},
    {id: 2, title: 'SCI202', description: 'This is a science course'},
    {id: 3, title: 'MATH200', description: 'This is an math course'},
]


return (
    <div className="py-4">
        <h2>Available Courses</h2>
        <div className="row">
            {courses.map(course => (
                <div key={course.id} className="col-md-4 mb-3">
                    <div className="card h-100 bg-dark text-light">
                        <div className="card-body">
                            <h4 className="card-title">{course.title} <Button text="View Details" classes="graybutton" /></h4>
                            <p className="card-text">{course.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}