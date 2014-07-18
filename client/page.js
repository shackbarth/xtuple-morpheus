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
      style: "background-color: white;",
      components: [
        { tag: "h2", content: "_general".loc()},
        { name: "movingBox", style: "top: 0; left: 0; position: relative; width: 20px; height: 20px; border-radius: 4px; background: #f00; margin: 5px 0; border: 1px solid #999; -moz-border-radius: 4px; -webkit-border-radius: 4px;" },
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


