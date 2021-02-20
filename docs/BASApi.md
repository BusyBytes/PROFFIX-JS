# ProffixRestApiRequestSammlung.BASApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bASAnlageAnlageNr**](BASApi.md#bASAnlageAnlageNr) | **GET** /BAS/Anlage/1 | BAS/Anlage/{AnlageNr}
[**bASGarantiezusatzGarantiezusatzNr**](BASApi.md#bASGarantiezusatzGarantiezusatzNr) | **GET** /BAS/Garantiezusatz/1 | BAS/Garantiezusatz/{GarantiezusatzNr}
[**bASInstallationInstallationNr**](BASApi.md#bASInstallationInstallationNr) | **GET** /BAS/Installation/1 | BAS/Installation/{InstallationNr}
[**bASKundeKundeNr**](BASApi.md#bASKundeKundeNr) | **GET** /BAS/Kunde/1 | BAS/Kunde/{KundeNr}
[**bASPrioritaetPrioritaetNr**](BASApi.md#bASPrioritaetPrioritaetNr) | **GET** /BAS/Prioritaet/1 | BAS/Prioritaet/{PrioritaetNr}
[**bASStandortStandortNr**](BASApi.md#bASStandortStandortNr) | **GET** /BAS/Standort/1 | BAS/Standort/{StandortNr}
[**bASVertragstypVertragstypNr**](BASApi.md#bASVertragstypVertragstypNr) | **GET** /BAS/Vertragstyp/SIM | BAS/Vertragstyp/{VertragstypNr}


<a name="bASAnlageAnlageNr"></a>
# **bASAnlageAnlageNr**
> BAS1Anlage17BAnlageNr7D bASAnlageAnlageNr(contentType, pxSessionId)

BAS/Anlage/{AnlageNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.BASApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.bASAnlageAnlageNr(contentType, pxSessionId).then(function(data) {
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

[**BAS1Anlage17BAnlageNr7D**](BAS1Anlage17BAnlageNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="bASGarantiezusatzGarantiezusatzNr"></a>
# **bASGarantiezusatzGarantiezusatzNr**
> BAS1Garantiezusatz17BGarantiezusatzNr7D bASGarantiezusatzGarantiezusatzNr(contentType, pxSessionId)

BAS/Garantiezusatz/{GarantiezusatzNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.BASApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.bASGarantiezusatzGarantiezusatzNr(contentType, pxSessionId).then(function(data) {
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

[**BAS1Garantiezusatz17BGarantiezusatzNr7D**](BAS1Garantiezusatz17BGarantiezusatzNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="bASInstallationInstallationNr"></a>
# **bASInstallationInstallationNr**
> BAS1Installation17BInstallationNr7D bASInstallationInstallationNr(depth, contentType, pxSessionId)

BAS/Installation/{InstallationNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.BASApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.bASInstallationInstallationNr(depth, contentType, pxSessionId).then(function(data) {
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

[**BAS1Installation17BInstallationNr7D**](BAS1Installation17BInstallationNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="bASKundeKundeNr"></a>
# **bASKundeKundeNr**
> BAS1Kunde17BKundeNr7D bASKundeKundeNr(depth, contentType, pxSessionId)

BAS/Kunde/{KundeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.BASApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.bASKundeKundeNr(depth, contentType, pxSessionId).then(function(data) {
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

[**BAS1Kunde17BKundeNr7D**](BAS1Kunde17BKundeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="bASPrioritaetPrioritaetNr"></a>
# **bASPrioritaetPrioritaetNr**
> BAS1Prioritaet17BPrioritaetNr7D bASPrioritaetPrioritaetNr(contentType, pxSessionId)

BAS/Prioritaet/{PrioritaetNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.BASApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.bASPrioritaetPrioritaetNr(contentType, pxSessionId).then(function(data) {
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

[**BAS1Prioritaet17BPrioritaetNr7D**](BAS1Prioritaet17BPrioritaetNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="bASStandortStandortNr"></a>
# **bASStandortStandortNr**
> BAS1Standort17BStandortNr7D bASStandortStandortNr(depth, contentType, pxSessionId)

BAS/Standort/{StandortNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.BASApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.bASStandortStandortNr(depth, contentType, pxSessionId).then(function(data) {
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

[**BAS1Standort17BStandortNr7D**](BAS1Standort17BStandortNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="bASVertragstypVertragstypNr"></a>
# **bASVertragstypVertragstypNr**
> BAS1Vertragstyp17BVertragstypNr7D bASVertragstypVertragstypNr(contentType, pxSessionId)

BAS/Vertragstyp/{VertragstypNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.BASApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.bASVertragstypVertragstypNr(contentType, pxSessionId).then(function(data) {
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

[**BAS1Vertragstyp17BVertragstypNr7D**](BAS1Vertragstyp17BVertragstypNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

