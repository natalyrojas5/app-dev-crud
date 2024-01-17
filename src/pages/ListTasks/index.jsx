import { Button } from "../../components/Button";
import { GridTasks } from "../../components/GridTasks";

import "./style.css"

const ListTasks = () => {
  return (
    <main className="pageListTasks">
      <header className="pageListTasks__header">
        <h1 className="pageListTasks__title">Listado de Tareas</h1>
        <Button />
      </header>
      <GridTasks />
    </main>
  );
};

export { ListTasks };
