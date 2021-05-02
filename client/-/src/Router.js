import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Router";
import Home from "./Components/Header";
import Register from "./Components/auth/Register";
import Login from './Components/auth/Login';
import AuthContext from "./Context/AuthContext";


function Router() {

  const {loggedIn} = useContext(AuthContext);

  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
          <Route exact path="/">
            <div><Home/></div>
          </Route>
     
          <Route path="/aboutus">
            About us 
          </Route>
          {
            loggedIn === false &&(
                <>
                <Route path="/login">
                  <div><Login/></div>
                </Route>

                <Route path="/register">
                <div><Register/></div>
                </Route>
          
                </>
          )}

          {loggedIn == true &&(
              <>     
                  <Route path="/customer">
                    Customers
                  </Route>
              </>
          )}
    
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
