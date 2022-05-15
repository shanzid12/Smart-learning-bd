import { Box, Button, Typography, SvgIcon } from '@material-ui/core';
import React from 'react';
//React helmet
import { Helmet } from 'react-helmet';
export default function AboutUs() {
	const dummyText = `A quick brown fox jumped over the lazy dog. 01234 56789 </>,.; ?!&$@ +-=%#* ^~()[] "HI" 'hi'`;
	const dummyTextBangla = `আগুনের শিখা নিভে গিয়েছিল, আর তিনি জানলা দিয়ে তারাদের দিকে তাকালেন৷ ০১২৩৪ ৫৬৭৮৯`;
	return (
		<React.Fragment>
			<Helmet>
				<title>{`About Us - SmartLearningBD`}</title>
			</Helmet>
			<Box bgcolor="background.paper" textAlign="center" p={5}>
				<Typography variant="h5" color="textPrimary" display="block">
					I'm just a programmer...
				</Typography>
			</Box>
		</React.Fragment>
	);
}
