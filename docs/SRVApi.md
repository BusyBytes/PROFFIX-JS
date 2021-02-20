# ProffixRestApiRequestSammlung.SRVApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sRVServiceartServiceartNr**](SRVApi.md#sRVServiceartServiceartNr) | **GET** /SRV/Serviceart/SER | SRV/Serviceart/{ServiceartNr}
[**sRVServiceauftrag**](SRVApi.md#sRVServiceauftrag) | **POST** /SRV/Serviceauftrag | SRV/Serviceauftrag
[**sRVServiceauftragServiceauftragNr**](SRVApi.md#sRVServiceauftragServiceauftragNr) | **GET** /SRV/Serviceauftrag/2 | SRV/Serviceauftrag/{ServiceauftragNr}
[**sRVServiceauftragsdokument**](SRVApi.md#sRVServiceauftragsdokument) | **POST** /SRV/Serviceauftragsdokument | SRV/Serviceauftragsdokument
[**sRVServiceauftragsdokumentServiceauftragsdokumentNr**](SRVApi.md#sRVServiceauftragsdokumentServiceauftragsdokumentNr) | **GET** /SRV/Serviceauftragsdokument/1 | SRV/Serviceauftragsdokument/{ServiceauftragsdokumentNr}
[**sRVStatusStatusNr**](SRVApi.md#sRVStatusStatusNr) | **GET** /SRV/Status/40 | SRV/Status/{StatusNr}


<a name="sRVServiceartServiceartNr"></a>
# **sRVServiceartServiceartNr**
> SRV1Serviceart17BServiceartNr7D sRVServiceartServiceartNr(contentType, pxSessionId)

SRV/Serviceart/{ServiceartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.SRVApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sRVServiceartServiceartNr(contentType, pxSessionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
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

[**SRV1Serviceart17BServiceartNr7D**](SRV1Serviceart17BServiceartNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sRVServiceauftrag"></a>
# **sRVServiceauftrag**
> sRVServiceauftrag(contentType, pxSessionId, body)

SRV/Serviceauftrag

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.SRVApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.SRV1ServiceauftragRequest(); // SRV1ServiceauftragRequest | 

apiInstance.sRVServiceauftrag(contentType, pxSessionId, body).then(function() {
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
 **body** | [**SRV1ServiceauftragRequest**](SRV1ServiceauftragRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sRVServiceauftragServiceauftragNr"></a>
# **sRVServiceauftragServiceauftragNr**
> SRV1Serviceauftrag17BServiceauftragNr7D sRVServiceauftragServiceauftragNr(depth, contentType, pxSessionId)

SRV/Serviceauftrag/{ServiceauftragNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.SRVApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sRVServiceauftragServiceauftragNr(depth, contentType, pxSessionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **depth** | **Number**|  | 
 **contentType** | **String**|  | 
 **pxSessionId** | **String**|  | 

### Return type

[**SRV1Serviceauftrag17BServiceauftragNr7D**](SRV1Serviceauftrag17BServiceauftragNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sRVServiceauftragsdokument"></a>
# **sRVServiceauftragsdokument**
> sRVServiceauftragsdokument(contentType, pxSessionId, body)

SRV/Serviceauftragsdokument

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.SRVApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.SRV1ServiceauftragsdokumentRequest(); // SRV1ServiceauftragsdokumentRequest | 

apiInstance.sRVServiceauftragsdokument(contentType, pxSessionId, body).then(function() {
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
 **body** | [**SRV1ServiceauftragsdokumentRequest**](SRV1ServiceauftragsdokumentRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sRVServiceauftragsdokumentServiceauftragsdokumentNr"></a>
# **sRVServiceauftragsdokumentServiceauftragsdokumentNr**
> sRVServiceauftragsdokumentServiceauftragsdokumentNr(contentType, pxSessionId)

SRV/Serviceauftragsdokument/{ServiceauftragsdokumentNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.SRVApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sRVServiceauftragsdokumentServiceauftragsdokumentNr(contentType, pxSessionId).then(function() {
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

<a name="sRVStatusStatusNr"></a>
# **sRVStatusStatusNr**
> SRV1Status17BStatusNr7D sRVStatusStatusNr(contentType, pxSessionId)

SRV/Status/{StatusNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.SRVApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sRVStatusStatusNr(contentType, pxSessionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
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

[**SRV1Status17BStatusNr7D**](SRV1Status17BStatusNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

