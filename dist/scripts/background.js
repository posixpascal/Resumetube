"use strict";chrome.runtime.onInstalled.addListener(function(a){console.log("previousVersion",a.previousVersion)}),chrome.tabs.onUpdated.addListener(function(a){chrome.pageAction.show(a)});