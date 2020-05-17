import React from "react";
import CenteredTabs from "../components/CentredTabs";
import NavBar from "../components/NavBar";

export default class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <CenteredTabs />
            </React.Fragment>
        );
    }
}