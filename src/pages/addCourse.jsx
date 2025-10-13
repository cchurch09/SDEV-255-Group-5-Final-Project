import React from "react"
import { courses } from "../scripts/script"

export default function AddCourse(){

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

        courses.create(newCourse)

        document.querySelector("form").reset()
        
    }

    return (
    <div className="d-flex justify-content-center align-items-center py-5">
    <h1>Add a course</h1>
    <form>
        <div>
            <label for="prefix">Prefix:</label>
            <input type="text" id="prefix" />
        </div>
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" />
        </div>
        <div>
            <label for="teacher">Teacher:</label>
            <input type="text" id="teacher" />
        </div>
        <div>
            <label for="classroom">Classroom:</label>
            <input type="number" min="1" max="999" id="classroom" />
        </div>
        <div>
            <label for="description">Description:</label>
            <input type="text" id="description" />
        </div>
        <div>
            <label for="startDate">Starting Date:</label>
            <input type="date" id="startDate" />
        </div>
        <div>
            <button class="button-1" onClick={createNewCourse}>Add Course</button>
        </div>
        <div id="error"></div>
    </form>
    </div>
)}