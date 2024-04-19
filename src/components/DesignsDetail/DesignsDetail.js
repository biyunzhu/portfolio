import "./DesignsDetail.scss";

function DesignsDetail({ design }) {
  const { images } = design;
  return (
    <section className="designs-detail">
      {images &&
        images.map((image, index) => (
          <img className="designs-detail__image" src={image} key={index} />
        ))}
    </section>
  );
}

export default DesignsDetail;
