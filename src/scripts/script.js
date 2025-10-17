import { useState, useEffect } from 'react';

export const backendUrl = 'https://group-5-final-project-backend.onrender.com/api/courses'

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
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
    const response = await fetch(`${backendUrl}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    if (response.ok) {
      alert("Deleted Course")
    }
    return response.json()
  },

  async getCoursesID() {
    try {
      const response = await fetch(`${API_URL}/enrolled-ids`, {
        headers: getAuthHeaders()
      });
      if (!response.ok) throw new Error(`Failed to fetch enrolled course IDs (Status: ${response.status})`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch enrolled course IDs error:', error);
      throw error;
    }
}
}

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    prefix: '',
    name: '',
    teacher: '',
    classroom: '',
    description: ''
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async (search = '') => {
    try {
      setLoading(true);
      const data = await courseService.fetchAll(search);
      setCourses(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching courses:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = () => {
    fetchCourses(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    fetchCourses('');
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const courseData = {
        ...formData,
        credits: parseFloat(formData.credits) || 0
      };
      await courseService.create(courseData);
      await fetchCourses();
      handleClosePopup();
    } catch (err) {
      setError(err.message);
      console.error('Error creating course:', err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const courseData = {
        ...formData,
        credits: parseFloat(formData.credits) || 0
      };
      await courseService.update(editingCourse._id, courseData);
      await fetchCourses();
      handleClosePopup();
    } catch (err) {
      setError(err.message);
      console.error('Error updating course:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      await courseService.delete(id);
      await fetchCourses();
    } catch (err) {
      setError(err.message);
      console.error('Error deleting course:', err);
    }
  };

  const handleOpenPopup = (course = null) => {
    setEditingCourse(course);
    setFormData(course ? {
      prefix: course.prefix,
      name: course.name,
      teacher: course.teacher,
      classroom: course.classroom,
      description: course.description
    } : {
      prefix: '',
      name: '',
      teacher: '',
      classroom: '',
      description: ''
    });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setEditingCourse(null);
    setFormData({ courseNumber: '', title: '', description: '', subject: '', credits: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return {
    courses,
    loading,
    error,
    showPopup,
    editingCourse,
    formData,
    searchQuery,
    handleCreate,
    handleUpdate,
    handleDelete,
    handleOpenPopup,
    handleClosePopup,
    handleInputChange,
    handleSearch,
    handleSearchSubmit,
    handleClearSearch
  };
}
