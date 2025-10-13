import React from 'react'
import { Button } from '../resources/Boiler';
import { NavLink } from 'react-router-dom';
import { courses } from '../scripts/script';

const allCourses = await courses.fetchAll()


export default function Schedule(){


function displayCourses() {
    const listItems = allCourses.map(allCourses => <div key={allCourses._id} className="col-md-4 mb-3">
        <div className="card h-100 bg-dark text-light">
            <div className="card-body">
                <h4 className="card-title">{allCourses.name} - {allCourses.teacher} 
                    <NavLink to={`details/${allCourses._id}`}><button class="button-2">View Details</button></NavLink>
                    <NavLink to={`edit/${allCourses._id}`}><button class="button-2">Edit Course</button></NavLink>
                    <button class="button-2" onClick={() => courses.delete(allCourses._id)}>Delete Course</button>
                </h4>
            </div>
        </div>
    </div>)
    return <ol>{listItems}</ol>
}


return (
    <div className="py-4">
        <h2>Available Courses</h2>
        <div className="row">
            {displayCourses()}
        </div>
        <div>
        <NavLink to="/addcourse" className="btn btn-primary btn-lg"><Button text="Add Course" classes="button-1" /></NavLink>
        </div>
    </div>
    )
}