/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
**/
public with sharing class MapControllerLwc {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccount(){
        return[ SELECT Id,Name,Description,BillingStreet,BillingCountry,BillingCity,BillingState,BillingPostalCode FROM Account ORDER BY Name LIMIT 10];
        
    }
}