import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArticlesList from "./ArticlesList";
import AuthorsList from "./AuthorsList";
import TabPanel from "./TabPanel";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 550,
        marginRight: "auto",
        marginLeft: "auto"
    },
    tabPanel: {
        marginLeft: "auto",
        marginRight: "auto",
        gridColumn: "1/span 7"
    }
});

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CenteredTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (

        <Paper className={classes.root}>
            <article>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >

                    <Tab label="Articles" {...a11yProps(0)} />
                    <Tab label="News" {...a11yProps(1)} />
                    <Tab label="Authors" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0} className={classes.tabPanel}>

                    <ArticlesList articles={props.articles} />

                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabPanel}>
                    <ArticlesList articles={[{
                        imageSrc: "https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg",
                        authorImageSrc: "https://lh5.googleusercontent.com/--OlyHl449xI/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQNk7ZZElQ_vKIQT_6d4HZw_wN3Qxg/mo/photo.jpg?sz=64",
                        authorName: "Denis Ivanenko",
                        dateTime: "2017-02-14",
                        imageAlt: "Article Image",
                        title: "Introducing the New React DevTools",
                        subtitle: "React News",
                        text: "A lot has changed in version 4! At a high level, this new version should offer significant performance gains and an improved navigation experience. It also offers full support for React Hooks, including inspecting nested objects.\n" +
                            "\n" +
                            "DevTools version 4 screenshot\n" +
                            "Visit the interactive tutorial to try out the new version or see the changelog for demo videos and more details.\n" +
                            "\n" +
                            "Which versions of React are supported?\n" +
                            "react-dom\n" +
                            "\n" +
                            "0-14.x: Not supported\n" +
                            "15.x: Supported (except for the new component filters feature)\n" +
                            "16.x: Supported\n" +
                            "react-native\n" +
                            "\n" +
                            "0-0.61: Not supported\n" +
                            "0.62: Will be supported (when 0.62 is released)\n" +
                            "How do I get the new DevTools?\n" +
                            "React DevTools is available as an extension for Chrome and Firefox. If you have already installed the extension, it should update automatically within the next couple of hours.\n" +
                            "\n" +
                            "If you use the standalone shell (e.g. in React Native or Safari), you can install the new version from NPM:\n" +
                            "\n" +
                            "npm install -g react-devtools@^4\n" +
                            "Where did all of the DOM elements go?\n" +
                            "The new DevTools provides a way to filter components from the tree to make it easier to navigate deeply nested hierarchies. Host nodes (e.g. HTML <div>, React Native <View>) are hidden by default, but this filter can be disabled:\n" +
                            "\n" +
                            "DevTools component filters\n" +
                            "\n" +
                            "How do I get the old version back?\n" +
                            "If you are working with React Native version 60 (or older) you can install the previous release of DevTools from NPM:\n" +
                            "\n" +
                            "npm install --dev react-devtools@^3\n" +
                            "For older versions of React DOM (v0.14 or earlier) you will need to build the extension from source:\n" +
                            "\n" +
                            "# Checkout the extension source\n" +
                            "git clone https://github.com/facebook/react-devtools\n" +
                            "\n" +
                            "cd react-devtools\n" +
                            "\n" +
                            "# Checkout the previous release branch\n" +
                            "git checkout v3\n" +
                            "\n" +
                            "# Install dependencies and build the unpacked extension\n" +
                            "yarn install\n" +
                            "yarn build:extension\n" +
                            "\n" +
                            "# Follow the on-screen instructions to complete installation\n" +
                            "Thank you!\n" +
                            "We’d like to thank everyone who tested the early release of DevTools version 4. Your feedback helped improve this initial release significantly.\n" +
                            "\n" +
                            "We still have many exciting features planned and feedback is always welcome! Please feel free to open a GitHub issue or tag @reactjs on Twitter.",
                        link: "/",
                        id: 1
                    }]} />
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanel}>
                    <AuthorsList authors={[{
                        name: "Denis Ivanenko",
                        bio: "This is my test bio. It`s not really as long as it will be for real user, but for testing it`s just OK.",
                        link: "/profile",
                        reputation: "361",
                        authorImageSrc: "https://lh5.googleusercontent.com/--OlyHl449xI/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQNk7ZZElQ_vKIQT_6d4HZw_wN3Qxg/mo/photo.jpg?sz=64",
                        authorImageAlt: "Author Image"
                    }]} />
                </TabPanel>
            </article>
        </Paper>

    );
}
