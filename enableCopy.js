// ==UserScript==
// @name       EnableCopy
// @namespace  http://127.0.0.1/
// @version    0.1
// @description  enter something useful
// @match      http://economictimes.indiatimes.com/*
// @copyright  2012+, You
// ==/UserScript==
function enableCopy(event) {
	event.stopPropagation();
}
window.addEventListener("copy",enableCopy,true);