# ProffixRestApiRequestSammlung.EINApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eINBestelltypBestelltypNr**](EINApi.md#eINBestelltypBestelltypNr) | **GET** /EIN/Bestelltyp/EINGANG | EIN/Bestelltyp/{BestelltypNr}
[**eINBestellungBestellungNr**](EINApi.md#eINBestellungBestellungNr) | **GET** /EIN/Bestellung/50031 | EIN/Bestellung/{BestellungNr}
[**eINBestellungBestellungNrPositionBestellpositionNrStatus**](EINApi.md#eINBestellungBestellungNrPositionBestellpositionNrStatus) | **GET** /EIN/Bestellung/50035/Position/64/Status | EIN/Bestellung/{BestellungNr}/Position/{BestellpositionNr}/Status
[**eINWareneingangslisteWareneingangslisteNr**](EINApi.md#eINWareneingangslisteWareneingangslisteNr) | **GET** /EIN/Wareneingangsliste/20130205 | EIN/Wareneingangsliste/{WareneingangslisteNr}
[**putEINBestellungBestellungNrPositionBestellpositionNrStatus**](EINApi.md#putEINBestellungBestellungNrPositionBestellpositionNrStatus) | **PUT** /EIN/Bestellung/50035/Position/64/Status | EIN/Bestellung/{BestellungNr}/Position/{BestellpositionNr}/Status


<a name="eINBestelltypBestelltypNr"></a>
# **eINBestelltypBestelltypNr**
> BestelltypabfragenCopy eINBestelltypBestelltypNr(contentType, pxSessionId)

EIN/Bestelltyp/{BestelltypNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.EINApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.eINBestelltypBestelltypNr(contentType, pxSessionId).then(function(data) {
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

[**BestelltypabfragenCopy**](BestelltypabfragenCopy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="eINBestellungBestellungNr"></a>
# **eINBestellungBestellungNr**
> EIN1Bestellung17BBestellungNr7D eINBestellungBestellungNr(depth, contentType, pxSessionId)

EIN/Bestellung/{BestellungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.EINApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.eINBestellungBestellungNr(depth, contentType, pxSessionId).then(function(data) {
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

[**EIN1Bestellung17BBestellungNr7D**](EIN1Bestellung17BBestellungNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="eINBestellungBestellungNrPositionBestellpositionNrStatus"></a>
# **eINBestellungBestellungNrPositionBestellpositionNrStatus**
> EIN1Bestellung17BBestellungNr7D1Position17BBestellpositionNr7D1Status eINBestellungBestellungNrPositionBestellpositionNrStatus(contentType, pxSessionId)

EIN/Bestellung/{BestellungNr}/Position/{BestellpositionNr}/Status

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.EINApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.eINBestellungBestellungNrPositionBestellpositionNrStatus(contentType, pxSessionId).then(function(data) {
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

[**EIN1Bestellung17BBestellungNr7D1Position17BBestellpositionNr7D1Status**](EIN1Bestellung17BBestellungNr7D1Position17BBestellpositionNr7D1Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eINWareneingangslisteWareneingangslisteNr"></a>
# **eINWareneingangslisteWareneingangslisteNr**
> EIN1Wareneingangsliste17BWareneingangslisteNr7D eINWareneingangslisteWareneingangslisteNr(contentType, pxSessionId)

EIN/Wareneingangsliste/{WareneingangslisteNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.EINApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.eINWareneingangslisteWareneingangslisteNr(contentType, pxSessionId).then(function(data) {
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

[**EIN1Wareneingangsliste17BWareneingangslisteNr7D**](EIN1Wareneingangsliste17BWareneingangslisteNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="putEINBestellungBestellungNrPositionBestellpositionNrStatus"></a>
# **putEINBestellungBestellungNrPositionBestellpositionNrStatus**
> putEINBestellungBestellungNrPositionBestellpositionNrStatus(contentType, pxSessionId, body)

EIN/Bestellung/{BestellungNr}/Position/{BestellpositionNr}/Status

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.EINApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.EIN1Bestellung17BBestellungNr7D1Position17BBestellpositionNr7D1StatusRequest(); // EIN1Bestellung17BBestellungNr7D1Position17BBestellpositionNr7D1StatusRequest | 

apiInstance.putEINBestellungBestellungNrPositionBestellpositionNrStatus(contentType, pxSessionId, body).then(function() {
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
 **body** | [**EIN1Bestellung17BBestellungNr7D1Position17BBestellpositionNr7D1StatusRequest**](EIN1Bestellung17BBestellungNr7D1Position17BBestellpositionNr7D1StatusRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

