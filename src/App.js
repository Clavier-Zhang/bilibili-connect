import React from 'react';
import './App.css';
import NakiriSwitch from './components/NakiriSwitch'
import HideView from './views/HideView';
import NakiriPanel from './components/NakiriPanel';
import { Grid, Button, Select, MenuItem, Tab, Tabs, AppBar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
  }));

export default function App() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    

    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container justify="center" className="App" alignItems="flex-start">

            <AppBar position="static" color="transparent">
                <Tabs value={value} onChange={handleChange} variant="fullWidth" textColor="inherit">
                    <Tab label="外观" />
                    <Tab label="屏蔽关键字" />
                    <Tab label="屏蔽up主"/>
                </Tabs>
            </AppBar>

            <NakiriPanel value={value} index={0}>
                <HideView/>
            </NakiriPanel>

            <NakiriPanel value={value} index={1}>
                    
            </NakiriPanel>

            <NakiriPanel value={value} index={2}>
  
            </NakiriPanel>
      
        </Grid>
    )
}
