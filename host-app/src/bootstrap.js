import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Sidebar from './Sidebar';

const Menu = React.lazy(() => import('./Menu'));

const App = () => (
  <Router>
    <Sidebar />
    <div style={{paddingLeft: '200px'}}>
      <h1>Hello from Host App!</h1>


      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </React.Suspense>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
