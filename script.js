const backendUrl = 'https://group-5-final-project-backend.onrender.com/api/courses'
async function fetchOne(id) {
    const response = await fetch(`${backendUrl}/${id}`)
    return response.json()
  }

  addEventListener("DOMContentLoaded", async () => {
    const respone = await fetchOne("68e1bd0f63af3d0a7babd0a2")
    console.log(respone)
  })