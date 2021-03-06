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
import ExternalTaskQueryDto from './ExternalTaskQueryDto';
import HistoricProcessInstanceQueryDto from './HistoricProcessInstanceQueryDto';
import ProcessInstanceQueryDto from './ProcessInstanceQueryDto';

/**
 * The SetRetriesForExternalTasksDto model module.
 * @module model/SetRetriesForExternalTasksDto
 * @version 7.14.0
 */
class SetRetriesForExternalTasksDto {
    /**
     * @member {Number} retries
     * @type {Number}
     */
    retries;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='externalTaskIds', complexType='null', getter='getExternalTaskIds', setter='setExternalTaskIds', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='externalTaskIds', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['externalTaskIds'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='ExternalTaskIds', nameInSnakeCase='EXTERNAL_TASK_IDS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} externalTaskIds
     * @type {Array.<CodegenProperty{openApiType='string', baseName='externalTaskIds', complexType='null', getter='getExternalTaskIds', setter='setExternalTaskIds', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='externalTaskIds', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['externalTaskIds'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='ExternalTaskIds', nameInSnakeCase='EXTERNAL_TASK_IDS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    externalTaskIds;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='processInstanceIds', complexType='null', getter='getProcessInstanceIds', setter='setProcessInstanceIds', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='processInstanceIds', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['processInstanceIds'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='ProcessInstanceIds', nameInSnakeCase='PROCESS_INSTANCE_IDS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} processInstanceIds
     * @type {Array.<CodegenProperty{openApiType='string', baseName='processInstanceIds', complexType='null', getter='getProcessInstanceIds', setter='setProcessInstanceIds', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='processInstanceIds', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['processInstanceIds'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='ProcessInstanceIds', nameInSnakeCase='PROCESS_INSTANCE_IDS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    processInstanceIds;
    /**
     * @member {ExternalTaskQueryDto} externalTaskQuery
     * @type {ExternalTaskQueryDto}
     */
    externalTaskQuery;
    /**
     * @member {ProcessInstanceQueryDto} processInstanceQuery
     * @type {ProcessInstanceQueryDto}
     */
    processInstanceQuery;
    /**
     * @member {HistoricProcessInstanceQueryDto} historicProcessInstanceQuery
     * @type {HistoricProcessInstanceQueryDto}
     */
    historicProcessInstanceQuery;

    

    /**
     * Constructs a new <code>SetRetriesForExternalTasksDto</code>.
     * @alias module:model/SetRetriesForExternalTasksDto
     */
    constructor() { 
        
        SetRetriesForExternalTasksDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetRetriesForExternalTasksDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetRetriesForExternalTasksDto} obj Optional instance to populate.
     * @return {module:model/SetRetriesForExternalTasksDto} The populated <code>SetRetriesForExternalTasksDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetRetriesForExternalTasksDto();

            if (data.hasOwnProperty('retries')) {
                obj['retries'] = ApiClient.convertToType(data['retries'], 'Number');
            }
            if (data.hasOwnProperty('externalTaskIds')) {
                obj['externalTaskIds'] = ApiClient.convertToType(data['externalTaskIds'], ['String']);
            }
            if (data.hasOwnProperty('processInstanceIds')) {
                obj['processInstanceIds'] = ApiClient.convertToType(data['processInstanceIds'], ['String']);
            }
            if (data.hasOwnProperty('externalTaskQuery')) {
                obj['externalTaskQuery'] = ExternalTaskQueryDto.constructFromObject(data['externalTaskQuery']);
            }
            if (data.hasOwnProperty('processInstanceQuery')) {
                obj['processInstanceQuery'] = ProcessInstanceQueryDto.constructFromObject(data['processInstanceQuery']);
            }
            if (data.hasOwnProperty('historicProcessInstanceQuery')) {
                obj['historicProcessInstanceQuery'] = HistoricProcessInstanceQueryDto.constructFromObject(data['historicProcessInstanceQuery']);
            }
        }
        return obj;
    }
}



export default SetRetriesForExternalTasksDto;

