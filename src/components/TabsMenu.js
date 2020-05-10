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
        marginRight: "auto"
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
                        imageSrc: "https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg",
                        authorImageSrc: "https://lh5.googleusercontent.com/--OlyHl449xI/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQNk7ZZElQ_vKIQT_6d4HZw_wN3Qxg/mo/photo.jpg?sz=64",
                        authorName: "Denis Ivanenko",
                        dateTime: "2017-02-14",
                        imageAlt: "Article Image",
                        title: "Test title",
                        subtitle: "Test subtitle"
                    }]}/>

                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabPanel}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanel}>
                    Item Three
                </TabPanel>
            </article>
        </Paper>

    );
}
