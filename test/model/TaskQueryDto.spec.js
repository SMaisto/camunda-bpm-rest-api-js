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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CamundaBpmRestApi);
  }
}(this, function(expect, CamundaBpmRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CamundaBpmRestApi.TaskQueryDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TaskQueryDto', function() {
    it('should create an instance of TaskQueryDto', function() {
      // uncomment below and update the code to test TaskQueryDto
      //var instance = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.TaskQueryDto);
    });

    it('should have the property processInstanceId (base name: "processInstanceId")', function() {
      // uncomment below and update the code to test the property processInstanceId
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceIdIn (base name: "processInstanceIdIn")', function() {
      // uncomment below and update the code to test the property processInstanceIdIn
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceBusinessKey (base name: "processInstanceBusinessKey")', function() {
      // uncomment below and update the code to test the property processInstanceBusinessKey
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceBusinessKeyExpression (base name: "processInstanceBusinessKeyExpression")', function() {
      // uncomment below and update the code to test the property processInstanceBusinessKeyExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceBusinessKeyIn (base name: "processInstanceBusinessKeyIn")', function() {
      // uncomment below and update the code to test the property processInstanceBusinessKeyIn
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceBusinessKeyLike (base name: "processInstanceBusinessKeyLike")', function() {
      // uncomment below and update the code to test the property processInstanceBusinessKeyLike
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceBusinessKeyLikeExpression (base name: "processInstanceBusinessKeyLikeExpression")', function() {
      // uncomment below and update the code to test the property processInstanceBusinessKeyLikeExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
      // uncomment below and update the code to test the property processDefinitionId
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionKey (base name: "processDefinitionKey")', function() {
      // uncomment below and update the code to test the property processDefinitionKey
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionKeyIn (base name: "processDefinitionKeyIn")', function() {
      // uncomment below and update the code to test the property processDefinitionKeyIn
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionName (base name: "processDefinitionName")', function() {
      // uncomment below and update the code to test the property processDefinitionName
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionNameLike (base name: "processDefinitionNameLike")', function() {
      // uncomment below and update the code to test the property processDefinitionNameLike
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property executionId (base name: "executionId")', function() {
      // uncomment below and update the code to test the property executionId
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property caseInstanceId (base name: "caseInstanceId")', function() {
      // uncomment below and update the code to test the property caseInstanceId
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property caseInstanceBusinessKey (base name: "caseInstanceBusinessKey")', function() {
      // uncomment below and update the code to test the property caseInstanceBusinessKey
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property caseInstanceBusinessKeyLike (base name: "caseInstanceBusinessKeyLike")', function() {
      // uncomment below and update the code to test the property caseInstanceBusinessKeyLike
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property caseDefinitionId (base name: "caseDefinitionId")', function() {
      // uncomment below and update the code to test the property caseDefinitionId
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property caseDefinitionKey (base name: "caseDefinitionKey")', function() {
      // uncomment below and update the code to test the property caseDefinitionKey
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property caseDefinitionName (base name: "caseDefinitionName")', function() {
      // uncomment below and update the code to test the property caseDefinitionName
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property caseDefinitionNameLike (base name: "caseDefinitionNameLike")', function() {
      // uncomment below and update the code to test the property caseDefinitionNameLike
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property caseExecutionId (base name: "caseExecutionId")', function() {
      // uncomment below and update the code to test the property caseExecutionId
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property activityInstanceIdIn (base name: "activityInstanceIdIn")', function() {
      // uncomment below and update the code to test the property activityInstanceIdIn
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantIdIn (base name: "tenantIdIn")', function() {
      // uncomment below and update the code to test the property tenantIdIn
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property withoutTenantId (base name: "withoutTenantId")', function() {
      // uncomment below and update the code to test the property withoutTenantId
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property assignee (base name: "assignee")', function() {
      // uncomment below and update the code to test the property assignee
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property assigneeExpression (base name: "assigneeExpression")', function() {
      // uncomment below and update the code to test the property assigneeExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property assigneeLike (base name: "assigneeLike")', function() {
      // uncomment below and update the code to test the property assigneeLike
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property assigneeLikeExpression (base name: "assigneeLikeExpression")', function() {
      // uncomment below and update the code to test the property assigneeLikeExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property assigneeIn (base name: "assigneeIn")', function() {
      // uncomment below and update the code to test the property assigneeIn
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property ownerExpression (base name: "ownerExpression")', function() {
      // uncomment below and update the code to test the property ownerExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property candidateGroup (base name: "candidateGroup")', function() {
      // uncomment below and update the code to test the property candidateGroup
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property candidateGroupExpression (base name: "candidateGroupExpression")', function() {
      // uncomment below and update the code to test the property candidateGroupExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property candidateUser (base name: "candidateUser")', function() {
      // uncomment below and update the code to test the property candidateUser
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property candidateUserExpression (base name: "candidateUserExpression")', function() {
      // uncomment below and update the code to test the property candidateUserExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property includeAssignedTasks (base name: "includeAssignedTasks")', function() {
      // uncomment below and update the code to test the property includeAssignedTasks
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property involvedUser (base name: "involvedUser")', function() {
      // uncomment below and update the code to test the property involvedUser
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property involvedUserExpression (base name: "involvedUserExpression")', function() {
      // uncomment below and update the code to test the property involvedUserExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property assigned (base name: "assigned")', function() {
      // uncomment below and update the code to test the property assigned
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property unassigned (base name: "unassigned")', function() {
      // uncomment below and update the code to test the property unassigned
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property taskDefinitionKey (base name: "taskDefinitionKey")', function() {
      // uncomment below and update the code to test the property taskDefinitionKey
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property taskDefinitionKeyIn (base name: "taskDefinitionKeyIn")', function() {
      // uncomment below and update the code to test the property taskDefinitionKeyIn
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property taskDefinitionKeyLike (base name: "taskDefinitionKeyLike")', function() {
      // uncomment below and update the code to test the property taskDefinitionKeyLike
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property nameNotEqual (base name: "nameNotEqual")', function() {
      // uncomment below and update the code to test the property nameNotEqual
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property nameLike (base name: "nameLike")', function() {
      // uncomment below and update the code to test the property nameLike
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property nameNotLike (base name: "nameNotLike")', function() {
      // uncomment below and update the code to test the property nameNotLike
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property descriptionLike (base name: "descriptionLike")', function() {
      // uncomment below and update the code to test the property descriptionLike
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property maxPriority (base name: "maxPriority")', function() {
      // uncomment below and update the code to test the property maxPriority
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property minPriority (base name: "minPriority")', function() {
      // uncomment below and update the code to test the property minPriority
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property dueDateExpression (base name: "dueDateExpression")', function() {
      // uncomment below and update the code to test the property dueDateExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property dueAfter (base name: "dueAfter")', function() {
      // uncomment below and update the code to test the property dueAfter
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property dueAfterExpression (base name: "dueAfterExpression")', function() {
      // uncomment below and update the code to test the property dueAfterExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property dueBefore (base name: "dueBefore")', function() {
      // uncomment below and update the code to test the property dueBefore
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property dueBeforeExpression (base name: "dueBeforeExpression")', function() {
      // uncomment below and update the code to test the property dueBeforeExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property followUpDate (base name: "followUpDate")', function() {
      // uncomment below and update the code to test the property followUpDate
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property followUpDateExpression (base name: "followUpDateExpression")', function() {
      // uncomment below and update the code to test the property followUpDateExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property followUpAfter (base name: "followUpAfter")', function() {
      // uncomment below and update the code to test the property followUpAfter
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property followUpAfterExpression (base name: "followUpAfterExpression")', function() {
      // uncomment below and update the code to test the property followUpAfterExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property followUpBefore (base name: "followUpBefore")', function() {
      // uncomment below and update the code to test the property followUpBefore
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property followUpBeforeExpression (base name: "followUpBeforeExpression")', function() {
      // uncomment below and update the code to test the property followUpBeforeExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property followUpBeforeOrNotExistent (base name: "followUpBeforeOrNotExistent")', function() {
      // uncomment below and update the code to test the property followUpBeforeOrNotExistent
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property followUpBeforeOrNotExistentExpression (base name: "followUpBeforeOrNotExistentExpression")', function() {
      // uncomment below and update the code to test the property followUpBeforeOrNotExistentExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property createdOnExpression (base name: "createdOnExpression")', function() {
      // uncomment below and update the code to test the property createdOnExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property createdAfter (base name: "createdAfter")', function() {
      // uncomment below and update the code to test the property createdAfter
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property createdAfterExpression (base name: "createdAfterExpression")', function() {
      // uncomment below and update the code to test the property createdAfterExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property createdBefore (base name: "createdBefore")', function() {
      // uncomment below and update the code to test the property createdBefore
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property createdBeforeExpression (base name: "createdBeforeExpression")', function() {
      // uncomment below and update the code to test the property createdBeforeExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property delegationState (base name: "delegationState")', function() {
      // uncomment below and update the code to test the property delegationState
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property candidateGroups (base name: "candidateGroups")', function() {
      // uncomment below and update the code to test the property candidateGroups
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property candidateGroupsExpression (base name: "candidateGroupsExpression")', function() {
      // uncomment below and update the code to test the property candidateGroupsExpression
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property withCandidateGroups (base name: "withCandidateGroups")', function() {
      // uncomment below and update the code to test the property withCandidateGroups
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property withoutCandidateGroups (base name: "withoutCandidateGroups")', function() {
      // uncomment below and update the code to test the property withoutCandidateGroups
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property withCandidateUsers (base name: "withCandidateUsers")', function() {
      // uncomment below and update the code to test the property withCandidateUsers
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property withoutCandidateUsers (base name: "withoutCandidateUsers")', function() {
      // uncomment below and update the code to test the property withoutCandidateUsers
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property suspended (base name: "suspended")', function() {
      // uncomment below and update the code to test the property suspended
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property taskVariables (base name: "taskVariables")', function() {
      // uncomment below and update the code to test the property taskVariables
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processVariables (base name: "processVariables")', function() {
      // uncomment below and update the code to test the property processVariables
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property caseInstanceVariables (base name: "caseInstanceVariables")', function() {
      // uncomment below and update the code to test the property caseInstanceVariables
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property variableNamesIgnoreCase (base name: "variableNamesIgnoreCase")', function() {
      // uncomment below and update the code to test the property variableNamesIgnoreCase
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property variableValuesIgnoreCase (base name: "variableValuesIgnoreCase")', function() {
      // uncomment below and update the code to test the property variableValuesIgnoreCase
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property parentTaskId (base name: "parentTaskId")', function() {
      // uncomment below and update the code to test the property parentTaskId
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property orQueries (base name: "orQueries")', function() {
      // uncomment below and update the code to test the property orQueries
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property sorting (base name: "sorting")', function() {
      // uncomment below and update the code to test the property sorting
      //var instane = new CamundaBpmRestApi.TaskQueryDto();
      //expect(instance).to.be();
    });

  });

}));
