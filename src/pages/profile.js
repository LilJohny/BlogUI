import React from 'react';
import AvatarImage from '../components/AvatarImage';
import NavBar from "../components/NavBar";
import "../css/Article.css";
import "../css/Profile.css";
import {Paper} from "material-ui";
import Container from "@material-ui/core/Container";
import SimpleList from "../components/SimpleList";
import Button from "@material-ui/core/Button";

export default class ProfilePage extends React.Component {
    render() {
        const imageStyle = {
            gridColumn: "1/span 7"
        };
        return (
            <React.Fragment>
                <NavBar/>
                <Container className={"profile"}>
                    <Paper>
                        <article>
                            <div className={"flexbox"}>
                            <span><AvatarImage large={true} variant={"rounded"} className={"ProfilePicture"}
                                               style={imageStyle}/></span>
                                <span><h1>User`s Name : {this.props.profileName}</h1>
                                    <Button variant="outlined" color={"primary"}>Follow</Button>
                                <h4>Joined us on <time dateTime={this.props.dateTime}>{this.props.dateTime}</time> </h4>
                                    <p>{this.props.userBio}</p>
                                </span>
                            </div>
                            <div className={"saved"}>
                                <h1>User saved these posts: </h1>
                                <SimpleList
                                    titles={["Saved post 1", "Saved post 2", "Saved post 3"]}/>
                            </div>
                            <div className={"User`s Posts"}>
                                <h1>User`s Posts: </h1>
                                <SimpleList
                                    titles={["Very long title of Post 1 written by user", "Post 2", "Post 3"]}/>
                            </div>
                            <div className={"likedPosts"}>
                                <h1>User likes these categories of posts: </h1>
                                <SimpleList
                                    titles={["First liked category", "Second liked category", "Third liked category"]}/>
                            </div>
                            <div className={"badges"}>
                                <h1>Badges: </h1>
                                <SimpleList
                                    titles={["Badge 1", "Badge 2", "Badge 3", "Badge 4", "Badge 5", "Badge 6", "Badge 7"]}/>
                            </div>
                        </article>
                    </Paper>
                </Container>
            </React.Fragment>
        );

    }
}