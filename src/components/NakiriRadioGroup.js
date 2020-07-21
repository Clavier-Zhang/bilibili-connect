/* global chrome */
import React from 'react'
import NakiriCanvas from './NakiriCanvas';
import { Grid, Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import old1 from '../asset/old1.png'
import old2 from '../asset/old2.jpg'

export default class NakiriRadioGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'default'
        }
    }

    UNSAFE_componentWillMount() {
        chrome.storage.sync.get(this.props.selector, (items) => {
            this.setState({
                value: items[this.props.selector] === undefined ? this.props.defaultValue : items[this.props.selector]
            })
        })
    }

    radioOnChange(event) {
        this.setState({
            value: event.target.value
        })
        chrome.storage.sync.set({
          [this.props.selector]: event.target.value
        })
    }

    render() {
        return (
            <RadioGroup value={this.state.value} onChange={this.radioOnChange.bind(this)}>
                <Grid container>

                    <Grid item container xs={6}>
                        <Grid item xs={12}>
                            <NakiriCanvas selected={this.state.value === "default"} background='rgba(255, 255, 255, 0.3)'/>
                        </Grid>
                        <Grid item xs={2}/>
                        <Grid item container xs={10}>
                            <FormControlLabel value="default" control={<Radio size="small" />} label="默认"/>
                        </Grid>
                    </Grid>

                    <Grid item container xs={6}>
                        <Grid item xs={12}>
                            <NakiriCanvas selected={this.state.value === "dark"} background='#212121'/>
                        </Grid>
                        <Grid item xs={2}/>
                        <Grid item container xs={10}>
                            <FormControlLabel value="dark" control={<Radio size="small" />} label="深色"/>
                        </Grid>
                    </Grid>

                    <Grid item container xs={6}>
                        <Grid item xs={12}>
                            <NakiriCanvas selected={this.state.value === "old1"} background={`url(${old1})`}/>
                        </Grid>
                        <Grid item xs={2}/>
                        <Grid item container xs={10}>
                            <FormControlLabel value="old1" control={<Radio size="small" />} label="旧版#1"/>
                        </Grid>
                    </Grid>

                    <Grid item container xs={6}>
                        <Grid item xs={12}>
                            <NakiriCanvas selected={this.state.value === "old2"} background={`url(${old2})`}/>
                        </Grid>
                        <Grid item xs={2}/>
                        <Grid item container xs={10}>
                            <FormControlLabel value="old2" control={<Radio size="small" />} label="旧版#2"/>
                        </Grid>
                    </Grid>

                </Grid>
            </RadioGroup>
        )
    }
}