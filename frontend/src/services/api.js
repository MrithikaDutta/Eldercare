import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// API service for making HTTP requests
class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem('access_token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };

    try {
      const response = await axios({
        url,
        method: options.method || 'GET',
        headers,
        data: options.body ? JSON.parse(options.body) : undefined,
      });

      // If response has no content, return null
      if (response.status === 204 || !response.data) {
        return null;
      }
      return response.data;
    } catch (error) {
      // Axios error handling
      if (error.response && error.response.data) {
        throw new Error(error.response.data.detail || error.response.data.error || 'Something went wrong');
      }
      throw error;
    }
  }

  // Authentication methods
  async registerCustomer(email, password) {
    return this.request('/users/register/elder/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async registerProvider(email, password, phone) {
    return this.request('/users/register/provider/', {
      method: 'POST',
      body: JSON.stringify({ email, password, phone }),
    });
  }

  async loginCustomer(email, password) {
    return this.request('/users/login/customer/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async loginProvider(email, password) {
    return this.request('/users/login/provider/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async logoutCustomer(refreshToken) {
    return this.request('/users/logout/customer/', {
      method: 'POST',
      body: JSON.stringify({ refresh: refreshToken }),
    });
  }

  async logoutProvider(refreshToken) {
    return this.request('/users/logout/provider/', {
      method: 'POST',
      body: JSON.stringify({ refresh: refreshToken }),
    });
  }

  // Data fetching methods
  async getProviders() {
    return this.request('/users/provider_profiles/');
  }

  async getUsers() {
    return this.request('/users/users/');
  }
}

export default new ApiService();