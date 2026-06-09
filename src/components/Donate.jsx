import config from "../config";

function Donate() {
  return (
    <section id="donate" className="section section-donate">
      <div className="container">
        <h2>{config.donate.heading}</h2>
        <p>{config.donate.body}</p>
        <a
          href={config.paypalLink}
          className="btn-primary btn-donate-large"
          target="_blank"
          rel="noopener noreferrer"
        >
          {config.donate.button}
        </a>
      </div>
    </section>
  );
}

export default Donate;
