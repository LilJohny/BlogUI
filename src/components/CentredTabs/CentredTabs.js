import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArticlesList from "../ArticlesList/ArticlesList";
import AuthorsList from "./AuthorsList";
import TabPanel from "../TabPanel/TabPanel";

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
    const authors = props.authors;
    const articles = props.articles.filter(article => !article.tags.includes("news"));
    const newsArticles = props.articles.filter(article => article.tags.includes("news"));
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

                    <ArticlesList articles={articles} />

                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabPanel}>
                    <ArticlesList articles={newsArticles} />
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanel}>
                    <AuthorsList authors={authors} />
                </TabPanel>
            </article>
        </Paper>
    );
}
