import React from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import { Paper } from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar";
import { withStyles } from "@material-ui/styles";
import axios from "axios";

const styles = theme => ({
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
});

class InterestingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            dataLoaded: false
        }
    }
    componentWillMount() {
        this.getData();
    }
    async getData() {
        let articles = await axios.get("http://localhost:3001/articles");
        this.setState({ articles: articles, dataLoaded: true });
    }
    render() {
        if (!this.state.dataLoaded) {
            return <p>Loading data</p>
        } else {
            const { classes } = this.props;
            const articles = this.state.articles.data;
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
}


export default withStyles(styles)(InterestingPage);