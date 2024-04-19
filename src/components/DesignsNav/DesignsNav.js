import "./DesignsNav.scss";
import { Link } from "react-router-dom";

function DesignsNav({ designsNavItems, activeDesign, updateActiveDesign }) {
  return (
    <section className="designs-nav">
      {designsNavItems.map((design, index) => (
        <Link
          to={`/designs/${index}`}
          className="designs-nav__item"
          key={index}
          //   onClick={() => updateActiveDesign(index)}
        >
          {design}
        </Link>
      ))}
    </section>
  );
}

export default DesignsNav;
