/**
 * @description       :
 * @author            : Mohammed Mahimood
 * @group             :
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
 **/
public with sharing class AccountControllerDemo {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountList(){
        return [SELECT Id, Name,Type,Industry FROM Account LIMIT 5];
    }

     @AuraEnabled(cacheable=true)
    public static list<Account> filterAccountType(String type){
        return [SELECT Id, Name,Type,Industry FROM Account WHERE Type=:type LIMIT 5];
    }

      @AuraEnabled(cacheable=true)
    public static list<Account> findAccounts(String searchKey){
        String key='%'+searchKey+'%';
        return [SELECT Id, Name,Type,Industry FROM Account WHERE Name like :key LIMIT 5];
    }
}