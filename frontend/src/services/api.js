const API_BASE_URL = 'http://localhost:8000/api';

// API service for making HTTP requests
class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || data.error || 'Something went wrong');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
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