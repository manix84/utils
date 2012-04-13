/**
 * Cleaning up the usage of Console.log (etc.) and adds a popup version where necessary
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/logging', [
    'utils/logging/popup'
], function (loggingPopup) {
    var enableDebug = true;
    var emptyFunc = function () {};

    if (!enableDebug) {
        window.console = {
            "log": emptyFunc,
            "debug": emptyFunc,
            "info": emptyFunc,
            "warn": emptyFunc,
            "error": emptyFunc,
            "time": emptyFunc,
            "timeEnd": emptyFunc,
            "count": emptyFunc,
            "clear": emptyFunc,

            "assert": emptyFunc,
            "dir": emptyFunc,
            "dirxml": emptyFunc,
            "trace": emptyFunc,
            "group": emptyFunc,
            "groupCollapsed": emptyFunc,
            "groupEnd": emptyFunc,
            "profile": emptyFunc,
            "profileEnd": emptyFunc,
            "exception": emptyFunc,
            "table": emptyFunc
        };
    } else if (!window.console) {
        window.onerror = function (errorMessage, fileName, lineNumber) {
            loggingPopup.addMessage('error', [
                'Error: ' + errorMessage,
                'File: ' + fileName,
                'Line: ' + lineNumber
            ]);
            return false;
        };

        window.console = {
            "log": function () { loggingPopup.addMessage("log", arguments); },
            "debug": function () { loggingPopup.addMessage("debug", arguments); },
            "info": function () { loggingPopup.addMessage("info", arguments); },
            "warn": function () { loggingPopup.addMessage("warn", arguments); },
            "error": function () { loggingPopup.addMessage("error", arguments); },
            "time": function () { loggingPopup.addMessage("time", arguments); },
            "timeEnd": function () { loggingPopup.addMessage("timeEnd", arguments); },
            "count": function () { loggingPopup.addMessage("count", arguments); },
            "clear": function () { loggingPopup.addMessage("clear", arguments); },

            "assert": function () { loggingPopup.addMessage("assert", arguments); },
            "dir": function () { loggingPopup.addMessage("dir", arguments); },
            "dirxml": function () { loggingPopup.addMessage("dirxml", arguments); },
            "trace": function () { loggingPopup.addMessage("trace", arguments); },
            "group": function () { loggingPopup.addMessage("group", arguments); },
            "groupCollapsed": function () { loggingPopup.addMessage("groupCollapsed", arguments); },
            "groupEnd": function () { loggingPopup.addMessage("groupEnd", arguments); },
            "profile": function () { loggingPopup.addMessage("profile", arguments); },
            "profileEnd": function () { loggingPopup.addMessage("profileEnd", arguments); },
            "exception": function () { loggingPopup.addMessage("exception", arguments); },
            "table": function () { loggingPopup.addMessage("table", arguments); }
        };
    }
});