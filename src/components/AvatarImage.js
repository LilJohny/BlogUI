import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },
}));

export default function AvatarImage(props) {
    const classes = useStyles();
    const classNames = props.large ? `${classes.rounded} ${classes.large}` : `${classes.rounded}`;
    return (
        <div className={classes.root}>
            <Avatar variant={props.variant} className={classNames}>
                <img src={props.src} alt={props.alt} />
            </Avatar>
        </div>
    );
}
