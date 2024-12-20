import "./Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact__info">
        <a className="contact__link" href="mailto:zhuby85@gmail.com">
          <div className="contact__card">Email</div>
        </a>
        <a className="contact__link" href="https://linkedin.com/in/biyunzhu/">
          <div className="contact__card">LinkedIn</div>
        </a>
        <a className="contact__link" href="https://github.com/biyunzhu/">
          <div className="contact__card">GitHub</div>
        </a>
        <a
          className="contact__link"
          href="https://www.upwork.com/freelancers/~01c49dc63d23e5919d"
        >
          <div className="contact__card">Upwork</div>
        </a>
      </div>
    </section>
  );
}

export default Contact;
