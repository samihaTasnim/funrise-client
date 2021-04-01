
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Orders/Order';
import Admin from './Components/Admin/Admin'
import Navbar from './Components/Navbar/Navbar';
import Checkout from './Components/Checkout/Checkout';
import Manage from './Components/Manage/Manage';
import Nomatch from './Components/Nomatch/Nomatch'

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/orders">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Manage></Manage>
          </PrivateRoute>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
