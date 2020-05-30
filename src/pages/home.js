import React, { useEffect } from "react";
import CenteredTabs from "../components/CentredTabs";
import NavBar from "../components/NavBar";
import { connect } from 'react-redux';
import { loadData } from '../actions';

function HomePage(props) {
    useEffect(() => {
        const links = ["http://localhost:3001/articles", "http://localhost:3001/authors"]
        props.loadData(links);
    }, []);
    const articlesLoaded = props.articles!==undefined && props.articles.length!==0;
    const authorsLoaded = props.authors!== undefined && props.authors.length!==0;
    if (!(articlesLoaded && authorsLoaded)) {
        return <p>Loading data</p>
    } else {
        const articles = props.articles;
        const authors = props.authors;
        return (
            <React.Fragment>
                <NavBar />
                <CenteredTabs articles={articles} authors={authors} />
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    articles: state.articles,
    authors: state.authors,
    dataLoaded: state.dataLoaded
});
const mapDispatchToProps = (dispatch) => ({
    loadData: (link) => dispatch(loadData(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);