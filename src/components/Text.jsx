import React, { Component } from 'react';

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

export default Text;