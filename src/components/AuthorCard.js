import React from "react";
import { red } from '@material-ui/core/colors';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import ShareIcon from '@material-ui/icons/Share';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    media: {
        height: 0,
        paddingTop: '56%'
    },
    expand: {
        marginLeft: 'auto'
    },

    avatar: {
        backgroundColor: red[500],
    }
}));

export default function AuthorCard(props) {
    const classes = useStyles();
    const [expanded] = React.useState(false);

    const name = props.name;
    const reputation = props.reputation;
    const authorImageSrc = props.authorImageSrc;
    const imageAlt = props.imageAlt;
    const bio = props.bio.substring(0, 163) + "...";

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <div className={"flexbox"}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <img src={authorImageSrc} alt={imageAlt} />
                            </Avatar>
                        }
                        title={name}
                        subheader={reputation}
                    />

                    <CardContent className={classes.bio}>
                        <Typography variant="body2" color="textSecondary" component="span">
                            {bio}
                        </Typography>
                    </CardContent>
                </div>
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <Button
                        className={classes.expand}
                        aria-expanded={expanded}
                        aria-label="show more"
                        href={props.link}
                    >
                        OPEN PROFILE
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}