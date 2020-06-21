/* global chrome */
import $ from 'jquery'
import { DARK_MODE, DARK_MODE_TEXT_SELECTORS, LIGHT_MODE, DARK_MODE_BACKGROUND_SELECTORS } from './config';

export const load_dark_mode_setting = () => {
    chrome.storage.sync.get('is_dark_mode', function (data) {
        if (data['is_dark_mode'] == true) {
            set_dark_mode()
        }
    })
}


export const set_dark_mode = () => {

    // Convert background to dark mode
    for (let i = 0; i < DARK_MODE_BACKGROUND_SELECTORS.length; i++) {
        let selector = DARK_MODE_BACKGROUND_SELECTORS[i]
        $(selector).each(function(index, value) {
            $(value).css('background-color', DARK_MODE.background)
            $(value).css('border-radius', '0 0 0px 0px')
            $(value).css('box-shadow', '0 0 0px')
            $(value).css('border', '0px')
            $(value).css('border-left', '0px')
        })
    }


    // Convert text to dark mode
    for (let i = 0; i < DARK_MODE_TEXT_SELECTORS.length; i++) {
        let selector = DARK_MODE_TEXT_SELECTORS[i]
        $(selector).each(function(index, value) {
            $(value).css('color', DARK_MODE.color)
            $(value).css('opacity', DARK_MODE.opacity)
        })
    }

    $('ul.con li').each(function(index, value) {
        $(value).css('border', 'None')
    })

    $('.player-auxiliary-filter').css('background-color', 'transparent')

}

export const remove_dark_mode = () => {

    // Convert background to light mode
    for (let i = 0; i < DARK_MODE_BACKGROUND_SELECTORS.length; i++) {
        let selector = DARK_MODE_BACKGROUND_SELECTORS[i]
        $(selector).each(function(index, value) {
            $(value).css('background-color', LIGHT_MODE.background)
        })
    }


    // Convert text to light mode
    for (let i = 0; i < DARK_MODE_TEXT_SELECTORS.length; i++) {
        let selector = DARK_MODE_TEXT_SELECTORS[i]
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