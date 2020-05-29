import React from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import isEmail from 'is-email';
import passwordValidator from 'password-validate';

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
        passwordValidator.minimumLength = 5;
        passwordValidator.hasLowerCase = true;
        passwordValidator.hasUpperCase = true;
        passwordValidator.hasSymbols = true;
        passwordValidator.hasNumbers = true;
        this.handleChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value, surname: this.state.surname, email: this.state.email, password: this.state.password });
    }
    handleSurnameChange = (event) => {
        this.setState({ surname: event.target.value, name: this.state.name, email: this.state.email, password: this.state.password });
    }
    handleMailChange = (event) => {
        this.setState({ mail: event.target.value, name: this.state.name, surname: this.state.surname, password: this.state.password });
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value, name: this.state.name, surname: this.state.surname, mail: this.state.mail });
    }

    handleSubmit(event) {
        event.preventDefault();
        let emailCorrect = isEmail(this.state.mail);
        let passwordCorrect = passwordValidator(this.state.password).is.valid();
        let correctFormData = emailCorrect && passwordCorrect;
        if (correctFormData) {
            alert("You succefully create d profile!Check your mail for profile activatin link.")
        } else {
            alert("Correct your data to correspond requirements");
        }
        return emailCorrect && passwordCorrect;
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