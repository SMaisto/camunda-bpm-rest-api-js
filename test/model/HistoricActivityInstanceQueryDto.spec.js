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
    instance = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
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

  describe('HistoricActivityInstanceQueryDto', function() {
    it('should create an instance of HistoricActivityInstanceQueryDto', function() {
      // uncomment below and update the code to test HistoricActivityInstanceQueryDto
      //var instance = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.HistoricActivityInstanceQueryDto);
    });

    it('should have the property activityInstanceId (base name: "activityInstanceId")', function() {
      // uncomment below and update the code to test the property activityInstanceId
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceId (base name: "processInstanceId")', function() {
      // uncomment below and update the code to test the property processInstanceId
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
      // uncomment below and update the code to test the property processDefinitionId
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property executionId (base name: "executionId")', function() {
      // uncomment below and update the code to test the property executionId
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property activityId (base name: "activityId")', function() {
      // uncomment below and update the code to test the property activityId
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property activityName (base name: "activityName")', function() {
      // uncomment below and update the code to test the property activityName
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property activityType (base name: "activityType")', function() {
      // uncomment below and update the code to test the property activityType
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property taskAssignee (base name: "taskAssignee")', function() {
      // uncomment below and update the code to test the property taskAssignee
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property finished (base name: "finished")', function() {
      // uncomment below and update the code to test the property finished
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property unfinished (base name: "unfinished")', function() {
      // uncomment below and update the code to test the property unfinished
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property canceled (base name: "canceled")', function() {
      // uncomment below and update the code to test the property canceled
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property completeScope (base name: "completeScope")', function() {
      // uncomment below and update the code to test the property completeScope
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property startedBefore (base name: "startedBefore")', function() {
      // uncomment below and update the code to test the property startedBefore
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property startedAfter (base name: "startedAfter")', function() {
      // uncomment below and update the code to test the property startedAfter
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property finishedBefore (base name: "finishedBefore")', function() {
      // uncomment below and update the code to test the property finishedBefore
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property finishedAfter (base name: "finishedAfter")', function() {
      // uncomment below and update the code to test the property finishedAfter
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantIdIn (base name: "tenantIdIn")', function() {
      // uncomment below and update the code to test the property tenantIdIn
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property withoutTenantId (base name: "withoutTenantId")', function() {
      // uncomment below and update the code to test the property withoutTenantId
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property sorting (base name: "sorting")', function() {
      // uncomment below and update the code to test the property sorting
      //var instane = new CamundaBpmRestApi.HistoricActivityInstanceQueryDto();
      //expect(instance).to.be();
    });

  });

}));
