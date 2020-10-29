import Grid from "@material-ui/core/Grid";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import {
    Avatar,
    Button,
    Container,
    Divider,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography
} from "@material-ui/core";
import Tweet from "../../components/Tweet";
import SideMenu from "../../components/SideMenu";
import AddTweetForm from "../../components/AddTweetFrom";
import {createStyles, SearchTextField} from "./theme";


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
                            <AddTweetForm classes={classes}/>
                            </div>

                            <div className={classes.addFormBottomLine}/>
                        </Paper>
                        {Array(10).fill(1).map(el => <Tweet text={user.text} classes={classes} user={user}/>)}

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