import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hello ( props ) {
  return <h2>{ props.title }</h2>
}

class Text extends Component {
  render() {

    const textoSegunBool = this.props.boolean ? 'Es cierto!' : 'Falso';

    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{ this.props.arrayOfNumbers.join(', ') }</p>
        <p>{ this.props.objectWithInfo.key }</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hello from props" />
      </header>
      <Text 
        arrayOfNumbers={[2,3,10]}
        objectWithInfo={{ key: 'value', key2: 'otherValue' }}
        text="Texto en string"
        number={2}
        boolean={false} />
    </div>
  );
}

export default App;
