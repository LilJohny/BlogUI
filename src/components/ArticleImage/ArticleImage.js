import React from 'react';
import './ArticleImage.css';


export default function ArticleImage(props) {
    return (<img className={props.className} src={props.src} alt={props.alt} />);
}