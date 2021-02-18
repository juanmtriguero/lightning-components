({
    getUsers : function(component) {
        var action = component.get("c.getAllUsers");
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                component.set("v.users", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
