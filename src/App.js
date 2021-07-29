import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Error from './components/Error';
import Navbar from './components/Navbar';
import AddAppointment from './pages/bookAppointment';
import Dashboard from './pages/dashboard';
import Landing from './pages/landing';
import Login from './pages/login';
import Registration from './pages/registration';
import ViewAppointments from './pages/viewAppointments';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route path="/auth/registration" component={Registration} />
      <Route path="/auth/login" component={Login} />
      <Route path="/appointment/add" component={AddAppointment} />
      <Route path="/appointment/view" component={ViewAppointments} />
      <Route path="/user/dashboard" component={Dashboard} />

      <Route path="/error" component={Error} />
    </Router>
  );
}

export default App;
