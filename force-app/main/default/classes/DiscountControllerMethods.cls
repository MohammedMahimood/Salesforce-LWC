/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 06-26-2026
 * @last modified by  : Mohammed Mahimood
**/
public with sharing class DiscountControllerMethods {
  
  /*
    public static Decimal getTaxRate(){
    return 0.18;
  }
    public Decimal calculateFinalPrice(Decimal basePrice) {
        Decimal taxAmount = basePrice * getTaxRate();
        return basePrice + taxAmount;
    } */
    public String leadStatus;
    public Integer leadScore;

    // Parameterized Constructor: Initializes data properties instantly upon instantiation
    public void LeadRatingController(String initialStatus, Integer initialScore) {
        this.leadStatus = initialStatus;
        this.leadScore = initialScore;
    }
}