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
    instance = new CamundaBpmRestApi.ProcessDefinitionDiagramDto();
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

  describe('ProcessDefinitionDiagramDto', function() {
    it('should create an instance of ProcessDefinitionDiagramDto', function() {
      // uncomment below and update the code to test ProcessDefinitionDiagramDto
      //var instance = new CamundaBpmRestApi.ProcessDefinitionDiagramDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.ProcessDefinitionDiagramDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CamundaBpmRestApi.ProcessDefinitionDiagramDto();
      //expect(instance).to.be();
    });

    it('should have the property bpmn20Xml (base name: "bpmn20Xml")', function() {
      // uncomment below and update the code to test the property bpmn20Xml
      //var instane = new CamundaBpmRestApi.ProcessDefinitionDiagramDto();
      //expect(instance).to.be();
    });

  });

}));
