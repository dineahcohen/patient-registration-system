import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Login from './pages/login';
// import Registration from './pages/registration';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={null} />
      <Route path="/auth/login" component={null} />
      <Route path="/auth/registration" component={null} />
      <Route path="/add-appointment" component={null} />
    </Router>
  );
}

export default App;
