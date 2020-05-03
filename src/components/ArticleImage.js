import React from 'react';
import '../css/ArticleImage.css';


export default class ArticleImage extends React.Component {
    render() {
        return (<img src={this.props.src} alt={this.props.alt}/>);
    }
}