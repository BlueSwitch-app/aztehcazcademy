// src/components/AssignmentList.js
import React from 'react';
import './AssignmentList.css';

interface Props{
    assignments: any
}

const AssignmentList: React.FC<Props> = ({ assignments }) => {
  return (
    <div className="assignments-section">
      <div className="section-title">
        <h2>Asignaciones Pendientes</h2>
        <a href="#" className="view-all">Ver todas</a>
      </div>
      
      <div className="assignment-list">
       {assignments.map((assignment: any) => (
          <div key={assignment.id} className="assignment-card">
            <div className="assignment-header">
              <div className="assignment-type">{assignment.type}</div>
            </div>
            <h3 className="assignment-title">{assignment.title}</h3>
            <div className="assignment-course">{assignment.course}</div>
            <div className="assignment-due">
              <i className="fas fa-calendar-alt"></i> Entrega: {assignment.dueDate}
            </div>
            <div className="assignment-progress">
              <div className="video-progress">
                <div className="progress-fill" style={{ width: `${assignment.progress}%` }}></div>
              </div>
              <div style={{ fontSize: '14px', color: '#777' }}>
                Progreso: {assignment.progress}%
              </div>
            </div>
            <div className="assignment-actions">
              <a href="#" className="btn-small btn-primary">
                {assignment.progress > 0 ? 'Continuar' : 'Comenzar'}
              </a>
              <a href="#" className="btn-small btn-outline">Ver Detalles</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentList;