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
 * The RestartProcessInstanceModificationInstructionDto model module.
 * @module model/RestartProcessInstanceModificationInstructionDto
 * @version 7.14.0
 */
class RestartProcessInstanceModificationInstructionDto {
    /**
     * @member {RestartProcessInstanceModificationInstructionDto.TypeEnum} type
     * @type {RestartProcessInstanceModificationInstructionDto.TypeEnum}
     */
    type;
    /**
     * @member {String} activityId
     * @type {String}
     */
    activityId;
    /**
     * @member {String} transitionId
     * @type {String}
     */
    transitionId;

    

    /**
     * Constructs a new <code>RestartProcessInstanceModificationInstructionDto</code>.
     * @alias module:model/RestartProcessInstanceModificationInstructionDto
     * @param type {RestartProcessInstanceModificationInstructionDto.TypeEnum} **Mandatory**. One of the following values: `startBeforeActivity`, `startAfterActivity`, `startTransition`.  * A `startBeforeActivity` instruction requests to enter a given activity. * A `startAfterActivity` instruction requests to execute the single outgoing sequence flow of a given activity. * A `startTransition` instruction requests to execute a specific sequence flow.
     */
    constructor(type) { 
        
        RestartProcessInstanceModificationInstructionDto.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RestartProcessInstanceModificationInstructionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestartProcessInstanceModificationInstructionDto} obj Optional instance to populate.
     * @return {module:model/RestartProcessInstanceModificationInstructionDto} The populated <code>RestartProcessInstanceModificationInstructionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestartProcessInstanceModificationInstructionDto();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('activityId')) {
                obj['activityId'] = ApiClient.convertToType(data['activityId'], 'String');
            }
            if (data.hasOwnProperty('transitionId')) {
                obj['transitionId'] = ApiClient.convertToType(data['transitionId'], 'String');
            }
        }
        return obj;
    }
}


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RestartProcessInstanceModificationInstructionDto['TypeEnum'] = {

    /**
     * value: "startBeforeActivity"
     * @const
     */
    "startBeforeActivity": "startBeforeActivity",

    /**
     * value: "startAfterActivity"
     * @const
     */
    "startAfterActivity": "startAfterActivity",

    /**
     * value: "startTransition"
     * @const
     */
    "startTransition": "startTransition"
};



export default RestartProcessInstanceModificationInstructionDto;

