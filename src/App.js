import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Registration from './pages/registration';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={null} />
      <Route path="/auth/registration" component={Registration} />
      <Route path="/add-appointment" component={null} />
    </Router>
  );
}

export default App;
