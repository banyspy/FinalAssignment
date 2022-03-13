import './App.css';
import axios from 'axios';

const increase = async () => {
  let result = await axios.get('http://localhost:3000/increase')
  number++;
}

const refresh = async () => {
  let result = await axios.get('http://localhost:3000/refresh')
  number = result.data;
}

var number = 0;
function App() {
  return (
    <div className="App">
      <p1>{number}</p1>
      <button onClick={increase}>Click Me</button>
      <button onClick={refresh}>Click Me</button>
    </div>
  );
}

export default App;