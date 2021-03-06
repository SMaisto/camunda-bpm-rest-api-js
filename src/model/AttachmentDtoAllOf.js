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
 * The AttachmentDtoAllOf model module.
 * @module model/AttachmentDtoAllOf
 * @version 7.14.0
 */
class AttachmentDtoAllOf {
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} name
     * @type {String}
     */
    name;
    /**
     * @member {String} description
     * @type {String}
     */
    description;
    /**
     * @member {String} taskId
     * @type {String}
     */
    taskId;
    /**
     * @member {String} type
     * @type {String}
     */
    type;
    /**
     * @member {String} url
     * @type {String}
     */
    url;
    /**
     * @member {Date} createTime
     * @type {Date}
     */
    createTime;
    /**
     * @member {Date} removalTime
     * @type {Date}
     */
    removalTime;
    /**
     * @member {String} rootProcessInstanceId
     * @type {String}
     */
    rootProcessInstanceId;

    

    /**
     * Constructs a new <code>AttachmentDtoAllOf</code>.
     * @alias module:model/AttachmentDtoAllOf
     */
    constructor() { 
        
        AttachmentDtoAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentDtoAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentDtoAllOf} obj Optional instance to populate.
     * @return {module:model/AttachmentDtoAllOf} The populated <code>AttachmentDtoAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentDtoAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('taskId')) {
                obj['taskId'] = ApiClient.convertToType(data['taskId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('createTime')) {
                obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
            }
            if (data.hasOwnProperty('removalTime')) {
                obj['removalTime'] = ApiClient.convertToType(data['removalTime'], 'Date');
            }
            if (data.hasOwnProperty('rootProcessInstanceId')) {
                obj['rootProcessInstanceId'] = ApiClient.convertToType(data['rootProcessInstanceId'], 'String');
            }
        }
        return obj;
    }
}



export default AttachmentDtoAllOf;

