({
    getExpenseList : function(component) {
        var action = component.get("c.getExpenses");
        action.setCallback(this, function(actionResult) {
            component.set("v.expenses", actionResult.getReturnValue());
            this.recalculateTotals(component);            
        });
        $A.enqueueAction(action);
    },    
    updateExpenseItem : function(component, expense) {
        var action = component.get("c.saveExpense");        
        action.setParams({
            "expense": expense
        });
        action.setCallback(this, function(actionResult) {
            // Resturned from DML
        });
        $A.enqueueAction(action);
    },
    recalculateTotals : function(component) {
        var expenses = component.get("v.expenses");
        
        //Initialize working vars
        var expenseSum = 0;
        var expenseCount = 0;
        var approvedSum = 0;
        var approvedCount = 0;
        
        for(var i = 0; i < expenses.length; i++){
            var e = expenses[i];
            expenseSum += e.Amount__c;
            expenseCount ++;
            if(e.Approved__c) {
                approvedSum += e.Amount__c;   
                approvedCount ++;
            }
        };
        
        //Set the component attribute values    
        component.set("v.expenseSum", expenseSum);
        component.set("v.expenseCount", expenseCount);  
        component.set("v.approvedSum", approvedSum);  
        component.set("v.approvedCount", approvedCount);  
    },
})