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
 * The DecisionDefinitionDto model module.
 * @module model/DecisionDefinitionDto
 * @version 7.14.0
 */
class DecisionDefinitionDto {
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} key
     * @type {String}
     */
    key;
    /**
     * @member {String} category
     * @type {String}
     */
    category;
    /**
     * @member {String} name
     * @type {String}
     */
    name;
    /**
     * @member {Number} version
     * @type {Number}
     */
    version;
    /**
     * @member {String} resource
     * @type {String}
     */
    resource;
    /**
     * @member {String} deploymentId
     * @type {String}
     */
    deploymentId;
    /**
     * @member {String} tenantId
     * @type {String}
     */
    tenantId;
    /**
     * @member {String} decisionRequirementsDefinitionId
     * @type {String}
     */
    decisionRequirementsDefinitionId;
    /**
     * @member {String} decisionRequirementsDefinitionKey
     * @type {String}
     */
    decisionRequirementsDefinitionKey;
    /**
     * @member {Number} historyTimeToLive
     * @type {Number}
     */
    historyTimeToLive;
    /**
     * @member {String} versionTag
     * @type {String}
     */
    versionTag;

    

    /**
     * Constructs a new <code>DecisionDefinitionDto</code>.
     * @alias module:model/DecisionDefinitionDto
     */
    constructor() { 
        
        DecisionDefinitionDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecisionDefinitionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecisionDefinitionDto} obj Optional instance to populate.
     * @return {module:model/DecisionDefinitionDto} The populated <code>DecisionDefinitionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecisionDefinitionDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('deploymentId')) {
                obj['deploymentId'] = ApiClient.convertToType(data['deploymentId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('decisionRequirementsDefinitionId')) {
                obj['decisionRequirementsDefinitionId'] = ApiClient.convertToType(data['decisionRequirementsDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('decisionRequirementsDefinitionKey')) {
                obj['decisionRequirementsDefinitionKey'] = ApiClient.convertToType(data['decisionRequirementsDefinitionKey'], 'String');
            }
            if (data.hasOwnProperty('historyTimeToLive')) {
                obj['historyTimeToLive'] = ApiClient.convertToType(data['historyTimeToLive'], 'Number');
            }
            if (data.hasOwnProperty('versionTag')) {
                obj['versionTag'] = ApiClient.convertToType(data['versionTag'], 'String');
            }
        }
        return obj;
    }
}



export default DecisionDefinitionDto;

