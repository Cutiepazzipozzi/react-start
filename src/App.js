import {useState} from "react"


function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
          setCounter((counter) => counter + 1);
      }
  return (
          <div>
              <h1>Total Clicks: {`${counter}번`}</h1>
              <button onClick={onClick}>Click!!</button>
          </div>
      );
  }


export default App;
