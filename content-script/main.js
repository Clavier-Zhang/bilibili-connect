import $ from 'jquery'
import { set_dark_mode, load_dark_mode_setting, remove_dark_mode } from './dark-mode';
import { hide_category, hide_default, hide_one, show_one } from './hide'


chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let key in changes) {
        if (key == 'is_dark_mode') {
            let is_dark_mode = changes[key].newValue
            if (is_dark_mode) {
                set_dark_mode()
            } else {
                remove_dark_mode()
            } 
        } else if (key == 'top_category') {
            $('.proxy-box').prepend($(changes[key].newValue))

        } else if (key == 'banner') {
            let banner = changes[key].newValue
            if (banner == 'dark') {
                $('.bili-banner').css('background', '#212121')

            } else if (banner == 'default') {
                set_default_banner()

            } else if (banner == 'old1') {
                $('.bili-banner').css('background', `url("https://i0.hdslb.com/bfs/archive/6c42c40ed54f4bb5ea491894aff693878afa6580.png") no-repeat`)
                $('.bili-banner').css('background-size', `cover`)


            } else if (banner == 'old2') {
                $('.bili-banner').css('background', `url("https://i0.hdslb.com/bfs/album/2d78428aaf2d479538b8d3ec20390372cefdb07c.jpg") no-repeat`)
                $('.bili-banner').css('background-size', `cover`)

            }


        } else if (changes[key].newValue == false) {
            hide_one(key)
        } else {
            show_one(key)
        }
    }
})

function load_top_category() {
    chrome.storage.sync.get('top_category', function (data) {
        $('.proxy-box').prepend($(data['top_category']))
    })
}

function save_default_banner() {
    chrome.storage.sync.get('day', function (data) {
        let today = new Date()
        // new day, update default banner
        if (data['day'] != today.getDate()) {
            chrome.storage.sync.set({
                'default_banner': $('.bili-banner').css('background'),
                'day': today.getDate()
            })
        }
    })    
}

function set_default_banner() {
    chrome.storage.sync.get('default_banner', function (data) {
        $('.bili-banner').css('background', data['default_banner'])
    })
}

function load_banner() {
    save_default_banner()
    chrome.storage.sync.get('banner', function (data) {
        let banner = data['banner']

        if (banner == 'dark') {
            $('.bili-banner').css('background', '#212121')

        } else if (banner == 'old1') {
            $('.bili-banner').css('background', `url("https://i0.hdslb.com/bfs/archive/6c42c40ed54f4bb5ea491894aff693878afa6580.png") no-repeat`)
            $('.bili-banner').css('background-size', `cover`)


        } else if (banner == 'old2') {
            $('.bili-banner').css('background', `url("https://i0.hdslb.com/bfs/album/2d78428aaf2d479538b8d3ec20390372cefdb07c.jpg") no-repeat`)
            $('.bili-banner').css('background-size', `cover`)

        }

    })
}


const main = function () {

    hide_category()

    hide_default()


    load_top_category()

    load_dark_mode_setting()

    $('#bilibiliPlayer').css('-webkit-box-shadow', '0 0 0px')

    
    load_banner()



}


setTimeout(() => {main()}, 1000)
setTimeout(() => {main()}, 300)
setTimeout(() => {main()}, 200)


setInterval(() => {main()}, 2000)