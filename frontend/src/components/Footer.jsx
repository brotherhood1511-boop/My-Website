const contact = {
  email: "mailto:brotherhood1511@gmail.com",
  github: "https://github.com/brotherhood1511-boop",
  linkedin: "https://www.linkedin.com/in/dominick-siciliano-373989230",
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="contact-links">
        <a href={contact.email}>Email</a>
        <a href={contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <p>Dominick Siciliano</p>
    </footer>
  );
}
