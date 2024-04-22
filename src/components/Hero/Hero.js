import "./Hero.scss";
import profile from "../../assests/images/profile.png";

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__text">
        <h1 className="hero__title">
          Hi, I'm Biyun Zhu.
          <br />
          I'm a{" "}
          <span className="hero__title--highlight">website designer.</span>
        </h1>
        <p className="hero__description">
          With a robust background in UX research and product management, I
          bring a unique perspective to website design, prioritizing user needs
          and business objectives. Leveraging my expertise, I create visually
          captivating websites that not only engage users but also drive
          conversions and achieve strategic goals.
        </p>
      </div>
      <img className="hero__image" src={profile} alt="headshot" />
    </section>
  );
}

export default Hero;
