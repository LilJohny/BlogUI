import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    expand: {
        marginLeft: 'auto'
    }
}));

export default function ArticleCard(props) {
    const classes = useStyles();

    const title = props.title;
    const date = props.dateTime;
    const imageSrc = props.imageSrc;
    const imageAlt = props.imageAlt;
    const previewText = props.text.substring(0, 163) + "...";

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={props.authorImageSrc} alt={props.authorName} />
                    }
                    title={title}
                    subheader={date}
                />
                <CardMedia
                    className={classes.media}
                    image={imageSrc}
                    title={imageAlt}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="div">
                        {previewText}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <Button
                        className={classes.expand}
                        aria-label="show more"
                        href={props.link}
                    >
                        Read Full Article
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}