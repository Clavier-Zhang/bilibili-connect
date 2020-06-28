import React from 'react'
import Box from '@material-ui/core/Box'
import { Grid } from '@material-ui/core'

export default function NakiriPanel(props) {
    const { children, value, index } = props;
    return (
        <Grid container justify="flex-start" hidden={value !== index}>
            {value === index && (
                <Box p={1} style={{width: '100%'}}>
                    {children}
                </Box>
            )}
        </Grid>
    )
}

