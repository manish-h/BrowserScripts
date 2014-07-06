// ==UserScript==
// @name       Copy on Business Line
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.thehindubusinessline.com/*
// @copyright  2012+, You
// @require    file:///
// ==/UserScript==


function getNewsArticle() {
    var headLine= $(".detail-title").text().trim();
    var content = "";
    $(".body").each(function() {
        content += " " + $(this).text();
    }
                   );
    var date = $("div[class*=article-dateline]").text().trim();
    var source = "Source - BusinessLine";
    var newsArticle = new NewsArticle(headLine,content,"#hcenter",source,date,"#article-block");
    return newsArticle;
}