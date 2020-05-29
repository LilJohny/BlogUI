import React from 'react';
import './ArticleImage.css';


export default class ArticleImage extends React.Component {
    render() {
        return (<img className={this.props.className} src={this.props.src} alt={this.props.alt} />);
    }
}