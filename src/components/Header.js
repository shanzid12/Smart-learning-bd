import React from 'react';
//Material UI core
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
//import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import SvgIcon from '@material-ui/core/SvgIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//Material UI icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreOptionsIcon from '@material-ui/icons/MoreVert';
//React router
import { Link, useHistory } from 'react-router-dom';
//React helmet
import { Helmet } from 'react-helmet';
//Fixed Routes
import { root, home } from '../utils/fixedRoutes';
//Components
import HeaderSearchBar from './HeaderSearchBar';
//Hooks
import useLocationLevel from '../hooks/useLocationLevel';

import NavTabs from './NavTabs';

const Header = ({
	tabs,
	hasTabs,
	activeTab,
	matchesDesktop,
	user,
	notificationCount,
	setIsNotificationsDialogOpen,
	setIsSearchMenuOpen,
	setIsUserMenuOpen,
	setIsOptionsMenuOpen,
}) => {
	const isLoggedIn = Boolean(user.userName);

	const classes = useStyles();
	const theme = useTheme();

	const history = useHistory();
	const topLevel = useLocationLevel(1, root);

	return (
		<React.Fragment>
			<Helmet>
				<meta name='theme-color' content={theme.palette.background.paper} />
			</Helmet>

			<Slide appear={false} direction={'down'} in={!useScrollTrigger()}>
				<AppBar color='inherit'>
					<Toolbar variant='dense'>
						{!hasTabs || topLevel ? (
							<Tooltip title='Back'>
								<IconButton
									onClick={history.goBack}
									size='small'
									edge='start'
									aria-label='Go back'>
									<ArrowBackIcon />
								</IconButton>
							</Tooltip>
						) : undefined}

						<Button
							component={Link}
							to={home}
							size='large'
							color='primary'
							className={classes.headerTitle}>
							SmartLearningBD
						</Button>

						<div className={classes.headerIconsContainer}>
							{matchesDesktop ? (
								<HeaderSearchBar
									margin='dense'
									setIsSearchMenuOpen={setIsSearchMenuOpen}
									className={classes.headerSearchBar}
								/>
							) : (
								<Tooltip title='Search'>
									<IconButton
										onClick={() => setIsSearchMenuOpen(true)}
										aria-label='Search'>
										<SearchIcon />
									</IconButton>
								</Tooltip>
							)}

							{/* <Tooltip title='Notifications'>
								<IconButton
									onClick={() => setIsNotificationsDialogOpen(true)}
									aria-label='Show Notifications'>
									<Badge color='secondary' badgeContent={notificationCount}>
										<NotificationsIcon />
									</Badge>
								</IconButton>
							</Tooltip> */}

							{isLoggedIn ? (
								<Tooltip title={`Profile of ${user.fullName}`}>
									<IconButton
										onClick={() => setIsUserMenuOpen(true)}
										size='small'
										aria-label='User Profile'
										className={classes.headerProfileButton}>
										<Avatar
											alt='User Profile Picture'
											src={user.photo}
											className={classes.headerAvatar}
										/>
									</IconButton>
								</Tooltip>
							) : (
								<Button
									onClick={() => setIsUserMenuOpen(true)}
									variant='outlined'
									color='primary'
									size='small'
									className={classes.headerProfileButton}
									startIcon={<AccountCircleIcon />}>
									Join
								</Button>
							)}

							<Tooltip title='More options'>
								<IconButton
									onClick={() => setIsOptionsMenuOpen(true)}
									size='small'
									edge='end'
									aria-label='Show more options'>
									<MoreOptionsIcon />
								</IconButton>
							</Tooltip>
						</div>
					</Toolbar>

					{hasTabs && !matchesDesktop ? (
						<NavTabs
							tabs={tabs}
							activeTab={activeTab}
							matchesDesktop={matchesDesktop}
						/>
					) : undefined}
				</AppBar>
			</Slide>
		</React.Fragment>
	);
};

const useStyles = makeStyles((theme) => ({
	headerTitle: {
		textTransform: 'none',
		...theme.typography.h6,
		'@media (max-width: 240px)': {
			display: 'none',
		},
	},
	headerIconsContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
	},
	headerSearchBar: {
		margin: theme.spacing(0, 2),
	},
	headerProfileButton: {
		margin: theme.spacing(0, 1),
	},
	headerAvatar: {
		height: theme.spacing(4),
		width: theme.spacing(4),
	},
}));

export default Header;
