/* global chrome */
import $ from "jquery";
import {
  DEFAULT_BLOCK_LIST,
  CATEGORY_BLOCK_LIST,
  VIDEO_CARDS,
  UP_CLASS,
} from "./config";

export function hide_one(selector) {
  $(selector).hide();
}

function hide_one_card(selector) {
  $(selector).children().hide();
}

function show_one_card(selector) {
  $(selector).children().show();
}

export function show_one(selector) {
  $(selector).show();
}

export function hide_category() {
  chrome.storage.sync.get(CATEGORY_BLOCK_LIST, function (data) {
    for (let i = 0; i < CATEGORY_BLOCK_LIST.length; i++) {
      let selector = CATEGORY_BLOCK_LIST[i];
      let is_display = data[selector];

      if (is_display != undefined && !is_display) {
        hide_one(selector);
      }
    }
  });
}

export function hide_default() {
  for (let i = 0; i < DEFAULT_BLOCK_LIST.length; i++) {
    hide_one(DEFAULT_BLOCK_LIST[i]);
  }
}

export function block_one_video_card_by_keyword(keyword) {
  for (let i = 0; i < VIDEO_CARDS.length; i++) {
    let selector = VIDEO_CARDS[i] + ':contains("' + keyword + '")';
    hide_one_card(selector);
  }
}

export function display_one_video_card_by_keyword(keyword) {
  for (let i = 0; i < VIDEO_CARDS.length; i++) {
    let selector = VIDEO_CARDS[i] + ':contains("' + keyword + '")';
    show_one_card(selector);
  }
}

export function load_blocks() {
  chrome.storage.sync.get("blocks", function (data) {
    let items = data["blocks"];
    if (items)
      for (let i = 0; i < items.length; i++) {
        if (items[i].type == "up") {
          block_one_video_card_by_keyword(items[i].value);
        } else {
          block_one_video_card_by_keyword(items[i].value);
        }
      }
  });
}

Array.prototype.diff = function (a) {
  return this.filter(function (i) {
    return a.indexOf(i) < 0;
  });
};

export function update_blocks(old_values, new_values) {
  if (old_values.length > new_values.length) {
    // Remove block list
    let item = old_values.diff(new_values)[0];
    if (item.type == "up") {
      display_one_video_card_by_keyword(item.value);
    } else {
      display_one_video_card_by_keyword(item.value);
    }
  } else {
    // Add block list
    let item = new_values.diff(old_values)[0];
    if (item.type == "up") {
      block_one_video_card_by_keyword(item.value);
    } else {
      block_one_video_card_by_keyword(item.value);
    }
  }
}
