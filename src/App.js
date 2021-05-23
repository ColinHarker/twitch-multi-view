import './App.css';
import StreamWrapper from './components/streamWrapper';
import Chat from './components/chat';
import Button from './components/button';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from "./data.json";

const initList = {
  streamList: [
    {
      "id": 1,
      "name": "kyliebitkin"
    },
    {
      "id": 2,
      "name": "buddha"
    }
  ]
}

const listReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: state.list.concat({ name: action.name, id: action.id }),
      };
    default:
      throw new Error();
  }
};

function App() {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initList,
    isShowList: true,
  });
  //const [list, setList] = React.useState(initList);
  const [name, setName] = React.useState('');

  function handleListChange(sName) {
    setName(sName);
  }

  function handleListAdd() {
    dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });
    //const newList = list.concat({ name, id: uuidv4() });
    //setList(newList);

    setName('');
  }

  function Test() {
    var username = prompt('Enter Stream Name');
    console.log(username);
    if (username != null) {
      handleListChange(username);
      handleListAdd();
    }
  }


  return (
    <div className="App">

      <header className="App-header"></header>
      <div className="Body">
        <div className="Stream-wrapper">
          <StreamWrapper data={listData.list.streamList} />
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


export default App;
