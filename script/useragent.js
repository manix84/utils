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
            }()),

            /**
             * This may return all "false"'s, and a version of 0, because the browser engine is not always reported.
             * @property engine {object}
             * @property engine.trident {float|boolean} Internet Explorer
             * @property engine.webkit {float|boolean} Chrome & Safari
             * @property engine.gecko {float|boolean} Firefox & Opera =< 6
             * @property engine.presto {float|boolean} Opera => 7
             * @property engine.khtml {float|boolean} Konqueror
             * @property engine.htmlayout {float|boolean} Windows and Windows Mobile embeded browser
             * @property engine.boxely {float|boolean} AOL
             */
            engine: (function () {
                var engine = {
                        trident: false, //Internet Explorer
                        webkit: false,  // Chrome & Safari
                        gecko: false,   // Firefox & Opera =< 6
                        presto: false,  // Opera => 7
                        khtml: false,   // Konqueror
                        htmlayout: false, // Windows and Windows Mobile embeded browser
                        boxely: false   // AOL
                    },
                    useragent = window.navigator.userAgent,
                    regex,
                    engineName;

                for (engineName in engine) {
                    if (engine.hasOwnProperty(engineName)) {
                        regex = new RegExp(engineName + "\/([0-9]+.[0-9]*)", "i");
                        if (regex.exec(useragent)) {
                            try {
                                engine[engineName] = parseFloat(useragent.match(regex)[1]);
                            } catch (err) {
                                engine[engineName] = true;
                            }
                            break;
                        }
                    }
                }
                return engine;
            }()),

            /**
             * @property os.win {boolean|string}
             * @property os.mac {boolean}
             * @property os.linux {boolean}
             * @property os.unix {boolean}
             * @property os.ios {boolean|string}
             */
            os: (function () {
                var operatingSystem = {
                    win: /windows/.test(ua),
                    mac: /mac/.test(ua),
                    linux: /linux/.test(ua),
                    unix: /x11/.test(ua),
                    ios: /like mac os x/.test(ua)
                };
                if (operatingSystem.win) {
                    if (/windows/.test(ua) && /nt 5\./.test(ua)) {
                        operatingSystem.win = 'xp';
                    } else if (/windows/.test(ua) && /nt 6\.0/.test(ua)) {
                        operatingSystem.win = 'vista';
                    } else if (/windows/.test(ua) && /nt 6\.1/.test(ua)) {
                        operatingSystem.win = '7';
                    }
                } else if (operatingSystem.ios) {
                    if (/like mac os x/.test(ua) && /os 4/.test(ua)) {
                        operatingSystem.ios = '4';
                    } else if (/like mac os x/.test(ua) && /os 5/.test(ua)) {
                        operatingSystem.ios = '5';
                    }
                }
                return operatingSystem;
            }()),

            isTouchEnabled: (function () {
                if ('ontouchstart' in window || typeof window.Touch !== 'undefined') {
                    // $('body').removeClass('no-touch').addClass('touch');
                    return true;
                }
                return false;
            }())
        };


    return useragent;
});
