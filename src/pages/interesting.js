import React, { useEffect } from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import { Paper } from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { loadData } from '../actions';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 550,
        marginLeft: "auto",
        marginRight: "auto"
    },
    centered: {
        textAlign: "center",
        gridColumn: "1/span 7",
        marginRight: "auto",
        marginLeft: "auto"
    }
}));

function InterestingPage(props) {
    useEffect(() => {
        const links = ["http://localhost:3001/articles", "http://localhost:3001/authors"]
        props.loadData(links);
    }, []);
    const articlesLoaded = props.articles !== undefined && props.articles.length !== 0;
    const classes = useStyles();
    if (!articlesLoaded) {
        return <p>Loading data</p>
    } else {
        const articles = props.articles;
        return (
            <React.Fragment>
                <NavBar />
                <Paper className={classes.root}>
                    <h1 className={classes.centered}>Interesting Posts For You: </h1>
                    <ArticlesList className={classes.centered} articles={articles} />
                </Paper>
            </React.Fragment >);
    }

}

const mapStateToProps = (state) => ({
    articles: state.articles,
    dataLoaded: state.dataLoaded
});
const mapDispatchToProps = (dispatch) => ({
    loadData: (link) => dispatch(loadData(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InterestingPage);