import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ChooseAccount from './components/ChooseAccount';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import SearchPro from './components/SearchPro';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserNav from './components/UserNav';
import { LoginUserProvider } from './LoginUserContext'


function App() {
  return (
    <div>
      <LoginUserProvider>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/choose-account' component={ChooseAccount} />
            <Route exact path='/search/pro' component={SearchPro} />
            <Route exact path='/requests/sent' component={UserNav} />
            <Route exact path='/' component={Home} />
            {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </LoginUserProvider>
    </div>
  )
}

export default App;
