/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-22-2026
 * @last modified by  : Mohammed Mahimood
**/
const store = {};

/**
 * Subscribes a callback function to a specific event name.
 * @param {string} eventName 
 * @param {Function} callback 
 */
const subscribe = (eventName, callback) => {
    if (!store[eventName]) {
        store[eventName] = [];
    }
    store[eventName].push(callback);
};

/**
 * Unsubscribes a callback or clears callbacks for an event name.
 * @param {string} eventName 
 */
const unsubscribe = (eventName) => {
    if (store[eventName]) {
        delete store[eventName];
    }
};

/**
 * Publishes a payload/message to all subscribers of the specified event name.
 * @param {string} eventName 
 * @param {*} payload 
 */
const publish = (eventName, payload) => {
    if (store[eventName]) {
        store[eventName].forEach(callback => {
            try {
                callback(payload);
            } catch (error) {
                console.error(error);
            }
        });
    }
};

export default {
    subscribe,
    unsubscribe,
    publish
};