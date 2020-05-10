import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArticlePreview from "./ArticlePreview";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    marginAutoContainer: {
        width: 500,
        height: 80,
        display: 'flex',
        backgroundColor: 'gold',
    },
    marginAutoItem: {
        margin: 'auto'
    }
}));


export default function ArticlesList(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <List component="nav" aria-label="secondary mailbox folders">

                {props.articles.map((article) => (
                    <ListItem button>
                        <div className={classes.marginAutoContainer}>
                            <div className={classes.marginAutoItem}>
                                <ArticlePreview imageSrc={article.authorImageSrc} alt={article.authorImageAlt}
                                                variant={"circle"} authorName={article.authorName}
                                                dateTime={article.dateTime}/>
                            </div>
                        </div>
                    </ListItem>))}
            </List>

        </div>
    );
}