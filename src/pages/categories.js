import React from "react";
import { Paper } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SimpleList from "../components/SimpleList";
import NavBar from "../components/NavBar";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 550,
        marginLeft: "auto",
        marginRight: "auto"
    },
    centered: {
        textAlign: "center"
    },
    centredList: {
        marginLeft: "auto",
        marginRight: "auto",
        columnSpan: "3 / span 3",
        width: "100%"
    }
}));
export default function CategoriesPage() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <NavBar />
            <Paper className={classes.root}>
                <h1 className={classes.centered}>Article Categories: </h1>
                <article>
                    <SimpleList className={classes.centredList}
                        titles={["Python", "C++", "JavaScript", "React", "TypeScript", "Java", "Spring", "CSS", "HTML", "SASS", "BootStrap"]} />
                </article>
            </Paper>
        </React.Fragment>
    );
}


