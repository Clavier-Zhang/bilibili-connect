/* global chrome */
import $ from 'jquery'

export const load_dark_mode = () => {
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