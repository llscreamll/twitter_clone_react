import React, {useState} from "react";
import {Avatar, Button, IconButton} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import classNames from "classnames";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import SentimentSatisfiedSharpIcon from "@material-ui/icons/SentimentSatisfiedSharp";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles } from "../pages/Home/theme";


interface AddTweetFormType {
    classes : ReturnType <typeof createStyles>
}
const AddTweetForm:React.FC<AddTweetFormType> = ({classes}: AddTweetFormType): React.ReactElement =>{

    const [text,setText] = useState<string>('');
    const textLimitPercent = (+text.length /280) * 100;


    const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        if(e.currentTarget){
            setText(e.currentTarget.value);
        }
    }
    const handleClickAddTweet = () =>{
    }


    return(
      <>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={'Аватарка пользователя'}
                    src='https://img2.akspic.ru/image/120936-superkar-sportkar-avto-lamborgini_aventador-lamborghini_gallardo-1920x1080.jpg'
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    className={classes.addFormTextarea}
                    placeholder='Что происходит?'
                    value={text}
                    rowsMax={15}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color={'primary'}>
                        <ImageOutlinedIcon style={{fontSize: 26}}/>
                    </IconButton>
                    <IconButton color={'primary'}>
                        <SentimentSatisfiedSharpIcon style={{fontSize: 26}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>

                    {text && <>
                        <span>{280 - text.length}</span>
                        <div className={classes.addFormCircleProgress}>
                            <CircularProgress
                                variant={"static"}
                                size={20}
                                thickness={5}
                                value={textLimitPercent <= 100 ? textLimitPercent : 100}
                                style={textLimitPercent >= 100 ? {color:'red'}: undefined}

                            />
                            <CircularProgress
                                style={{color: 'rgba(0,0,0,0.1)'}}
                                variant={"static"}
                                size={20}
                                thickness={5}
                                value={100}
                            />
                        </div>

                    </>}
                    <Button
                    onClick={handleClickAddTweet}
                        disabled={textLimitPercent >= 100}
                        color={"primary"}
                        variant={"contained"}>
                        Твитнуть
                    </Button>
                </div>
            </div>
     </>
    )
}
export default AddTweetForm;