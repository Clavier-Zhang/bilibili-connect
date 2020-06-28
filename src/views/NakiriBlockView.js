/* global chrome */
import React from 'react'
import { Slide } from '@material-ui/core';
import { Button, TextField, Grid, Snackbar } from '@material-ui/core'
import { SnackbarProvider, useSnackbar } from 'notistack'

export default class NakiriBlockView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            up: "",
            values: [],
            open: false
        }
    }

    componentWillMount() {
        chrome.storage.sync.get(this.props.selector, (data) => {
            this.setState({
                values: data[this.props.selector] === undefined ? this.props.defaultValue : data[this.props.selector]
            })
        })
    }

    onChange = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }

    onClickButton = (key) => () => {
        this.callSnack(1, 2)
        // this.setState({
        //     values: event.target.value,
        //     open: true
        // })
        // chrome.storage.sync.set({
        //   [this.props.selector]: event.target.value
        // })
        // Check
    }

    callSnack = (status, messg) => {
        this.setState({
            open: true
        })
        setTimeout(this.handleClose.bind(this), 1000)
        
    }

    

    handleClose = () => {
        this.setState({
          open: false,
        })
    }

    render() {
        console.log('values:', this.state.values, this.props.defaultValue)
        return (
            <Grid container justify="center">
                <Grid item container xs={11}>

                    <Grid item container xs={12} alignItems="flex-end">
                        <Grid item xs={9} style={{paddingBottom: 20}}>
                            <TextField onChange={this.onChange('up')} color="secondary" fullWidth label="屏蔽UP主"/>
                        </Grid>
                        <Grid item xs={3} style={{paddingBottom: 20}}>
                            <Button onClick={this.onClickButton('up')} variant="contained" color="secondary" size="small">添加</Button>
                        </Grid>
                    </Grid>

                    
                    <Grid item container xs={12} alignItems="flex-end">
                        <Grid item xs={9} style={{paddingBottom: 20}}>
                            <TextField onChange={this.onChange('keyword')} color="primary" fullWidth label="屏蔽标题关键词"/>
                        </Grid>
                        <Grid item xs={3} style={{paddingBottom: 20}}>
                            <Button onClick={this.onClickButton('keyword')} variant="contained" color="primary" size="small">添加</Button>
                        </Grid>
                    </Grid>
                    

                    {this.state.values.map((value) => (
                        <Grid item>123</Grid>
                    ))}

                    <Snackbar
                        open={this.state.open}
                        onClose={this.handleClose}
                        TransitionComponent={Slide}
                        message="I love snacks"
                    />

                    



                </Grid>
            </Grid>
        )
    }
}