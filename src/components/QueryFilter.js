import React, { useEffect, useMemo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { levelsArray, schoolDeptArray, jobsDeptArray } from '../utils/optionsArrays';

const QueryFilter = ({ search, setSearch, level, setLevel, department, setDepartment }) => {
	const [departmentsArray, setDepartmentsArray] = useState([]);

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			if (level === 'JSC' || level === 'SSC' || level === 'HSC' || level === 'Admission') {
				setDepartmentsArray(schoolDeptArray);
			} else {
				setDepartmentsArray(jobsDeptArray);
			}
		}
		return () => (isMounted = false);
	}, [level]);

	const levelsMenu = useMemo(() => {
		return levelsArray.map((option) => (
			<MenuItem key={option} value={option}>
				{option ? option : 'All'}
			</MenuItem>
		));
	}, []);

	const departmentsMenu = useMemo(() => {
		return departmentsArray.map((option) => (
			<MenuItem key={option} value={option}>
				{option ? option : 'All'}
			</MenuItem>
		));
	}, [departmentsArray.length]);

	const searchField = useMemo(
		() => (
			<TextField
				onChange={(event) => {
					if (!event.target.value) setSearch('');
				}}
				onKeyPress={(event) => {
					if (event.key === ' ' || event.key === 'Enter')
						setSearch(event.target.value.trim());
				}}
				label='Search by title'
				variant='outlined'
				margin='dense'
				fullWidth
			/>
		),
		[],
	);

	const levelsField = useMemo(
		() => (
			<TextField
				onChange={(event) => {
					setLevel(event.target.value);
					setDepartment('');
				}}
				value={level}
				select
				label='Level'
				variant='outlined'
				margin='dense'
				fullWidth>
				{levelsMenu}
			</TextField>
		),
		[level],
	);

	const departmentFields = useMemo(
		() => (
			<TextField
				onChange={(event) => setDepartment(event.target.value)}
				value={department}
				disabled={Boolean(!level)}
				select
				label='Department'
				variant='outlined'
				margin='dense'
				fullWidth>
				{departmentsMenu}
			</TextField>
		),
		[department, departmentsArray.length, level],
	);

	let hasSearchField = false;
	let hasLevelsField = false;
	let hasDepartmentFields = false;

	if (typeof search === 'string' && typeof setSearch === 'function') hasSearchField = true;
	if (typeof level === 'string' && typeof setLevel === 'function') hasLevelsField = true;
	if (hasLevelsField && typeof department === 'string' && typeof setDepartment === 'function')
		hasDepartmentFields = true;

	return (
		<Grid container justifyContent='center' spacing={1}>
			{hasSearchField && (
				<Grid item xs={12} sm={12} md={4}>
					{searchField}
				</Grid>
			)}

			{hasLevelsField && (
				<Grid item xs={12} sm={hasDepartmentFields ? 6 : 12} md={4}>
					{levelsField}
				</Grid>
			)}

			{hasDepartmentFields && (
				<Grid item xs={12} sm={6} md={4}>
					{departmentFields}
				</Grid>
			)}
		</Grid>
	);
};

export default QueryFilter;
