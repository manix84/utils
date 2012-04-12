/**
 * Number utilities
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/number', function () {

    /**
     * @exports utils/number
     */
    var number = {

         /**
          * Adds a repeating string to the start of a number. The number is converted to a string to accomplish this.
          * @param  {[type]} input - Number to be padded.
          * @param  {[type]} [padLength] - The length you want the number to be outputted at. Defaults to "2"
          * @return {string} (EG: "01")
          */
        pad: function (input, padLength) {
            input = String(input);
            padLength = padLength || 2;

            while (input.length < padLength) {
                input = "0" + input;
            }
            return input;
        }
    };

    return number;
});