import logo from './logo.svg';
import 'typeface-roboto';
import './css/App.css'
import React from 'react';
import ArticlePage from "./pages/article";
import ProfilePage from "./pages/profile";
import { MuiThemeProvider } from "material-ui";
import CssBaseline from "@material-ui/core/CssBaseline";


function App() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <CssBaseline />
                <ProfilePage profileName={"Denis Ivanenko"} dateTime={"2017-02-14"}
                    userBio={"Example of User Bio. Here User can write about himself."} />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
