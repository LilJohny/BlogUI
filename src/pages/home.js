import React from "react";
import CenteredTabs from "../components/CentredTabs";
import NavBar from "../components/NavBar";
import axios from "axios";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            authors: [],
            dataLoaded: false
        }
    }
    componentDidMount() {
        this.getData();
    }
    async getData() {
        let articles = await axios.get("http://localhost:3001/articles");
        let authors = await axios.get("http://localhost:3001/authors");
        this.setState({ articles: articles, authors: authors, dataLoaded: true });
    }

    render() {
        if (!this.state.dataLoaded) {
            return <p>Loading data</p>
        } else {
            console.log(this.state.articles.data);
            const articles = this.state.articles.data;
            const authors = this.state.authors.data;
            return (
                <React.Fragment>
                    <NavBar />
                    <CenteredTabs articles={articles} authors={authors} />
                </React.Fragment>
            );
        }
    }
}