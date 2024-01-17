import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import "./styles.css"

const AddTask = () => {
  return (
    <main className="pageAddTask">
      <h1 className="pageAddTask__title">Crear Tarea</h1>
      <section className="pageAddTask__form">
        <Input />
        <Input />
        <Button />
      </section>
    </main>
  );
};

export { AddTask };
