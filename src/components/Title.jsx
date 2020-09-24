import React, { Component } from 'react';

class Title extends Component {
  render () {
    return <h3>{this.props.text}</h3>
  }
}

Title.defaultProps = {
  text: 'Título por defecto'
}

export default Title;