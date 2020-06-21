import $ from 'jquery'
import { DEFAULT_BLOCK_LIST, CATEGORY_BLOCK_LIST } from './config';
import { load_dark_mode } from './dark-mode';
// import { hide_category } from './hide';



function hide_category() {
    chrome.storage.sync.get(CATEGORY_BLOCK_LIST, function (data) {
        for(let i = 0; i < CATEGORY_BLOCK_LIST.length; i++) {
            let selector = CATEGORY_BLOCK_LIST[i]
            let is_display = data[selector]
            
            if (is_display != undefined && !is_display) {
                hide_one(selector)
            }
        }
    })
}

chrome.storage.onChanged.addListener(function (changes, namespace) {
    console.log('Detect changes:')
    for (let key in changes) {
        if (key == 'isDarkMode') {
            if (changes[key].newValue) {
                load_dark_mode()
            }
            
            continue
        }

        if (changes[key].newValue == false) {
            hide_one(key)
        } else {
            show_one(key)
        }
    }
})

function hide_all(selectors) {
    for (let i = 0; i < selectors.length; i++) {
        hide_one(selectors[i])
    }
}

function hide_one(selector) {
    $(selector).hide()
}

function show_one(selector) {
    $(selector).show()
}

const main = function () {

    hide_category()

    hide_all(DEFAULT_BLOCK_LIST)


    $('.proxy-box').prepend($('#bili_anime'))


}



setTimeout(() => {main()}, 1000)

setTimeout(() => {main()}, 300)
setTimeout(() => {main()}, 200)

setTimeout(() => {main()}, 100)

setTimeout(() => {main()}, 50)

