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
          I value clarity, empathy, and integrity above all else. These ideals
          guide my approach to problem solving and life in general.
        </p>
      </div>
      <img className="hero__image" src={profile} alt="headshot" />
    </section>
  );
}

export default Hero;
