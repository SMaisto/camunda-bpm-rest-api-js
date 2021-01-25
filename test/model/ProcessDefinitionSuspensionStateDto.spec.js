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
    instance = new CamundaBpmRestApi.ProcessDefinitionSuspensionStateDto();
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

  describe('ProcessDefinitionSuspensionStateDto', function() {
    it('should create an instance of ProcessDefinitionSuspensionStateDto', function() {
      // uncomment below and update the code to test ProcessDefinitionSuspensionStateDto
      //var instance = new CamundaBpmRestApi.ProcessDefinitionSuspensionStateDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.ProcessDefinitionSuspensionStateDto);
    });

    it('should have the property suspended (base name: "suspended")', function() {
      // uncomment below and update the code to test the property suspended
      //var instane = new CamundaBpmRestApi.ProcessDefinitionSuspensionStateDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
      // uncomment below and update the code to test the property processDefinitionId
      //var instane = new CamundaBpmRestApi.ProcessDefinitionSuspensionStateDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionKey (base name: "processDefinitionKey")', function() {
      // uncomment below and update the code to test the property processDefinitionKey
      //var instane = new CamundaBpmRestApi.ProcessDefinitionSuspensionStateDto();
      //expect(instance).to.be();
    });

    it('should have the property includeProcessInstances (base name: "includeProcessInstances")', function() {
      // uncomment below and update the code to test the property includeProcessInstances
      //var instane = new CamundaBpmRestApi.ProcessDefinitionSuspensionStateDto();
      //expect(instance).to.be();
    });

    it('should have the property executionDate (base name: "executionDate")', function() {
      // uncomment below and update the code to test the property executionDate
      //var instane = new CamundaBpmRestApi.ProcessDefinitionSuspensionStateDto();
      //expect(instance).to.be();
    });

  });

}));