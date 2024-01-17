import "./style.css";

const CardTask = () => {
  return (
    <article className="cardTask">
      <header className="cardTask__header">
        <h1 className="cardTask__title">Titulo</h1>
        <div className="cardTask__actions">
          {/* <IoPencil /> */}
          {/* <IoTrashSharp /> */}
        </div>
      </header>
      <p className="cardTask__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat nulla
        fuga aperiam omnis iure ex id exercitationem ut reprehenderit nostrum,
        dolorem eveniet officia repellendus repudiandae quia beatae illum at
        voluptates.
      </p>
    </article>
  );
};

export { CardTask };
