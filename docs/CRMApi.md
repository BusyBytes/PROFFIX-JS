# ProffixRestApiRequestSammlung.CRMApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cRMAufgabeAufgabeNr**](CRMApi.md#cRMAufgabeAufgabeNr) | **GET** /CRM/Aufgabe/1 | CRM/Aufgabe/{AufgabeNr}
[**cRMTelefonnummerzuweisung**](CRMApi.md#cRMTelefonnummerzuweisung) | **POST** /CRM/Telefonnummerzuweisung | CRM/Telefonnummerzuweisung
[**cRMTelefonnummerzuweisungTelefonNr**](CRMApi.md#cRMTelefonnummerzuweisungTelefonNr) | **GET** /CRM/Telefonnummerzuweisung/+41 (079) 1231212 | CRM/Telefonnummerzuweisung/{TelefonNr}


<a name="cRMAufgabeAufgabeNr"></a>
# **cRMAufgabeAufgabeNr**
> CRM1Aufgabe17BAufgabeNr7D cRMAufgabeAufgabeNr(contentType, pxSessionId)

CRM/Aufgabe/{AufgabeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.CRMApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.cRMAufgabeAufgabeNr(contentType, pxSessionId).then(function(data) {
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

[**CRM1Aufgabe17BAufgabeNr7D**](CRM1Aufgabe17BAufgabeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="cRMTelefonnummerzuweisung"></a>
# **cRMTelefonnummerzuweisung**
> cRMTelefonnummerzuweisung(contentType, pxSessionId, body)

CRM/Telefonnummerzuweisung

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.CRMApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.CRM1TelefonnummerzuweisungRequest(); // CRM1TelefonnummerzuweisungRequest | 

apiInstance.cRMTelefonnummerzuweisung(contentType, pxSessionId, body).then(function() {
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
 **body** | [**CRM1TelefonnummerzuweisungRequest**](CRM1TelefonnummerzuweisungRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cRMTelefonnummerzuweisungTelefonNr"></a>
# **cRMTelefonnummerzuweisungTelefonNr**
> cRMTelefonnummerzuweisungTelefonNr(contentType, pxSessionId)

CRM/Telefonnummerzuweisung/{TelefonNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.CRMApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.cRMTelefonnummerzuweisungTelefonNr(contentType, pxSessionId).then(function() {
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

