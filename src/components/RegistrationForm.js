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
        this.state = { name: '', surname: '', mail: '', password: '' };

        this.handleChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleSurnameChange(event) {
        this.setState({ surname: event.target.value });
    }
    handleMailChange(event) {
        this.setState({ mail: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
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
                    <TextField className={classes.field} required id="standard-required" label="Your Name" onChange={this.handleNameChange} /><br />
                    <TextField className={classes.field} required id="standard-required" label="Your Surname" onChange={this.handleSurnameChange} /><br />
                    <TextField className={classes.field} required id="standard-required" label="Your Mail" onChange={this.handleMailChange} /><br />
                    <TextField
                        className={classes.field}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={this.handlePasswordChange}
                    /><br />
                    <Button onClick={this.handleSubmit} variant="contained" color="primary" href="#contained-buttons" type="submit">Sign up</Button>
                </form>
            </Paper>
        );
    }
}
export default withStyles(styles)(RegistrationForm)