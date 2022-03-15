import React from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import HeaderSearchBar from './HeaderSearchBar';

const SearchMenu = ({ isSearchMenuOpen, setIsSearchMenuOpen }) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Popover
				open={isSearchMenuOpen}
				onClose={() => setIsSearchMenuOpen(false)}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				transformOrigin={{ vertical: 'center', horizontal: 'center' }}
				id='search-menu-popup'>
				<div className={classes.searchMenuContainer}>
					<HeaderSearchBar
						autoFocus
						fullWidth
						setIsSearchMenuOpen={setIsSearchMenuOpen}
					/>
				</div>
			</Popover>
		</React.Fragment>
	);
};

const useStyles = makeStyles((theme) => ({
	searchMenuContainer: {
		minWidth: 280,
		minHeight: 60,
		padding: theme.spacing(1),
		boxShadow: `0px 0px 4px 0px ${theme.palette.action.selected} inset`,
		[theme.breakpoints.up('xs')]: {
			minWidth: 360,
		},
		[theme.breakpoints.up('sm')]: {
			minWidth: 480,
		},
	},
}));
export default SearchMenu;
