import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from '../../components/AppNavBar'
import ProductsList from './ProductsList'
import CartDrawer from './CartDrawer'
import LogIn from '../user/Login'
import SignUp from '../user/SignUp'


function Products(props) {
  const [openCart, setCartOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')

  return (
    <Container>
      <Router>
        <AppNavBar 
          onClickCart={() => setCartOpen(true)} 
          onSearch={setSearch}
        />  
        <div>
          <Switch>
              <Route exact path="/" component={() => <ProductsList search={search} />}/>
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
      
      <CartDrawer 
        isOpen={openCart}
        onClose={setCartOpen}
      />
    </Container>
  );
}

export default Products;