import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Button, Select, MenuItem, Tab, Tabs, AppBar } from '@material-ui/core';


export default function NakiriPanel(props) {
    const { children, value, index } = props;
    return (
        <Grid container justify="flex-start" hidden={value !== index}>
            {value === index && (
                <Box p={1} className="233">
                    {children}
                </Box>
            )}
        </Grid>
    )
}

