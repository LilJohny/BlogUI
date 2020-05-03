import logo from './logo.svg';
import 'typeface-roboto';
import './css/App.css'
import React from 'react';
import ArticlePage from "./pages/article";
import {MuiThemeProvider} from "material-ui";


function App() {
    return (
        <React.Fragment>
            <MuiThemeProvider>
                <html>
                <head>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                </head>
                <div className="App">
                    <ArticlePage/>
                </div>
                </html>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

export default App;
