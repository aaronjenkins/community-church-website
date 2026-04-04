import config from "../config";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {config.churchName}. All rights reserved.</p>
        <div className="footer-links">
          <a href={config.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href={config.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
