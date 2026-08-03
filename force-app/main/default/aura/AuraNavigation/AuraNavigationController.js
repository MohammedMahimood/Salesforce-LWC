/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-28-2026
 * @last modified by  : Mohammed Mahimood
**/
({
    onload : function(component) {
        var myPageRef= component.get('v.pageReference');
        var id = myPageRef.state.c__id
        component.set('v.id',id)
    }
})