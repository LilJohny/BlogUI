import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArticlePreview from "./ArticlePreview";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        alignContent: "center"
    }
}));


export default function ArticlesList(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders" className={classes.list}>
                {props.articles.map((article) => (
                    <ListItem button>
                        <ArticlePreview imageSrc={article.authorImageSrc} alt={article.authorImageAlt}
                                        variant={"circle"} authorName={article.authorName}
                                        dateTime={article.dateTime}/>
                    </ListItem>))}
            </List>
        </div>
    );
}