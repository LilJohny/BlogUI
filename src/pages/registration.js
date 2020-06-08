import React from "react";
import NavBar from "../components/NavBar";
import RegistrationForm from "../components/RegistrationForm";

export default class RegistrationPage extends React.Component {


    render() {
        return (
            <React.Fragment>
                <NavBar />
                <RegistrationForm />
            </React.Fragment>
        );
    }
}