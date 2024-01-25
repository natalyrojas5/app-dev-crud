import { Button } from "../../components/Button";
import "./style.css"

const Home = () => {
  return (
    <main className="pageHome">
      <h1 className="pageHome__title">Dev Crud</h1>
      <h2 className="pageHome__subtitle">Mis tareas</h2>
      <Button text="Ingresar" />
    </main>
  );
};

export { Home };
