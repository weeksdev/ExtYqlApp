Ext.define('ExtYqlApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'search.searchForm',
        title: 'Search',
        width: 300
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Local Search Results',
            xtype:'results.resultsGrid'
        }]
    }]
});