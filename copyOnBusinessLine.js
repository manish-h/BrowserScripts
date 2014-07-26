// ==UserScript==
// @name       Copy on Business Line
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.thehindubusinessline.com/*
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
    var date = extractDate();
    var source = "Source - Business Line";
    var newsArticle = new NewsArticle(headLine,content,"#hcenter",source,date,"#article-block");
    return newsArticle;
}

function extractDate() {
    var dateLine = $("div[class*=article-dateline]").text().trim();
    // dateLine is of the form "GLASGOW, JULY 26".
    // Need to extract "July 26" from it.
    
    var dateRegex = /, (\w.* \d{1,2})/;
    var dateMatch = dateRegex.exec(dateLine);
    if (dateMatch == null) {
        return dateLine;
    }
    return dateMatch[1];
}




