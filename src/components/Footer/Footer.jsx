import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="text-xs">© {new Date().getFullYear()} Little Lemon</p>
      </div>
    </footer>
  );
}
