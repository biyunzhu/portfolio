import "./Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact__info">
        <div className="contact__card">
          <a className="contact__link" href="mailto:zhuby85@gmail.com">
            zhuby85@gmail.com
          </a>
        </div>
        <div className="contact__card">
          <a className="contact__link" href="https://linkedin.com/in/biyunzhu/">
            LinkedIn
          </a>
        </div>
        <div className="contact__card">
          <a className="contact__link" href="https://github.com/in/biyunzhu/">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
