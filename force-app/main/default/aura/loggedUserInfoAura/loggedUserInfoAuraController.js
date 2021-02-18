({
    doInit : function(component, event, helper) {
        helper.getFieldValue(component);
    },
    sayHi : function(component, event, helper) {
        var greetingEvent = component.getEvent("greetingEvent");
        greetingEvent.fire();
    }
})
