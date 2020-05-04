import React from 'react';
import AvatarImage from '../components/AvatarImage';
import NavBar from "../components/NavBar";
import "../css/Article.css";
import "../css/Profile.css";
import {Paper} from "material-ui";
import Container from "@material-ui/core/Container";
import SimpleList from "../components/List";

export default class ProfilePage extends React.Component {
    render() {
        const imageStyle = {
            gridColumn: "1/span 7"
        };
        return (
            <React.Fragment>
                <NavBar/>
                <Container>
                    <Paper>
                        <article>
                            <div className={"flexbox"}>
                            <span><AvatarImage large={true} variant={"rounded"} className={"ProfilePicture"}
                                               style={imageStyle}/></span>
                                <span><h1>User`s Name : {this.props.profileName}</h1>
                                <h4>Joined us on <time dateTime={this.props.dateTime}>{this.props.dateTime}</time> </h4>
                                </span>
                            </div>
                            <div className={"likedPosts"}>
                            <h1>User likes these categories of posts: </h1>
                            <SimpleList titles={["First liked article", "Second liked article", "Third liked article"]}/>
                            </div>
                        </article>
                    </Paper>
                </Container>
            </React.Fragment>
        );

    }
}