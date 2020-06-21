/* global chrome */
import React from 'react';
import { Switch, Grid } from '@material-ui/core';


class CategorySwitch extends React.Component {

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
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item xs={6} style={{textAlign: 'left'}}>{this.props.title}</Grid>
                <Grid item xs={6}>
                    <Switch onChange={this.switchOnChange.bind(this)} checked={this.state.value} label="Small" />
                </Grid>
            </Grid>
        )
    }
    
}

CategorySwitch.defaultProps = {
    defaultValue: true
}

export default CategorySwitch;
