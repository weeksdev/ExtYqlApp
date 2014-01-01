Ext.define('ExtYqlApp.view.results.resultsGrid', {
    extend: 'Ext.grid.Panel',
    requires: [],
    controllers: ['Main'],
    store: 'results.resultsGrids',
    xtype: 'results.resultsGrid',
    viewConfig: {
        enableTextSelection: true,
    },
    features: [
    ],
    plugins: [
		//THIS IS A STANDARD SETTING WHICH ALLOWS FOR FASTER DATA IN GRIDS
		'bufferedrenderer',
    ],
    tbar: {
        items: [
			'->',
        ]
    },
    columns: {
        defaults: {
        },
        items: [
			{ header: "Title", dataIndex: "Title" },
            { header: "Address", dataIndex: "Address" },
            { header: "City", dataIndex: "City" },
            { header: "State", dataIndex: "State" },
            { header: "Phone", dataIndex: "Phone" },
            {
                header: "Average Rating", dataIndex: "Rating.AverageRating", renderer: function (value) {
                    if (Number(value))
                        return value;
                    else
                        return 'No Rating';
                }},
            {
                header: "Business Link", dataIndex: "BusinessUrl", renderer: function (value) {
                    return '<a href="' + value + '" target="_blank">Click Here</a>';
                }}
        ]
    }
});