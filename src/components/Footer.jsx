import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Rachel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
