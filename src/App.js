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
      "name": "timmac"
    },
    {
      "id": 2,
      "name": "kyle"
    },
    {
      "id": 3,
      "name": "anthonyz"
    },
    {
      "id": 4,
      "name": "shroud"
    }
  ]
}
/*,
      {
        "id": 3,
        "name": "ratedepicz"
      },
      {
        "id": 4,
        "name": "xqcow"
      },
      {
        "id": 5,
        "name": "timmac"
      },
      {
        "id": 6,
        "name": "summit1g"
      },
      {
        "id": 7,
        "name": "ray__c"
      },
      {
        "id": 8,
        "name": "blaustoise"
      },
      {
        "id": 9,
        "name": "nikez"
      }
      */

const listReducer = (state, action) => {

  if (action.type == 'ADD_ITEM') {
    return {
      ...state,
      list: state.list.concat({ name: action.name, id: action.id }),
    };
  } else {
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
