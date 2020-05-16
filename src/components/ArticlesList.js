import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ArticleCard from "./ArticleCard";
import {ListItem} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 550,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function ArticlesList(props) {
    const classes = useStyles();
    const articles = props.articles;
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders">
                {articles.map((article) =>
                    <ListItem key={article.title}>
                        <ArticleCard {...article}/>
                    </ListItem>)}
            </List>
        </div>
    );
}