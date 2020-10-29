import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ModalWindow from "./modal/ModalWindow";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        maxWidth: 600,
        minHeight: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: '16px 32px 24px',
        borderRadius: 20,
        outline: "none",
    },
    paperTwitter: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: "20px",
        borderBottom: '2px solid rgb(199,199,199)',
        paddingBottom: " 20px"
    },
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '45%',
        transform: 'translate(-50%,-50%)',
        width: '350%',
        height: '350%'
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 20
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden'
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: '380px'
    },
    loginTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20
    },
}))


const  SignIn: React.FC = (): React.ReactElement => {

    const classes = useStyles();

    const [openComeModal, setOpenComeModal] = useState<boolean>(false)
    const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false)
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpenCome = (): void => {
        setOpen(true);
        setOpenComeModal(true)
    };
    const handleOpenRegister = (): void => {
        setOpen(true);
        setOpenRegisterModal(true)
    };
    const handleClose = (): void => {
        setOpen(false)
        setOpenRegisterModal(false)
        setOpenComeModal(false)
    }

    return (

        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color={"primary"} className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}><Typography variant={"h6"}>
                        <SearchIcon className={classes.blueSideListInfoIcon} />
                        Читайте о том,что вам интересно.</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant={"h6"}>
                        <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
                        Узнайте, о чем говорят в мире.</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant={"h6"}>
                        <ChatBubbleOutlineOutlinedIcon className={classes.blueSideListInfoIcon} />
                        Присоединяйтесь к общению.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color={"primary"} className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginTitle} variant={"h4"}>Узнайте , что происходит в мире прямо
                        сейчас</Typography>
                    <Typography><b>Присоеденяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button onClick={handleOpenRegister} style={{ marginBottom: 20 }} variant={"contained"}
                        color={"primary"} fullWidth>
                        Зарегестрироваться
                    </Button>

                    <Button onClick={handleOpenCome} variant={"outlined"} color={"primary"} fullWidth>
                        Войти
                    </Button>
                </div>
            </section>

            <ModalWindow classes={classes}
                open={open}
                handleClose={handleClose}
                openComeModal={openComeModal}
                openRegisterModal={openRegisterModal} />
        </div>
    );
}

export default SignIn;


