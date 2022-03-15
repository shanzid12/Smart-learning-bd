import React, { useState } from 'react';
//Material UI Core
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//Custom components
import DialogIFrameViewer from '../src/components/DialogIFrameViewer';

export default function QuestionJob() {
	const jobQuestions = [
		{
			title: 'PHYSICS 1ST PAPER',
			link: 'https://drive.google.com/file/d/1EYO7uboatB0QRJQ7qbiZCCCzif3ZU9mC/preview',
		},
		{
			title: 'ICT-2019',
			link: 'https://drive.google.com/file/d/10--B7G-Em1OYOrZh8uhKyD3kCHZMiKBT/preview',
		},
		{
			title: 'BIOLOGY 1ST PAPER-2019',
			link: 'https://drive.google.com/file/d/1k18mQrHKUZDFrAKK9XNR-ij8K2XzPYTK/preview',
		},
		{
			title: 'BANGLA 1ST PAPER',
			link: 'https://drive.google.com/file/d/1FZRd6fkh42GC4Qx8cvEyy3UjTm_O3E9-/preview',
		},
		{
			title: 'HIGHER MATH-2019',
			link: 'https://drive.google.com/file/d/17ScSOSJf4nMxaiQ9P7z81l7ZT9INcbkJ/preview',
		},
		{
			title: 'BANGLA 2ND PAPER-2019',
			link: 'https://drive.google.com/file/d/15_P-uWP5ItTgoLeRibKHhsVolkXc4MAU/preview',
		},
		{
			title: 'CHEMISTRY 2ND PAPER-2019',
			link: 'https://drive.google.com/file/d/18tjnQvSSBXa3KtJRPamFBcXuO3AVs4BD/preview',
		},
		{
			title: 'ENGLISH 2ND PAPER-2019',
			link: 'https://drive.google.com/file/d/1CfxcYHYuUzs7HGgkZmWrVufoDP2316Qy/preview',
		},
		{
			title: 'ECONOMICS 2ND-2019',
			link: 'https://drive.google.com/file/d/1Zehi6q8rU2gXZ2qD8wYkm0VOnp_bBd1b/preview',
		},
		{
			title: 'HISTORY 2ND-2019',
			link: 'https://drive.google.com/file/d/107YSrTQvF6vAXzPW-QrWUkkfG_Bt5vI9/preview',
		},
	];
	const [iFrameDialogIsOpen, setIFrameDialogIsOpen] = useState(false);
	const [iFrameTitle, setIFrameTitle] = useState(false);
	const [iFrameLink, setIFrameLink] = useState(false);
	const handleLinkOpen = (title, link) => {
		setIFrameTitle(title);
		setIFrameLink(link);
		setIFrameDialogIsOpen(true);
	};
	const booksArrays = jobQuestions.map((book) => {
		return (
			<Card variant='outlined' style={{ margin: 16, width: 240 }}>
				<CardActionArea onClick={() => handleLinkOpen(book.title, book.link)}>
					<CardMedia
						image={`${process.env.PUBLIC_URL}/assets/images/job-search.jpg`}
						title='Cover Image'
						style={{ height: 172 }}
					/>
					<CardContent>
						<Typography variant='subtitle1' color='textPrimary'>
							{book.title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	});
	return (
		<React.Fragment>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'flex-start',
					justifyContent: 'center',
				}}>
				{booksArrays}
			</div>
			<DialogIFrameViewer
				title={iFrameTitle}
				link={iFrameLink}
				iFrameDialogIsOpen={iFrameDialogIsOpen}
				setIFrameDialogIsOpen={setIFrameDialogIsOpen}
			/>
		</React.Fragment>
	);
}
