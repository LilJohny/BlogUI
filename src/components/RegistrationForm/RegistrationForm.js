import React from "react";
import { Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import isEmail from 'is-email';
import passwordValidator from 'password-validate';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { formDataChange } from '../../actions';
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
    passwordValidator.minimumLength = 5;
    passwordValidator.hasLowerCase = true;
    passwordValidator.hasUpperCase = true;
    passwordValidator.hasSymbols = true;
    passwordValidator.hasNumbers = true;
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <form onSubmit={handleSubmit}>
                <TextField className={classes.field} required id="standard-required" label="Your Name" onChange={(event)=>props.formDataChange(event.target.value, "name")} /><br />
                <TextField className={classes.field} required id="standard-required" label="Your Surname" onChange={(event)=>props.formDataChange(event.target.value, "surname")} /><br />
                <TextField className={classes.field} required id="standard-required" label="Your Mail" onChange={(event)=>props.formDataChange(event.target.value, "mail")} /><br />
                <TextField
                    className={classes.field}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(event)=>props.formDataChange(event.target.value, "password")}
                /><br />
                <Button onClick={handleSubmit} variant="contained" color="primary" href="#contained-buttons" type="submit">Sign up</Button>
            </form>
        </Paper>
    );
}
const mapStateToProps = (state) => ({
    drawerToggled: state.drawerToggled
});
const mapDispatchToProps = (dispatch) => ({
    formDataChange: (data, dataType) => dispatch(formDataChange(data, dataType)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);