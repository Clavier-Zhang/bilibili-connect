/* global chrome */
import $ from 'jquery'
import { DEFAULT_BLOCK_LIST, CATEGORY_BLOCK_LIST } from './config';

export function hide_one(selector) {
    $(selector).hide()
}

export function show_one(selector) {
    $(selector).show()
}

export function hide_category() {
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

export function hide_default() {
    for (let i = 0; i < DEFAULT_BLOCK_LIST.length; i++) {
        hide_one(DEFAULT_BLOCK_LIST[i])
    }
}