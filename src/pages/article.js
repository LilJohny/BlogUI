import React from 'react';
import '../css/article.css';
import { Paper } from "material-ui";
import Container from "@material-ui/core/Container";
import ArticleImage from "../components/ArticleImage/ArticleImage";
import ArticleData from "../components/ArticleData/ArticleData";
import NavBar from '../components/NavBar/NavBar';


export default function ArticlePage(props) {
    return (
        <React.Fragment>
            <NavBar article={true} />
            <Container>
                <Paper>
                    <article>
                        <h1>{props.title}</h1>
                        <h2 className={"subtitle"}>{props.subtitle}</h2>
                        <ArticleImage className={"ArticleImage"} src={props.imageSrc}
                            alt={props.imageAlt} />
                        <ArticleData imageSrc={props.authorImageSrc} alt={props.authorImageAlt}
                            variant={"circle"} authorName={props.authorName}
                            dateTime={props.dateTime} />
                        <p>{props.text}</p>
                    </article>
                </Paper>
            </Container>
        </React.Fragment>
    );
}
