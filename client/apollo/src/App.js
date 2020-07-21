import React from 'react';
import PageContainer from './components/page-container'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Launches from './pages/launches'
import Launch from './pages/launch'
import Cart from './pages/cart'
import Profile from './pages/profile'

const App = () => (
  <>
    <PageContainer>
      <Router>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/launch/:launchId">
            <Launch />
          </Route>
          <Route path="/">
            <Launches />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </PageContainer>
  </>
)

export default App;
