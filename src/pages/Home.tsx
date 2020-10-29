import Grid from "@material-ui/core/Grid";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import {Container, InputBase, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';
import Tweet from "../components/Tweet";
import SideMenu from "../components/SideMenu";


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
        display: 'flex',
        flexWrap: 'wrap',
        height: '50px',
        '&:nth-child(1):hover': {
            color: '#1a91da'
        },
        '& span': {
            display: 'flex',
            flexWrap: 'wrap',
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
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: 0,
        padding: '10px 15px',

        '& h6': {
            fontWeight: 800,
        },
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
        position: 'relative',

    },
    tweetAvatar: {

        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetGridAvatar: {
        marginRight: '1%',
    }
}));


const Home = () => {

    const classes = createStyles()

    const user = {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae vitae porro iste enim amet sunt voluptatem quos? In, quis? Cum natus, mollitia quas velit illum eveniet aut! Ad, explicabo?",
        fullname: "jusderghood",
        username: 'jusderghood',
        avatarUrl: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    }

    return (
        <Container className={classes.wrapper} maxWidth={"lg"}>

            <Grid container
                  className={classes.wrapper}
                  spacing={3}>

                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant={"outlined"}>
                        <Paper className={classes.tweetsHeader} variant={"outlined"} elevation={3}>
                            <Typography variant={"h6"}>Главная</Typography>

                        </Paper>
                        {Array(10).fill(1).map(el => <Tweet classes={classes} user={user}/>)}
                    </Paper>
                </Grid>
                <Grid item xs={3}>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Поик по твиттеру…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home