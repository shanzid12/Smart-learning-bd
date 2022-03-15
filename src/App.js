import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
//Material UI core
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
//React router
import { Link, Redirect, Route, Switch } from 'react-router-dom';
//Custom hooks
import useThemeMaker from './hooks/useThemeMaker';
//Custom pages
import About from './pages/About';
import BecomeInstructor from './pages/BecomeInstructor';
import Blogs from './pages/blogs/Main';
import Courses from './pages/courses/Main';
import HandNotes from './pages/HandNotes';
import Home from './pages/Home';
import JobCircular from './pages/JobCircular';
import Join from './pages/join/Main';
import Moderator from './pages/moderator/Main';
import NotFound from './pages/NotFound';
import PdfBooks from './pages/PdfBooks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Profile from './pages/profile/Main';
import QuestionBank from './pages/QuestionBank';
import ReportBug from './pages/ReportBug';
import Search from './pages/Search';
import ShortQuiz from './pages/ShortQuiz';
import Tutorials from './pages/Tutorials';
//Custom components
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import HeaderMenuSearch from './components/HeaderMenuSearch';
import HeaderMenuOptions from './components/HeaderMenuOptions';
import HeaderMenuUser from './components/HeaderMenuUser';
import Footer from './components/Footer';
import DialogThemeChanger from './components/DialogThemeChanger';
import DialogNotifications from './components/DialogNotifications';
import DialogInstallApp from './components/DialogInstallApp';
//Config
import UserContext from './config/UserContext';
import AlertContext from './config/AlertContext';
import tabs from './config/tabs';
import useLocationLevel from './hooks/useLocationLevel';
//Fixed Routes
import {
	root,
	about,
	becomeInstructor,
	blogs,
	courses,
	handNotes,
	home,
	jobCircular,
	join,
	moderator,
	pdfBooks,
	privacyPolicy,
	profile,
	questionBank,
	reportBug,
	resetPassword,
	search,
	shortQuiz,
	tutorials,
} from './utils/fixedRoutes';

axios.defaults.withCredentials = true;

