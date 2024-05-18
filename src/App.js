import { useEffect, useState } from "react";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import PaginaLogin from "./pages/login/PaginaLogin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.title = "Gerenciador de Tarefas";
  }, []);

  if (isAuthenticated) {
    return (
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    );
  }

  return (
    <div className="App">
      <PaginaLogin isAuthenticated={setIsAuthenticated}/>
    </div>
  );
}

export default App;
