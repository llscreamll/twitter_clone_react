import {makeStyles, TextField, Theme, withStyles} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const createStyles = makeStyles((theme: Theme) => ({
    paper: {
        position: 'relative',
        top:"20%",
        margin:'0px auto',
        maxWidth: 590,
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
    },
    blockModalAddTweet:{
        width:'590px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius:'10px'
    },

}));


export const SearchTextField = withStyles((theme: Theme) => ({
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