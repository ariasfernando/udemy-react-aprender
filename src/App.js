import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import Text from './components/Text';
import Contador from './components/Contador';
import ConditionalSection from './sections/conditional';
import LoginButton from './sections/loginButton';

function Hello ( props ) {
  return <h3>{ props.title }</h3>
}

function App() {
  return (
    <div className="App">

      <section>
        <h2>Componentes básicos</h2>
        <Title />
        <Hello title="Hello from props" />
      </section>

      <section>
        <h2>Props</h2>
        <Text 
        arrayOfNumbers={[2,3,10]}
        objectWithInfo={{ key: 'value', key2: 'otherValue' }}
        text="Texto en string"
        multiply={ (number) => number * 4 }
        number={2}
        boolean={false}
        title={<h1>Este es el título</h1>} />
      </section>

      <section>
        <h2>Estado</h2>
        <Contador />
      </section>

      <section>
        <h2>Rendering Condicional</h2>
        <ConditionalSection />
        <LoginButton />
      </section>

    </div>
  );
}

export default App;
