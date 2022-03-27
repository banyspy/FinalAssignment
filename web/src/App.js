import './App.css';
import axios from 'axios';
import cat_c from 'img/popcat_mouse_close.img';
import cat_o from 'img/popcat_mouse_open.img';
import BackgroundCat from './BackgroundCat.js';



const increase = async () => {
  let result = await axios.get('http://localhost:3000/increase')
  //TODO: add code that make cat open mouth
  number++;
}

const refresh = async () => {
  let result = await axios.get('http://localhost:3000/refresh')
  number = result.data;
}

var number = 0;
function App() {
  const [refreshdata, setRefreshdata] = React.useState(null);

  React.useEffect(() => {
    fetch("/refresh")
      .then((res) => res.json())
      .then((refreshdata) => setRefreshdata(refreshdata.data));
  }, []);

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
