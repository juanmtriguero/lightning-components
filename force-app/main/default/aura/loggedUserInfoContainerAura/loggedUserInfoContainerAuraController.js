({
    doInit : function(component, event, helper) {
        var options = [
            { label: 'First Name', value: 'FirstName' },
            { label: 'Last Name', value: 'LastName' },
            { label: 'Username', value: 'Username' },
            { label: 'Alias', value: 'Alias' }
        ];
        component.set("v.options", options);
    },
    selectField : function(component, event, helper) {
        component.set("v.selectedField", event.getParam("value"));
    },
    showPanel : function(component, event, helper) {
        component.set("v.panelHidden", false);
    }
})
