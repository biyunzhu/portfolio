import "./Designs.scss";
import DesignsNav from "../../components/DesignsNav/DesignsNav";
import DesignsDetail from "../../components/DesignsDetail/DesignsDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Designs({ projects, activeDesign, updateActiveDesign }) {
  const { id } = useParams();
  const designsNavItems = projects.map((design) => design.title);
  useEffect(() => {
    updateActiveDesign(id);
  }, [id, updateActiveDesign]);

  //   console.log(designsNavItems);
  return (
    <section id="designs" className="designs">
      <DesignsNav
        designsNavItems={designsNavItems}
        id={id}
        // activeDesign={activeDesign}
        // updateActiveDesign={updateActiveDesign}
      />
      <DesignsDetail design={activeDesign} />
    </section>
  );
}

export default Designs;
