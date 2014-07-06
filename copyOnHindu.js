// ==UserScript==
// @name       Copy on Hindu
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.thehindu.com/*
// @copyright  2012+, You
// @require    https://raw.githubusercontent.com/manish-h/BrowserScripts/master/common.js
// ==/UserScript==


function getNewsArticle() {
    var headLine= $(".detail-title").text().trim();
    var content = "";
    $(".body").each(function() {
        content += " " + $(this).text();
    }
                   );
    var date = $("span[class*=dateline]").text().trim();
    var source = "Source - The Hindu";
    var newsArticle = new NewsArticle(headLine,content,"#hcenter",source,date,"#article-block");
    return newsArticle;
}