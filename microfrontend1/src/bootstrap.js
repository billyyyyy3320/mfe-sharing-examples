import React from 'react';
import ReactDOM from 'react-dom';

import Rocket from './Rocket'

const App = () => {
  return <div >
    <h1>Micro Frontend 1</h1>
    <Rocket />
  </div>
};

ReactDOM.render(<App />, document.getElementById('app'));
