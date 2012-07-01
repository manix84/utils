/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/dom/removeElement', function () {

    var trash = document.createElement("div"),
        /**
         * Remove element from the dom.
         * @exports utils/dom/removeElement
         * @param {HMTLElement} element - Dom element object you wish to remove.
         */
        removeElement = function (element) {
            trash.appendChild(element);
            trash.innerHTML = '';
        };

    return removeElement;
});
