Ext.define('ExtYqlApp.Application', {
    name: 'ExtYqlApp',

    extend: 'Ext.app.Application',

    views: [
        'search.searchForm',
        'results.resultsGrid'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'results.resultsGrids'
    ]
});
