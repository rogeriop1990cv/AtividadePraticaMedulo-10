import { useEffect } from "react";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  useEffect(() => {
    document.title = "Gerenciador de Tarefas";
  }, []);

  return (
    <div className="App">
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;
