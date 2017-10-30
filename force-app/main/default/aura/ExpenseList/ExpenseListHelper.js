({
    recalculateTotals : function(component) {
        var expenseSum = 0;
        var expenseCount = 0;
        var approvedSum = 0;
        var approvedCount = 0;
        var expenses = component.get("v.expenses");
        
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
    }
})