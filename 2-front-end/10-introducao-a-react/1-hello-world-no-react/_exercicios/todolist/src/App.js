import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const thingsToDo = ['Wake up and have breakfast;', 'Study at Trybe in the morning;', 'Have some lunch because a man with an empty stomach cannot think straight;', 'Study at Trybe yet again;', 'Class is over. Relax. Play some games;', 'Sleep.'];

class App extends React.Component {
  render() {
    return (
      <ul>
        { thingsToDo.map((thing) => Task(thing)) }
      </ul>
    );
  }
}

export default App;
