import React, { useReducer } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ChooseAccount from './components/ChooseAccount';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import SearchPro from './components/SearchPro';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserNav from './components/UserNav';

export const LoginUserContext = React.createContext()

const initialState = {
  userId: '',
  userName: ''
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'login':
      return action.value
    case 'logout':
      return initialState
    default:
      return state
  }
}

function App() {
  const [loginUser, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <LoginUserContext.Provider value={{ loginUserState: loginUser, loginUserDispatch: dispatch }}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/choose-account' component={ChooseAccount} />
            <Route exact path='/search/pro' component={SearchPro} />
            <Route exact path='/requests/sent' component={UserNav} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/' component={Home} />
            {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </LoginUserContext.Provider>
    </div>
  )
}

export default App;