import React from 'react';
import {createStyles} from "../pages/Home";
import {Button, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Link, NavLink} from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Hidden } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';

interface SideMenuProps {
    classes: ReturnType<typeof createStyles>

}

const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (

        <ul className={classes.sideMenuList}>
            <li>
                <Link to="/">
                    <IconButton aria-label="delete" className={classes.logoButton}>
                        <TwitterIcon color={"secondary"} className={classes.logo}/>
                    </IconButton>
                </Link>
            </li>


            <li className={classes.sideMenuListItem}>

                <NavLink to="/signin/search" activeClassName={classes.sideMenuListItemsButtonActive}>
                    <Button className={classes.sideMenuListItemsButton} aria-label="delete">

                        <SearchIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography className={classes.sideMenuListItemsLabel} variant={"h6"}>Поиск</Typography>
                        </Hidden>
                    </Button>
                </NavLink>

            </li>
            <li className={classes.sideMenuListItem}>
                <NavLink to="/signin/notice" activeClassName={classes.sideMenuListItemsButtonActive}>
                    <Button className={classes.sideMenuListItemsButton} aria-label="delete">

                        <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography className={classes.sideMenuListItemsLabel}
                                    variant={"h6"}>Уведомление</Typography>
                        </Hidden>
                    </Button>
                </NavLink>
            </li>

            <li className={classes.sideMenuListItem}>
                <NavLink to="/signin/message" activeClassName={classes.sideMenuListItemsButtonActive}>
                    <Button className={classes.sideMenuListItemsButton} aria-label="delete">

                        <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography className={classes.sideMenuListItemsLabel} variant={"h6"}>Сообщение</Typography>
                        </Hidden>
                    </Button>
                </NavLink>
            </li>
            <li className={classes.sideMenuListItem}>
                <NavLink to="/signin/bookmarks" activeClassName={classes.sideMenuListItemsButtonActive}>
                    <Button className={classes.sideMenuListItemsButton} aria-label="delete">

                        <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography className={classes.sideMenuListItemsLabel} variant={"h6"}>Закладки</Typography>
                        </Hidden>
                    </Button>
                </NavLink>
            </li>
            <li className={classes.sideMenuListItem}>
                <NavLink to="/signin/list" activeClassName={classes.sideMenuListItemsButtonActive}>
                    <Button className={classes.sideMenuListItemsButton} aria-label="delete">

                        <ListAltIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography className={classes.sideMenuListItemsLabel} variant={"h6"}>Список</Typography>
                        </Hidden>
                    </Button>
                </NavLink>
            </li>
            <li className={classes.sideMenuListItem}>
                <NavLink to="/signin/profile" activeClassName={classes.sideMenuListItemsButtonActive}>
                    <Button className={classes.sideMenuListItemsButton} aria-label="delete">

                        <PermIdentityIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography className={classes.sideMenuListItemsLabel} variant={"h6"}>Профиль</Typography>
                        </Hidden>
                    </Button>
                </NavLink>
            </li>
            <li>
                <Button
                    className={classes.sideMenuTweetButton}
                    variant="contained"
                    fullWidth
                    color={"primary"}>
                    <Hidden smDown>  Твитнуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>


            </li>
        </ul>

    )
}

export default SideMenu;