/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/useragent/isTouchEnabled', function () {

    return (function () {
        if ('ontouchstart' in window || typeof window.Touch !== 'undefined') {
            document.documentElement.className += 'has-touch';
            return true;
        }
        return false;
    }());
});
