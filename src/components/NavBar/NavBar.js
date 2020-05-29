import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from 'material-ui/IconButton';
import '../css/NavBar.css';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/styles/makeStyles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import BackToTopButton from "../BackToTopButton/BackToTopButton";

makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
const styles = {
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    },
    paper: {
        background: "#485461"
    }
};

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toolbar = React.createRef();
    }
    state = {
        left: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            left: open
        });
    };

    render() {
        let toolbarElement = this.props.article === true ? <Toolbar id="back-to-top-anchor" ref={this.toolbar} /> : <Toolbar />;
        let button = null;
        if (this.props.article === true) {
            button = <BackToTopButton anchor={this.toolbar} />;
        }
        const { classes } = this.props;
        const navbar_links = [["Home", "/"], ["Categories", "/categories"], ["Interesting Posts For You", "/interesting"], ["Your Inbox", "/inbox"], ["Register account","/registration"]];
        const sideList = (
            <div className={classes.list} role="presentation" onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}>
                <List>
                    {navbar_links.map((text) => (
                        <ListItem component="a" button key={text[0]} href={text[1]}>
                            <ListItemText>{text[0]}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <React.Fragment>
                <Router>
                    <AppBar position="sticky">
                        <Toolbar>
                            <IconButton className={"menu"} aria-label="Menu" color="white"
                                onClick={this.toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                classes={{ paper: classes.paper }}
                                open={this.state.left}
                                onClose={this.toggleDrawer(false)}
                            >
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer(false)}
                                    onKeyDown={this.toggleDrawer(false)}
                                    className={{ root: classes.root }}
                                >
                                    {sideList}
                                </div>
                            </Drawer>

                            <section className={"rightToolBar"}>
                                <IconButton className={"profile"} aria-label="My profile" color={"black"} href="/profile">
                                    <FaceIcon />
                                </IconButton>
                            </section>
                        </Toolbar>
                    </AppBar>
                    {toolbarElement}
                </Router>
                {button}
            </React.Fragment>
        );

    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);

