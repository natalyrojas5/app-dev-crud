import "./style.css";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const EditTask = () => {
  return (
    <main className="pageEditTask">
      <h1>Editar Tarea</h1>
      <section
        style={{
          width: "100%",
        }}
      >
        <Input label="Titulo" placeholder="titulo" isTextarea={false} />
        <Input label="Descripción" placeholder="descripción" isTextarea />
        <Button text="Editar" />
      </section>
    </main>
  );
};

export { EditTask };
