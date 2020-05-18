import React from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 550,
        marginLeft: "auto",
        marginRight: "auto"
    },
    centered: {
        textAlign: "center",
        gridColumn: "1/span 7",
        marginRight: "auto",
        marginLeft: "auto"
    },
    field: {
        display: "block",
        marginRight: "auto",
        
    }
});
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <form onSubmit={this.handleSubmit}>
                    <TextField className={classes.field} required id="standard-required" defaultValue="Your Name" onChange={this.handleChange} /><br />
                    <TextField className={classes.field} required id="standard-required" defaultValue="Your Surname" onChange={this.handleChange} /><br />
                    <TextField className={classes.field} required id="standard-required" defaultValue="Your Mail" onChange={this.handleChange} /><br />
                    <TextField
                        className={classes.field}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={this.handleChange}
                    /><br />
                    <Button variant="contained" color="primary" href="#contained-buttons" type="submit">Sign up</Button>
                </form>
                </Paper>
        );
    }
}
export default withStyles(styles)(RegistrationForm)