export const backendUrl = 'https://group-5-final-project-backend.onrender.com/api/courses'

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers['x-auth'] = `${token}`;
  }
  return headers;
}

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
      headers: getAuthHeaders(),
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
      headers: getAuthHeaders(),
      body: JSON.stringify(courseData),
    })
    if (response.ok) {
      alert("Updated Course")
    }
    return response.json()
  },

  async delete(id) {
    try {
    const response = await fetch(`${backendUrl}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    if (response.ok) {
      alert("Deleted Course")
    }
    return response.json()
  }
  catch (error) {
    console.error("Delete Error: ")
    throw error
  }
  },

  async getCoursesID() {
    try {
      const response = await fetch(`${API_URL}/enrolled-ids`, {
        headers: getAuthHeaders()
      })
      if (!response.ok) throw new Error(`Failed to fetch enrolled course IDs (Status: ${response.status})`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Fetch enrolled course IDs error:', error)
      throw error
    }
}
}
