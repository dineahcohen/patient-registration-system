import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddAppointment from './pages/bookAppointment';
import Login from './pages/login';
import Registration from './pages/registration';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={null} />
      <Route path="/auth/registration" component={Registration} />
      <Route path="/auth/login" component={Login} />
      <Route path="/appointment/add" component={AddAppointment} />
    </Router>
  );
}

export default App;
