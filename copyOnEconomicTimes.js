// ==UserScript==
// @name       Copy on Economic Times
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://economictimes.indiatimes.com/*
// @copyright  2012+, You
// @require    https://raw.githubusercontent.com/manish-h/BrowserScripts/master/common.js
// ==/UserScript==


function getNewsArticle() {
    var headLine= $(".title").text().trim();
    var content = $(".artText").text().trim();
    
    // replace all instances of type "BSE 0.3%" from the content
    content = content.replace(/BSE.+?%/g,"");
    
    var date = extractDate();
    var source = "Source - Economic Times";

    // Adding id to artText div.
	$(".artText").first().attr('id','artText');
    // Adding id to articleImg div.
    $('.articleImg').first().attr('id','articleImg');
    
    var newsArticle = new NewsArticle(headLine,content,"#articleImg",source,date,"#artText");
    return newsArticle;
}

function extractDate() {
    var dateLine = $(".byline").text().trim();
    // dateLine is of form "By Writankar Mukherjee & Sagar Malviya, ET Bureau | 25 Jul, 2014, 04.08AM IST"
    // Need to extract month and day from it in the form "Jul 25"
    var dateRegex = /(\d{1,2}) (\w{3}), \d{4}/;
    var dateMatch = dateRegex.exec(dateLine);
    if (dateMatch ==null) {
        	// return dateLine itself if we cannot extract date.
        	return dateLine;
    }
    return dateMatch[2] + " " + dateMatch[1];
}    