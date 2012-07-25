/**
 * Tests for useragent/browser
 * @author Rob Taylor <manix84@gmail.com>
 * @module tests/useragent/browser
 * @requires useragent/browser
 */
define([
    'useragent/browser'
], function (browser) {
    module('useragent');

    test('browser', function () {
        equal(Object.prototype.toString.call(browser), '[object Object]', 'browser should be an object');

        notEqual(browser.firefox, undefined, 'browser.firefox should be defined');
        notEqual(browser.chrome, undefined, 'browser.chrome should be defined');
        notEqual(browser.safari, undefined, 'browser.Safari should be defined');
        notEqual(browser.msie, undefined, 'browser.msie should be defined');
        notEqual(browser.opera, undefined, 'browser.opera should be defined');
        notEqual(browser.wii, undefined, 'browser.wii should be defined');
        notEqual(browser.playstation, undefined, 'browser.playstation should be defined');
    });
});
