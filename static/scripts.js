document.addEventListener('DOMContentLoaded', function () {
    var leipzig  = Leipzig({
        firstLineOrig: true,
        lastLineFree: true,
        spacing: true
    });
    leipzig.addAbbreviations({
        NEGEXIST: "negative existential",
        HSY: "hearsay evidential",
        INT: "intensifier",
        NOM: "nominalizer"
    });
    leipzig.gloss();
});
