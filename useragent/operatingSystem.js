/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/useragent/operatingSystem', function () {

    /**
     * @property os.win {boolean|string}
     * @property os.mac {boolean}
     * @property os.linux {boolean}
     * @property os.unix {boolean}
     * @property os.ios {boolean|string}
     */
    return (function () {
        var useragent = window.navigator.userAgent.toLowerCase(),
            operatingSystem = {
                win: /windows/.test(useragent),
                mac: /mac/.test(useragent),
                linux: /linux/.test(useragent),
                unix: /x11/.test(useragent),
                ios: /like mac os x/.test(useragent)
            };

        if (operatingSystem.win) {
            if (/windows/.test(useragent) && /nt 5\./.test(useragent)) {
                operatingSystem.win = 'xp';
            } else if (/windows/.test(useragent) && /nt 6\.0/.test(useragent)) {
                operatingSystem.win = 'vista';
            } else if (/windows/.test(useragent) && /nt 6\.1/.test(useragent)) {
                operatingSystem.win = '7';
            }
        } else if (operatingSystem.ios) {
            if (/like mac os x/.test(useragent) && /os 4/.test(useragent)) {
                operatingSystem.ios = '4';
            } else if (/like mac os x/.test(useragent) && /os 5/.test(useragent)) {
                operatingSystem.ios = '5';
            }
        }
        return operatingSystem;
    }());
});
