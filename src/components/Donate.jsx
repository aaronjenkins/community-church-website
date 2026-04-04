import config from "../config";

function Donate() {
  return (
    <section id="donate" className="section section-donate">
      <div className="container">
        <h2>Support Our Mission</h2>
        <p>
          Your generosity helps us serve our community, support families in need,
          and keep our doors open to all.
        </p>
        <a
          href={config.paypalLink}
          className="btn-primary btn-donate-large"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate via PayPal
        </a>
      </div>
    </section>
  );
}

export default Donate;
