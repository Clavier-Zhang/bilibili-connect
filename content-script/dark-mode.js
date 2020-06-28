/* global chrome */
import $ from 'jquery'
import { DARK_MODE, TEXT_SELECTORS, LIGHT_MODE, BACKGROUND_SELECTORS, TRANSPARENT_SELECTORS, BORDER_SELECTORS } from './config';

export const load_dark_mode_setting = () => {

    // Load transparent
    $(TRANSPARENT_SELECTORS.join(',')).each(function(index, value) {
        $(value).css('background', 'transparent')
    })

    // Load border
    $(BORDER_SELECTORS.join(',')).each(function(index, value) {
        // $(value).css('border-radius', '0 0 0px 0px')
        $(value).css('box-shadow', '0 0 0px')
        $(value).css('border', '0px')
        // $(value).css('border-left', '0px')
    })

    chrome.storage.sync.get('is_dark_mode', function (data) {
        if (data['is_dark_mode'] == true) {
            set_dark_mode()
        }
    })
}

export const set_dark_mode = () => {

    // Convert background to dark mode
    $(BACKGROUND_SELECTORS.join(',')).each(function(index, value) {
        $(value).css('background-color', DARK_MODE.background)
    })

    // Convert text to dark mode
    $(TEXT_SELECTORS.join(',')).each(function(index, value) {
        $(value).css('color', DARK_MODE.color)
    })

    $('.player-auxiliary-filter').css('background-color', 'transparent')

}

export const remove_dark_mode = () => {

    // Convert background to light mode
    $(BACKGROUND_SELECTORS.join(',')).each(function(index, value) {
        $(value).css('background-color', LIGHT_MODE.background)
    })

    // Convert text to light mode
    $(TEXT_SELECTORS.join(',')).each(function(index, value) {
        $(value).css('color', LIGHT_MODE.color)
    })

    $('html').css('background-color', '#f4f5f7')
    $('body').css('background-color', '#f4f5f7')
    $('.col-1').css('background-color', '#f4f5f7')
    $('#submit-video-type-filter').css('background-color', '#f4f5f7')

    
    

}