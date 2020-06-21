import $ from 'jquery'
import { set_dark_mode, load_dark_mode_setting, remove_dark_mode } from './dark-mode';
import { hide_category, hide_default } from './hide'


chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let key in changes) {
        if (key == 'is_dark_mode') {
            if (changes[key].newValue) {
                set_dark_mode()
            } else {
                remove_dark_mode()
            }
            
        } else if (changes[key].newValue == false) {
            hide_one(key)
        } else {
            show_one(key)
        }
    }
})


function hide_one(selector) {
    $(selector).hide()
}

function show_one(selector) {
    $(selector).show()
}

const main = function () {

    hide_category()

    hide_default()


    $('.proxy-box').prepend($('#bili_anime'))

    load_dark_mode_setting()

    $('.bili-banner').removeAttr('style')
    $('.bili-banner').css('background', '#212121')

}

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     setTimeout(() => {main()}, 15000)
//     setTimeout(() => {main()}, 10000)
//     setTimeout(() => {main()}, 5000)
//     setTimeout(() => {main()}, 3000)
//     setTimeout(() => {main()}, 2000)
//     setTimeout(() => {main()}, 1000)
//     setTimeout(() => {main()}, 300)
//     setTimeout(() => {main()}, 200)
//     setTimeout(() => {main()}, 100)
//     setTimeout(() => {main()}, 50)
//  });

setTimeout(() => {main()}, 15000)
setTimeout(() => {main()}, 10000)
setTimeout(() => {main()}, 5000)
setTimeout(() => {main()}, 3000)
setTimeout(() => {main()}, 2000)
setTimeout(() => {main()}, 1000)
setTimeout(() => {main()}, 300)
setTimeout(() => {main()}, 200)
setTimeout(() => {main()}, 100)
setTimeout(() => {main()}, 50)

