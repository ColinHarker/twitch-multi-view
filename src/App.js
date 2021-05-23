import './App.css';
import StreamWrapper from './components/streamWrapper';
import Chat from './components/chat';
import Button from './components/button';
import data from "./data.json";


function App() {

  return (
    <div className="App">

      <header className="App-header"></header>
      <div className="Body">
        <div className="Stream-wrapper">
          <StreamWrapper data={data} />
        </div>
        <div>
          <Button btnColor="#18181b" onClick={Test} type="outline">
            Add Stream
          </Button>
          <Chat />
        </div>
      </div>
    </div>
  );
}

function Test() {
  var username = prompt('enter name');
  console.log(username);
}

export default App;
