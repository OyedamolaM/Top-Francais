import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} TopFrancais Academy. All rights reserved.</p>
    </footer>
  );
}
