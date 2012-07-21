/**
 * Tests for useragent
 * @author Rob Taylor <manix84@gmail.com>
 * @module tests/useragentTest
 * @requires src/useragent
 */
define('tests/useragentTest', [
    'src/useragent'
], function (useragent) {
    module('Utils.Useragent');

    test('browser', function () {
        equal(Object.prototype.toString.call(useragent.browser), '[object Object]', 'Useragent.Browser should be an object');

        notEqual(useragent.browser.firefox, undefined, 'Useragent.Browser.Firefox should be defined');
        notEqual(useragent.browser.chrome, undefined, 'Useragent.Browser.Chrome should be defined');
        notEqual(useragent.browser.safari, undefined, 'Useragent.Browser.Safari should be defined');
        notEqual(useragent.browser.msie, undefined, 'Useragent.Browser.MSIE should be defined');
        notEqual(useragent.browser.opera, undefined, 'Useragent.Browser.Opera should be defined');
        notEqual(useragent.browser.wii, undefined, 'Useragent.Browser.WII should be defined');
        notEqual(useragent.browser.playstation, undefined, 'Useragent.Browser.Playstation should be defined');
    });

    test('engine', function () {
        equal(Object.prototype.toString.call(useragent.engine), '[object Object]', 'Useragent.Engine should be an object');

        notEqual(useragent.engine.gecko, undefined, 'Useragent.Engine.Gecko should be defined');
        notEqual(useragent.engine.khtml, undefined, 'Useragent.Engine.Khtml should be defined');
        notEqual(useragent.engine.presto, undefined, 'Useragent.Engine.Presto should be defined');
        notEqual(useragent.engine.htmlayout, undefined, 'Useragent.Engine.HTMLayout should be defined');
        notEqual(useragent.engine.trident, undefined, 'Useragent.Engine.Trident should be defined');
        notEqual(useragent.engine.webkit, undefined, 'Useragent.Engine.WebKit should be defined');
        notEqual(useragent.engine.boxely, undefined, 'Useragent.Engine.Boxely should be defined');
    });

    test('os', function () {
        equal(Object.prototype.toString.call(useragent.os), '[object Object]', 'Useragent.Os should be an object');

        notEqual(useragent.os.win, undefined, 'Useragent.Os.Win should be defined');
        notEqual(useragent.os.mac, undefined, 'Useragent.Os.Mac should be defined');
        notEqual(useragent.os.linux, undefined, 'Useragent.Os.Linux should be defined');
        notEqual(useragent.os.unix, undefined, 'Useragent.Os.Unix should be defined');
        notEqual(useragent.os.ios, undefined, 'Useragent.Os.Ios should be defined');
    });

    test('highContrastMode', function () {
        notEqual(useragent.highContrastMode, undefined, 'Useragent.HighContrastMode should be defined');
        equal(Object.prototype.toString.call(useragent.highContrastMode), '[object Boolean]', 'Useragent.HighContrastMode should be an object');
    });

    test('display', function () {
        equal(Object.prototype.toString.call(useragent.display), '[object Object]', 'Useragent.Display should be an object');

        equal(Object.prototype.toString.call(useragent.display.height), '[object Number]', 'Useragent.Display.Height should be a number');
        notEqual(useragent.display.height, undefined, 'Useragent.Display.Height should be defined');

        equal(Object.prototype.toString.call(useragent.display.width), '[object Number]', 'Useragent.Display.Width should be a number');
        notEqual(useragent.display.width, undefined, 'Useragent.Display.Width should be defined');
    });
});
