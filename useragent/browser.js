/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/useragent/browser', function () {

    /**
     * @exports utils/useragent/browser
     * @property chrome {String|Boolean}
     * @property firefox {String|Boolean}
     * @property msie {String|Boolean}
     * @property opera {String|Boolean}
     * @property playstation {String|Boolean}
     * @property safari {String|Boolean}
     * @property wii {String|Boolean}
     */
    return (function () {
        var browser = {
                firefox: false,
                chrome: false,
                safari: false,
                msie: false,
                wii: false,
                playstation: false,
                opera: false
            },
            useragent = window.navigator.userAgent.toLowerCase(),
            versionRegex = /version\/([0-9]+.[0-9]*)/i,
            regex, version, browserName;

        for (browserName in browser) {
            if (browser.hasOwnProperty(browserName)) {
                regex = new RegExp(browserName + "\/([0-9]+.[0-9]*)", "i");
                if (regex.exec(useragent)) {
                    browser[browserName] =
                        parseFloat(useragent.match(versionRegex)[1]) ||
                        parseFloat(useragent.match(regex)[1]) ||
                        true;
                    break;
                }
            }
        }

        return browser;
    }());
});
