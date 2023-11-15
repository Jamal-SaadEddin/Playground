import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import Counter from "./state-management/counter/Counter";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <TasksProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TasksProvider>
  );
}

export default App;
