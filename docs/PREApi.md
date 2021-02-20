# ProffixRestApiRequestSammlung.PREApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pREAssortierung**](PREApi.md#pREAssortierung) | **GET** /PRE/Assortierung | PRE/Assortierung
[**pREAssortierungAssortierungNr**](PREApi.md#pREAssortierungAssortierungNr) | **GET** /PRE/Assortierung/1 | PRE/Assortierung/{AssortierungNr}
[**pREPreisberechnungsformel**](PREApi.md#pREPreisberechnungsformel) | **GET** /PRE/Preistyp | PRE/Preisberechnungsformel
[**pREPreisberechnungsformelPreisberechnungsformelNr**](PREApi.md#pREPreisberechnungsformelPreisberechnungsformelNr) | **GET** /PRE/Preisberechnungsformel/1 | PRE/Preisberechnungsformel/{PreisberechnungsformelNr}
[**pREPreisstaffel**](PREApi.md#pREPreisstaffel) | **GET** /PRE/Preisstaffel | PRE/Preisstaffel
[**pREPreisstaffelPreisstaffelNr**](PREApi.md#pREPreisstaffelPreisstaffelNr) | **GET** /PRE/Preisstaffel/11.15.1.CPU1 | PRE/Preisstaffel/{PreisstaffelNr}


<a name="pREAssortierung"></a>
# **pREAssortierung**
> pREAssortierung(contentType, pxSessionId)

PRE/Assortierung

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PREApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pREAssortierung(contentType, pxSessionId).then(function() {
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

<a name="pREAssortierungAssortierungNr"></a>
# **pREAssortierungAssortierungNr**
> pREAssortierungAssortierungNr(contentType, pxSessionId)

PRE/Assortierung/{AssortierungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PREApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pREAssortierungAssortierungNr(contentType, pxSessionId).then(function() {
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

<a name="pREPreisberechnungsformel"></a>
# **pREPreisberechnungsformel**
> pREPreisberechnungsformel(contentType, pxSessionId)

PRE/Preisberechnungsformel

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PREApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pREPreisberechnungsformel(contentType, pxSessionId).then(function() {
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

<a name="pREPreisberechnungsformelPreisberechnungsformelNr"></a>
# **pREPreisberechnungsformelPreisberechnungsformelNr**
> pREPreisberechnungsformelPreisberechnungsformelNr(contentType, pxSessionId)

PRE/Preisberechnungsformel/{PreisberechnungsformelNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PREApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pREPreisberechnungsformelPreisberechnungsformelNr(contentType, pxSessionId).then(function() {
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

<a name="pREPreisstaffel"></a>
# **pREPreisstaffel**
> pREPreisstaffel(contentType, pxSessionId)

PRE/Preisstaffel

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PREApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pREPreisstaffel(contentType, pxSessionId).then(function() {
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

<a name="pREPreisstaffelPreisstaffelNr"></a>
# **pREPreisstaffelPreisstaffelNr**
> pREPreisstaffelPreisstaffelNr(contentType, pxSessionId)

PRE/Preisstaffel/{PreisstaffelNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PREApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pREPreisstaffelPreisstaffelNr(contentType, pxSessionId).then(function() {
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

