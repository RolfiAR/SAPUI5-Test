// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /** 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.ui.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";

        return Controller.extend("TestPackage.ui5module.controller.Main", {
            
            onInit: function(){
              /*  // set data model on the view
                this.getView().setModel(Models.createRecipient());

                // set i18n model on the view
                var i18nModel = new ResourceModel({bundleName : "TestPackage.ui5module.i18n.i18n"});
                this.getView().setModel(i18nModel,"i18n"); */
            },

            onShowHello: function () {
                // read text from i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                // read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMessage = oBundle.getText("helloMessage", [sRecipient]);
                MessageToast.show(sMessage);
            }

        });

    });