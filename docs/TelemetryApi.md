# CamundaBpmRestApi.TelemetryApi

All URIs are relative to *http://4ri9ay89dso72uq4.myfritz.net/camunda:80/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configureTelemetry**](TelemetryApi.md#configureTelemetry) | **POST** /telemetry/configuration | Configure Telemetry
[**getTelemetryConfiguration**](TelemetryApi.md#getTelemetryConfiguration) | **GET** /telemetry/configuration | Fetch Telemetry Configuration



## configureTelemetry

> configureTelemetry(opts)

Configure Telemetry

Configures whether Camunda receives data collection of the process engine setup and usage.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TelemetryApi();
let opts = {
  'telemetryConfigurationDto': {"enableTelemetry":true} // TelemetryConfigurationDto | 
};
apiInstance.configureTelemetry(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telemetryConfigurationDto** | [**TelemetryConfigurationDto**](TelemetryConfigurationDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTelemetryConfiguration

> TelemetryConfigurationDto getTelemetryConfiguration()

Fetch Telemetry Configuration

Fetches Telemetry Configuration.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TelemetryApi();
apiInstance.getTelemetryConfiguration((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TelemetryConfigurationDto**](TelemetryConfigurationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

