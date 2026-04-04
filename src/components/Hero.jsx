import config from "../config";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome Home</h1>
        <p>{config.tagline}</p>
        <a href="#about" className="btn-primary">Learn More</a>
      </div>
    </section>
  );
}

export default Hero;
