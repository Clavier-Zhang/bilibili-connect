import $ from 'jquery'

window.jQuery = $;
window.$ = $;

const defaultBlockList = [
    'a.banner-card.b-wrap',   // 直播区广告
    'a.banner-card.b-wrap',   // 直播区广告
    'a.contact-help',         // 联系客服
    '#elevator',              // 导航侧边栏
    '.international-footer',  // 页面底部
]

const categoryBlockList = [
    '#bili_live',           // 直播区
    '#reportFirst2',        // 推广
    '#bili_dance',          // 舞蹈
    '#bili_game',           // 游戏
    '#bili_digital',        // 数码
    '#bili_read',           // 专栏
    '#bili_fashion',        // 时尚
    '#bili_technology',     // 知识
    '#bili_life',           // 生活
    '#bili_kichiku',        // 鬼畜
    '#bili_ent',            // 娱乐
    '#bili_information',    // 资讯
    '#bili_cinephile',      // 影视
    '#bili_guochuang',      // 国创
    '#bili_manga',          // 漫画
    '#bili_music',          // 音乐
    '#bili_teleplay',       // 电视剧
    '#bili_documentary',    // 纪录片
    '#bili_report_spe_rec', // 特别推荐
    '#bili_movie',          // 电影

]

function loadDarkMode() {
    $('body').css('background-color', '#212121')


    $('a.ss').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('span.title').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('p.title').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('a.title').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('span.name').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('a.name').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('div.tab-switch').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('a.more').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('div.btn').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('p.title').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });


    $('ul.con li a').each(function(index, value) {
        $(value).css('color', '#f4f4f4')
        $(value).css('opacity', '0.7')
    });

    $('ul.con li').each(function(index, value) {
        // $(value).css('color', '#f4f4f4')
        // $(value).css('opacity', '0.7')
        $(value).css('border', 'None')
    });

    $('a.tl-link').each(function(index, value) {
        $(value).css('background-color', '#212121')
        // $(value).css('opacity', '0.7')
    });
}


function load_default() {
    console.log('Load Default')
    chrome.storage.sync.get(categoryBlockList, function (items) {
        for(let i = 0; i < categoryBlockList.length; i++) {
            let selector = categoryBlockList[i]
            let display = items[selector]
            
            console.log(selector, ':', display)
            if (display != undefined && !display) {
                console.log('block', selector)
                blcokOne(selector)
            }
        }
    })
}


// 监听屏蔽列表的变化
chrome.storage.onChanged.addListener(function (changes, namespace) {
    console.log('Detect changes:')
    for (let key in changes) {
        if (key == 'isDarkMode') {
            if (changes[key].newValue) {
                loadDarkMode()
            }
            
            continue
        }


        if (changes[key].newValue == false) {
            blcokOne(key)
        } else {
            displayOne(key)
        }
    }
})

function blcokAll(selectors) {
    for (let i = 0; i < selectors.length; i++) {
        blcokOne(selectors[i])
    }
}

function blcokOne(selector) {
    console.log('Hide', selector)
    $(selector).hide()
}

function displayOne(selector) {
    console.log('Display', selector)
    $(selector).show()
}

const clean = function () {

    load_default()

    blcokAll(defaultBlockList)


    $('.proxy-box').prepend($('#bili_anime'))

    // $('#bili_anime').swapWith($('#bili_douga'));

    

  

    
  
    
    // blockList.forEach(function (item) {
    //   // /清潔一般項
    //   $("[data-up='{0}']".format(item)).remove()
    //   // 清潔排行榜
    //   $(".l-item .up-info [title='{0}']".format(item)).parents('li').remove()
    //   // 清潔動態
    //   $(".vl-dyn-cnt [up='{0}']".format(item)).parents('li').remove()
  
    //   // 清洁推荐
    //   if (hasRecommand) {
    //     for (let recommandItem of $('.v-item')) {
    //       if (recommandItem.innerHTML.indexOf(item) != -1) {
    //         let node = recommandItem.parentNode
    //         node.parentNode.removeChild(node)
    //       }
    //     }
    //   }
  
    //   // 清洁评论
    //   if (hasCommList) {
    //     for (let commItem of $('.t')) {
    //       console.log(commItem.innerHTML)
    //       if (commItem.innerHTML.indexOf('card="{0}"'.format(item)) != -1) {
    //         let node = commItem.parentNode
    //         node.parentNode.removeChild(node)
    //       }
    //     }
    //   }
    // })
}

setTimeout(() => {clean()}, 1000)

setTimeout(() => {clean()}, 300)
setTimeout(() => {clean()}, 200)

setTimeout(() => {clean()}, 100)

setTimeout(() => {clean()}, 50)

