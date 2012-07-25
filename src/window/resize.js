/**
 * Window Resize event utility
 * IE will fire resize when the content on the page changes content independent of the window actually resizing, so
 * we need to check whether the window size actually changed
 * @author Rob Taylor [manix84@gmail.com]
 */
/*jslint evil: true */

define('windowResize', [
    'jquery'
], function ($) {
    /**
     * @exports windowResize
     * @requires jquery
     */
    var windowResize = {
        init: function (interval) {

            var that = this,
                isResizing = false,
                defaultInterval, resizeInterval;

            if (!!this.browser.chrome ||
                    parseInt(this.browser.firefox, 10) >= 2 ||
                    parseInt(this.browser.msie, 10) >= 9
            ) {
                // Wait for a tenth of a second
                defaultInterval = 100;
            } else if (!!this.browser.safari ||
                    !!this.browser.firefox ||
                    parseInt(this.engine.trident, 10) >= 4 || // Trident 4 === IE 8
                    !!this.browser.opera
            ) {
                // Wait for half a second
                defaultInterval = 500;
            } else {
                // Wait for a second
                defaultInterval = 1000;
            }
            interval = interval || defaultInterval;

            // Set the initial document size
            this.currentKnownSize = {
                height: this._getClientHeight(),
                width: this._getClientWidth()
            };

            this._prevSize = this._getViewportSize();

            setInterval(function () {
                that._resize();
            }, interval);
        },

        _resize: function () {
            var currentSize = this._getViewportSize();
            if (currentSize[0] !== this._prevSize[0] ||
                    currentSize[1] !== this._prevSize[1]) {
                this._prevSize = currentSize;

                this._triggerResizeEvent({
                    "state": "finished"
                });
            }
        },

        _getViewportSize: function () {
            var size = [0, 0];
            if (typeof window.innerWidth !== 'undefined') {
                size = [
                    window.innerWidth,
                    window.innerHeight
                ];
            } else if (typeof document.documentElement !== 'undefined' &&
                typeof document.documentElement.clientWidth !== 'undefined' &&
                document.documentElement.clientWidth !== 0) {
                size = [
                    document.documentElement.clientWidth,
                    document.documentElement.clientHeight
                ];
            } else {
                size = [
                    document.getElementsByTagName('body')[0].clientWidth,
                    document.getElementsByTagName('body')[0].clientHeight
                ];
            }

            return size;
        },

        _triggerResizeEvent: function (obj) {
            $.extend(obj, {
                height: this._getClientHeight(),
                width: this._getClientWidth(),
                orientation: (this._getClientHeight() > this._getClientWidth() ? 'portrait' : 'landscape')
            });
            $(document).trigger('windowResize', obj);
        },
        /**
         * Returns the client width of the window
         * @private
         * @return {integer}
         */
        _getClientWidth: function () {
            if (window.document.compatMode === "CSS1Compat" &&
                    window.document.documentElement.clientWidth) {
                return window.document.documentElement.clientWidth;
            }
            return window.document.body.clientWidth;
        },

        /**
         * Returns the client height of the window
         * @private
         * @return {integer}
         */
        _getClientHeight: function () {
            if (window.document.compatMode === "CSS1Compat" &&
                    window.document.documentElement.clientHeight) {
                return window.document.documentElement.clientHeight;
            }
            return window.document.body.clientHeight;
        }
    };

    windowResize.init();
});
