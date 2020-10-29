import React from 'react';
import {createStyles} from "../pages/Home";
import {Avatar, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatTwoToneIcon from "@material-ui/icons/RepeatTwoTone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplySharpIcon from "@material-ui/icons/ReplySharp";

interface TweetProps {
    classes: ReturnType<typeof createStyles>
    user: {
        text: string
        fullname: string
        username: string
        avatarUrl: string
    }
}

const Tweet: React.FC<TweetProps> = ({classes, user}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant={"outlined"} elevation={3}>
            <Grid container spacing={1}>
                <Grid className={classes.tweetGridAvatar} item xs={1}>

                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${user.fullname}`}
                        src={user.avatarUrl}
                    />

                </Grid>
                <Grid item xs={10}>
                    <Typography> <b>{user.fullname}</b>&nbsp;
                        <span className={classes.tweetUserName}> @{user.username}</span>&nbsp;
                        <span className={classes.tweetUserName}>.</span>&nbsp;
                        <span className={classes.tweetUserName}> 2 мин</span>&nbsp;

                    </Typography>
                    <Typography>
                        {user.text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton aria-label="delete">
                                <ChatBubbleOutlineOutlinedIcon style={{fontSize: "20px"}}/>
                            </IconButton>
                            <span style={{fontSize: "14px"}}>1</span>
                        </div>
                        <div>
                            <IconButton aria-label="delete">
                                <RepeatTwoToneIcon style={{fontSize: "20px"}}/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton aria-label="delete">
                                <FavoriteBorderIcon style={{fontSize: "20px"}}/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton aria-label="delete">
                                <ReplySharpIcon style={{fontSize: "20px"}}/>
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Tweet;