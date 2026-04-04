import config from "../config";

function Events() {
  return (
    <section id="events" className="section">
      <div className="container">
        <h2>Upcoming Events</h2>
        <p className="section-subtitle">Mark your calendar and join us.</p>
        <div className="events-list">
          {config.events.map((event, i) => (
            <div className="event-item" key={i}>
              <div className="event-date">
                <span className="month">{event.month}</span>
                <span className="day">{event.day}</span>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
