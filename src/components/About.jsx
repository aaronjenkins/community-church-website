import config from "../config";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>{config.about.heading}</h2>
        <p style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 2.5rem", color: "var(--color-text-light)" }}>
          {config.about.body}
        </p>
        <div className="info-cards">
          <div className="card">
            <h3>{config.about.worshipCardTitle}</h3>
            <p>{config.about.worshipCardText}</p>
          </div>
          <div className="card">
            <h3>{config.about.locationCardTitle}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{config.address}</p>
          </div>
          <div className="card">
            <h3>{config.about.contactCardTitle}</h3>
            <p>{config.email}<br />{config.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
