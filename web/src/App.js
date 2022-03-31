import './App.css';
import axios from 'axios';
import cat_c from './img/popcat_mouse_close.png'
import cat_o from './img/popcat_mouse_open.png'
import BackgroundCat from './BackgroundCat.js';



const increase = async () => {
  let result = await axios.get('http://localhost:9000/increase')
  //TODO: add code that make cat open mouth
  number++;
}

const refresh = async () => {
  let result = await axios.get('http://localhost:9000/refresh')
  number = result.data;
}

var number = 0;
function App() {
  return (
    <div className="App">
      <BackgroundCat/>
      <p1>{number}</p1>
      <button onClick={increase}>increase</button>
      <button onClick={refresh}>refresh</button>
    </div>
  );
}

export default App;
