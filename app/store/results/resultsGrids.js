Ext.define('ExtYqlApp.store.results.resultsGrids', {
    extend: 'Ext.data.Store',
    model: 'ExtYqlApp.model.results.resultsGrid',
    autoLoad: true,
    listeners: {
        beforeload: function (store, operation) {
            console.log(operation);
            if (operation.request != null) {
                console.log(operation.request.proxy.reader.jsonData.query.count);
                if (operation.request.proxy.reader.jsonData.query.count == 0)
                    return false;
                else
                    return true;
            }
            else
                return true;
        }
    }
});