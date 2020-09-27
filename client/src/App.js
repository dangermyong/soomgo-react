import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ChooseAccount from './components/ChooseAccount'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Profile from './components/Profile'
import SearchPro from './components/SearchPro'
import Signin from './components/Signin'
import Signup from './components/Signup'
import UserNav from './components/UserNav'
import MyStore from './MyStore'
import { observer } from 'mobx-react'
import SearchProParam from './components/SearchProParam'
import RequestsSent from './components/RequestsSent'


function App() {

  return (
    <div>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/choose-account' component={ChooseAccount} />
            <Route exact path='/search/pro/:id' component={SearchProParam} />
            <Route exact path='/search/pro' component={SearchPro} />
            <Route exact path='/requests/sent' component={RequestsSent} />
            <Route exact path='/requests/quotes/:id' component={RequestsQuotes} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/' component={Home} />
            {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default observer(App);