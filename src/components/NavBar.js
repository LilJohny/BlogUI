import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from 'material-ui/IconButton';
import '../css/NavBar.css';

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
                <Toolbar>
                    <IconButton className={"menu"} aria-label="Menu" color="white">
                        <MenuIcon/>
                    </IconButton>
                    <section className={"rightToolBar"}>
                    <IconButton className={"profile"} aria-label="My profile" color="white">
                        <FaceIcon/>
                    </IconButton>
                    </section>
                </Toolbar>
            </AppBar>
            {toolbar}
        </React.Fragment>);
    }
}