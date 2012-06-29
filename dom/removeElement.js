/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/dom/removeElement', function () {

    var trash = document.createElement("div"),
        /**
         * Remove element from the dom.
         * @exports utils/dom/removeElement
         * @param {String} elementId - Dom element ID.
         */
        removeElement = function (elementId) {
            trash.appendChild(document.getElementById(elementId));
            trash.innerHTML = '';
        };

    return removeElement;
});
