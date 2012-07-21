/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('useragent/isTouchEnabled', function () {

    /**
     * Attempts to detect if the browser is touch enabled or not, if it is, a class of "has-touch" is attached to the body.
     * @exports useragent/isTouchEnabled
     * @type {Boolean}
     */
    return (function () {
        if ('ontouchstart' in window || typeof window.Touch !== 'undefined') {
            document.documentElement.className += 'has-touch';
            return true;
        }
        return false;
    }());
});
