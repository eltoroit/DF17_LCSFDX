public class ExpenseController {
    @AuraEnabled
    public static List<Expense__c> getExpenses() {
        return [SELECT Id, Name, Amount__c, Client__c, Date__c, Reimbursed__c, Approved__c 
                FROM Expense__c 
                ORDER BY CreatedDate ASC];
    }    
    
    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        upsert expense;
        return expense;
    }   
}