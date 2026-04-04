import config from "../config";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Us</h2>
        <p style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 2.5rem", color: "var(--color-text-light)" }}>
          {config.churchName} is a welcoming place for everyone. We gather to worship,
          grow in faith, and serve our community together. Whether you've been walking
          with God for decades or are just beginning to explore, there's a place for you here.
        </p>
        <div className="info-cards">
          <div className="card">
            <h3>{config.serviceDay} Worship</h3>
            <p>{config.serviceTime} every {config.serviceDay}</p>
          </div>
          <div className="card">
            <h3>Location</h3>
            <p style={{ whiteSpace: "pre-line" }}>{config.address}</p>
          </div>
          <div className="card">
            <h3>Contact</h3>
            <p>{config.email}<br />{config.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
