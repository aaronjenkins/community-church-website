import { useState, useEffect } from "react";
import config from "../config";

function Sermons() {
  const [videoId, setVideoId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const rssUrl =
      "https://api.allorigins.win/raw?url=" +
      encodeURIComponent(
        "https://www.youtube.com/feeds/videos.xml?user=" + config.youtubeHandle
      );

    fetch(rssUrl)
      .then((res) => res.text())
      .then((xml) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "application/xml");
        const entry = doc.querySelector("entry");
        if (entry) {
          setVideoId(entry.querySelector("videoId").textContent);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  return (
    <section id="sermons" className="section section-alt">
      <div className="container">
        <h2>Watch Our Sermons</h2>
        <p className="section-subtitle">Catch up on recent messages or watch live on Sundays.</p>
        <div className="video-embed">
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Church Sermons"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : error ? (
            <p style={{ textAlign: "center", padding: "2rem" }}>
              Unable to load latest video.{" "}
              <a href={config.youtube} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
            </p>
          ) : null}
        </div>
        <p className="cta-text">
          <a href={config.youtube} target="_blank" rel="noopener noreferrer">
            Visit our YouTube Channel &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}

export default Sermons;
