import { Dialog, createTheme, styled } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            light: '#5f999f',
            main: '#388087',
            dark: '#27595e',
            contrastText: '#fff',
        },
        nuetral: {
            light: '#f7f7f4',
            main: '#f6f6f2',
            dark: '#acaca9',
            contrastText: '#000',
        },
        secondary: {
            light: '#cef0d7',
            main: '#c2edce',
            dark: '#87a590',
            contrastText: '#000',
        }
      },
})

export const CustomDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialog-paper' : {
        width: '50',
        height: '100%',
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        maxHeight: '100%'
    },
    '& .MuiDialogContent-root': {
        overflowY: 'auto'
    },
    '& .MuiDialog-container': {
        justifyContent: 'flex-end',
        height: '100%'
    }
}))