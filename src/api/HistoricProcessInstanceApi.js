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



import ApiClient from "../ApiClient";
import AnyType from '../model/AnyType';
import BatchDto from '../model/BatchDto';
import CountResultDto from '../model/CountResultDto';
import DeleteHistoricProcessInstancesDto from '../model/DeleteHistoricProcessInstancesDto';
import ExceptionDto from '../model/ExceptionDto';
import HistoricProcessInstanceDto from '../model/HistoricProcessInstanceDto';
import HistoricProcessInstanceQueryDto from '../model/HistoricProcessInstanceQueryDto';
import SetRemovalTimeToHistoricProcessInstancesDto from '../model/SetRemovalTimeToHistoricProcessInstancesDto';

/**
* HistoricProcessInstance service.
* @module api/HistoricProcessInstanceApi
* @version 7.14.0
*/
export default class HistoricProcessInstanceApi extends ApiClient {

    /**
    * Constructs a new HistoricProcessInstanceApi. 
    * @alias module:api/HistoricProcessInstanceApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Delete
     * Deletes a process instance from the history by id.
     * @param {String} id The id of the historic process instance to be deleted.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.failIfNotExists If set to `false`, the request will still be successful if the process id is not found.
     * @return {Promise}
     */
    async deleteHistoricProcessInstance(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteHistoricProcessInstance");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'failIfNotExists': opts['failIfNotExists']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.callApi(
        '/history/process-instance/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete Async (POST)
     * Delete multiple historic process instances asynchronously (batch). At least `historicProcessInstanceIds` or `historicProcessInstanceQuery` has to be provided. If both are provided then all instances matching query criterion and instances from the list will be deleted.
     * @param {Object} opts Optional parameters
     * @param {DeleteHistoricProcessInstancesDto} opts.deleteHistoricProcessInstancesDto 
     * @return {Promise<BatchDto>}
     */
    async deleteHistoricProcessInstancesAsync(opts) {
      opts = opts || {};
      let postBody = opts['deleteHistoricProcessInstancesDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BatchDto;

      return this.callApi(
        '/history/process-instance/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete Variable Instances
     * Deletes all variables of a process instance from the history by id.
     * @param {String} id The id of the process instance for which all historic variables are to be deleted.
     * @return {Promise}
     */
    async deleteHistoricVariableInstancesOfHistoricProcessInstance(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteHistoricVariableInstancesOfHistoricProcessInstance");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.callApi(
        '/history/process-instance/{id}/variable-instances', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get
     * Retrieves a historic process instance by id, according to the `HistoricProcessInstance` interface in the engine.
     * @param {String} id The id of the historic process instance to be retrieved.
     * @return {Promise<HistoricProcessInstanceDto>}
     */
    async getHistoricProcessInstance(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getHistoricProcessInstance");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HistoricProcessInstanceDto;

      return this.callApi(
        '/history/process-instance/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Duration Report
     * Retrieves a report about the duration of completed process instances, grouped by a period. These reports include the maximum, minimum and average duration of all completed process instances which were started in a given period.  **Note:** This only includes historic data.
     * @param {String} reportType **Mandatory.** Specifies the type of the report to retrieve. To retrieve a report about the duration of process instances, the value must be set to `duration`.
     * @param {String} periodUnit **Mandatory.** Specifies the granularity of the report. Valid values are `month` and `quarter`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.processDefinitionIdIn Filter by process definition ids. Must be a comma-separated list of process definition ids.
     * @param {String} opts.processDefinitionKeyIn Filter by process definition keys. Must be a comma-separated list of process definition keys.
     * @param {Date} opts.startedBefore Restrict to instances that were started before the given date. By [default](), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`.
     * @param {Date} opts.startedAfter Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`.
     * @return {Promise<AnyType>}
     */
    async getHistoricProcessInstanceDurationReport(reportType, periodUnit, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'reportType' is set
      if (reportType === undefined || reportType === null) {
        throw new Error("Missing the required parameter 'reportType' when calling getHistoricProcessInstanceDurationReport");
      }
      // verify the required parameter 'periodUnit' is set
      if (periodUnit === undefined || periodUnit === null) {
        throw new Error("Missing the required parameter 'periodUnit' when calling getHistoricProcessInstanceDurationReport");
      }

      let pathParams = {
      };
      let queryParams = {
        'reportType': reportType,
        'periodUnit': periodUnit,
        'processDefinitionIdIn': opts['processDefinitionIdIn'],
        'processDefinitionKeyIn': opts['processDefinitionKeyIn'],
        'startedBefore': opts['startedBefore'],
        'startedAfter': opts['startedAfter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = AnyType;

      return this.callApi(
        '/history/process-instance/report', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get List
     * Queries for historic process instances that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Process Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {String} opts.processInstanceId Filter by process instance id.
     * @param {String} opts.processInstanceIds Filter by process instance ids. Filter by a comma-separated list of `Strings`.
     * @param {String} opts.processDefinitionId Filter by the process definition the instances run on.
     * @param {String} opts.processDefinitionKey Filter by the key of the process definition the instances run on.
     * @param {String} opts.processDefinitionKeyIn Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`.
     * @param {String} opts.processDefinitionName Filter by the name of the process definition the instances run on.
     * @param {String} opts.processDefinitionNameLike Filter by process definition names that the parameter is a substring of.
     * @param {String} opts.processDefinitionKeyNotIn Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`.
     * @param {String} opts.processInstanceBusinessKey Filter by process instance business key.
     * @param {String} opts.processInstanceBusinessKeyLike Filter by process instance business key that the parameter is a substring of.
     * @param {Boolean} opts.rootProcessInstances Restrict the query to all process instances that are top level process instances.
     * @param {Boolean} opts.finished Only include finished process instances. Value may only be `true`, as `false` is the default behavior.
     * @param {Boolean} opts.unfinished Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior.
     * @param {Boolean} opts.withIncidents Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior.
     * @param {Boolean} opts.withRootIncidents Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior.
     * @param {String} opts.incidentType Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param {String} opts.incidentStatus Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents.
     * @param {String} opts.incidentMessage Filter by the incident message. Exact match.
     * @param {String} opts.incidentMessageLike Filter by the incident message that the parameter is a substring of.
     * @param {Date} opts.startedBefore Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.startedAfter Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.finishedBefore Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.finishedAfter Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.executedActivityAfter Restrict to instances that executed an activity after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.executedActivityBefore Restrict to instances that executed an activity before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.executedJobAfter Restrict to instances that executed an job after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.executedJobBefore Restrict to instances that executed an job before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {String} opts.startedBy Only include process instances that were started by the given user.
     * @param {String} opts.superProcessInstanceId Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
     * @param {String} opts.subProcessInstanceId Restrict query to one process instance that has a sub process instance with the given id.
     * @param {String} opts.superCaseInstanceId Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     * @param {String} opts.subCaseInstanceId Restrict query to one process instance that has a sub case instance with the given id.
     * @param {String} opts.caseInstanceId Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     * @param {String} opts.tenantIdIn Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings`
     * @param {Boolean} opts.withoutTenantId Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @param {String} opts.executedActivityIdIn Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings`
     * @param {String} opts.activeActivityIdIn Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings`
     * @param {Boolean} opts.active Restrict to instances that are active.
     * @param {Boolean} opts.suspended Restrict to instances that are suspended.
     * @param {Boolean} opts.completed Restrict to instances that are completed.
     * @param {Boolean} opts.externallyTerminated Restrict to instances that are externallyTerminated.
     * @param {Boolean} opts.internallyTerminated Restrict to instances that are internallyTerminated.
     * @param {String} opts.variables Only include process instances that have/had variables with certain values. Variable filtering expressions are comma-separated and are structured as follows: A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note:** Values are always treated as String objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.  Key and value may not contain underscore or comma characters. 
     * @param {Boolean} opts.variableNamesIgnoreCase Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal.
     * @param {Boolean} opts.variableValuesIgnoreCase Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal.
     * @return {Promise<Array.<HistoricProcessInstanceDto>>}
     */
    async getHistoricProcessInstances(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults'],
        'processInstanceId': opts['processInstanceId'],
        'processInstanceIds': opts['processInstanceIds'],
        'processDefinitionId': opts['processDefinitionId'],
        'processDefinitionKey': opts['processDefinitionKey'],
        'processDefinitionKeyIn': opts['processDefinitionKeyIn'],
        'processDefinitionName': opts['processDefinitionName'],
        'processDefinitionNameLike': opts['processDefinitionNameLike'],
        'processDefinitionKeyNotIn': opts['processDefinitionKeyNotIn'],
        'processInstanceBusinessKey': opts['processInstanceBusinessKey'],
        'processInstanceBusinessKeyLike': opts['processInstanceBusinessKeyLike'],
        'rootProcessInstances': opts['rootProcessInstances'],
        'finished': opts['finished'],
        'unfinished': opts['unfinished'],
        'withIncidents': opts['withIncidents'],
        'withRootIncidents': opts['withRootIncidents'],
        'incidentType': opts['incidentType'],
        'incidentStatus': opts['incidentStatus'],
        'incidentMessage': opts['incidentMessage'],
        'incidentMessageLike': opts['incidentMessageLike'],
        'startedBefore': opts['startedBefore'],
        'startedAfter': opts['startedAfter'],
        'finishedBefore': opts['finishedBefore'],
        'finishedAfter': opts['finishedAfter'],
        'executedActivityAfter': opts['executedActivityAfter'],
        'executedActivityBefore': opts['executedActivityBefore'],
        'executedJobAfter': opts['executedJobAfter'],
        'executedJobBefore': opts['executedJobBefore'],
        'startedBy': opts['startedBy'],
        'superProcessInstanceId': opts['superProcessInstanceId'],
        'subProcessInstanceId': opts['subProcessInstanceId'],
        'superCaseInstanceId': opts['superCaseInstanceId'],
        'subCaseInstanceId': opts['subCaseInstanceId'],
        'caseInstanceId': opts['caseInstanceId'],
        'tenantIdIn': opts['tenantIdIn'],
        'withoutTenantId': opts['withoutTenantId'],
        'executedActivityIdIn': opts['executedActivityIdIn'],
        'activeActivityIdIn': opts['activeActivityIdIn'],
        'active': opts['active'],
        'suspended': opts['suspended'],
        'completed': opts['completed'],
        'externallyTerminated': opts['externallyTerminated'],
        'internallyTerminated': opts['internallyTerminated'],
        'variables': opts['variables'],
        'variableNamesIgnoreCase': opts['variableNamesIgnoreCase'],
        'variableValuesIgnoreCase': opts['variableValuesIgnoreCase']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [HistoricProcessInstanceDto];

      return this.callApi(
        '/history/process-instance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get List Count
     * Queries for the number of historic process instances that fulfill the given parameters. Takes the same parameters as the [Get Process Instances](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.processInstanceId Filter by process instance id.
     * @param {String} opts.processInstanceIds Filter by process instance ids. Filter by a comma-separated list of `Strings`.
     * @param {String} opts.processDefinitionId Filter by the process definition the instances run on.
     * @param {String} opts.processDefinitionKey Filter by the key of the process definition the instances run on.
     * @param {String} opts.processDefinitionKeyIn Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`.
     * @param {String} opts.processDefinitionName Filter by the name of the process definition the instances run on.
     * @param {String} opts.processDefinitionNameLike Filter by process definition names that the parameter is a substring of.
     * @param {String} opts.processDefinitionKeyNotIn Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`.
     * @param {String} opts.processInstanceBusinessKey Filter by process instance business key.
     * @param {String} opts.processInstanceBusinessKeyLike Filter by process instance business key that the parameter is a substring of.
     * @param {Boolean} opts.rootProcessInstances Restrict the query to all process instances that are top level process instances.
     * @param {Boolean} opts.finished Only include finished process instances. Value may only be `true`, as `false` is the default behavior.
     * @param {Boolean} opts.unfinished Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior.
     * @param {Boolean} opts.withIncidents Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior.
     * @param {Boolean} opts.withRootIncidents Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior.
     * @param {String} opts.incidentType Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param {String} opts.incidentStatus Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents.
     * @param {String} opts.incidentMessage Filter by the incident message. Exact match.
     * @param {String} opts.incidentMessageLike Filter by the incident message that the parameter is a substring of.
     * @param {Date} opts.startedBefore Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.startedAfter Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.finishedBefore Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.finishedAfter Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.executedActivityAfter Restrict to instances that executed an activity after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.executedActivityBefore Restrict to instances that executed an activity before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.executedJobAfter Restrict to instances that executed an job after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.executedJobBefore Restrict to instances that executed an job before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {String} opts.startedBy Only include process instances that were started by the given user.
     * @param {String} opts.superProcessInstanceId Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
     * @param {String} opts.subProcessInstanceId Restrict query to one process instance that has a sub process instance with the given id.
     * @param {String} opts.superCaseInstanceId Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     * @param {String} opts.subCaseInstanceId Restrict query to one process instance that has a sub case instance with the given id.
     * @param {String} opts.caseInstanceId Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     * @param {String} opts.tenantIdIn Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings`
     * @param {Boolean} opts.withoutTenantId Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @param {String} opts.executedActivityIdIn Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings`
     * @param {String} opts.activeActivityIdIn Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings`
     * @param {Boolean} opts.active Restrict to instances that are active.
     * @param {Boolean} opts.suspended Restrict to instances that are suspended.
     * @param {Boolean} opts.completed Restrict to instances that are completed.
     * @param {Boolean} opts.externallyTerminated Restrict to instances that are externallyTerminated.
     * @param {Boolean} opts.internallyTerminated Restrict to instances that are internallyTerminated.
     * @param {String} opts.variables Only include process instances that have/had variables with certain values. Variable filtering expressions are comma-separated and are structured as follows: A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note:** Values are always treated as String objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.  Key and value may not contain underscore or comma characters. 
     * @param {Boolean} opts.variableNamesIgnoreCase Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal.
     * @param {Boolean} opts.variableValuesIgnoreCase Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal.
     * @return {Promise<CountResultDto>}
     */
    async getHistoricProcessInstancesCount(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'processInstanceId': opts['processInstanceId'],
        'processInstanceIds': opts['processInstanceIds'],
        'processDefinitionId': opts['processDefinitionId'],
        'processDefinitionKey': opts['processDefinitionKey'],
        'processDefinitionKeyIn': opts['processDefinitionKeyIn'],
        'processDefinitionName': opts['processDefinitionName'],
        'processDefinitionNameLike': opts['processDefinitionNameLike'],
        'processDefinitionKeyNotIn': opts['processDefinitionKeyNotIn'],
        'processInstanceBusinessKey': opts['processInstanceBusinessKey'],
        'processInstanceBusinessKeyLike': opts['processInstanceBusinessKeyLike'],
        'rootProcessInstances': opts['rootProcessInstances'],
        'finished': opts['finished'],
        'unfinished': opts['unfinished'],
        'withIncidents': opts['withIncidents'],
        'withRootIncidents': opts['withRootIncidents'],
        'incidentType': opts['incidentType'],
        'incidentStatus': opts['incidentStatus'],
        'incidentMessage': opts['incidentMessage'],
        'incidentMessageLike': opts['incidentMessageLike'],
        'startedBefore': opts['startedBefore'],
        'startedAfter': opts['startedAfter'],
        'finishedBefore': opts['finishedBefore'],
        'finishedAfter': opts['finishedAfter'],
        'executedActivityAfter': opts['executedActivityAfter'],
        'executedActivityBefore': opts['executedActivityBefore'],
        'executedJobAfter': opts['executedJobAfter'],
        'executedJobBefore': opts['executedJobBefore'],
        'startedBy': opts['startedBy'],
        'superProcessInstanceId': opts['superProcessInstanceId'],
        'subProcessInstanceId': opts['subProcessInstanceId'],
        'superCaseInstanceId': opts['superCaseInstanceId'],
        'subCaseInstanceId': opts['subCaseInstanceId'],
        'caseInstanceId': opts['caseInstanceId'],
        'tenantIdIn': opts['tenantIdIn'],
        'withoutTenantId': opts['withoutTenantId'],
        'executedActivityIdIn': opts['executedActivityIdIn'],
        'activeActivityIdIn': opts['activeActivityIdIn'],
        'active': opts['active'],
        'suspended': opts['suspended'],
        'completed': opts['completed'],
        'externallyTerminated': opts['externallyTerminated'],
        'internallyTerminated': opts['internallyTerminated'],
        'variables': opts['variables'],
        'variableNamesIgnoreCase': opts['variableNamesIgnoreCase'],
        'variableValuesIgnoreCase': opts['variableValuesIgnoreCase']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CountResultDto;

      return this.callApi(
        '/history/process-instance/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get List (POST)
     * Queries for historic process instances that fulfill the given parameters. This method is slightly more powerful than the [Get Process Instance](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) because it allows filtering by multiple process variables of types `String`, `Number` or `Boolean`.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {HistoricProcessInstanceQueryDto} opts.historicProcessInstanceQueryDto 
     * @return {Promise<Array.<HistoricProcessInstanceDto>>}
     */
    async queryHistoricProcessInstances(opts) {
      opts = opts || {};
      let postBody = opts['historicProcessInstanceQueryDto'];

      let pathParams = {
      };
      let queryParams = {
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [HistoricProcessInstanceDto];

      return this.callApi(
        '/history/process-instance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get List Count (POST)
     * Queries for the number of historic process instances that fulfill the given parameters. This method takes the same message body as the [Get Process Instances (POST)](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) method and therefore it is slightly more powerful than the [Get Process Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/post-process-instance-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {HistoricProcessInstanceQueryDto} opts.historicProcessInstanceQueryDto 
     * @return {Promise<CountResultDto>}
     */
    async queryHistoricProcessInstancesCount(opts) {
      opts = opts || {};
      let postBody = opts['historicProcessInstanceQueryDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CountResultDto;

      return this.callApi(
        '/history/process-instance/count', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set Removal Time Async (POST)
     * Sets the removal time to multiple historic process instances asynchronously (batch).  At least `historicProcessInstanceIds` or `historicProcessInstanceQuery` has to be provided. If both are provided, all instances matching query criterion and instances from the list will be updated with a removal time.
     * @param {Object} opts Optional parameters
     * @param {SetRemovalTimeToHistoricProcessInstancesDto} opts.setRemovalTimeToHistoricProcessInstancesDto 
     * @return {Promise<BatchDto>}
     */
    async setRemovalTimeAsync(opts) {
      opts = opts || {};
      let postBody = opts['setRemovalTimeToHistoricProcessInstancesDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BatchDto;

      return this.callApi(
        '/history/process-instance/set-removal-time', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
