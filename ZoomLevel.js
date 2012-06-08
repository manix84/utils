/**
 * Detects zoom level of the browser and publish an event when it changes.
 * @author Rob Taylor [manix84@gmail.com]
 * @since 7th June 2012
 */

define('ZoomLevel', function () {

    var ZoomLevel = function () {
        var that = this;
        window.setInterval(function () {
            var newZoom = that.getZoomLevel();
            if (that._currentZoom === newZoom) {
                return;
            }

            that._publishZoomLevel(newZoom);
            that._currentZoom = newZoom;
        }, 200);
    };

    ZoomLevel = {
        /**
         * Storage of the current zoom level, for comparison.
         * @type {Number}
         */
        _currentZoom: 0,

        /**
         * Get the zoom level based on the page dimentions.
         * @return {Number}
         */
        getZoomLevel: function () {
            var boundingRect;
            if (!!window.document.width) { // Webkit
                return (window.document.width / document.documentElement.clientWidth);
            } else if (!!document.body.getBoundingClientRect) { // Everything else
                boundingRect = document.body.getBoundingClientRect();
                return ((boundingRect.right - boundingRect.left) / document.body.clientWidth);
            }
            return 1; // Default zoom ratio of 1:1 (100%)
        },

        /**
         * Use publish the zoom level as an event
         * @param {Number} zoomLevel - Zoom level to be published
         */
        _publishZoomLevel: function (zoomLevel) {
            var that = this,
                event = new window.CustomEvent("zoom", {
                    "level": zoomLevel
                });
            document.documentElement.dispatchEvent(event);
        }
    };

    return ZoomLevel;
});
