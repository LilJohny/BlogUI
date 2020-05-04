import logo from './logo.svg';
import 'typeface-roboto';
import './css/App.css'
import React from 'react';
import ArticlePage from "./pages/article";
import ProfilePage from "./pages/profile";
import {MuiThemeProvider} from "material-ui";
import CssBaseline from "@material-ui/core/CssBaseline";


function App() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <CssBaseline/>
                {/*                       <ArticlePage
                    imageSrc={"https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"}
                    text={[...new Array(100)]
                        .map(
                           () => `Cras mattis consectetur purus sit amet fermentum.
                                   Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                   Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                   Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                       )
                       .join('\n')}
                   authorImageSrc={"https://lh5.googleusercontent.com/--OlyHl449xI/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQNk7ZZElQ_vKIQT_6d4HZw_wN3Qxg/mo/photo.jpg?sz=64"}
                   authorName={"Denis Ivanenko"}
                   dateTime={"2017-02-14"}
                   title={"Test Article Title"}
                   subtitle={"This is test subtitle"}
               />*/}
                {/* The above commented code will display Article Page with dummy data./>*/}
                <ProfilePage profileName={"Denis Ivanenko"} dateTime={"2017-02-14"}
                             userBio={"Example of User Bio. Here User can write about himself."}/>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
