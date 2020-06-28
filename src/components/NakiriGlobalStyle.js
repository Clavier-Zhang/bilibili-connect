import { withStyles } from '@material-ui/core/styles';

export const NakiriGlobalStyle = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiFormControlLabel-label': {
            fontSize: '18px',
        },
        '.MuiSelect-root': {
            fontSize: '18px',
        },
        '.MuiRadio-root': {
            color: 'white'
        },
        '.MuiSelect-icon': {
            color: 'white'
        },
        '.MuiInput-underline:before': {
            borderBottomColor: 'white'
        },
        '.MuiInputBase-input': {
            color: 'white'
        },
        '.MuiFormLabel-root': {
            color: 'white',
            fontSize: '18px',
        }
    },
})(() => null);
  