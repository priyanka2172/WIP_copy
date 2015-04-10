(function() {

    require(["app/data", "helper/util", "helper/logger"], function (data, util, logger) {

        alert('util module : ' + util.doubleItMethod(10));
        alert('util module : ' + util.doubleItMethod(20));
        
        alert('data module [0] : ' + data.storedData[0]);
        alert('data module [1] : ' + data.storedData[1]);
        logger.logThePair();
    });

})();