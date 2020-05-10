import React from "react";
import List from "@material-ui/core/List";
import {ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AuthorCard from "./AuthorCard";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 750,
        backgroundColor: theme.palette.background.paper,
    },
}));
export default function AuthorsList(props) {
    const authors = props.authors;
    const classes = useStyles();
    return (<div className={classes.root}>
        <List component="nav" aria-label="secondary mailbox folders">
            {authors.map((author) =>
                <ListItem>
                    <AuthorCard name={author.name}
                                bio={author.bio}
                                authorImageSrc={author.authorImageSrc}
                                link={author.link}
                                reputation={author.reputation}
                                imageAlt={author.imageAlt}
                    />
                </ListItem>)}
        </List>
    </div>);
}
