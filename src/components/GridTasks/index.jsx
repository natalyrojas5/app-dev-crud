import { CardTask } from "../CardTask";
import "./style.css"

const tasks = [
  {
    id: 1,
    title: "Title",
    description: "Description",
  },
];

export const EmptyGridTasks = () => {
  return <p className="gridTasks__textEmpty">Sin resultados</p>;
};

const GridTasks = () => {
  const hasTask = tasks.length > 0;

  return (
    <section className="gridTasks">
      {hasTask ? (
        tasks.map((task) => <CardTask key={task.id} />)
      ) : (
        <EmptyGridTasks />
      )}
    </section>
  );
};

export { GridTasks };
