import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ChooseAccount from './components/ChooseAccount';
import Footer from './components/Footer';
import Nav from './components/Nav';
// import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/choose-account' component={ChooseAccount} />
          {/* <Route exact path='/' component={Home} /> */}
          {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
