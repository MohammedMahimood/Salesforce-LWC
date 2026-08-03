/**
 * @description       :
 * @author            : Mohammed Mahimood
 * @group             :
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
 **/
public with sharing class pdfPageController {
    public String pdfText {get;set;}
    public pdfPageController() {
        // FIXED: Removed escapeSingleQuotes to allow clean CSS style string injections
        pdfText = ApexPages.currentPage().getParameters().get('pdfText');
    }
}