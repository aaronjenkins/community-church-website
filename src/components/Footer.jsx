import config from "../config";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {config.churchName}. {config.footer.rights}</p>
        <div className="footer-links">
          <a href={config.youtube} target="_blank" rel="noopener noreferrer">{config.footer.youtube}</a>
          <a href={config.facebook} target="_blank" rel="noopener noreferrer">{config.footer.facebook}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
