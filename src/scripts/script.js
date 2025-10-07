const backendUrl = 'https://group-5-final-project-backend.onrender.com/api/courses'

export const courses = {
  async fetchAll() {
    try {
      const response = await fetch(backendUrl)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  },

  async fetchOne(id) {
    const response = await fetch(`${backendUrl}/${id}`)
    return response.json()
  },

  //requires data in form of object
  async create(courseData) {
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(courseData),
    })
    if (response.ok) {
      alert("Created Course")
    }
    return response.json()
  },

  async update(id, courseData) {
    const response = await fetch(`${backendUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(courseData),
    })
    if (response.ok) {
      alert("Updated Course")
    }
    return response.json()
  },

  async delete(id) {
    const response = await fetch(`${backendUrl}/${id}`, { 
      method: 'DELETE' 
    })
    if (response.ok) {
      alert("Deleted Course")
    }
    return response.json()
  }
}