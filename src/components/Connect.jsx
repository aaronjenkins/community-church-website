import config from "../config";

function Connect() {
  const fbEmbedUrl =
    "https://www.facebook.com/plugins/page.php?href=" +
    encodeURIComponent(config.facebook) +
    "&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";

  return (
    <section id="connect" className="section section-alt">
      <div className="container">
        <h2>Connect With Us</h2>
        <p className="section-subtitle">See what's happening on our Facebook page.</p>
        <div className="facebook-embed">
          <iframe
            src={fbEmbedUrl}
            width="500"
            height="600"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </section>
  );
}

export default Connect;
