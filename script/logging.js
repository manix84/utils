/**
 * Cleaning up the usage of Console.log (etc.) and adds a popup version where necessary
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/logging', [
    'utils/logging/popup'
], function (loggingPopup) {

    var i = 0,
        loggingMethods = [
            "log",
            "debug",
            "info",
            "warn",
            "error",
            "assert",
            "clear",
            "dir",
            "dirxml",
            "trace",
            "group",
            "groupCollapsed",
            "groupEnd",
            "time",
            "timeEnd",
            "profile",
            "profileEnd",
            "count",
            "exception",
            "table"
        ],
        emptyFunc = function () {};

    if (!enableDebug) {
        for (; i < loggingMethods.length; i++) {
            window.console[loggingMethods[i]] = emptyFunc;
        }
    } else if (!!window.console) {
        window.onerror = function (errorMessage, fileName, lineNumber) {
            loggingPopup.addMessage('error', [
                'Error: ' + errorMessage,
                'File: ' + fileName,
                'Line: ' + lineNumber
            ]);
            return false;
        };

        window.console = {};
        for (; i < loggingMethods.length; i++) {
            window.console[loggingMethods[i]] = function () {
                loggingPopup.addMessage(loggingMethods[i], arguments);
            };
        }
    }

});