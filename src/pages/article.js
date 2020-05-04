import React from 'react';
import '../css/Article.css';
import NavBar from "../components/NavBar";
import {Paper} from "material-ui";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import BackToTopButton from "../components/BackToTopButton";
import ArticleImage from "../components/ArticleImage";
import ArticleData from "../components/ArticleData";


export default class ArticlePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar article={true}/>
                <Container>

                        <Paper>
                            <article>
                                <h1>{this.props.title}</h1>
                                <h2 className={"subtitle"}>{this.props.subtitle}</h2>
                                <ArticleImage className={"ArticleImage"} src={this.props.imageSrc}
                                              alt={this.props.imageAlt}/>
                                <ArticleData imageSrc={this.props.authorImageSrc} alt={this.props.authorImageAlt}
                                             variant={"circle"} authorName={this.props.authorName}
                                             dateTime={this.props.dateTime}/>
                                <p>{this.props.text}</p>
                            </article>
                        </Paper>

                    <BackToTopButton/>
                </Container>
            </React.Fragment>

        )
            ;
    }
}