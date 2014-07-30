/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XT:true, XM:true, Backbone:true, enyo:true, console:true */

(function () {
  "use strict";

  XT.extensions.xtuple_morpheus.initPostbooks = function () {
    var morpheusModule = {
      name: "morpheus",
      label: "_morpheus".loc(),
      panels: [
        {
          name: "explanatoryIframe",
          label: "_explanation".loc(),
          tag: "iframe",
          classes: "morpheus-page",
          src: "npm/xtuple-morpheus/client/assets/explain.html"
        },
        {
          name: "morpheusPage",
          kind: "XV.MorpheusPage",
          label: "_morpheus".loc()
        }
      ]
    };

    XT.app.$.postbooks.insertModule(morpheusModule, 0);

  };
}());

