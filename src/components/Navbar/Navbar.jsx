import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MentItem, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assests/cof-logo-cropped.png';
import useStyles from './styles';



const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation(); 

    
  return (
    <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Link to="/" className={classes.title}>
                <Typography variant="h6"  color="inherit">
                    <img src={logo} alt="Caniafe Ordo Forges" height="24px" className={classes.image}/>
                    Caniafe Ordo Forges
                </Typography>
                </Link>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>

        </AppBar>
    </div>
  )
}

export default Navbar
