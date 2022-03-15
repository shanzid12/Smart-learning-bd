import React, { useState } from 'react';
//Material UI core
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
//Material UI icons
import SearchIcon from '@material-ui/icons/Search';
//React router
import { useHistory } from 'react-router-dom';
//Fixed Routes
import { search } from '../utils/fixedRoutes';

const SearchBar = ({ setIsSearchMenuOpen, ...props }) => {
	const classes = useStyles();
	const history = useHistory();

	const [searchQuery, setSearchQuery] = useState('');
	const handleSearchPush = (event) => {
		event.target.blur();
		history.push(`${search}/${searchQuery}`);
		setIsSearchMenuOpen(false);
	};

	return (
		<OutlinedInput
			{...props}
			type='search'
			placeholder='Search...'
			onChange={(event) => setSearchQuery(event.target.value)}
			onKeyPress={(event) => {
				if (event.key === 'Enter') handleSearchPush(event);
			}}
			inputProps={{
				'aria-label': 'input search query',
				className:
					props.margin === 'dense' ? classes.searchInputDense : classes.searchInput,
			}}
			endAdornment={
				<Tooltip title='Show search results'>
					<IconButton
						onClick={(event) => handleSearchPush(event)}
						aria-label='show search results'
						size='small'
						edge='end'>
						<SearchIcon />
					</IconButton>
				</Tooltip>
			}
		/>
	);
};

const useStyles = makeStyles((theme) => ({
	searchInput: {
		padding: theme.spacing(1.5, 1, 1.5, 2),
		'&::-webkit-search-cancel-button': {
			appearance: 'none',
		},
	},
	searchInputDense: {
		padding: theme.spacing(1, 1, 1, 2),
		'&::-webkit-search-cancel-button': {
			appearance: 'none',
		},
	},
}));

export default SearchBar;
