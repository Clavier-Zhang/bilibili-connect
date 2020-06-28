/* global chrome */
import React from 'react'
import { CATEGORIES } from '../config'
import { Grid, Select, MenuItem } from '@material-ui/core'

export default class NakiriSelect extends React.Component {

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

    selectOnChange(event) {
        this.setState({
            value: event.target.value
        })
        chrome.storage.sync.set({
          [this.props.selector]: event.target.value
        })
    }

    render() {
        return (
            <Grid container alignItems="center">

                <Grid xs={5}>
                    {this.props.title}
                </Grid>

                <Grid xs={7} style={{background: 'transparent', color: 'white'}}>
                    <Select value={this.state.value} 
                            onChange={this.selectOnChange.bind(this)} 
                            fullWidth 
                            color="secondary" 
                            style={{background: 'transparent', color: 'white'}}>

                        {Object.keys(CATEGORIES).reverse().map((title) => {
                            return (
                                <MenuItem value={CATEGORIES[title]}  style={{color: "white", background: "#212121"}} >{title}</MenuItem>
                            )
                        })}

                    </Select>
                </Grid>

            </Grid>
        )
    }
}