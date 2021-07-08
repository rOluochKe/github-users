import React from 'react'
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact path='/'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  )
}

export default App
