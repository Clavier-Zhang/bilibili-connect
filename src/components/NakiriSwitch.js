/* global chrome */
import React from 'react';
import { Switch, Grid } from '@material-ui/core';


class NakiriSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: false
        }
    }

    componentWillMount() {
        chrome.storage.sync.get(this.props.selector, (items) => {
            this.setState({
                value: items[this.props.selector] === undefined ? this.props.defaultValue : items[this.props.selector]
            })
        })
    }

    switchOnChange(event) {
        this.setState({
            value: event.target.checked
        })
        chrome.storage.sync.set({
          [this.props.selector]: event.target.checked
        })
    }

    render() {
        return (
            <Grid container alignItems="center" className="category-switch" justify="flex-start">
                <Grid item xs={5} style={{textAlign: 'left', ...this.props.styles}}>{this.props.title}</Grid>
                <Grid item xs={7}>
                    <Switch onChange={this.switchOnChange.bind(this)} checked={this.state.value} />
                </Grid>
            </Grid>
        )
    }
    
}

NakiriSwitch.defaultProps = {
    defaultValue: true,
    styles: {}
}

export default NakiriSwitch;
