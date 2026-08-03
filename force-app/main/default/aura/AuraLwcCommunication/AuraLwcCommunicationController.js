/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-22-2026
 * @last modified by  : Mohammed Mahimood
**/
({
    handlerMessage : function(component, event) {
        var msg=event.getParam('msg')
        component.set("v.message", msg)

    }
})