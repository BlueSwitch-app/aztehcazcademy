// src/components/DashboardStats.js
import React from 'react';
import './DashboardStats.css';

const DashboardStats = ({ stats }) => {
  return (
    <div className="dashboard-stats">
      {stats.map(stat => (
        <div key={stat.id} className="stat-card">
          <div className={`stat-icon ${stat.color}`}>
            <i className={`fas fa-${stat.icon}`}></i>
          </div>
          <div className="stat-info">
            <h3>{stat.title}</h3>
            <p>{stat.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;