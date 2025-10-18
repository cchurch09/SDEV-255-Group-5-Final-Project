const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://group-5-final-project-backend.onrender.com/';
const API_URL = `${API_BASE_URL}api/schedule`;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers['x-auth'] = `${token}`;
  }
  return headers;
};

export const scheduleService = {
  async getSchedule() {
    try {
      const response = await fetch(API_URL, {
        headers: getAuthHeaders()
      });
      if (!response.ok) throw new Error(`Failed to fetch schedule (Status: ${response.status})`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(' Fetch schedule error:', error);
      throw error;
    }
  },

  async addToSchedule(courseId) {
    try {
      const response = await fetch(`${API_URL}/add/${courseId}`, {
        method: 'POST',
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add course to schedule');
      }
      return response.json();
    } catch (error) {
      console.error(' Add to schedule error:', error);
      throw error;
    }
  },

  async removeFromSchedule(courseId) {
    try {
      const response = await fetch(`${API_URL}/remove/${courseId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to remove course from schedule');
      }
      return response.json();
    } catch (error) {
      console.error(' Remove from schedule error:', error);
      throw error;
    }
  },

  async clearSchedule() {
    try {
      const response = await fetch(`${API_URL}/clear`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to clear schedule');
      }
      return response.json();
    } catch (error) {
      console.error(' Clear schedule error:', error);
      throw error;
    }
  }
};