import React from 'react'
import { Button } from '../resources/Boiler';
import computerclass from '../photos/computer class.jpg';
import scienceclass from '../photos/science class.jpg';
import mathclass from '../photos/math class.jpg';
import { courses } from '../scripts/script';


export default function Schedule(){
// const courses = [
//     {id: 1, title: 'SDEV255',  description: 'Students will learn how to use and apply client and server-side scripting and application programming interfaces to build web-based applications which interact with a data source including XML and JSON. Students will prepare both front and back end content using techniques including, Hyper Text Markup Language and JavaScript to create dynamic data-driven web interfaces.', image: computerclass },
//     {id: 2, title: 'SCI202', description: 'An introductory course that includes the science of chemistry and measurement, atomic theory and the periodic table, chemical bonding, equation writing and balancing, stoichiometry, gases and acids/bases. Includes lab', image: scienceclass},
//     {id: 3, title: 'MATH200', description: 'Reviews linear equations, inequalities, graphing, and factoring algebraic expressions. Concentrates on properties of integer and rational exponents, systems of linear equations, radicals, radical equations, quadratic equations, functions including their graphs, and applications', image: mathclass},
// ]


let allCourses = async () => { await courses.fetchAll()}
console.log(allCourses) // debugging
for (let course of allCourses) { // allCourses isnt iterable so error
    html += `<li>${course.name} - ${course.teacher}</li>`
}


return (
    <div className="py-4">
        <h2>Available Courses</h2>
        <div className="row">
            {html}
        </div>
    </div>
    )
}