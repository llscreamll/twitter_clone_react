import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TwitterIcon from "@material-ui/icons/Twitter";
import CloseIcon from "@material-ui/icons/Close";
import ModalCome from "./modalCome/ModalCome";
import ModalRegister from "./modalRegister/ModalRegister";
import Modal from "@material-ui/core/Modal";


type ModalWindowType = {
    open: boolean
    handleClose: () => void
    openComeModal: boolean
    classes: any
    openRegisterModal: boolean
}

const ModalWindow: React.FC<ModalWindowType> = ({classes, open, handleClose, openComeModal, openRegisterModal}) => {


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
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

                </div>
            </Fade>
        </Modal>
    )
}

export default ModalWindow;