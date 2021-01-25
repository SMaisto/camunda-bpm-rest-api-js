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
 * The ExecutionDto model module.
 * @module model/ExecutionDto
 * @version 7.14.0
 */
class ExecutionDto {
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} processInstanceId
     * @type {String}
     */
    processInstanceId;
    /**
     * @member {Boolean} ended
     * @type {Boolean}
     */
    ended;
    /**
     * @member {String} tenantId
     * @type {String}
     */
    tenantId;

    

    /**
     * Constructs a new <code>ExecutionDto</code>.
     * @alias module:model/ExecutionDto
     */
    constructor() { 
        
        ExecutionDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExecutionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecutionDto} obj Optional instance to populate.
     * @return {module:model/ExecutionDto} The populated <code>ExecutionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecutionDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('processInstanceId')) {
                obj['processInstanceId'] = ApiClient.convertToType(data['processInstanceId'], 'String');
            }
            if (data.hasOwnProperty('ended')) {
                obj['ended'] = ApiClient.convertToType(data['ended'], 'Boolean');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }
}



export default ExecutionDto;
