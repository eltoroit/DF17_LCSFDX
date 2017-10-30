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
        var strExpense = JSON.stringify(expense);
        alert("Expense " + strExpense + " was changed");
    }
})