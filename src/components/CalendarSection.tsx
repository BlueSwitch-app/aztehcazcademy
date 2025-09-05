// src/components/CalendarSection.js
import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import './CalendarSection.css';

const CalendarSection = ({ events }) => {
  const calendarRef = useRef(null);
  
  useEffect(() => {
    const calendarEl = calendarRef.current;
    
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      locale: esLocale,
      height: 'auto',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      events: events.map(event => ({
        title: event.title,
        start: `2023-06-${event.date}`,
        color: event.color
      }))
    });
    
    calendar.render();
    
    return () => {
      calendar.destroy();
    };
  }, [events]);

  return (
    <div className="calendar-section">
      <div className="section-title">
        <h2>Calendario</h2>
        <a href="#" className="view-all">Ver todo</a>
      </div>
      
      <div ref={calendarRef} id="calendar"></div>
      
      <div className="upcoming-events">
        <h3>Próximos Eventos</h3>
        
        {events.map(event => (
          <div key={event.id} className="event-item">
            <div className="event-date">
              <div className="event-day">{event.date}</div>
              <div className="event-month">{event.month}</div>
            </div>
            <div className="event-info">
              <div className="event-title">{event.title}</div>
              <div className="event-course">{event.course}</div>
              <div className="event-time">
                <i className="fas fa-clock"></i> {event.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSection;