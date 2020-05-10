import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";
import ArticlesList from "./ArticlesList";

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tab-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
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

                    <Tab label="Articles" {...a11yProps(0)}/>
                    <Tab label="News" {...a11yProps(1)}/>
                    <Tab label="Authors" {...a11yProps(2)}/>
                </Tabs>
                <TabPanel value={value} index={0} className={classes.tabPanel}>

                    <ArticlesList articles={[{
                        imageSrc: "https://insights.dice.com/wp-content/uploads/2017/09/shutterstock_315465929.jpg",
                        authorImageSrc: "https://lh5.googleusercontent.com/--OlyHl449xI/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQNk7ZZElQ_vKIQT_6d4HZw_wN3Qxg/mo/photo.jpg?sz=64",
                        authorName: "Denis Ivanenko",
                        dateTime: "2017-02-14",
                        imageAlt: "Article Image",
                        title: "Introducing \"Dead Simple Python\"\n",
                        subtitle: "Test subtitle",
                        text: "Ever spent three hours trying to find that bit of knowledge that everyone seemed to have but you?\n" +
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
                            "The current series plan is below. Please note, I may rearrange, add, or remove planned sections.",
                        link: "/article"
                    }]}/>

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
                        link: "/"
                    }]}/>
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanel}>
                    Item Four
                </TabPanel>
            </article>
        </Paper>

    );
}
