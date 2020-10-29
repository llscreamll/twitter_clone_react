import React, {useState} from "react";
import {Button, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ModalWindow from "./modal/ModalWindow";
import {createStyles} from "./Home/theme";

const  SignIn: React.FC = (): React.ReactElement => {

    const classes = createStyles();

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


