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
    instance = new CamundaBpmRestApi.FetchExternalTasksDto();
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

  describe('FetchExternalTasksDto', function() {
    it('should create an instance of FetchExternalTasksDto', function() {
      // uncomment below and update the code to test FetchExternalTasksDto
      //var instance = new CamundaBpmRestApi.FetchExternalTasksDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.FetchExternalTasksDto);
    });

    it('should have the property workerId (base name: "workerId")', function() {
      // uncomment below and update the code to test the property workerId
      //var instane = new CamundaBpmRestApi.FetchExternalTasksDto();
      //expect(instance).to.be();
    });

    it('should have the property maxTasks (base name: "maxTasks")', function() {
      // uncomment below and update the code to test the property maxTasks
      //var instane = new CamundaBpmRestApi.FetchExternalTasksDto();
      //expect(instance).to.be();
    });

    it('should have the property usePriority (base name: "usePriority")', function() {
      // uncomment below and update the code to test the property usePriority
      //var instane = new CamundaBpmRestApi.FetchExternalTasksDto();
      //expect(instance).to.be();
    });

    it('should have the property asyncResponseTimeout (base name: "asyncResponseTimeout")', function() {
      // uncomment below and update the code to test the property asyncResponseTimeout
      //var instane = new CamundaBpmRestApi.FetchExternalTasksDto();
      //expect(instance).to.be();
    });

    it('should have the property topics (base name: "topics")', function() {
      // uncomment below and update the code to test the property topics
      //var instane = new CamundaBpmRestApi.FetchExternalTasksDto();
      //expect(instance).to.be();
    });

  });

}));
