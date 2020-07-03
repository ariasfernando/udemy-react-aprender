import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title';

function Hello ( props ) {
  return <h2>{ props.title }</h2>
}

class Text extends Component {
  render() {

    const { arrayOfNumbers, multiply, objectWithInfo, title } = this.props;

    const textoSegunBool = this.props.boolean ? 'Es cierto!' : 'Falso';
    const mappedNumbers = arrayOfNumbers.map(multiply);

    return (
      <div>
        {title}
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{ mappedNumbers.join(', ') }</p>
        <p>{ objectWithInfo.key }</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Hello title="Hello from props" />
      <Title />
      <Text 
        arrayOfNumbers={[2,3,10]}
        objectWithInfo={{ key: 'value', key2: 'otherValue' }}
        text="Texto en string"
        multiply={ (number) => number * 4 }
        number={2}
        boolean={false}
        title={<h1>Este es el título</h1>} />
    </div>
  );
}

export default App;
