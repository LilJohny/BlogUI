import React from "react";
import ArticleData from "./ArticleData";
import "../css/ArticlePreview.css";

export default class extends React.Component {
    render() {
        return (<ArticleData imageSrc={this.props.authorImageSrc} alt={this.props.authorImageAlt}
                             variant={"circle"} authorName={this.props.authorName} dateTime={this.props.dateTime}/>);
    }
}