import React from 'react'
import './App.css'
import NakiriDisplayView from './views/NakiriDisplayView'
import NakiriPanel from './components/NakiriPanel'
import { NakiriGlobalStyle } from './components/NakiriGlobalStyle';
import NakiriBlockView from './views/NakiriBlockView';
import { Grid, Tab, Tabs, AppBar } from '@material-ui/core'



export default function App() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container justify="center" className="App" alignItems="flex-start">
            
            {/* Load global css for material ui */}
            <NakiriGlobalStyle/>

            {/* Tab */}
            <AppBar position="static" color="transparent">
                <Tabs value={value} onChange={handleChange} variant="fullWidth" textColor="inherit">
                    <Tab label="外观" />
                    <Tab label="屏蔽" />
                </Tabs>
            </AppBar>

            {/* Panels */}
            <NakiriPanel value={value} index={0}>
                <NakiriDisplayView/>
            </NakiriPanel>

            <NakiriPanel value={value} index={1}>
                <NakiriBlockView selector="blocks" defaultValue={[]}/>
            </NakiriPanel>

        </Grid>
    )
}
