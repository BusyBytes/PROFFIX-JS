# ProffixRestApiRequestSammlung.EDOApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eDOSSCCNummerSSCCNummerNr**](EDOApi.md#eDOSSCCNummerSSCCNummerNr) | **GET** /EDO/SSCCNummer/1 | EDO/SSCCNummer/{SSCCNummerNr}


<a name="eDOSSCCNummerSSCCNummerNr"></a>
# **eDOSSCCNummerSSCCNummerNr**
> eDOSSCCNummerSSCCNummerNr(contentType, pxSessionId)

EDO/SSCCNummer/{SSCCNummerNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.EDOApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.eDOSSCCNummerSSCCNummerNr(contentType, pxSessionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **pxSessionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

