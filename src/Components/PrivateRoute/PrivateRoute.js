import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App.js';

const PrivateRoute = ({children, ...rest}) => {

  const [loggedInUser] = useContext(UserContext);

  return (
      <Route
    {...rest}
    render={({ location }) =>
      loggedInUser.email ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
  );
};
export default PrivateRoute;