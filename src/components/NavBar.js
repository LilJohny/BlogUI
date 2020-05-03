import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';


export default class NavBar extends React.Component {
    render() {
        let toolbar;
        if (this.props.article === true) {
            toolbar = <Toolbar id="back-to-top-anchor"/>;
        } else {
            toolbar = <Toolbar/>;
        }
        return (<React.Fragment>
            <AppBar position="sticky">
                <Toolbar>{/* content */}</Toolbar>
            </AppBar>
            {toolbar}
        </React.Fragment>);
    }
}