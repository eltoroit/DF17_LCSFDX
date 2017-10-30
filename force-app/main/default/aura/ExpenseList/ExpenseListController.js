({
    doInit : function(component, event, helper) {
        var action = component.get("c.getExpenses");
        action.setCallback(this, function(actionResult) {
            var expenses = actionResult.getReturnValue();
            component.set("v.expenses", expenses);
            helper.recalculateTotals(component);
            console.log(expenses);
            // debugger;
        });
        $A.enqueueAction(action);
    },
    onExpenseUpdatedEvent : function(component, event, helper) {
        var expense = event.getParam("expense");
        var action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
        });
        action.setCallback(this, function(actionResult) {
            helper.recalculateTotals(component);
        });
        $A.enqueueAction(action);
    }
})