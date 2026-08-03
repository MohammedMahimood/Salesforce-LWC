/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
**/
public with sharing class ContactControllerFilterDemo {
    @AuraEnabled(cacheable=true)
        public static list<Contact> getContactList(){
        return [SELECT Id, Name,Title,Email FROM Contact];
    }
}