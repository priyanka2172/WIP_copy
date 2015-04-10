define(["helper/util"], function (util) {
    var storedData = [];

    storedData.push(util.doubleItMethod(10));
    storedData.push(util.doubleItMethod(40));



    return { storedData: storedData };
});