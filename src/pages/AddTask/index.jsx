import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import "./styles.css"

const AddTask = () => {
  return (
    <main className="pageAddTask">
      <h1 className="pageAddTask__title">Crear Tarea</h1>
      <section className="pageAddTask__form">
        <Input label="Titulo" placeholder="titulo" isTextarea={false} />
        <Input label="Descripción" placeholder="descripción" isTextarea />
        <Button text="Crear" />
      </section>
    </main>
  );
};

export { AddTask };
