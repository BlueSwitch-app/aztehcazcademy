// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { id: 1, icon: 'home', label: 'Inicio', active: true },
    { id: 2, icon: 'book', label: 'Mis Cursos' },
    { id: 3, icon: 'play-circle', label: 'Videos' },
    { id: 4, icon: 'tasks', label: 'Asignaciones' },
    { id: 5, icon: 'calendar-alt', label: 'Calendario' },
    { id: 6, icon: 'comments', label: 'Foros' },
    { id: 7, icon: 'chart-line', label: 'Progreso' },
    { id: 8, icon: 'certificate', label: 'Certificados' },
    { id: 9, icon: 'cog', label: 'Configuración' }
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map(item => (
          <li key={item.id}>
            <a href="#" className={item.active ? 'active' : ''}>
              <i className={`fas fa-${item.icon}`}></i>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;