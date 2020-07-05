/* global chrome */
import React from 'react'
import { Slide } from '@material-ui/core';
import { Button, TextField, Grid, Snackbar, Chip, Avatar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
  
import TitleIcon from '@material-ui/icons/Title';

const data_all = [
    {
        type: 'up',
        value: '凉风'
    },
    {
        type: 'title_key',
        value: 'FFF'
    },
    {
        type: 'up',
        value: 'Lexburner'
    },
    {
        type: 'title_key',
        value: '明日方舟'
    },
    {
        type: 'up',
        value: '瓶子'
    },
    {
        type: 'up',
        value: '有一说一'
    },
]
export default class NakiriBlockView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title_key: "",
            up: "",
            values: [],
            // SnackBar
            message: "",
            severity:"",
            open: false,
        }
    }
    
    refreshValues = () => {
        chrome.storage.sync.get(this.props.selector, (data) => {
            this.setState({
                values: data[this.props.selector] === undefined ? this.props.defaultValue : data[this.props.selector]
            })
        })
    }

    UNSAFE_componentWillMount() {
        this.refreshValues()
    }

    textFieldOnChange = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }

    onClickButton = (type) => () => {

        // Check empty
        if (this.state[type].length == 0) {
            this.callSnack("error", "输入栏为空白")
            return
        }
        
        // Check duplicate
        for (let i = 0; i < this.state.values.length; i++) {
            if (this.state.values[i].type == type && this.state.values[i].value == this.state[type]) {
                this.callSnack("error", "重复添加「" + this.state[type] + "」")
                return
            }
        }
        
        chrome.storage.sync.get(this.props.selector, (data) => {
            this.setState({
                values: data[this.props.selector] === undefined ? this.props.defaultValue : data[this.props.selector]
            })

            let values = data[this.props.selector] === undefined ? [] : data[this.props.selector]
            values = [{type: type, value: this.state[type]}].concat(values)
            chrome.storage.sync.set({
                [this.props.selector]: values
            })

            this.refreshValues()

            this.callSnack("success", "添加「" + this.state[type] + "」成功")

        })

    }

    callSnack = (severity, message) => {
        this.setState({
            open: true,
            severity: severity,
            message: message
        })
    }

    handleClose = () => {
        this.setState({
          open: false,
        })
    }

    handleDelete = (item) => () => {

        chrome.storage.sync.get(this.props.selector, (data) => {

            let values = data[this.props.selector]

            values = values.filter(function(copy) { return item.type != copy.type || item.value != copy.value })

            chrome.storage.sync.set({
                [this.props.selector]: values
            })

            this.setState({
                values: values
            })

            this.refreshValues()

            this.callSnack("success", "移除「" + item.value + "」成功")

        })

    }

    render() {

        return (
            <Grid container justify="center">
                <Grid item container xs={11}>

                    <Grid item container xs={12} alignItems="flex-end">
                        <Grid item xs={9} style={{paddingBottom: 20}}>
                            <TextField onChange={this.textFieldOnChange('up')} color="secondary" fullWidth label="屏蔽UP主"/>
                        </Grid>
                        <Grid item xs={3} style={{paddingBottom: 20}}>
                            <Button onClick={this.onClickButton('up')} variant="contained" color="secondary" size="small">添加</Button>
                        </Grid>
                    </Grid>

                    
                    <Grid item container xs={12} alignItems="flex-end">
                        <Grid item xs={9} style={{paddingBottom: 20}}>
                            <TextField onChange={this.textFieldOnChange('title_key')} color="primary" fullWidth label="屏蔽关键词"/>
                        </Grid>
                        <Grid item xs={3} style={{paddingBottom: 20}}>
                            <Button onClick={this.onClickButton('title_key')} variant="contained" color="primary" size="small">添加</Button>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} style={{minHeight: 500, alignContent: 'baseline'}} justify="flex-start" alignItems="flex-start">
                        {this.state.values.map((item, index) => (
                            <Grid item style={{padding: 3}} key={index}>
                                <Chip
                                    icon={item.type === "up" ? <FaceIcon /> : <TitleIcon/>}
                                    label={item.value}
                                    onDelete={this.handleDelete(item)}
                                    color={item.type === "up" ? "secondary" : "primary"}
                                    size="small"
                                />
                            </Grid>
                        ))}

                    </Grid>

                    <Snackbar open={this.state.open} onClose={this.handleClose} TransitionComponent={Slide} autoHideDuration={1000}>
                        <MuiAlert elevation={6} variant="filled" severity={this.state.severity} style={{alignItems: 'center'}}>
                            {this.state.message}
                        </MuiAlert>
                    </Snackbar>

                </Grid>
            </Grid>
        )
    }
}

