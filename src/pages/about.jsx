import React from 'react'
import student1 from '../photos/student1.jpg'
import student2 from '../photos/student2.jpg'


export default function About() {
  return (
    <div>
      <br></br>
      <div className='card-container'>
        <div className="glass-card p-5 mb-5 fade-in-up">
          <h3 className="fw-bold mb-4" style={{fontSize: '2.5rem'}}>Class Map</h3>
          <p className="text-light mb-0" style={{ fontSize: '1.8rem', lineHeight: '1.8' }}>
            Class Map is designed to provide a seamless and intuitive experience for both teachers and students.
            Using this platform, professors or other administrators can create, read, and delete courses from a catalog.
            Students can browse currently available courses, add them to their cart, or register for classes. They can also 
            drop classes or view registration and starting dates.
          </p>
          <p style={{ fontSize: '0.8rem', lineHeight: '1.8' }}>Questions? Email us at Group5@final.com </p>
        </div>

        <div className="row g-4 mb-5 fade-in-up">
          <div className="col-md-6">
            <div className="glass-card p-4 h-100">
              <h4 className="fw-bold mb-3">
                For Teachers
              </h4>
              <ul className="text-light text-start" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                <li>Create new courses</li>
                <li>Edit existing courses with updated information</li>
                <li>Delete courses from catalog</li>
                <li>Manage student courses</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="glass-card p-4 h-100">
              <h4 className="fw-bold mb-3 ">
                For Students
              </h4>
              <ul className="text-light text-start" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                <li>Browse and search available courses</li>
                <li>Add and enroll courses to shopping cart</li>
                <li>View and manage your course schedule</li>
                <li>Drop courses when needed</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="glass-card p-5 mb-5 fade-in-up">
        <h3>Real Life Testimonials</h3>
        <table>
          <tr>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </td>
            <br></br>
            <td>Using this website has made it easier on my life to schedule the classes that fit my schedule.
              I would recommend this all my friends!
            </td>
            <td>
              <img
                src={student1} alt="Student 1" className="round-image"
              />
            </td>
          </tr>
          <tr>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </td>
            <br></br>
            <td>Juggling with a full time job and school has never been easier than now. With this website
              I am able to add and get rid of the classes that work with my lifestyle while maintaing my social life.
              I would recommned this to any student.
            </td>
            <td><img
              src={student2} alt="Student 2" className="round-image"
            />
            </td>
          </tr>
        </table>
      </div>
    </div>

  )
}