import React from "react";
import AvatarImage from "./AvatarImage";
import '../css/ArticleData.css'

export default class ArticleData extends React.Component {
    render() {
        return (
            <div className="ArticleData">
                <div className={"flexbox"}>
                    <span><AvatarImage className={"pic"} src={this.props.imageSrc} alt={this.props.imageAlt}
                                       variant={"circle"}/></span>
                    <span><p>{this.props.authorName}</p></span>
                    <span><time dateTime={this.props.dateTime}/></span>
                </div>
            </div>
        );
    }
}