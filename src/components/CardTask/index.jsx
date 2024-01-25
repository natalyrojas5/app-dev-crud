import "./style.css";

const CardTask = ({ title, description }) => {
  return (
    <article className="cardTask">
      <header className="cardTask__header">
        <h1 className="cardTask__title">{title}</h1>
        <div className="cardTask__actions">
          {/* <IoPencil /> */}
          {/* <IoTrashSharp /> */}
        </div>
      </header>
      <p className="cardTask__description">{description}</p>
    </article>
  );
};

export { CardTask };
