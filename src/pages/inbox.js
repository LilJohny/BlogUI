import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import '../css/Inbox.css';
import {Divider} from "@material-ui/core";
import AvatarImage from "../components/AvatarImage";


export default class InboxPage extends React.Component {
    render() {
        const name = this.props.name;
        const surname = this.props.surname;
        const messages = this.props.messages;
        return (
            <Container>
                <Paper>
                    <h1 className={"inboxHeader"}>{name}{" " + surname + "`s"} Inbox:</h1>
                    <Divider/>
                    {messages.map((message) =>
                        <Container>
                            <AvatarImage className={"AvatarImage"}/>
                            <h2>{message.author}:</h2>
                            <p>{message.text}</p>
                            <Divider/>
                        </Container>
                    )}
                </Paper>
            </Container>
        );
    }
}
