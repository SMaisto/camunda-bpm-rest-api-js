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

// CommonJS-like environments that support module.exports, like Node.
factory(require('expect.js'), require(process.cwd()+'/src/index'));

'use strict';

var instance;

beforeEach(function() {
  instance = new CamundaBpmRestApi.HistoricActivityInstanceApi();
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

describe('HistoricActivityInstanceApi', function() {
    describe('getHistoricActivityInstance', function() {
      it('should call getHistoricActivityInstance successfully', function(done) {
        //uncomment below and update the code to test getHistoricActivityInstance
        //instance.getHistoricActivityInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHistoricActivityInstances', function() {
      it('should call getHistoricActivityInstances successfully', function(done) {
        //uncomment below and update the code to test getHistoricActivityInstances
        //instance.getHistoricActivityInstances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHistoricActivityInstancesCount', function() {
      it('should call getHistoricActivityInstancesCount successfully', function(done) {
        //uncomment below and update the code to test getHistoricActivityInstancesCount
        //instance.getHistoricActivityInstancesCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryHistoricActivityInstances', function() {
      it('should call queryHistoricActivityInstances successfully', function(done) {
        //uncomment below and update the code to test queryHistoricActivityInstances
        //instance.queryHistoricActivityInstances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryHistoricActivityInstancesCount', function() {
      it('should call queryHistoricActivityInstancesCount successfully', function(done) {
        //uncomment below and update the code to test queryHistoricActivityInstancesCount
        //instance.queryHistoricActivityInstancesCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
});