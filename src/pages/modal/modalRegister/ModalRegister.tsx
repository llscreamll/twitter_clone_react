import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


type ModalRegisterType = {
    handleClose: () => void
}

const ModalRegister: React.FC<ModalRegisterType> = ({ handleClose }) => {

    const useStyles = makeStyles((theme: any) => ({
        formCome: {
            marginBottom: theme.spacing(2)
        },
        modalButton: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: theme.spacing(3),

        },
        textField: theme.textField,

        textFieldBottom: {
            marginTop: theme.spacing(3),
            backgroundColor: 'rgb(245,247,249)'
        }
    }))

    const classes = useStyles();

    return (
        <>
            <div>
                <Typography variant="h6">Создайте учетную запись</Typography>
            </div>
            <form noValidate autoComplete="off" className={classes.formCome}>
                <TextField
                    className={classes.textFieldBottom}
                    autoFocus
                    margin={"dense"}
                    id="name"
                    label="Name"
                    type="name"
                    fullWidth />

                <TextField
                    className={classes.textFieldBottom}
                    label="email"
                    name="email"
                    margin={"dense"}
                    id="email"
                    type="email"
                    fullWidth />

                <TextField
                    className={classes.textFieldBottom}
                    label="password"
                    name="password"
                    margin={"dense"}
                    id="password"
                    type="password"
                    fullWidth />

                <TextField
                    fullWidth
                    className={`${classes.textField} ${classes.textFieldBottom}`}
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2000-01-01"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <div className={classes.modalButton}>
                    <Button style={{ marginRight: "20px" }} onClick={handleClose} color={"primary"}>
                        Закрыть
                    </Button>
                    <Button style={{ width: "125px" }} variant={"contained"} color={"primary"}>
                        Регистрация
                    </Button>
                </div>
            </form>
        </>
    )
}

export default ModalRegister;