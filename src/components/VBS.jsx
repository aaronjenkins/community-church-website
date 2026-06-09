import config from "../config";

function VBS() {
  const vbs = config.vbs;

  return (
    <section id="vbs" className="section section-alt">
      <div className="container">
        <h2>{vbs.title}</h2>
        <p className="section-subtitle">{vbs.description}</p>

        <div className="info-cards">
          <div className="card">
            <h3>When</h3>
            <p>{vbs.dates}<br />{vbs.time}</p>
          </div>
          <div className="card">
            <h3>Who</h3>
            <p>{vbs.ages}</p>
          </div>
          <div className="card">
            <h3>Cost</h3>
            <p>Free &mdash; everyone welcome</p>
          </div>
        </div>

        <p className="cta-text" style={{ marginTop: "2.5rem" }}>
          <a href={vbs.registerUrl} className="btn-primary">
            {vbs.registerLabel}
          </a>
        </p>
      </div>
    </section>
  );
}

export default VBS;
