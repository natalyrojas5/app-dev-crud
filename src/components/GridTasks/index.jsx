import { CardTask } from "../CardTask";
import "./style.css";

export const EmptyGridTasks = () => {
  return <p className="gridTasks__textEmpty">Sin resultados</p>;
};

const GridTasks = ({ tasks }) => {
  const hasTask = tasks.length > 0;

  return (
    <section className="gridTasks">
      {hasTask ? (
        tasks.map((task) => (
          <CardTask
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))
      ) : (
        <EmptyGridTasks />
      )}
    </section>
  );
};

export { GridTasks };
