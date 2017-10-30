({
    onApprovedValueChange : function(component, event) {
        var expense = component.get("v.expense");
        var updateEvent = component.getEvent("expenseUpdatedEvent");
        updateEvent.setParams({
            "expense": expense
        });
        updateEvent.fire();
    },
})