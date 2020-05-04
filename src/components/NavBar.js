import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from 'material-ui/IconButton';
import '../css/NavBar.css';
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        let toolbar;
        if (this.props.article === true) {
            toolbar = <Toolbar id="back-to-top-anchor"/>;
        } else {
            toolbar = <Toolbar/>;
        }
        this.handleToggle = () => this.setState({open: !this.state.open})
        return (<React.Fragment>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton className={"menu"} aria-label="Menu" color="white" onClick={this.handleToggle}>
                        <MenuIcon/>
                    </IconButton>
                    <Drawer open={this.state.open}>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
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