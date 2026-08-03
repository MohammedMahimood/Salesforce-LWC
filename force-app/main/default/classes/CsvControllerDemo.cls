/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-01-2026
 * @last modified by  : Mohammed Mahimood
**/
public with sharing class CsvControllerDemo {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountsCsv() {
        return [SELECT Id, Name, AnnualRevenue,Phone,Industry FROM Account];
    }
}