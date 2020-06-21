/* global chrome */
import $ from 'jquery'
import { DARK_MODE, DARK_MODE_SELECTORS, LIGHT_MODE } from './config';

export const load_dark_mode_setting = () => {
    chrome.storage.sync.get('is_dark_mode', function (data) {
        if (data['is_dark_mode'] == true) {
            set_dark_mode()
        } else {

        }
    })
}


export const set_dark_mode = () => {
    $('body').css('background-color', DARK_MODE.background)
    $('.tl-link').css('background-color', DARK_MODE.background)

    for (let i = 0; i < DARK_MODE_SELECTORS.length; i++) {
        let selector = DARK_MODE_SELECTORS[i]
        $(selector).each(function(index, value) {
            $(value).css('color', DARK_MODE.color)
            $(value).css('opacity', DARK_MODE.opacity)
        })
    }

    $('ul.con li').each(function(index, value) {
        $(value).css('border', 'None')
    })

}

export const remove_dark_mode = () => {

    $('body').css('background-color', LIGHT_MODE.background)
    $('.tl-link').css('background-color', LIGHT_MODE.background)

    for (let i = 0; i < DARK_MODE_SELECTORS.length; i++) {
        let selector = DARK_MODE_SELECTORS[i]
        $(selector).each(function(index, value) {
            $(value).css('color', LIGHT_MODE.color)
            $(value).css('opacity', LIGHT_MODE.opacity)
        })
    }

    $('p.title').each(function(index, value) {
        $(value).css('color', LIGHT_MODE.background)
        $(value).css('opacity', LIGHT_MODE.opacity)
    })

}