Ext.define('ExtYqlApp.model.results.resultsGrid', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Title', type: 'auto' },
        { name: 'Address', type: 'auto' },
        { name: 'City', type: 'auto' },
        { name: 'State', type: 'auto' },
        { name: 'Phone', type: 'auto' },
        { name: 'Latitude', type: 'auto' },
        { name: 'Longitude', type: 'auto' },
        { name: 'Rating.AverageRating', type: 'auto' },
        { name: 'BusinessUrl', type: 'auto' }
    ],
    proxy: {
        type: 'jsonp',
        url: 'http://query.yahooapis.com/v1/public/yql',
        extraParams: {
            'q': "select * from local.search where zip='68007' and query='pizza'",
            'format': 'json',
            'diagnostics': false
        },
        headers: { 'Content-type': 'text/json;  charset=utf-8', 'Accepts': 'text/json' },
        reader: {
            type: 'json',
            root: 'query.results.Result',
            successProperty: ''
        }
    }
});