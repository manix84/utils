/**
 * Tests for useragent/operatingSystem
 * @author Rob Taylor <manix84@gmail.com>
 * @module tests/useragent/operatingSystem
 * @requires useragent/operatingSystem
 */
define('tests/useragent/operatingSystem', [
    'useragent/operatingSystem'
], function (operatingSystem) {
    module('useragent');

    test('operatingSystem', function () {
        equal(Object.prototype.toString.call(operatingSystem), '[object Object]', 'operatingSystem should be an object');

        notEqual(operatingSystem.win, undefined, 'operatingSystem.win should be defined');
        notEqual(operatingSystem.mac, undefined, 'operatingSystem.mac should be defined');
        notEqual(operatingSystem.linux, undefined, 'operatingSystem.linux should be defined');
        notEqual(operatingSystem.unix, undefined, 'operatingSystem.unix should be defined');
        notEqual(operatingSystem.ios, undefined, 'operatingSystem.ios should be defined');
    });
});
