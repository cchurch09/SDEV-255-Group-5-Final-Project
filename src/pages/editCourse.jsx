import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { courses, backendUrl } from "../scripts/script"

export default function EditCourse(){
   //calls update course from scripts
    function updateCourse() {
        const course = {
            prefix: document.querySelector('#prefix').value,
            name: document.querySelector('#name').value,
            teacher: document.querySelector('#teacher').value,
            classroom: document.querySelector('#classroom').value,
            description: document.querySelector('#description').value,
            startDate: document.querySelector('#startDate').value
        }

        courses.update(params.id, course)
    }

    let params = useParams()
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([])
    //use for setting inputs with course info
    const [inputs, setInputs] = useState({})
    
    useEffect(() => { 
      //Get course info to set in inputs
      const loadPost = async () => {
        try {
          setLoading(true);
          const response = await fetch(`${backendUrl}/${params.id}`)
          const thisCourse = await response.json()
          thisCourse.startDate = thisCourse.startDate.substring(0,10)
          setPost(thisCourse);
          //set inputs with course information
          setInputs(thisCourse)
        } catch (err) {
          console.log(err)
        } finally {
          setLoading(false)
        }
      };
      
      loadPost();
    }, []);

    //Allow for inputs to be controlled inputs and editable. 
    // However, the prevData arrow function is supposed to put in the prevData variable but when it is active the inputs are read only. 
    // Not sure what is going on with that, but when I removed it the inputs worked - SC
    const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      setInputs((prevData) => ({
        // ...prevData,
          [name]: value,
        }));
      };
    
    return (
      <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
      <h1>Edit course</h1>
      <form>
          <div>
              <label for="prefix">Prefix:</label>
              <input type="text" id="prefix" value={inputs.prefix} onChange={handleChange} />
          </div>
          <div>
              <label for="name">Name:</label>
              <input type="text" id="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div>
              <label for="teacher">Teacher:</label>
              <input type="text" id="teacher" value={inputs.teacher} onChange={handleChange} />
          </div>
          <div>
              <label for="classroom">Classroom:</label>
              <input type="number" min="1" max="999" id="classroom" value={inputs.classroom} onChange={handleChange} />
          </div>
          <div>
              <label for="description">Description:</label>
              <textarea name="description" id="description" onChange={handleChange} defaultValue={inputs.description} ></textarea>
          </div>
          <div>
              <label for="startDate">Starting Date:</label>
              <input type="date" id="startDate" value={inputs.startDate} onChange={handleChange} />
          </div>
          <div>
              <button onClick={updateCourse}>Update Course</button>
          </div>
          <div id="error"></div>
      </form>
      </>
     )}
    </div>
)}