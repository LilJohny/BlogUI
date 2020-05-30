import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import SimpleList from "../components/SimpleList";
import NavBar from "../components/NavBar";

import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { loadData } from '../actions';

const useStyles = makeStyles(theme => ({
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

function CategoriesPage(props) {
    useEffect(() => {
        props.loadData("http://localhost:3001/categories");
    }, []);
    console.log(props);
    const classes = useStyles();
    if (!props.dataLoaded) {
        return <p>Loading data</p>;
    } else {
        const titles = props.content;
        return (
            <React.Fragment>
                <NavBar />
                <Paper className={classes.root}>
                    <h1 className={classes.centered}>Article Categories: </h1>
                    <article>
                        <SimpleList className={classes.centredList}
                            titles={titles} />
                    </article>
                </Paper>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    content: state.content,
    dataLoaded: state.dataLoaded
});
const mapDispatchToProps = (dispatch) => ({
    loadData: (link) => dispatch(loadData(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);

