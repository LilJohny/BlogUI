import React from "react";
import AvatarImage from "./AvatarImage";
import '../css/ArticleData.css'

export default class ArticleData extends React.Component {
    render() {
        return (
            <div className="ArticleData">
                <div>
                <AvatarImage className={"pic"} src={this.props.imageSrc} alt={this.props.imageAlt} variant={"circle"}/>
                <p>{this.props.authorName}</p>
                <time dateTime={this.props.dateTime}/>
                </div>
            </div>
        );
    }
}