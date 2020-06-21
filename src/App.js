import React from 'react';
import './App.css';
import CategorySwitch from './components/CategorySwitch'
import { Grid, Button } from '@material-ui/core';


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid container alignItems="center" xs={10}>

                        <Button
                        variant="contained"
                        component="label"
                        >
                        Upload File
                        <input
                            type="file"
                            style={{ display: "none" }}
                        />
                        </Button>

                        <Grid item xs={12} style={{textAlign: 'left', paddingBottom: 10, fontWeight: 'bold'}}>
                            外观
                        </Grid>

                        <Grid item xs={6}>
                            <CategorySwitch title="深色模式" selector="is_dark_mode"/>
                        </Grid>

                        <Grid item xs={6}>
                            <CategorySwitch title="置顶新番" selector="isDarkMode"/>
                        </Grid>


                        <Grid item xs={12} style={{textAlign: 'left', paddingBottom: 10, fontWeight: 'bold', paddingTop: 10}}>
                            屏蔽设置
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="直播" selector="#bili_live"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="推广" selector="#reportFirst2"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="舞蹈" selector="#bili_dance"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="游戏" selector="#bili_game"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="数码" selector="#bili_digital"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="专栏" selector="#bili_read"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="时尚" selector="#bili_fashion"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="知识" selector="#bili_technology"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="生活" selector="#bili_life"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="鬼畜" selector="#bili_kichiku"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="娱乐" selector="#bili_ent"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="资讯" selector="#bili_information"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="影视" selector="#bili_cinephile"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="国创" selector="#bili_guochuang"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="漫画" selector="#bili_manga"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="音乐" selector="#bili_music"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="电影" selector="#bili_movie"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="电视剧" selector="#bili_teleplay"/>
                        </Grid>

                        <Grid item xs={4}>
                            <CategorySwitch title="记录片" selector="#bili_documentary"/>
                        </Grid>

                        <Grid item xs={5}>
                            <CategorySwitch title="特别推荐" selector="#bili_report_spe_rec"/>
                        </Grid>

                        
                    </Grid>
                </header>
            </div>
        )
    }
    
  
}

export default App;
