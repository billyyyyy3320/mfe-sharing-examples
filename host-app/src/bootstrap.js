import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Sidebar from './Sidebar';

const Menu = React.lazy(() => import('./Menu'));
const Rocket = React.lazy(() => import('MicroFrontend1/Rocket'));
const Lamp = React.lazy(() => import('MicroFrontend2/Lamp'));

const App = () => (
  <Router>
    <Sidebar />
    <div style={{paddingLeft: '200px'}}>
      <h1>Hello from Host App!</h1>


      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/rocket" element={<Rocket />} />
          <Route path="/lamp" element={<Lamp />} />
        </Routes>
      </React.Suspense>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
