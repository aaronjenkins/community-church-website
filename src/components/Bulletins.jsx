// Bulletins are PDFs committed to the top-level bulletins/ folder (named
// MMDDYYYY.pdf). Vite enumerates them at build time, so the client just drops a
// new PDF in that folder on GitHub — no config edit needed. UI shows the newest.
const pdfs = import.meta.glob("/bulletins/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

// Parse MMDDYYYY out of the filename into a real date for sorting/display.
function parseBulletin(path, url) {
  const name = path.split("/").pop();
  const m = name.match(/(\d{2})(\d{2})(\d{4})/);
  const date = m ? new Date(Number(m[3]), Number(m[1]) - 1, Number(m[2])) : null;
  return { name, url, date: date && !isNaN(date) ? date : null };
}

const bulletins = Object.entries(pdfs)
  .map(([path, url]) => parseBulletin(path, url))
  .sort((a, b) => {
    if (a.date && b.date) return b.date - a.date; // newest first
    if (a.date) return -1;
    if (b.date) return 1;
    return b.name.localeCompare(a.name);
  });

const latest = bulletins[0] || null;

function Bulletins() {
  const dateLabel = latest?.date
    ? latest.date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <section id="bulletins" className="section">
      <div className="container">
        <h2>Weekly Bulletin</h2>
        <p className="section-subtitle">
          {dateLabel
            ? `This week's bulletin — ${dateLabel}`
            : "This week's announcements, schedule, and prayer list."}
        </p>

        <div className="bulletin-embed">
          {latest ? (
            <iframe
              src={`${latest.url}#toolbar=0&navpanes=0`}
              title="Latest Bulletin"
            />
          ) : (
            <p style={{ textAlign: "center", padding: "2rem" }}>
              This week's bulletin will appear here soon.
            </p>
          )}
        </div>

        {latest && (
          <p className="cta-text">
            <a href={latest.url} target="_blank" rel="noopener noreferrer">
              Open bulletin in a new tab &rarr;
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

export default Bulletins;
