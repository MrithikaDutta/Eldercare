import React, { createContext, useContext, useState, useEffect } from 'react';
import ApiService from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const token = localStorage.getItem('access_token');
    const userData = localStorage.getItem('user_data');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, userType) => {
    try {
      let response;
      if (userType === 'customer') {
        response = await ApiService.loginCustomer(email, password);
      } else {
        response = await ApiService.loginProvider(email, password);
      }

      // Store tokens and user data
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      localStorage.setItem('user_data', JSON.stringify({
        id: response.user_id,
        email: response.email,
        user_type: response.user_type,
      }));

      setUser({
        id: response.user_id,
        email: response.email,
        user_type: response.user_type,
      });

      return response;
    } catch (error) {
      throw error;
    }
  };

  const register = async (email, password, userType, phone = '') => {
    try {
      let response;
      if (userType === 'customer') {
        response = await ApiService.registerCustomer(email, password);
      } else {
        response = await ApiService.registerProvider(email, password, phone);
      }

      // Store tokens and user data
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      localStorage.setItem('user_data', JSON.stringify({
        id: response.user_id,
        email: response.email,
        user_type: response.user_type,
      }));

      setUser({
        id: response.user_id,
        email: response.email,
        user_type: response.user_type,
      });

      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken && user) {
        if (user.user_type === 'customer') {
          await ApiService.logoutCustomer(refreshToken);
        } else {
          await ApiService.logoutProvider(refreshToken);
        }
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage and state
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_data');
      setUser(null);
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};