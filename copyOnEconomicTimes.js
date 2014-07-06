// ==UserScript==
// @name       Copy on Economic Times
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://economictimes.indiatimes.com/*
// @copyright  2012+, You
// @require    file:///
// ==/UserScript==


function getNewsArticle() {
    var headLine= $(".title").text().trim();
    var content = $(".artText").text().trim();
    var date = $(".byline").text().trim();
    var source = "Source - Economic Times";

    // Adding id to artText div.
	$(".artText").first().attr('id','artText');
    // Adding id to articleImg div.
    $('.articleImg').first().attr('id','articleImg');
    
    var newsArticle = new NewsArticle(headLine,content,"#articleImg",source,date,"#artText");
    return newsArticle;
}

