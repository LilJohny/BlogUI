import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from 'material-ui/IconButton';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/styles/makeStyles";
import { BrowserRouter as Router } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions';
import './NavBar.css';


const useStyles = makeStyles(theme => ({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    },
    paper: {
        background: "#485461"
    }
}));
function NavBar(props) {
    const toolbar = React.createRef();
    let toolbarElement = props.article === true ? <Toolbar id="back-to-top-anchor" ref={toolbar} /> : <Toolbar />;
    let button = null;
    if (props.article === true) {
        button = <BackToTopButton anchor={toolbar} />;
    }
    const toggleDrawer = (open) => { props.toggleDrawer(open) };
    const classes = useStyles();
    const navbar_links = [["Home", "/"], ["Categories", "/categories"], ["Interesting Posts For You", "/interesting"], ["Your Inbox", "/inbox"], ["Register account", "/registration"]];
    const sideList = (
        <div className={classes.list} role="presentation" onClick={()=>toggleDrawer(false)}
            onKeyDown={()=>toggleDrawer(false)}>
            <List>
                {navbar_links.map((text) => (
                    <ListItem component="a" button key={text[0]} href={text[1]}>
                        <ListItemText>{text[0]}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const drawerToggled = props.drawerToggled;
    return (
        <React.Fragment>
            <Router>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton className={"menu"} aria-label="Menu" color="white"
                            onClick={()=>toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            classes={{ paper: classes.paper }}
                            open={drawerToggled}
                            onClose={()=>toggleDrawer(false)}
                        >
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={()=>toggleDrawer(false)}
                                onKeyDown={()=>toggleDrawer(false)}
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

const mapStateToProps = (state) => ({
    drawerToggled: state.drawerToggled
});
const mapDispatchToProps = (dispatch) => ({
    toggleDrawer: (open) => dispatch(toggleDrawer(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

