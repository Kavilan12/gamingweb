import React from "react";
import {Route,Switch} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home"
import Activities from "./Activities";
import Booknow from "./Booknow";
import Aboutus from "./About";
import Roomsrates from "./Roomsrate";
import Contact from "./Contact";
function App() {
  return (
        <>
            <Switch> 
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={Aboutus}/>
                <Route exact path="/rate" component={Roomsrates}/>
                <Route exact path="/activities" component={Activities}/>
                <Route exact path="/contact" component={Contact}/>
                <Route component={Home}/>
            </Switch>

        </>
  );
}

export default App;
