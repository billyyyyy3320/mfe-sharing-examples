import React from 'react';
import ReactDOM from 'react-dom';

import Lamp from './Lamp'

const App = () => {
  return <div >
    <h1>Micro Frontend 2</h1>
    <Lamp />
  </div>
};

ReactDOM.render(<App />, document.getElementById('app'));
