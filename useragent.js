/**
 * UserAgent utility adding identifiers for information provided by the browser.
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/useragent', [
    'jquery'
], function ($, swfObject, config) {

    var nav = window.navigator,
        ua = nav.userAgent.toLowerCase(),

        /**
         * @exports utils/useragent
         * @requires jquery
         */
        useragent = {
            /**
             * @property browser {object}
             * @property browser.firefox {float|boolean}
             * @property browser.chrome {float|boolean}
             * @property browser.safari {float|boolean}
             * @property browser.msie {float|boolean}
             * @property browser.opera {float|boolean}
             * @property browser.wii {float|boolean}
             * @property browser.ps3 {float|boolean}
             */
            browser: (function () {
                var browser = {
                    firefox: ($.browser.mozilla ? $.browser.version : false),
                    chrome: (($.browser.webkit && ua.indexOf("chrome") > -1) ? $.browser.version : false),
                    safari: (($.browser.webkit && ua.indexOf("chrome") === -1) ? $.browser.version : false),
                    msie: ($.browser.msie ? $.browser.version : false),
                    wii: (($.browser.opera && ua.indexOf("wii") > -1) ? $.browser.version : false),
                    playstation: ((ua.indexOf("PLAYSTATION") > -1) ? $.browser.version : false),
                    opera: ($.browser.opera ? $.browser.version : false)
                };
                return browser;
            }())
        };


    return useragent;
});
