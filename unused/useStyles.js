import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footerLinksContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerLink: {
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary,
        marginInline: theme.spacing(2),
        marginBottom: theme.spacing(1),
        textAlign: 'center',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline 2px'
        }
    },
    themeDialogSubtitle: {
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(1),
    },
    themeDialogRadioGroup: {
        marginLeft: '23px',
        marginBottom: theme.spacing(1),
    },
    themeDialogRadioLabelBackground: {
        border: '1px solid #9e9e9e',
        borderRadius: '8px',
        height: '40px',
        width: '192px',
        boxSizing: 'border-box',
        paddingLeft: '12px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    themeDialogRadioLabelBackgroundInner: {
        border: '1px solid #9e9e9e',
        borderRadius: '12px',
        height: '24px',
        width: '24px',
        boxSizing: 'border-box',
        position: 'absolute',
        right: '8px',
    },
    themeDialogRadioLabelAccent: {
        border: '1px solid #ffffff80',
        borderRadius: '8px',
        height: '40px',
        width: '192px',
        boxSizing: 'border-box',
        paddingLeft: '12px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: '#fff',
    },
    themeDialogRadioLabelAccentInner: {
        border: '1px solid #ffffff80',
        borderRadius: '12px',
        height: '24px',
        width: '24px',
        boxSizing: 'border-box',
        position: 'absolute',
        right: '8px',
    },
}));

export default useStyles;