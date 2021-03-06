import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return value === index && (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tab-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>
                <Typography component="div">{children}</Typography>
            </Box>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};