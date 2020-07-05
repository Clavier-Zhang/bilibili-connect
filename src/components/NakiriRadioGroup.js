/* global chrome */
import React from 'react'
import NakiriCanvas from './NakiriCanvas';
import { Grid, Radio, RadioGroup, FormControlLabel } from '@material-ui/core'


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
                            <NakiriCanvas selected={this.state.value === "old1"} background='url("https://i0.hdslb.com/bfs/archive/6c42c40ed54f4bb5ea491894aff693878afa6580.png")'/>
                        </Grid>
                        <Grid item xs={2}/>
                        <Grid item container xs={10}>
                            <FormControlLabel value="old1" control={<Radio size="small" />} label="旧版#1"/>
                        </Grid>
                    </Grid>

                    <Grid item container xs={6}>
                        <Grid item xs={12}>
                            <NakiriCanvas selected={this.state.value === "old2"} background='url("https://i0.hdslb.com/bfs/album/2d78428aaf2d479538b8d3ec20390372cefdb07c.jpg")'/>
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