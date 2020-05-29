import 'typeface-roboto';
import './css/app.css'
import React from 'react';
import ArticlePage from "./pages/article";
import ProfilePage from "./pages/profile";
import { MuiThemeProvider } from "material-ui";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import InboxPage from "./pages/inbox";
import InterestingPage from "./pages/interesting";
import CategoriesPage from "./pages/categories";
import RegistrationPage from "./pages/registration";

function App() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <Router>
                    <CssBaseline />
                    <Switch>
                        <Route path="/registration">
                            <RegistrationPage />
                        </Route>
                        <Route path="/profile">
                            <ProfilePage profileName={"Denis Ivanenko"} dateTime={"2017-02-14"}
                                userBio={"Example of User Bio. Here User can write about himself."} />
                        </Route>
                        <Route path="/article">
                            <ArticlePage
                                imageSrc={"https://insights.dice.com/wp-content/uploads/2017/09/shutterstock_315465929.jpg"}
                                text={"Ever spent three hours trying to find that bit of knowledge that everyone seemed to have but you?\n" +
                                    "\n" +
                                    "As a self-trained Python developer, I've sometimes found myself stuck in that knowledge crater, between tutorials far simpler than real life, and articles more advanced than I could comprehend. Even the documentation felt like a firehose of information, making it nearly impossible to find the one basic thing I needed to know.\n" +
                                    "\n" +
                                    "In this series, I'll be exploring a few of these topics, in a way that hopefully makes them dead simple!\n" +
                                    "\n" +
                                    "Intended Audience\n" +
                                    "While programmers at all experience levels may find this series useful, I'm specifically targeting Python novices. I am assuming, however, that you have a very basic understanding of programming. The coding topics especially will be more focused on the Python way of doing things, not on the underlying generic concept.\n" +
                                    "\n" +
                                    "With that said, if you're an intermediate-level Python developer, you may still find it helpful to follow along with the series. Although I've been working with Python for nearly eight years, some of these topics didn't really \"click\" for me until recent years. These are the explanations I wish I'd had!\n" +
                                    "\n" +
                                    "What You Won't Find Here\n" +
                                    "All of the topics I'm discussing here go much, much deeper. However, I don't want to muddy the waters, so I'll be omitting a considerable amount of detail. Once you're comfortable with a topic, and have done it a few times yourself, I recommend going back and reading through the official Python documentation on the topic.\n" +
                                    "\n" +
                                    "A Note on Python Versions\n" +
                                    "The official end-of-life for Python 2 is rapidly approaching, so you should learn and begin using Python 3 as soon as possible! This entire series is geared towards Python 3, with a bias towards 3.6 and 3.7, except as otherwise noted.\n" +
                                    "\n" +
                                    "Edits\n" +
                                    "The articles in this series are frequently being reviewed by my fellow Python experts, and by the Dev community at large. I will expand and revise accordingly. Always check the edit timestamp at the top of the article.\n" +
                                    "\n" +
                                    "Roadmap\n" +
                                    "The current series plan is below. Please note, I may rearrange, add, or remove planned sections."}
                                authorImageSrc={"https://lh5.googleusercontent.com/--OlyHl449xI/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQNk7ZZElQ_vKIQT_6d4HZw_wN3Qxg/mo/photo.jpg?sz=64"}
                                authorName={"Denis Ivanenko"}
                                dateTime={"2017-02-14"}
                                title={"Introducing \"Dead Simple Python\"\n"}
                                subtitle={"Introduction"}
                            />
                        </Route>
                        <Route path="/categories">
                            <CategoriesPage />
                        </Route>
                        <Route path="/interesting">
                            <InterestingPage />
                        </Route>
                        <Route path="/inbox">
                            <InboxPage name={"Denis"} surname={"Ivanenko"}
                                messages={[{
                                    author: "Bill Gates",
                                    text: "Hi, how are you?",
                                    id: 0
                                }, { author: "Bill Gates", text: "Hi, how are you?", id: 1 }, {
                                    author: "Bill Gates",
                                    text: "Hi, how are you?",
                                    id: 2
                                }, { author: "Bill Gates", text: "Hi, how are you?", id: 3 }]} />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
