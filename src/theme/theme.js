

import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            //'Poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },

    palette: {

        type: 'light',
        primary: {
            main: '#1e3c72' // dark blu
        },
        secondary: { main: '#fff' }, //purple?

        error: { main: '#ca0909' }, //red

        sand: { main: '#F4DECB' }, //tannish
        shell: { main: '#F8EEE7' }, //tannish
        status: {
            danger: '#b71c1c' // deep red
        },


        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});