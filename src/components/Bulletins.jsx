import config from "../config";

function Bulletins() {
  const { latestFileId, folderUrl } = config.bulletins;
  const hasLatest =
    latestFileId && latestFileId !== "PLACEHOLDER_BULLETIN_FILE_ID";

  return (
    <section id="bulletins" className="section">
      <div className="container">
        <h2>Weekly Bulletin</h2>
        <p className="section-subtitle">
          Catch up on this week's announcements, schedule, and prayer list.
        </p>

        <div className="bulletin-embed">
          {hasLatest ? (
            <iframe
              src={`https://drive.google.com/file/d/${latestFileId}/preview`}
              title="Latest Bulletin"
              allow="autoplay"
            />
          ) : (
            <p style={{ textAlign: "center", padding: "2rem" }}>
              This week's bulletin will appear here soon.
            </p>
          )}
        </div>

        <p className="cta-text">
          <a href={folderUrl} target="_blank" rel="noopener noreferrer">
            Browse past bulletins &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}

export default Bulletins;
