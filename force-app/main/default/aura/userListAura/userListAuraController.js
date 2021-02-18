({
    doInit : function(component, event, helper) {
        helper.getUsers(component);
    },
    selectUser : function(component, event, helper) {
        var payload = { recordId: event.currentTarget.dataset.id };
        component.find("userMessageChannel").publish(payload);
    }
})
