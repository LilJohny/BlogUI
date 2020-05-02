import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';


export default class NavBar extends React.Component {
    render() {
        return (<React.Fragment>
            <AppBar position="fixed">
                <Toolbar>{/* content */}</Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>);
    }
}