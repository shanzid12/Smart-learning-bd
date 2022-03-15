// Icons
import HomeIcon from '@material-ui/icons/Home';
import CoursesIcon from '@material-ui/icons/LibraryBooks';
import QuestionBankIcon from '@material-ui/icons/LiveHelp';
import PdfBooksIcon from '@material-ui/icons/MenuBook';
import BlogsIcon from '@material-ui/icons/ChromeReaderMode';
import TutorialsIcon from '@material-ui/icons/YouTube';
import ShortQuizIcon from '@material-ui/icons/AssignmentTurnedIn';
import JobCircularIcon from '@material-ui/icons/Work';

// Links
import {
	blogs,
	courses,
	home,
	jobCircular,
	pdfBooks,
	questionBank,
	shortQuiz,
	tutorials,
} from '../utils/fixedRoutes';

const tabs = [
	{
		to: home,
		value: 'home',
		label: 'Home',
		icon: HomeIcon,
	},
	{
		to: courses,
		value: 'courses',
		label: 'Courses',
		icon: CoursesIcon,
	},
	{
		to: blogs,
		value: 'blogs',
		label: 'Blogs',
		icon: BlogsIcon,
	},
	{
		to: shortQuiz,
		value: 'shortquiz',
		label: 'Short Quiz',
		icon: ShortQuizIcon,
	},
	{
		to: pdfBooks,
		value: 'pdfbooks',
		label: 'PDF Books',
		icon: PdfBooksIcon,
	},
	{
		to: questionBank,
		value: 'questionbank',
		label: 'Question Bank',
		icon: QuestionBankIcon,
	},
	{
		to: tutorials,
		value: 'tutorials',
		label: 'Seminar',
		icon: TutorialsIcon,
	},
	{
		to: jobCircular,
		value: 'jobcircular',
		label: 'Job Circular',
		icon: JobCircularIcon,
	},
];

export default tabs;
