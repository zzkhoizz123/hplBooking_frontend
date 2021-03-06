import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Price from './components/Price';

import Home from './components/Home';
import Signin from './components/Signin';
import Patient from './components/Patient/PatientPage';
import Doctor from './components/Doctor/DoctorPage';
import Admin from './components/Admin/AdminPage';

require('./css/App.css');
require('./css/bootstrap.css');
require('./css/font-awesome.min.css');


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>   
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/patient' render = {(props) => <Patient {...props} header={Header} />} />
          <Route path='/doctor' render = {(props) => <Doctor {...props} header={Header} />} />
          <Route path='/admin' render = {(props) => <Admin {...props} header={Header} />} />

          {/* <Route path='/about' component={About} /> */}
          <Route path='/contact' component={Contact} />
          <Route path='/price' component={Price} />
          {/* <Route path='/profile' component={Profile} /> */}
        </div>

        <Footer />
      </div>
    );

  }

  onSelect() { }
}

export default App;
