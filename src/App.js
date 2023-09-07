import "./App.css";
import { BrowserRouter } from "react-router-dom";
import TomorrowSchedule from "./TomorrowSchedule/TomorrowSchedule";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <TomorrowSchedule/>
      </BrowserRouter>
    </div>
  );
}

export default App;
