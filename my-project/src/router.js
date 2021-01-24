import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Loading from "./tools/loading";

const HomePage = lazy(() =>
  import("./component/Page/Home/Home-home-page-component")
);
const Create = lazy(() =>
  import("./component/Page/CreateUsers/Create-Users-create-component")
);
const Login = lazy(() =>
  import("./component/Page/Login/Login-login-component")
);

const RouterComponent = () => {
  return (
    <Suspense
      fallback={
        <header className="App-header">
          <Loading />
        </header>
      }
    >
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect
                to={{
                  pathname: "/home",
                }}
              />
            )}
          />
          <PrivateRoute path="/home">
            <HomePage />
          </PrivateRoute>
          <Route
            path="/login"
            render={() =>
              localStorage.getItem("user_id") === null ? (
                <Login />
              ) : (
                <Redirect
                  to={{
                    pathname: "/home",
                  }}
                />
              )
            }
          />
          <Route
            path="/create-user"
            render={() =>
              localStorage.getItem("user_id") === null ? (
                <Create />
              ) : (
                <Redirect
                  to={{
                    pathname: "/home",
                  }}
                />
              )
            }
          />
        </Switch>
      </Router>
    </Suspense>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem("user_id") ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default RouterComponent;
