# ProffixRestApiRequestSammlung.ZEIApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**putZEIStundenStundenNr**](ZEIApi.md#putZEIStundenStundenNr) | **PUT** /ZEI/Stunden/1796 | ZEI/Stunden/{StundenNr}
[**zEIStempel**](ZEIApi.md#zEIStempel) | **GET** /ZEI/Stempel | ZEI/Stempel
[**zEIStempelstarten**](ZEIApi.md#zEIStempelstarten) | **POST** /ZEI/Stempel/starten | ZEI/Stempel/starten
[**zEIStempelstoppen**](ZEIApi.md#zEIStempelstoppen) | **POST** /ZEI/Stempel/stoppen | ZEI/Stempel/stoppen
[**zEIStundenPeriodePeriodeNrabrechnen**](ZEIApi.md#zEIStundenPeriodePeriodeNrabrechnen) | **POST** /ZEI/Stunden/Periode/201702/abrechnen | ZEI/Stunden/Periode/{PeriodeNr}/abrechnen
[**zEIStundenStundenNr**](ZEIApi.md#zEIStundenStundenNr) | **GET** /ZEI/Stunden/308 | ZEI/Stunden/{StundenNr}
[**zEIStundeninfo**](ZEIApi.md#zEIStundeninfo) | **GET** /ZEI/Stundeninfo | ZEI/Stundeninfo
[**zEIStundensperre**](ZEIApi.md#zEIStundensperre) | **GET** /ZEI/Stundensperre | ZEI/Stundensperre
[**zEIStundenzeitraumerfassen**](ZEIApi.md#zEIStundenzeitraumerfassen) | **POST** /ZEI/Stunden/zeitraumerfassen | ZEI/Stunden/zeitraumerfassen


<a name="putZEIStundenStundenNr"></a>
# **putZEIStundenStundenNr**
> putZEIStundenStundenNr(contentType, pxSessionId)

ZEI/Stunden/{StundenNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ZEIApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.putZEIStundenStundenNr(contentType, pxSessionId).then(function() {
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

<a name="zEIStempel"></a>
# **zEIStempel**
> ZEI1Stempel zEIStempel(contentType, pxSessionId)

ZEI/Stempel

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ZEIApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.zEIStempel(contentType, pxSessionId).then(function(data) {
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

[**ZEI1Stempel**](ZEI1Stempel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="zEIStempelstarten"></a>
# **zEIStempelstarten**
> zEIStempelstarten(contentType, pxSessionId)

ZEI/Stempel/starten

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ZEIApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.zEIStempelstarten(contentType, pxSessionId).then(function() {
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

<a name="zEIStempelstoppen"></a>
# **zEIStempelstoppen**
> zEIStempelstoppen(contentType, pxSessionId)

ZEI/Stempel/stoppen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ZEIApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.zEIStempelstoppen(contentType, pxSessionId).then(function() {
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

<a name="zEIStundenPeriodePeriodeNrabrechnen"></a>
# **zEIStundenPeriodePeriodeNrabrechnen**
> zEIStundenPeriodePeriodeNrabrechnen(contentType, pxSessionId)

ZEI/Stunden/Periode/{PeriodeNr}/abrechnen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ZEIApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.zEIStundenPeriodePeriodeNrabrechnen(contentType, pxSessionId).then(function() {
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

<a name="zEIStundenStundenNr"></a>
# **zEIStundenStundenNr**
> ZEI1Stunden17BStundenNr7D zEIStundenStundenNr(depth, contentType, pxSessionId)

ZEI/Stunden/{StundenNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ZEIApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.zEIStundenStundenNr(depth, contentType, pxSessionId).then(function(data) {
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

[**ZEI1Stunden17BStundenNr7D**](ZEI1Stunden17BStundenNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="zEIStundeninfo"></a>
# **zEIStundeninfo**
> ZEI1Stundeninfo zEIStundeninfo(contentType, pxSessionId)

ZEI/Stundeninfo

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ZEIApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.zEIStundeninfo(contentType, pxSessionId).then(function(data) {
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

[**ZEI1Stundeninfo**](ZEI1Stundeninfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="zEIStundensperre"></a>
# **zEIStundensperre**
> ZEI1Stundensperre zEIStundensperre(contentType, pxSessionId)

ZEI/Stundensperre

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ZEIApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.zEIStundensperre(contentType, pxSessionId).then(function(data) {
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

[**ZEI1Stundensperre**](ZEI1Stundensperre.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="zEIStundenzeitraumerfassen"></a>
# **zEIStundenzeitraumerfassen**
> zEIStundenzeitraumerfassen(stundenart, startdatum, enddatum, contentType, pxSessionId)

ZEI/Stunden/zeitraumerfassen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ZEIApi();

var stundenart = "stundenart_example"; // String | 

var startdatum = "startdatum_example"; // String | 

var enddatum = "enddatum_example"; // String | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.zEIStundenzeitraumerfassen(stundenart, startdatum, enddatum, contentType, pxSessionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stundenart** | **String**|  | 
 **startdatum** | **String**|  | 
 **enddatum** | **String**|  | 
 **contentType** | **String**|  | 
 **pxSessionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