export default function App() {
	const [theme, themeChoice, setThemeChoice] = useThemeMaker();
	const matchesDesktop = useMediaQuery(theme.breakpoints.up('xl'));

	const [user, setUser] = useState({});
	const [quizAnswer, setQuizAnswer] = useState([]);

	const activeTab = useLocationLevel(0, root);
	const [hasTabs, setHasTabs] = useState(false);

	const [isThemeChangerOpen, setIsThemeChangerOpen] = useState(false);
	const [isNotificationsDialogOpen, setIsNotificationsDialogOpen] = useState(false);
	const [isInstallDialogOpen, setIsInstallDialogOpen] = useState(false);

	const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);

	const headerMenuAnchorPosition = { left: window.innerWidth, top: 40 };

	const [alertSeverity, setAlertSeverity] = useState('info');
	const [alertMessage, setAlertMessage] = useState('');
	const [isAlertOpen, setIsAlertOpen] = useState(false);

	const handleAlertClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setIsAlertOpen(false);
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted && alertMessage) setTimeout(() => setIsAlertOpen(true), 250);
		else setIsAlertOpen(false);
		return () => (isMounted = false);
	}, [alertMessage]);

	const [countdownText, setCountdownText] = useState('');
	const [countdownLink, setCountdownLink] = useState(home);
	const [countdownWarning, setCountdownWarning] = useState(false);
	const [countdownTimeUp, setCountdownTimeUp] = useState(false);
	const [isCountdownOpen, setIsCountdownOpen] = useState(false);

	const handleCountdownClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setIsCountdownOpen(false);
	};

	const interval = useRef();

	const stopCountdownTimer = () => {
		setCountdownText('');
		setCountdownLink(home);
		setCountdownWarning(false);
		setCountdownTimeUp(true);
		setIsCountdownOpen(false);
		clearInterval(interval.current);
		setTimeout(() => setCountdownTimeUp(false), 1000);
	};

	const startCountdownTimer = (timeOut) => {
		interval.current = setInterval(() => {
			const distance = new Date(timeOut).getTime() - new Date(Date.now()).getTime();

			if (distance <= 0) {
				stopCountdownTimer();
				return;
			}

			const hours = Math.floor((distance % 86400000) / 3600000);
			const minutes = Math.floor((distance % 3600000) / 60000);
			const seconds = Math.floor((distance % 60000) / 1000);

			setCountdownTimeUp(false);
			setCountdownText(`${hours}h ${minutes}m ${seconds}s`);
			setIsCountdownOpen(true);

			if (distance <= 10000) {
				setCountdownWarning(true);
			} else {
				setCountdownWarning(false);
			}
		}, 1000);
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			for (const tab of tabs) {
				if (activeTab === tab.value) {
					setHasTabs(true);
					break;
				}
				setHasTabs(false);
			}
		}
		return () => (isMounted = false);
	}, [activeTab]);

	const [notifications, setNotifications] = useState([
		{
			time: '08:00pm',
			isSeen: false,
			text: 'New quiz is now available! Test your knowledge now.',
			url: shortQuiz,
		},
		{
			time: '09:00pm',
			isSeen: false,
			text: 'Ahsan Habib, Hadi Himel and 3 people liked your blog',
			url: blogs,
		},
		{
			time: '10:00pm',
			isSeen: false,
			text: 'New module has been added to Learning C programming course',
			url: courses,
		},
		{
			time: '11:00pm',
			isSeen: false,
			text: 'Ahsan Habib has posted a new blog',
			url: blogs,
		},
		{
			time: '12:00am',
			isSeen: false,
			text: 'New Job circular available! Check them out now.',
			url: jobCircular,
		},
	]);

	let notificationCount = 0;
	notifications.forEach((notification) => {
		if (!notification.isSeen) notificationCount++;
	});

	const notificationMarkAsSeen = (index) => {
		let seenNotifications = [...notifications];
		seenNotifications[index].isSeen = true;
		setNotifications(seenNotifications);
	};

	const notificationMarkAllAsSeen = () => {
		let seenNotifications = [...notifications];
		seenNotifications.forEach((notification) => (notification.isSeen = true));
		setNotifications(seenNotifications);
	};

	const changeLanguage = () => {
		alert('Language changing will be added');
	};

	process.on('unhandledRejection', (err) => {
		console.error(err);
		setAlertSeverity('error');
		setAlertMessage(`Unhandled Rejection occurred - ${err.name}: ${err.message}`);
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<UserContext.Provider value={{ user, setUser, quizAnswer, setQuizAnswer }}>
				<AlertContext.Provider
					value={{
						alertMessage,
						setAlertMessage,
						alertSeverity,
						setAlertSeverity,
						startCountdownTimer,
						stopCountdownTimer,
						countdownTimeUp,
						setCountdownLink,
					}}>
					<Header
						tabs={tabs}
						hasTabs={hasTabs}
						activeTab={activeTab}
						matchesDesktop={matchesDesktop}
						user={user}
						notificationCount={notificationCount}
						setIsNotificationsDialogOpen={setIsNotificationsDialogOpen}
						setIsSearchMenuOpen={setIsSearchMenuOpen}
						setIsUserMenuOpen={setIsUserMenuOpen}
						setIsOptionsMenuOpen={setIsOptionsMenuOpen}
					/>

					<div
						style={{
							height: matchesDesktop ? '100vh' : 'revert',
							display: matchesDesktop ? 'flex' : 'revert',
							paddingTop: hasTabs && !matchesDesktop ? '120px' : '48px',
						}}>
						{hasTabs && matchesDesktop && (
							<div
								style={{
									height: '100%',
									overflow: 'auto',
									borderRightWidth: 1,
									borderRightStyle: 'solid',
									borderRightColor: theme.palette.divider,
									backgroundColor: theme.palette.background.paper,
								}}>
								<NavTabs
									tabs={tabs}
									activeTab={activeTab}
									matchesDesktop={matchesDesktop}
								/>
							</div>
						)}

						<div
							style={{
								height: matchesDesktop ? '100%' : 'revert',
								overflow: matchesDesktop ? 'auto' : 'revert',
								flexGrow: 1,
								backgroundColor: theme.palette.background.default,
								color: theme.palette.text.primary,
							}}>
							<div
								style={{
									width: '100%',
									minHeight: '90vh',
								}}>
								<Switch>
									<Redirect exact from='/' to={home} />
									<Redirect exact from={root} to={home} />
									<Route path={about} component={About} />
									<Route path={becomeInstructor} component={BecomeInstructor} />
									<Route path={blogs} component={Blogs} />
									<Route path={courses} component={Courses} />
									<Route path={handNotes} component={HandNotes} />
									<Route path={home} component={Home} />
									<Route path={jobCircular} component={JobCircular} />
									<Route path={join} component={Join} />
									<Route path={pdfBooks} component={PdfBooks} />
									<Route path={privacyPolicy} component={PrivacyPolicy} />
									<Route path={profile} component={Profile} />
									<Route path={questionBank} component={QuestionBank} />
									<Route path={reportBug} component={ReportBug} />
									<Route path={resetPassword} component={ReportBug} />
									<Route path={search} component={Search} />
									<Route path={shortQuiz} component={ShortQuiz} />
									<Route path={tutorials} component={Tutorials} />
									<Route path={moderator} component={Moderator} />
									<Route path='*' component={NotFound} />
								</Switch>
							</div>

							<Footer
								changeLanguage={changeLanguage}
								setIsThemeChangerOpen={setIsThemeChangerOpen}
								setIsInstallDialogOpen={setIsInstallDialogOpen}
							/>
						</div>
					</div>

					<DialogThemeChanger
						background={themeChoice.background}
						primary={themeChoice.primary}
						secondary={themeChoice.secondary}
						isThemeChangerOpen={isThemeChangerOpen}
						setIsThemeChangerOpen={setIsThemeChangerOpen}
						setThemeChoice={setThemeChoice}
					/>

					<DialogNotifications
						notifications={notifications}
						notificationMarkAsSeen={notificationMarkAsSeen}
						notificationMarkAllAsSeen={notificationMarkAllAsSeen}
						isNotificationsDialogOpen={isNotificationsDialogOpen}
						setIsNotificationsDialogOpen={setIsNotificationsDialogOpen}
					/>

					<DialogInstallApp
						isInstallDialogOpen={isInstallDialogOpen}
						setIsInstallDialogOpen={setIsInstallDialogOpen}
					/>

					<HeaderMenuSearch
						isSearchMenuOpen={isSearchMenuOpen}
						setIsSearchMenuOpen={setIsSearchMenuOpen}
					/>

					<HeaderMenuUser
						anchorPosition={headerMenuAnchorPosition}
						isUserMenuOpen={isUserMenuOpen}
						setIsUserMenuOpen={setIsUserMenuOpen}
					/>

					<HeaderMenuOptions
						anchorPosition={headerMenuAnchorPosition}
						isOptionsMenuOpen={isOptionsMenuOpen}
						setIsOptionsMenuOpen={setIsOptionsMenuOpen}
						setIsThemeChangerOpen={setIsThemeChangerOpen}
						changeLanguage={changeLanguage}
					/>

					<Snackbar
						open={isCountdownOpen}
						onClose={handleCountdownClose}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
						<Button
							component={Link}
							to={countdownLink}
							variant='outlined'
							size='large'
							style={{
								textTransform: 'none',
								color: countdownWarning
									? theme.palette.warning.main
									: theme.palette.text.primary,
								backgroundColor: theme.palette.background.paper,
								boxShadow: theme.shadows[4],
							}}>
							Time remaining : {countdownText}
						</Button>
					</Snackbar>

					<Snackbar
						open={isAlertOpen}
						onClose={handleAlertClose}
						autoHideDuration={alertMessage && alertMessage.length > 50 ? 10000 : 5000}>
						<MuiAlert
							onClose={handleAlertClose}
							severity={alertSeverity}
							elevation={6}
							variant='filled'>
							{alertMessage}
						</MuiAlert>
					</Snackbar>
				</AlertContext.Provider>
			</UserContext.Provider>
		</ThemeProvider>
	);
}
