/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XT:true, XM:true, Backbone:true, enyo:true, console:true, morpheus:true */

(function () {
  "use strict";

  XT.extensions.xtuple_morpheus.initPage = function () {
    // adapted from https://github.com/ded/morpheus/blob/master/examples.html
    enyo.kind({
      name: "XV.MorpheusPage",
      kind: "enyo.FittableRows",
      classes: "morpheus-page",
      components: [
        { tag: "h2", content: "_general".loc()},
        { name: "movingBox", classes: "moving-box"},
        { kind: "onyx.Button", name: "movingButton", content: "_go".loc(), ontap: "buttonTap"},
        { name: "message" }
      ],
      buttonTap: function (inSender, inEvent) {
        var that = this;
        this.$.movingButton.setDisabled(true);
        morpheus(this.$.movingBox.hasNode(), {
          left: 400,
          backgroundColor: '#fff',
          duration: 2000,
          complete: function () {
            that.$.message.setContent("_thatIsAllYouGet".loc());
          }
        });
      }
    });
  };
}());


