# CamundaBpmRestApi.ConditionApi

All URIs are relative to *http://4ri9ay89dso72uq4.myfritz.net/camunda:80/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**evaluateCondition**](ConditionApi.md#evaluateCondition) | **POST** /condition | 



## evaluateCondition

> [ProcessInstanceDto] evaluateCondition(opts)



Triggers evaluation of conditions for conditional start event(s).  Internally this maps to the engines condition evaluation builder method ConditionEvaluationBuilder#evaluateStartConditions().  For more information see the [Conditional Start Events](https://docs.camunda.org/manual/7.14/reference/bpmn20/events/conditional-events/#conditional-start-event) section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ConditionApi();
let opts = {
  'evaluationConditionDto': {"variables":{"temperature":{"value":24,"type":"Integer","valueInfo":{"transient":true}},"city":{"value":"Parma","type":"String"}},"businessKey":"aBusinessKey","tenantId":"aTenantId"} // EvaluationConditionDto | 
};
apiInstance.evaluateCondition(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evaluationConditionDto** | [**EvaluationConditionDto**](EvaluationConditionDto.md)|  | [optional] 

### Return type

[**[ProcessInstanceDto]**](ProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

