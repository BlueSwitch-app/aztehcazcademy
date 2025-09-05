// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ userData }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <i className="fas fa-graduation-cap"></i>
          <span>EduStream</span>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Buscar cursos, videos, asignaciones..." />
          <button><i className="fas fa-search"></i></button>
        </div>
        
        <div className="user-menu">
          <div className="notification-icon">
            <i className="fas fa-bell"></i>
            {userData.notifications > 0 && (
              <span className="notification-badge">{userData.notifications}</span>
            )}
          </div>
          
          <div className="user-profile">
            <img src={userData.avatar} alt="Usuario" className="user-avatar" />
            <span className="user-name">{userData.name}</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;