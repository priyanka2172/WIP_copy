define(function (require) {
    var pair = require(".././app/keyValuePairs");

    return {
        logThePair: function () {
            alert("color: " + pair.color + ", size: " + pair.size);
        }
    };
});