import React from 'react';
import '../css/ArticleImage.css';


export default class ArticleImage extends React.Component {
    constructor(source, alternativeText) {
        super();
        this.src = source;
        this.alt = alternativeText;
    }
    render() {
        return (<img src={this.src} alt={this.alt}></img>);
    }
}