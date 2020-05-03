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
        width: theme.spacing(50),
        height: theme.spacing(50),
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },
}));

export default function VariantAvatars(source, alt = '') {
    const classes = useStyles();
    const classNames = `${classes.rounded} ${classes.large}`
    return (
        <div className={classes.root}>
            <Avatar variant="rounded" className={classNames}>
                <img src={source} alt={alt}></img>
            </Avatar>
        </div>
    );
}
