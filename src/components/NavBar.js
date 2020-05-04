import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from 'material-ui/IconButton';
import '../css/NavBar.css';
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
export default function NavBar(props) {
    let toolbar;
    if (props.article === true) {
        toolbar = <Toolbar id="back-to-top-anchor"/>;
    } else {
        toolbar = <Toolbar/>;
    }
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (open) => (event) => {
        const anchor = 'left';
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'Categories', 'Interesting posts for you', 'Messages'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>


        </div>
    );
    return (<React.Fragment>
        <AppBar position="sticky">
            <Toolbar>
                <IconButton className={"menu"} aria-label="Menu" color="white" onClick={toggleDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer(false)}>
                    {list('left')}
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
