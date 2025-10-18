import React from "react"
import { courses } from "../scripts/script"

export default function AddCourse() {

    //calls create course from scripts
    function createNewCourse() {
        const newCourse = {
            prefix: document.querySelector('#prefix').value,
            name: document.querySelector('#name').value,
            teacher: document.querySelector('#teacher').value,
            classroom: document.querySelector('#classroom').value,
            description: document.querySelector('#description').value,
            startDate: document.querySelector('#startDate').value
        }

        try {
        courses.create(newCourse)
        document.querySelector("form").reset()
        }
        catch (error) {
            console.error(error)
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center py-5 form-control">
            <h1>Add a course</h1>
            <form>
                <div className="input-container">
                    <input type="text" id="prefix" />
                    <label for="prefix">Prefix:</label>
                </div>
                <div className="input-container">                    
                    <input type="text" id="name" />
                    <label for="name">Name:</label>
                </div>
                <div className="input-container">                    
                    <input type="text" id="teacher" />
                    <label for="teacher">Teacher:</label>
                </div>
                <div className="input-container">               
                    <input type="number" min="1" max="999" id="classroom" />
                    <label for="classroom">Classroom:</label>
                </div>
                <div className="input-container">                    
                    <input type="text" id="description" />
                    <label for="description">Description:</label>
                </div>
                <div className="input-container">
                    <input type="date" id="startDate" />
                    <label for="startDate">Starting Date:</label>
                </div>
                <div>
                    <button className="btn btn-primary btn-lg button-1" onClick={createNewCourse}>Add Course</button>
                </div>
                <div id="error"></div>
            </form>
        </div>
    )
}