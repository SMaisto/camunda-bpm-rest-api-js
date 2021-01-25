# CamundaBpmRestApi.VersionApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRestAPIVersion**](VersionApi.md#getRestAPIVersion) | **GET** /version | 



## getRestAPIVersion

> VersionDto getRestAPIVersion()



Retrieves the version of the Rest API.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.VersionApi();
apiInstance.getRestAPIVersion((error, data, response) => {
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

[**VersionDto**](VersionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

