# ProffixRestApiRequestSammlung.DEBApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dEBBuchung**](DEBApi.md#dEBBuchung) | **POST** /DEB/Buchung | DEB/Buchung
[**dEBBuchungBuchungNr**](DEBApi.md#dEBBuchungBuchungNr) | **GET** /DEB/Buchung/165 | DEB/Buchung/{BuchungNr}
[**dEBBuchungzahlungerfassen**](DEBApi.md#dEBBuchungzahlungerfassen) | **POST** /DEB/Buchung/zahlungerfassen | DEB/Buchung/zahlungerfassen


<a name="dEBBuchung"></a>
# **dEBBuchung**
> dEBBuchung(contentType, pxSessionId, body)

DEB/Buchung

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.DEBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.DEB1BuchungRequest(); // DEB1BuchungRequest | 

apiInstance.dEBBuchung(contentType, pxSessionId, body).then(function() {
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
 **body** | [**DEB1BuchungRequest**](DEB1BuchungRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dEBBuchungBuchungNr"></a>
# **dEBBuchungBuchungNr**
> DEB1Buchung17BBuchungNr7D dEBBuchungBuchungNr(depth, contentType, pxSessionId)

DEB/Buchung/{BuchungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.DEBApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.dEBBuchungBuchungNr(depth, contentType, pxSessionId).then(function(data) {
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

[**DEB1Buchung17BBuchungNr7D**](DEB1Buchung17BBuchungNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="dEBBuchungzahlungerfassen"></a>
# **dEBBuchungzahlungerfassen**
> dEBBuchungzahlungerfassen(contentType, pxSessionId, body)

DEB/Buchung/zahlungerfassen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.DEBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.DEB1Buchung1zahlungerfassenRequest(); // DEB1Buchung1zahlungerfassenRequest | 

apiInstance.dEBBuchungzahlungerfassen(contentType, pxSessionId, body).then(function() {
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
 **body** | [**DEB1Buchung1zahlungerfassenRequest**](DEB1Buchung1zahlungerfassenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

