import React, { Component } from 'react';

class ComponenteA extends Component {
  render() {
    return <p>Componente A</p>;
  }
}

class ComponenteB extends Component {
  render() {
    return <p>Componente B</p>;
  }
}

function useConditionalRendering(mostrarA) {
  if(mostrarA) {
    return <ComponenteA></ComponenteA>
  } else {
    return <ComponenteB></ComponenteB>
  }
}

export default class ConditionalSection extends Component {
  constructor(){
    super();
    this.state = {
      mostrarA: true
    }
  }

  useConditionalRendering(mostrarA) {
    if(mostrarA) {
      return <ComponenteA></ComponenteA>
    } else {
      return <ComponenteB></ComponenteB>
    }
  }

  render() {
    return (
      <div>
        <h4>Conditional Rendering</h4>
        { useConditionalRendering(this.state.mostrarA) }
        { this.state.mostrarA ? <ComponenteA /> : <ComponenteB /> }
      </div>
    );
  }
}