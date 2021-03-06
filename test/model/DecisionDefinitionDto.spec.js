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
    instance = new CamundaBpmRestApi.DecisionDefinitionDto();
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

  describe('DecisionDefinitionDto', function() {
    it('should create an instance of DecisionDefinitionDto', function() {
      // uncomment below and update the code to test DecisionDefinitionDto
      //var instance = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.DecisionDefinitionDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property resource (base name: "resource")', function() {
      // uncomment below and update the code to test the property resource
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property deploymentId (base name: "deploymentId")', function() {
      // uncomment below and update the code to test the property deploymentId
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property decisionRequirementsDefinitionId (base name: "decisionRequirementsDefinitionId")', function() {
      // uncomment below and update the code to test the property decisionRequirementsDefinitionId
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property decisionRequirementsDefinitionKey (base name: "decisionRequirementsDefinitionKey")', function() {
      // uncomment below and update the code to test the property decisionRequirementsDefinitionKey
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property historyTimeToLive (base name: "historyTimeToLive")', function() {
      // uncomment below and update the code to test the property historyTimeToLive
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

    it('should have the property versionTag (base name: "versionTag")', function() {
      // uncomment below and update the code to test the property versionTag
      //var instane = new CamundaBpmRestApi.DecisionDefinitionDto();
      //expect(instance).to.be();
    });

  });

}));
