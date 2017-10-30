({
    doInit : function(component, event, helper) {
        helper.getExpenseList(component);
    },
    onExpenseUpdatedEvent : function(component, event, helper) {
        var expense = event.getParam("expense");
        helper.updateExpenseItem(component, expense);
        helper.recalculateTotals(component);
    }
})