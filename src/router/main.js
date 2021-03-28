import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from '../pages/products/Products';

const Main = () =>{
    return(
      
          <Router>
            <div>
              <Route exact path="/" component={Products} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </div>
        </Router>
      
    )
}