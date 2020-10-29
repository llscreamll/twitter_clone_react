import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TwitterIcon from "@material-ui/icons/Twitter";
import CloseIcon from "@material-ui/icons/Close";
import ModalCome from "./modalCome/ModalCome";
import ModalRegister from "./modalRegister/ModalRegister";
import Modal from "@material-ui/core/Modal";
import AddTweetForm from "../../components/AddTweetFrom";
import {createStyles} from "../Home/theme";


type ModalWindowType = {
    open: boolean
    handleClose: () => void
    openComeModal?: boolean
    classes: ReturnType<typeof createStyles>
    openRegisterModal?: boolean
    openVisibleAddTweetModal? : boolean

}

const ModalWindow: React.FC<ModalWindowType> = ({classes, open, handleClose, openComeModal, openRegisterModal,openVisibleAddTweetModal}) => {


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <div className={classes.paperTwitter}>
                        <TwitterIcon color={"primary"}/>
                        <CloseIcon onClick={handleClose} style={{cursor: 'pointer'}} color={"primary"}/>
                    </div>

                    {openComeModal && <ModalCome handleClose={handleClose}/>}
                    {openRegisterModal && <ModalRegister handleClose={handleClose}/>}
                    {openVisibleAddTweetModal && <AddTweetForm  classes={classes}/>}

                </div>
            </Fade>
        </Modal>
    )
}

export default ModalWindow;