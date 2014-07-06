$(document)
    .keydown(
        function (event) {
            if (event.keyCode == 113) {
                var newsArticle = getNewsArticle();
                renderNewsArticle(newsArticle);
                console.log("done");
            }
        }
    );

function renderNewsArticle(newsArticle) {

    var myContentDiv = $("<div id = 'myContentDiv'></div>");
    $(myContentDiv)
        .append("<p><b>" + newsArticle.headLine + "<b></p>")
        .append($(newsArticle.imageDivId))
        .append(
            "<p>" + newsArticle.content + "</p>")
        .append("<p>" + newsArticle.source + "</p>")
        .append("<p>" +
            newsArticle.date + "</p>");
    $(newsArticle.sourceDivId)
        .replaceWith($(myContentDiv));
    $(myContentDiv)
        .selectText();
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

function NewsArticle(headLine, content, imageDivId, source, date, sourceDivId) {
    this.headLine = headLine;
    this.content = content;
    this.imageDivId = imageDivId;
    this.source = source;
    this.date = date;
    this.sourceDivId = sourceDivId;
}

jQuery.fn.selectText = function () {
    var doc = document;
    var element = this[0];
    console.log(this, element);
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};