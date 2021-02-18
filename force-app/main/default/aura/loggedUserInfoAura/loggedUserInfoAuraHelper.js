({
    getFieldValue : function(component) {
        var action = component.get("c.getFieldValue");
        action.setParams({
            field: component.get("v.field")
        });
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                component.set("v.value", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
