import React, { useState } from 'react';
//Material UI Core
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//Custom components
import DialogIFrameViewer from '../components/DialogIFrameViewer';

export default function QuestionSSC() {
	const sscQuestions = [
		{
			title: 'HIGHER MATH-2019',
			link: 'https://drive.google.com/file/d/1C-m1HVdudhDVTHdJeadhLaYcnFEpKdNn/preview',
		},
		{
			title: 'SCIENCE-2019',
			link: 'https://drive.google.com/file/d/1zWPP6sNRe-TOZwWQnmoVtYJCl8YuwXSI/preview',
		},
		{
			title: 'ENGLISH 1ST-2019',
			link: 'https://drive.google.com/file/d/12tC_x6BOR-VFBhCkW_Kyz9vsQpzbWx-N/preview',
		},
		{
			title: 'ENGLISH 2ND-2019',
			link: 'https://drive.google.com/file/d/18MHKO_D7aPpj-nhEf-TbiU0fm_q6Xrjo/preview',
		},
		{
			title: 'BIOLOGY-2019',
			link: 'https://drive.google.com/file/d/1SmmMqK73nav2zTCqnpw37Dl5BEuervfx/preview',
		},
		{
			title: 'AGRICULTURE',
			link: 'https://drive.google.com/file/d/1gwSZ6SCDFnjwDgkw4RH4qQVyc8P8lUlT/preview',
		},
		{
			title: 'ACCOUNTING',
			link: 'https://drive.google.com/file/d/1yjQUzrYKkTDqxVyGagYS4tAkke4K-98C/preview',
		},
		{
			title: 'MATHEMATICS-2019',
			link: 'https://drive.google.com/file/d/14cDHwutgQiyxonSU0Z2mg0GNR-trevW1/preview',
		},
		{
			title: 'CIVICS-2019',
			link: 'https://drive.google.com/file/d/1aK7singqld2OkCX94vqkrq8-6ZarJm0H/preview',
		},
		{
			title: 'HOME SCIENCE-2019',
			link: 'https://drive.google.com/file/d/1saCjMUZb5OT1TJJvUfdozX7W2CCb_yk_/preview',
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
	const booksArrays = sscQuestions.map((book) => {
		return (
			<Card variant='outlined' style={{ margin: 16, width: 240 }}>
				<CardActionArea onClick={() => handleLinkOpen(book.title, book.link)}>
					<CardMedia
						image={`${process.env.PUBLIC_URL}/assets/images/ssc-exam.jpg`}
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
