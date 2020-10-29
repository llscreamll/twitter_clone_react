import React from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

type ModalComeType = {
    handleClose: () => void
}

const ModalCome: React.FC<ModalComeType> = ({handleClose}) => {

    const useStyles = makeStyles((theme) => ({
        formCome: {
            marginTop: '2%'
        },
        modalButton: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: "8%",

        },
        textFieldBottom:{
            marginTop: theme.spacing(2),
            backgroundColor: 'rgb(245,247,249)'
        }
    }))

    const classes = useStyles();

    return (
        <>
            <div>
                <Typography variant="h6">Войти в Твиттер</Typography>
            </div>
            <form noValidate autoComplete="off" className={classes.formCome}>
                <div>
                    <TextField
                        autoFocus
                        margin={"dense"}
                        id="email"
                        label="E-Mail"
                        type="email"
                        fullWidth/>
                    <TextField
                        className={classes.textFieldBottom}
                        margin={"dense"}
                        id="password"
                        label="Пароль"
                        type="password"
                        fullWidth
                    />
                </div>
                <div className={classes.modalButton}>
                    <Button style={{marginRight: "20px"}} onClick={handleClose} color={"primary"}>
                        Закрыть
                    </Button>
                    <Link to='/signin'>
                    <Button style={{width: "125px"}} variant={"contained"} color={"primary"}>
                        Вход
                    </Button>
                        </Link>
                </div>
            </form>
        </>
    )
}

export default ModalCome;