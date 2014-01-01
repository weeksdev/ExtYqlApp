Ext.define('ExtYqlApp.controller.Main', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            '#searchBtn': {
                click: this.search
            }
        });
    },
    search: function (btn) {
        //console.log('Refresh Store');
        var frm = btn.up('form');
        var zipCode = frm.down('#zipCodeFld').getValue();
        var searchFor = frm.down('#searchForFld').getValue();
        var newQuery = "SELECT * FROM local.search where zip='" + zipCode + "' AND query='" + searchFor + "';";
        //console.log(zipCode);
        //console.log(searchFor);

        //find search store and create new query parameter
        var s = Ext.getStore('results.resultsGrids');
        s.proxy.extraParams.q = newQuery;
        s.load();
    }
});