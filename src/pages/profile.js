import React from 'react';
import AvatarImage from '../components/AvatarImage';
import "../css/article.css";
import "../css/profile.css";
import { Paper } from "material-ui";
import Container from "@material-ui/core/Container";
import SimpleList from "../components/SimpleList";
import Button from "@material-ui/core/Button";
import IconsList from "../components/IconsList";
import { Looks3, LooksOne, LooksTwo } from "@material-ui/icons";
import { Toolbar } from '@material-ui/core';
import NavBar from "../components/NavBar";

export default function ProfilePage(props) {
        const imageStyle = {
            gridColumn: "1/span 7"
        };
        const savedPosts = ["Saved post 1", "Saved post 2", "Saved post 3"];
        const usersPosts = ["Very long title of Post 1 written by user", "Post 2", "Post 3"];
        const usersLikedCategories = [["First liked category", LooksOne], ["Second liked category", LooksTwo], ["Third liked category", Looks3]];
        const usersBadges = [["Badge 1", "Badge 2", "Badge 3", "Badge 4", "Badge 5", "Badge 6", "Badge 7"]];
        return (
            <React.Fragment>
                <NavBar />
                <Toolbar />
                <Container className={"profile"}>
                    <Paper>
                        <article>
                            <div className={"flexbox"}>
                                <div><AvatarImage large={true} variant={"rounded"} className={"ProfilePicture"}
                                    style={imageStyle} /></div>
                                <div><h1>User`s Name : {props.profileName}</h1>
                                    <Button variant="outlined" color={"primary"}>Follow</Button>
                                    <h4>Joined us on <time dateTime={props.dateTime}>{props.dateTime}</time>
                                    </h4>
                                    <p>{props.userBio}</p>
                                </div>
                            </div>
                            <div className={"saved"}>
                                <h1>User saved these posts: </h1>
                                <SimpleList
                                    titles={savedPosts} />
                            </div>
                            <div className={"User`s Posts"}>
                                <h1>User`s Posts: </h1>
                                <SimpleList
                                    titles={usersPosts} />
                            </div>
                            <div className={"likedPosts"}>
                                <h1>User likes these categories : </h1>
                                <IconsList
                                    list={usersLikedCategories} />
                            </div>
                            <div className={"badges"}>
                                <h1>Badges: </h1>
                                <SimpleList
                                    titles={usersBadges} />
                            </div>
                        </article>
                    </Paper>
                </Container>
            </React.Fragment>
        );
    }
