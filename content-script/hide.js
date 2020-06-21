/* global chrome */
import $ from 'jquery'
import { DEFAULT_BLOCK_LIST, CATEGORY_BLOCK_LIST } from './config';

function hide_one(selector) {
    $(selector).hide()
}

function show_one(selector) {
    $(selector).show()
}

export const hide_category = () => {
    chrome.storage.sync.get(CATEGORY_BLOCK_LIST, function (data) {
        for(let selector in CATEGORY_BLOCK_LIST) {

            let is_display = data[selector]
            
            if (is_display != undefined && !is_display) {
                hide_one(selector)
            }
        }
    })
}