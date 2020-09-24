import React, { Component } from 'react';

class Contador extends Component {
  constructor(){
    super();
    this.state = { 
      contador: 1, 
      texto: "Este es el estado"
    };

    setInterval(() => {
      this.setState({ contador: this.state.contador + 1})
    }, 1000);

  }

  render () {
    return <span>{this.state.texto}: {this.state.contador}</span>
  }
}

export default Contador;