# ProffixRestApiRequestSammlung.KREApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**kREBuchung**](KREApi.md#kREBuchung) | **POST** /KRE/Buchung | KRE/Buchung
[**kREBuchungBuchungNr**](KREApi.md#kREBuchungBuchungNr) | **GET** /KRE/Buchung/165 | KRE/Buchung/{BuchungNr}


<a name="kREBuchung"></a>
# **kREBuchung**
> kREBuchung(contentType, pxSessionId, body)

KRE/Buchung

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.KREApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.KRE1BuchungRequest(); // KRE1BuchungRequest | 

apiInstance.kREBuchung(contentType, pxSessionId, body).then(function() {
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
 **body** | [**KRE1BuchungRequest**](KRE1BuchungRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="kREBuchungBuchungNr"></a>
# **kREBuchungBuchungNr**
> KRE1Buchung17BBuchungNr7D kREBuchungBuchungNr(depth, contentType, pxSessionId)

KRE/Buchung/{BuchungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.KREApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.kREBuchungBuchungNr(depth, contentType, pxSessionId).then(function(data) {
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

[**KRE1Buchung17BBuchungNr7D**](KRE1Buchung17BBuchungNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

