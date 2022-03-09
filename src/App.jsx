import "./App.css";
import { useState, useEffect} from "react";
import { Timer } from "./components/Timer";

function App() {
  const [initialTime, setInitialTime] = useState(new Date().getSeconds());
  const [endTime, setEndTime] = useState(new Date().getSeconds() + 10);
 const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setInitialTime((pre) => {
        if (pre === endTime) {
          clearInterval(id);
          return endTime;
        } else {
          return pre + 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="App">
      <h1>Timer App...</h1>
      {show ? <Timer int={initialTime} end={endTime} /> : ""}
      <button onClick = {() => {
        show ? setShow(false) : setShow(true);
      }}><h2>{show ? "Hide Timer" : "Show Timer"}</h2></button>
    </div>
  );
}

export default App;
