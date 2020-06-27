import React, { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./tools/loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { portAssets } from "./configs";

const HomePage = lazy(() => import("./component/Page/Home/HomePage"));
const Create = lazy(() => import("./component/Page/create-user/create"));

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${portAssets}green-leaves-1931141.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
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
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
