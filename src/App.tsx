// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardStats from './components/DashboardStats';
import VideoList from './components/VideoList';
import CalendarSection from './components/CalendarSection';
import AssignmentList from './components/AssigmentList';
import './App.css';

function App() {
  const [userData, setUserData] = useState({
    name: 'Carlos Rodríguez',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    notifications: 3
  });

  const [stats, setStats] = useState([
    { id: 1, title: '5', subtitle: 'Cursos activos', icon: 'book-open', color: 'blue' },
    { id: 2, title: '68%', subtitle: 'Progreso general', icon: 'check-circle', color: 'green' },
    { id: 3, title: '3', subtitle: 'Asignaciones pendientes', icon: 'clock', color: 'orange' }
  ]);

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Introducción a React Hooks',
      course: 'Desarrollo Web',
      views: '1,245',
      duration: '12:45',
      progress: 65,
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Análisis de Datos con Pandas',
      course: 'Ciencia de Datos',
      views: '892',
      duration: '18:30',
      progress: 30,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Estrategias de SEO Avanzado',
      course: 'Marketing Digital',
      views: '567',
      duration: '22:15',
      progress: 10,
      thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      date: '15',
      month: 'JUN',
      title: 'Entrega Proyecto Final',
      course: 'Desarrollo Web',
      time: '23:59',
      color: '#F39C12'
    },
    {
      id: 2,
      date: '18',
      month: 'JUN',
      title: 'Clase en Vivo: Machine Learning',
      course: 'Ciencia de Datos',
      time: '18:00',
      color: '#0A2463'
    },
    {
      id: 3,
      date: '22',
      month: 'JUN',
      title: 'Examen Parcial',
      course: 'Marketing Digital',
      time: '10:00',
      color: '#2ECC71'
    }
  ]);

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      type: 'Proyecto',
      title: 'Aplicación Web con React',
      course: 'Desarrollo Web - Módulo 4',
      dueDate: '15 Jun, 23:59',
      progress: 40
    },
    {
      id: 2,
      type: 'Cuestionario',
      title: 'Evaluación de Pandas',
      course: 'Ciencia de Datos - Módulo 2',
      dueDate: '17 Jun, 23:59',
      progress: 0
    },
    {
      id: 3,
      type: 'Ensayo',
      title: 'Estrategias de Contenido',
      course: 'Marketing Digital - Módulo 3',
      dueDate: '20 Jun, 23:59',
      progress: 15
    }
  ]);

  return (
    <div className="app">
      <Header userData={userData} />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <div className="dashboard-header">
            <h1>Bienvenido de nuevo, {userData.name}</h1>
            <p>Continúa tu aprendizaje donde lo dejaste</p>
          </div>

          <DashboardStats stats={stats} />
          
          <div className="content-sections">
            <VideoList videos={videos} />
            <CalendarSection events={events} />
          </div>
          
          <AssignmentList assignments={assignments} />
        </main>
      </div>
    </div>
  );
}

export default App;