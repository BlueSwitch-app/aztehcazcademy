// src/components/CalendarSection.js
import React from 'react';
import './CalendarSection.css';
interface props{
    events: any
}
const CalendarSection: React.FC<props> = ({ events }) => {
  // Generar días del mes actual (junio 2023)
  const daysInMonth = 30;
  const firstDayOfMonth = 4; // 0 = domingo, 1 = lunes, ..., 4 = jueves
  const calendarDays = [];

  // Agregar días vacíos al inicio
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }

  // Agregar días del mes
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = events.filter((event: any )=> parseInt(event.date) === day);
    calendarDays.push(
      <div key={`day-${day}`} className={`calendar-day ${dayEvents.length > 0 ? 'has-events' : ''}`}>
        <div className="day-number">{day}</div>
        {dayEvents.length > 0 && (
          <div className="day-events">
            {dayEvents.slice(0, 2).map((event: any) => (
              <div 
                key={event.id} 
                className="event-dot" 
                style={{ backgroundColor: event.color }}
                title={event.title}
              ></div>
            ))}
            {dayEvents.length > 2 && (
              <div className="more-events">+{dayEvents.length - 2}</div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="calendar-section">
      <div className="section-title">
        <h2>Calendario</h2>
        <a href="#" className="view-all">Ver todo</a>
      </div>
      
      <div className="calendar-container">
        <div className="calendar-header">
          <div className="month-year">Junio 2023</div>
          <div className="calendar-nav">
            <button className="nav-button"><i className="fas fa-chevron-left"></i></button>
            <button className="nav-button"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
        
        <div className="calendar-weekdays">
          {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>
        
        <div className="calendar-grid">
          {calendarDays}
        </div>
      </div>
      
      <div className="upcoming-events">
        <h3>Próximos Eventos</h3>
        
        {events.map((event: any) => (
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