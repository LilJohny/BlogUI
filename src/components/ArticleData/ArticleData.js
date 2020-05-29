import React from "react";
import AvatarImage from "../AvatarImage/AvatarImage";
import './ArticleData.css';

export default function ArticleData(props) {
    return (
        <div className="ArticleData">
            <div><AvatarImage className={"pic"} src={props.imageSrc} alt={props.imageAlt}
                variant={"circle"} /></div>
            <div><br /><p>{props.authorName}</p><br />
                <p>Posted on <time dateTime={props.dateTime}>{props.dateTime}</time></p>
            </div>
        </div>
    );
}
