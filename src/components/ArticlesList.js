import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ArticleImage from "./ArticleImage";
import ArticleData from "./ArticleData";
import {Paper} from "material-ui";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        gridColumn: "3/span 5"
    },
    marginAutoContainer: {
        width: 500,
        height: 80,
        display: 'flex',
        backgroundColor: 'gold',
    },
    marginAutoItem: {
        margin: 'auto'
    },
    paper: {
        width: "100%",
        gridColumn: "1/span 7"
    },
    article_box: {
        gridColumn: "1/span 7"
    }
}));


export default function ArticlesList(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <article>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <Paper className={classes.paper}>
                            {props.articles.map((article, index) => (


                                <div className={classes.article_box}>
                                    <h1>{article.title}</h1>
                                    <h2 className={"subtitle"}>{article.subtitle}</h2>
                                    <ArticleImage className={"ArticleImage"} src={article.imageSrc}
                                                  alt={article.articleimageAlt}/>
                                    <ArticleData imageSrc={props.authorImageSrc}
                                                 alt={article.authorImageAlt}
                                                 variant={"circle"} authorName={article.authorName}
                                                 dateTime={article.dateTime}/>
                                </div>

                            ))}
                        </Paper>
                    </List>
                </article>
            </div>
        </React.Fragment>
    );
}