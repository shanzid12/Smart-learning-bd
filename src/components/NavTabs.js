import React from 'react';
import { Link } from 'react-router-dom';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const NavTabs = ({ tabs, activeTab, matchesDesktop }) => {
	return (
		<Tabs
			value={activeTab}
			orientation={matchesDesktop ? 'vertical' : 'horizontal'}
			variant='scrollable'
			scrollButtons='auto'
			indicatorColor='primary'
			aria-label='Navigation tabs'>
			{tabs.map((tab, index) => (
				<Tab
					component={Link}
					to={tab.to}
					value={tab.value}
					label={tab.label}
					key={`${tab.value}-${index}`}
					icon={React.createElement(tab.icon)}
				/>
			))}
		</Tabs>
	);
};

export default NavTabs;
