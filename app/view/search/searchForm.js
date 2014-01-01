Ext.define('ExtYqlApp.view.search.searchForm', {
    extend: 'Ext.form.Panel',
    xtype: 'search.searchForm',
    defaults: {
        padding:'10 10 10'
    },
    items: [{
        xtype: 'textfield',
        itemId:'zipCodeFld',
        fieldLabel: 'Zip Code',
        allowBlank: false,
        value:68007
    }, {
        xtype: 'textfield',
        itemId:'searchForFld',
        fieldLabel: 'Search For',
        allowBlank: false,
        value:'Pizza'
    }],
    buttons: [{
        text: 'search',
        itemId:'searchBtn'
    }]
});