/**
 * Camunda BPM REST API
 * OpenApi Spec for Camunda BPM REST API.
 *
 * The version of the OpenAPI document: 7.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EventSubscriptionDto model module.
 * @module model/EventSubscriptionDto
 * @version 7.14.0
 */
class EventSubscriptionDto {
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} eventType
     * @type {String}
     */
    eventType;
    /**
     * @member {String} eventName
     * @type {String}
     */
    eventName;
    /**
     * @member {String} executionId
     * @type {String}
     */
    executionId;
    /**
     * @member {String} processInstanceId
     * @type {String}
     */
    processInstanceId;
    /**
     * @member {String} activityId
     * @type {String}
     */
    activityId;
    /**
     * @member {Date} createdDate
     * @type {Date}
     */
    createdDate;
    /**
     * @member {String} tenantId
     * @type {String}
     */
    tenantId;

    

    /**
     * Constructs a new <code>EventSubscriptionDto</code>.
     * @alias module:model/EventSubscriptionDto
     */
    constructor() { 
        
        EventSubscriptionDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventSubscriptionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventSubscriptionDto} obj Optional instance to populate.
     * @return {module:model/EventSubscriptionDto} The populated <code>EventSubscriptionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventSubscriptionDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('eventName')) {
                obj['eventName'] = ApiClient.convertToType(data['eventName'], 'String');
            }
            if (data.hasOwnProperty('executionId')) {
                obj['executionId'] = ApiClient.convertToType(data['executionId'], 'String');
            }
            if (data.hasOwnProperty('processInstanceId')) {
                obj['processInstanceId'] = ApiClient.convertToType(data['processInstanceId'], 'String');
            }
            if (data.hasOwnProperty('activityId')) {
                obj['activityId'] = ApiClient.convertToType(data['activityId'], 'String');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }
}



export default EventSubscriptionDto;

