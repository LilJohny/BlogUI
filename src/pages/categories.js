import React from "react";
import { Paper } from "@material-ui/core";
import SimpleList from "../components/SimpleList";
import NavBar from "../components/NavBar";
import axios from "axios";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
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
});

class CategoriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            dataLoaded: false
        }
    }
    componentWillMount() {
        this.getData();
    }
    async getData() {
        let categories = await axios.get("http://localhost:3001/categories");
        this.setState({ categories: categories, dataLoaded: true });
    }
    
    render() {
        const { classes } = this.props;
        if (!this.state.dataLoaded) {
            return <p>Loading data</p>;
        } else {
            const titles = this.state.categories.data;
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

}

export default withStyles(styles)(CategoriesPage);

