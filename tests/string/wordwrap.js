/**
 * Tests for string/wordwrap
 * @author Rob Taylor [manix84@gmail.com]
 * @requires string/wordwrap
 */
define([
    'string/wordwrap'
], function (wordwrap) {
    module('string/wordwrap');

    test('wordwrap', function () {
        equal(wordwrap('a string with a few words in it.', 10), "a string \nwith a few \nwords in \nit.", 'String Should Be Cut Every 10 Characters, While Trying To Preserve Words.');
        equal(wordwrap('a string with a few words in it.', 10, '<br />'), "a string <br />with a few <br />words in <br />it.", 'String Should Be Cut Every 10 Characters, While Trying To Preserve Words.');
        equal(wordwrap('a string with a few words in it.', 5, '<br />', true), "a <br />strin<br />g <br />with <br />a few <br />words <br />in <br />it.", 'String Should Be Cut Every 10 Characters, While Trying To Preserve Words.');
    });
});
