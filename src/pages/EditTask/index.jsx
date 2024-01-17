import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const EditTask = () => {
  return (
    <main className="pageEditTask">
      <h1>Editar Tarea</h1>
      <section>
        <Input />
        <Input />
        <Button />
      </section>
    </main>
  );
};

export { EditTask };
