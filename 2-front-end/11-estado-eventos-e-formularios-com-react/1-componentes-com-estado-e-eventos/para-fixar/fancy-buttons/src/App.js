import React from 'react';
import './App.css';

function handleFirstBtnClick() {
  console.log('This is the first button.');
}

function handleSecondBtnClick() {
  console.log('This is the second button.');
}

function handleThirdBtnClick() {
  console.log('This is the third button.');
}

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={handleFirstBtnClick}>(1)</button>
        <button onClick={handleSecondBtnClick}>(2)</button>
        <button onClick={handleThirdBtnClick}>(3)</button>
      </>
    );
  }
}

export default App;
