import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Save, X, Camera, Shield, Heart } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    address: '123 Main Street, Anytown, ST 12345',
    dateOfBirth: '1985-06-15',
    userType: 'family',
    emergencyContact: 'John Johnson - (555) 987-6543',
    bio: 'Caring daughter looking for reliable care services for my elderly mother. We value compassion, professionalism, and trustworthiness.',
    joinDate: '2024-01-15'
  });
  const [tempData, setTempData] = useState({ ...profileData });

  const handleEdit = () => {
    setIsEditing(true);
    setTempData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...tempData });
    setIsEditing(false);
    // Here you would typically save to your backend
  };

  const handleCancel = () => {
    setTempData({ ...profileData });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getUserTypeLabel = (type) => {
    switch (type) {
      case 'family': return 'Family Member';
      case 'caregiver': return 'Professional Caregiver';
      case 'senior': return 'Senior';
      default: return 'User';
    }
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-container">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                <div className="profile-avatar-icon">
                  <User size={60} />
                </div>
                <button className="avatar-edit-btn">
                  <Camera size={16} />
                </button>
              </div>
              <div className="profile-basic-info">
                <h1>{profileData.firstName} {profileData.lastName}</h1>
                <p className="profile-type">{getUserTypeLabel(profileData.userType)}</p>
                <p className="profile-join-date">
                  Member since {new Date(profileData.joinDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long' 
                  })}
                </p>
              </div>
            </div>
            
            <div className="profile-actions">
              {!isEditing ? (
                <button onClick={handleEdit} className="btn btn-primary">
                  <Edit3 size={16} />
                  Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button onClick={handleSave} className="btn btn-primary">
                    <Save size={16} />
                    Save Changes
                  </button>
                  <button onClick={handleCancel} className="btn btn-secondary">
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Profile Content */}
          <div className="profile-content">
            <div className="profile-main">
              {/* Personal Information */}
              <div className="profile-section">
                <h2>Personal Information</h2>
                <div className="profile-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="firstName"
                          value={tempData.firstName}
                          onChange={handleChange}
                          className="profile-input"
                        />
                      ) : (
                        <div className="profile-field">
                          <User className="field-icon" />
                          <span>{profileData.firstName}</span>
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="lastName"
                          value={tempData.lastName}
                          onChange={handleChange}
                          className="profile-input"
                        />
                      ) : (
                        <div className="profile-field">
                          <User className="field-icon" />
                          <span>{profileData.lastName}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={tempData.email}
                        onChange={handleChange}
                        className="profile-input"
                      />
                    ) : (
                      <div className="profile-field">
                        <Mail className="field-icon" />
                        <span>{profileData.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={tempData.phone}
                        onChange={handleChange}
                        className="profile-input"
                      />
                    ) : (
                      <div className="profile-field">
                        <Phone className="field-icon" />
                        <span>{profileData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={tempData.address}
                        onChange={handleChange}
                        className="profile-input"
                      />
                    ) : (
                      <div className="profile-field">
                        <MapPin className="field-icon" />
                        <span>{profileData.address}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Date of Birth</label>
                    {isEditing ? (
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={tempData.dateOfBirth}
                        onChange={handleChange}
                        className="profile-input"
                      />
                    ) : (
                      <div className="profile-field">
                        <Calendar className="field-icon" />
                        <span>{new Date(profileData.dateOfBirth).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Emergency Contact</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="emergencyContact"
                        value={tempData.emergencyContact}
                        onChange={handleChange}
                        className="profile-input"
                        placeholder="Name - Phone Number"
                      />
                    ) : (
                      <div className="profile-field">
                        <Phone className="field-icon" />
                        <span>{profileData.emergencyContact}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>About Me</label>
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={tempData.bio}
                        onChange={handleChange}
                        className="profile-textarea"
                        rows="4"
                        placeholder="Tell us about yourself and your care needs..."
                      />
                    ) : (
                      <div className="profile-field bio-field">
                        <p>{profileData.bio}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="profile-sidebar">
              {/* Account Status */}
              <div className="sidebar-card">
                <h3>Account Status</h3>
                <div className="status-items">
                  <div className="status-item verified">
                    <Shield className="status-icon" />
                    <div>
                      <span className="status-label">Email Verified</span>
                      <p className="status-desc">Your email has been verified</p>
                    </div>
                  </div>
                  <div className="status-item verified">
                    <Heart className="status-icon" />
                    <div>
                      <span className="status-label">Profile Complete</span>
                      <p className="status-desc">Your profile is 100% complete</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="sidebar-card">
                <h3>Activity Summary</h3>
                <div className="quick-stats">
                  <div className="stat-item">
                    <span className="stat-number">3</span>
                    <span className="stat-label">Bookings Made</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Active Services</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5</span>
                    <span className="stat-label">Reviews Given</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="sidebar-card">
                <h3>Quick Actions</h3>
                <div className="quick-actions">
                  <button className="action-btn">Change Password</button>
                  <button className="action-btn">Privacy Settings</button>
                  <button className="action-btn">Notification Preferences</button>
                  <button className="action-btn danger">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;