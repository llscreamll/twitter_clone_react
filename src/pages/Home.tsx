import Grid from "@material-ui/core/Grid";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import classNames from "classnames";
import {
    Avatar,
    Button,
    Container,
    Divider,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Paper,
    TextField,
    Theme,
    Typography,
    withStyles
} from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';
import Tweet from "../components/Tweet";
import SideMenu from "../components/SideMenu";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CircularProgress from '@material-ui/core/CircularProgress';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

export const createStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        fontSize: 36,
    },
    logoButton: {
        margin: '10px 0'
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        maxWidth: '230px',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        marginBottom: '15px',
    },
    sideMenuListItemsLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 20,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
    },
    sideMenuListItemsButton: {

        height: '50px',
        '&:nth-child(1):hover': {
            color: '#1a91da'
        },
    },
    sideMenuListItemsButtonActive: {
        '& *': {
            color: '#1a91da'
        },
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3, 2),
        marginTop: theme.spacing(3)
    },
    inputSearch: {
        borderRadius: 30,
        background: '#E6ECF0',
        height: 45,
        padding: 0
    },
    tweetsWrapper: {
        height: '100%',
        borderBottom: 'none',
    },
    tweetsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: 0,
        padding: '10px 15px',

        '& h6': {
            fontWeight: 800,
        },
    },
    tweetContent: {
        marginLeft: '2%',
    },
    tweet: {
        cursor: 'pointer',
        padding: '15px 0 0 20px',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
        }
    },
    tweetFooter: {
        display: 'flex',
        position: "relative",
        left: ' -12px',
        justifyContent: 'space-between',
        width: "90%",
    },
    tweetUserName: {
        color: grey[500]
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        marginTop: '5px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
    },
    search: {
        marginTop: '10px',
        backgroundColor: 'rgb(210,214,215)',
        borderRadius: 30,
        top: 0,
        position: 'sticky',

    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },

    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%'
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5%'
    },
    addFormBottomActions: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '10%'
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
        marginLeft: '2%'
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },

    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
        marginLeft: '5%'
    },
    rightSidBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    }
}));


const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': {borderWidth: 1, borderColor: theme.palette.primary.main},
                '& svg path': {
                    fill: theme.palette.primary.main
                }
            },
            '&:hover': {
                '& fieldset': {borderColor: 'transparent',},
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            },
        },
        '& .MiuOutlinedInput-input': {
            padding: '12px 15px 15px 5px',
        },
    },
}))(TextField);

const Home = (): React.ReactElement => {

    const classes = createStyles()
    const user = {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae vitae porro iste enim amet sunt voluptatem quos? In, quis? Cum natus, mollitia quas velit illum eveniet aut! Ad, explicabo?",
        fullname: "jusderghood",
        username: 'jusderghood',
        avatarUrl: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    }

    return (
        <Container className={classes.wrapper} maxWidth={"lg"}>

            <Grid container className={classes.wrapper}>

                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes}/>
                </Grid>

                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant={"outlined"}>
                        <Paper className={classes.tweetsHeader} variant={"outlined"} elevation={3}>
                            <Typography variant={"h6"}>Главная</Typography>
                        </Paper>

                        <Paper>
                            <div className={classes.addForm}>
                                <div className={classes.addFormBody}>
                                    <Avatar
                                        className={classes.tweetAvatar}
                                        alt={'Аватарка пользователя'}
                                        src='https://img2.akspic.ru/image/120936-superkar-sportkar-avto-lamborgini_aventador-lamborghini_gallardo-1920x1080.jpg'
                                    />
                                    <TextareaAutosize
                                        className={classes.addFormTextarea}
                                        placeholder='Что происходит?'
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
                                        <span>280</span>
                                        <div className={classes.addFormCircleProgress}>
                                            <CircularProgress variant={"static"} size={20} thickness={4} value={18}/>
                                            <CircularProgress
                                                style={{color: 'rgba(0,0,0,0.1)'}}
                                                variant={"static"}
                                                size={20}
                                                thickness={4}
                                                value={100}
                                            />
                                        </div>
                                        <Button color={"primary"} variant={"contained"}>
                                            Твитнуть
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.addFormBottomLine}/>
                        </Paper>

                        {Array(10).fill(1).map(el => <Tweet classes={classes} user={user}/>)}

                    </Paper>
                </Grid>


                <Grid item xs={3}>

                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant='outlined'
                            placeholder='Поиск по Твиттеру'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position={"start"}>
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Paper className={classes.rightSidBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant={"outlined"}>
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#коронавирус"
                                        secondary={
                                            <Typography component="span" variant={"body2"}>
                                                Твитов: 163 122
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component={'li'}/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#Москва"
                                        secondary={
                                            <Typography component="span" variant={"body2"}>
                                                Твитов: 163 122
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component={'li'}/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#Новинки"
                                        secondary={
                                            <Typography component="span" variant={"body2"}>
                                                Твитов: 163 122
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component={'li'}/>
                            </List>
                        </Paper>
                        <Paper className={classes.rightSidBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>Кого читать</b>
                            </Paper>


                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt='Remy Sharp'
                                            src='https://yobte.ru/uploads/posts/2019-11/klevye-devchonki-54-foto-23.jpg'
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary='Dock of Shame' secondary={
                                        <Typography component='span' variant={"body2"}>
                                            @FavFockofShame
                                        </Typography>
                                    }/>
                                    <Button color={"primary"} variant={"outlined"}>
                                        Читать
                                    </Button>
                                </ListItem>
                                <Divider component={'li'}/>
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home