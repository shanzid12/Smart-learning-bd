// Icons
import HomeIcon from '@material-ui/icons/Home';
import CoursesIcon from '@material-ui/icons/LibraryBooks';
import QuestionBankIcon from '@material-ui/icons/LiveHelp';
import PdfBooksIcon from '@material-ui/icons/MenuBook';
import BlogsIcon from '@material-ui/icons/ChromeReaderMode';
import ShortQuizIcon from '@material-ui/icons/AssignmentTurnedIn';

// Links
import { blogs, courses, home, pdfBooks, questionBank, shortQuiz } from '../utils/fixedRoutes';

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
];

export default tabs;
