document.addEventListener('DOMContentLoaded', function () {
    var leipzig  = Leipzig({
        firstLineOrig: true,
        lastLineFree: true,
        spacing: true
    });
    leipzig.addAbbreviations({
        NEGEXIST: "negative existential"
    });
    leipzig.gloss();
});
