import "./App.css";
import Scheduler from "./Scheduler/Scheduler";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Scheduler />
      </BrowserRouter>
    </div>
  );
}

export default App;
