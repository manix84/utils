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
    }());
});
