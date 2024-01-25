import { Button } from "../../components/Button";
import { GridTasks } from "../../components/GridTasks";

import "./style.css";

const tasks = [
  {
    id: 1,
    title: "Title",
    description: "Description",
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description",
  },
];

const ListTasks = () => {
  return (
    <main className="pageListTasks">
      <header className="pageListTasks__header">
        <h1 className="pageListTasks__title">Listado de Tareas</h1>
        <Button text="Agregar" />
      </header>
      <GridTasks tasks={tasks} />
    </main>
  );
};

export { ListTasks };
