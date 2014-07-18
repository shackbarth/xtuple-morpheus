/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
strict:true, trailing:true, white:true */
/*global XT:true */

(function () {
  "use strict";

  var lang = XT.stringsFor("en_US", {
    "_explanation": "Explanation",
    "_general": "General",
    "_go": "Go",
    "_morpheus": "Morpheus",
    "_thatIsAllYouGet": "That is all you get"
  });

  if (typeof exports !== 'undefined') {
    exports.language = lang;
  }
}());
