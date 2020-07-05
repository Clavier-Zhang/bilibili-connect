import React from 'react'
import NakiriSwitch from '../components/NakiriSwitch'
import NakiriSelect from '../components/NakiriSelect'
import NakiriRadioGroup from '../components/NakiriRadioGroup'
import { CATEGORIES } from '../config'
import { Grid } from '@material-ui/core'


class NakiriDisplayView extends React.Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid container item xs={11}>

                    <Grid item xs={5} style={{paddingTop: 20}}>
                        <NakiriSwitch title="深色模式" selector="is_dark_mode" defaultValue={false}/>
                    </Grid>

                    <Grid item xs={7} style={{paddingTop: 20}}>
                        <NakiriSelect title="置顶分区" selector="top_category" defaultValue={"#bili_live"}/>
                    </Grid>

                    <Grid item xs={12} style={{paddingTop: 30, paddingBottom: 10}}>
                        <NakiriRadioGroup selector="banner" defaultValue="default"/>
                    </Grid>

                    {Object.keys(CATEGORIES).map((title, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <NakiriSwitch title={title} selector={CATEGORIES[title]}/>
                            </Grid>
                        )
                    })}

                </Grid>
            </Grid>
        )
    }
}

export default NakiriDisplayView;
