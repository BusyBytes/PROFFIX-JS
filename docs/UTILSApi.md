# ProffixRestApiRequestSammlung.UTILSApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uTILSTelefonnummerformatieren**](UTILSApi.md#uTILSTelefonnummerformatieren) | **POST** /UTILS/Telefonnummer/formatieren | UTILS/Telefonnummer/formatieren
[**uTILSTextkonvertieren**](UTILSApi.md#uTILSTextkonvertieren) | **POST** /UTILS/Text/konvertieren | UTILS/Text/konvertieren
[**uTILSTransaktionbeginnen**](UTILSApi.md#uTILSTransaktionbeginnen) | **POST** /UTILS/Transaktion/beginnen | UTILS/Transaktion/beginnen
[**uTILSTransaktioncommitten**](UTILSApi.md#uTILSTransaktioncommitten) | **POST** /UTILS/Transaktion/committen | UTILS/Transaktion/committen
[**uTILSTransaktionzurueckrollen**](UTILSApi.md#uTILSTransaktionzurueckrollen) | **POST** /UTILS/Transaktion/zurueckrollen | UTILS/Transaktion/zurueckrollen


<a name="uTILSTelefonnummerformatieren"></a>
# **uTILSTelefonnummerformatieren**
> uTILSTelefonnummerformatieren(contentType, pxSessionId, body)

UTILS/Telefonnummer/formatieren

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.UTILSApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.UTILS1Telefonnummer1formatierenRequest(); // UTILS1Telefonnummer1formatierenRequest | 

apiInstance.uTILSTelefonnummerformatieren(contentType, pxSessionId, body).then(function() {
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
 **body** | [**UTILS1Telefonnummer1formatierenRequest**](UTILS1Telefonnummer1formatierenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uTILSTextkonvertieren"></a>
# **uTILSTextkonvertieren**
> uTILSTextkonvertieren(contentType, pxSessionId, body)

UTILS/Text/konvertieren

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.UTILSApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.UTILS1Text1konvertierenRequest(); // UTILS1Text1konvertierenRequest | 

apiInstance.uTILSTextkonvertieren(contentType, pxSessionId, body).then(function() {
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
 **body** | [**UTILS1Text1konvertierenRequest**](UTILS1Text1konvertierenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uTILSTransaktionbeginnen"></a>
# **uTILSTransaktionbeginnen**
> uTILSTransaktionbeginnen(contentType, pxSessionId)

UTILS/Transaktion/beginnen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.UTILSApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.uTILSTransaktionbeginnen(contentType, pxSessionId).then(function() {
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

<a name="uTILSTransaktioncommitten"></a>
# **uTILSTransaktioncommitten**
> uTILSTransaktioncommitten(contentType, pxSessionId)

UTILS/Transaktion/committen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.UTILSApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.uTILSTransaktioncommitten(contentType, pxSessionId).then(function() {
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

<a name="uTILSTransaktionzurueckrollen"></a>
# **uTILSTransaktionzurueckrollen**
> uTILSTransaktionzurueckrollen(contentType, pxSessionId)

UTILS/Transaktion/zurueckrollen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.UTILSApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.uTILSTransaktionzurueckrollen(contentType, pxSessionId).then(function() {
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

