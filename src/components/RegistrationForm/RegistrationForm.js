import React from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import isEmail from 'is-email';
import passwordValidator from 'password-validate';

const useStyles = makeStyles((theme) => ({
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
}));

const handleNameChange = (event) => {
    this.setState({ name: event.target.value, surname: this.state.surname, email: this.state.email, password: this.state.password });
}

const handleSurnameChange = (event) => {
    this.setState({ surname: event.target.value, name: this.state.name, email: this.state.email, password: this.state.password });
}

const handleMailChange = (event) => {
    this.setState({ mail: event.target.value, name: this.state.name, surname: this.state.surname, password: this.state.password });
}

const handlePasswordChange = (event) => {
    this.setState({ password: event.target.value, name: this.state.name, surname: this.state.surname, mail: this.state.mail });
}

function handleSubmit(event) {
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
function RegistrationForm(props) {
    //this.state = { name: '', surname: '', mail: '', password: '' };
    passwordValidator.minimumLength = 5;
    passwordValidator.hasLowerCase = true;
    passwordValidator.hasUpperCase = true;
    passwordValidator.hasSymbols = true;
    passwordValidator.hasNumbers = true;
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <form onSubmit={handleSubmit}>
                <TextField className={classes.field} required id="standard-required" label="Your Name" onChange={handleNameChange} /><br />
                <TextField className={classes.field} required id="standard-required" label="Your Surname" onChange={handleSurnameChange} /><br />
                <TextField className={classes.field} required id="standard-required" label="Your Mail" onChange={handleMailChange} /><br />
                <TextField
                    className={classes.field}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                /><br />
                <Button onClick={handleSubmit} variant="contained" color="primary" href="#contained-buttons" type="submit">Sign up</Button>
            </form>
        </Paper>
    );
}

export default RegistrationForm;