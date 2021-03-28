import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartOutlined from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { Backdrop, Badge, Button, CircularProgress, IconButton, LinearProgress } from '@material-ui/core';
import AppSearchbar from './AppSearchbar';
import AppProductsFilter from './AppProductsFilter';
import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router-dom";

export default function AppNavBar({onClickCart, onSearch}) {
  const history = useHistory()
  const classes = useStyles()
  const cartItems = useSelector(store => store.cart.items)
  const loading = useSelector(store => store.products.loading)
  const user = useSelector(store => store.user.user)
  const toLogin = ()=>{
    history.push('login')
  }
  const onLanding = ()=>{
    history.push('/')
  }

  return (
    <>
      <CssBaseline />
        <AppBar color="default" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="secondary" className={classes.appTitle} onClick={onLanding}>
              KOOB
            </Typography>
            <AppSearchbar onSearch={onSearch} />
            <AppProductsFilter />
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={onClickCart}>
              <Badge badgeContent={cartItems.length} color="secondary">
                <AddShoppingCartOutlined style={{color: 'grey'}} />
              </Badge>
            </IconButton>
            <Button color="inherit" onClick = {toLogin} >{user? user?.name : "Login"}</Button>
          </Toolbar>
        </AppBar>
      <Toolbar style={{ marginBottom: 60 }}/>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

const useStyles = makeStyles(theme => ({
  appbar: {
    boxShadow: "0 4px 12px 5px rgba(0,0,0,.05)",
    background: "#fff",
    alignItems: 'center',
  },
  appTitle: {
    fontFamily: `'Times New Roman", Times, serif'`,
    fontSize: 20
  },
  toolbar: {
    // minHeight: 128,
    minWidth: '60%',
    marginLeft: '5%',
    alignItems: 'left',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      marginLeft: '0%',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))
