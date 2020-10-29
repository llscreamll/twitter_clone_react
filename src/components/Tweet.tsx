import React from 'react';

import {Avatar, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatTwoToneIcon from "@material-ui/icons/RepeatTwoTone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplySharpIcon from "@material-ui/icons/ReplySharp";
import {createStyles} from "../pages/Home/theme";

interface TweetProps {
    classes: ReturnType<typeof createStyles>
    text: string
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
}

const Tweet: React.FC<TweetProps> = ({classes, user,text}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant={"outlined"} elevation={3}>

            <Avatar
                className={classes.tweetAvatar}
                alt={`Аватарка пользователя ${user.fullname}`}
                src={user.avatarUrl}
            />
            <div className={classes.tweetContent}>
                <Typography> <b>{user.fullname}</b>&nbsp;
                    <span className={classes.tweetUserName}> @{user.username}</span>&nbsp;
                    <span className={classes.tweetUserName}>.</span>&nbsp;
                    <span className={classes.tweetUserName}> 2 мин</span>&nbsp;

                </Typography>
                <Typography>
                    {text}
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
            </div>
        </Paper>
    )
}

export default Tweet;