import React from 'react'
import { Grid, Button, Select, MenuItem, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import '../App.css'
import { withStyles } from '@material-ui/core/styles';

const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
      '.MuiFormControlLabel-label': {
        fontSize: '18px',
      },
    },
  })(() => null);
  

export default class NakiriRadioGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: false
        }
    }




    componentWillMount() {
        // chrome.storage.sync.get(this.props.selector, (items) => {
        //     this.setState({
        //         value: items[this.props.selector] === undefined ? this.props.defaultValue : items[this.props.selector]
        //     })
        // })
    }

    radioOnChange(event) {
        this.setState({
            value: event.target.value
        })
        // chrome.storage.sync.set({
        //   [this.props.selector]: event.target.checked
        // })
    }


    render() {
        return (
            <RadioGroup value={this.state.value} onChange={this.radioOnChange.bind(this)}>
                <Grid container>
                    <GlobalCss />

                    <Grid item xs={6}>
                        <FormControlLabel value="female" control={<Radio size="small" />} label="默认" size="small" 
                        classes={{
                            // label: useStyles().label
                        }} />
                    </Grid>

                    <Grid item xs={6}>
                        <FormControlLabel value="female" control={<Radio />} labelPlacement="top" label="默认" />
                    </Grid>

                    <Grid item xs={6}>
                        <FormControlLabel value="female" control={<Radio />} labelPlacement="top" label="默认" />
                    </Grid>

                    <Grid item xs={6}>
                        <FormControlLabel value="female" control={<Radio />} labelPlacement="top" label="默认" />
                    </Grid>

                </Grid>
            </RadioGroup>
        )
    }
}