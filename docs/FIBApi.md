# ProffixRestApiRequestSammlung.FIBApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fIBBuchung**](FIBApi.md#fIBBuchung) | **POST** /FIB/Buchung | FIB/Buchung
[**fIBBuchungBuchungNr**](FIBApi.md#fIBBuchungBuchungNr) | **GET** /FIB/Buchung/2892 | FIB/Buchung/{BuchungNr}
[**fIBBuchungsartBuchungsartNr**](FIBApi.md#fIBBuchungsartBuchungsartNr) | **GET** /FIB/Buchungsart/0000 | FIB/Buchungsart/{BuchungsartNr}
[**fIBFibuStammdaten**](FIBApi.md#fIBFibuStammdaten) | **GET** /FIB/FibuStammdaten | FIB/FibuStammdaten
[**fIBKonto**](FIBApi.md#fIBKonto) | **POST** /FIB/Konto | FIB/Konto
[**fIBKontoKontoNr**](FIBApi.md#fIBKontoKontoNr) | **GET** /FIB/Konto/1000 | FIB/Konto/{KontoNr}
[**fIBKontoKontoNrSaldo**](FIBApi.md#fIBKontoKontoNrSaldo) | **GET** /FIB/Konto/1000/Saldo | FIB/Konto/{KontoNr}/Saldo
[**fIBKontoSaldoKontotypKontotypNr**](FIBApi.md#fIBKontoSaldoKontotypKontotypNr) | **GET** /FIB/Konto/Saldo/Kontotyp/1 | FIB/Konto/Saldo/Kontotyp/{KontotypNr}
[**fIBKontoklasseKontoklasseNr**](FIBApi.md#fIBKontoklasseKontoklasseNr) | **GET** /FIB/Kontoklasse/1 | FIB/Kontoklasse/{KontoklasseNr}
[**fIBKostenart**](FIBApi.md#fIBKostenart) | **POST** /FIB/Kostenart | FIB/Kostenart
[**fIBKostenartKostenartNr**](FIBApi.md#fIBKostenartKostenartNr) | **GET** /FIB/Kostenart/KOART | FIB/Kostenart/{KostenartNr}
[**fIBKostenstelle**](FIBApi.md#fIBKostenstelle) | **POST** /FIB/Kostenstelle | FIB/Kostenstelle
[**fIBKostenstelleKostenstelleNr**](FIBApi.md#fIBKostenstelleKostenstelleNr) | **GET** /FIB/Kostenstelle/KOSTE | FIB/Kostenstelle/{KostenstelleNr}
[**fIBKostenstellengruppeKostenstellengruppe**](FIBApi.md#fIBKostenstellengruppeKostenstellengruppe) | **GET** /FIB/Kostenstellengruppe/Test | FIB/Kostenstellengruppe/{Kostenstellengruppe}
[**fIBKostenstellenklasseKostenstellenklasse**](FIBApi.md#fIBKostenstellenklasseKostenstellenklasse) | **GET** /FIB/Kostenstellenklasse/A | FIB/Kostenstellenklasse/{Kostenstellenklasse}
[**fIBKostenstellenuntergruppeKostenstellenuntergruppe**](FIBApi.md#fIBKostenstellenuntergruppeKostenstellenuntergruppe) | **GET** /FIB/Kostenstellenuntergruppe/UGRP | FIB/Kostenstellenuntergruppe/{Kostenstellenuntergruppe}


<a name="fIBBuchung"></a>
# **fIBBuchung**
> fIBBuchung(contentType, pxSessionId, body)

FIB/Buchung

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.FIB1BuchungRequest(); // FIB1BuchungRequest | 

apiInstance.fIBBuchung(contentType, pxSessionId, body).then(function() {
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
 **body** | [**FIB1BuchungRequest**](FIB1BuchungRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fIBBuchungBuchungNr"></a>
# **fIBBuchungBuchungNr**
> FIB1Buchung17BBuchungNr7D fIBBuchungBuchungNr(depth, contentType, pxSessionId)

FIB/Buchung/{BuchungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBBuchungBuchungNr(depth, contentType, pxSessionId).then(function(data) {
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

[**FIB1Buchung17BBuchungNr7D**](FIB1Buchung17BBuchungNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="fIBBuchungsartBuchungsartNr"></a>
# **fIBBuchungsartBuchungsartNr**
> FIB1Buchungsart17BBuchungsartNr7D fIBBuchungsartBuchungsartNr(contentType, pxSessionId)

FIB/Buchungsart/{BuchungsartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBBuchungsartBuchungsartNr(contentType, pxSessionId).then(function(data) {
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

[**FIB1Buchungsart17BBuchungsartNr7D**](FIB1Buchungsart17BBuchungsartNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="fIBFibuStammdaten"></a>
# **fIBFibuStammdaten**
> FIB1FibuStammdaten fIBFibuStammdaten(contentType, pxSessionId)

FIB/FibuStammdaten

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBFibuStammdaten(contentType, pxSessionId).then(function(data) {
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

[**FIB1FibuStammdaten**](FIB1FibuStammdaten.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="fIBKonto"></a>
# **fIBKonto**
> fIBKonto(contentType, pxSessionId, body)

FIB/Konto

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.FIB1KontoRequest(); // FIB1KontoRequest | 

apiInstance.fIBKonto(contentType, pxSessionId, body).then(function() {
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
 **body** | [**FIB1KontoRequest**](FIB1KontoRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fIBKontoKontoNr"></a>
# **fIBKontoKontoNr**
> FIB1Konto17BKontoNr7D fIBKontoKontoNr(depth, contentType, pxSessionId)

FIB/Konto/{KontoNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBKontoKontoNr(depth, contentType, pxSessionId).then(function(data) {
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

[**FIB1Konto17BKontoNr7D**](FIB1Konto17BKontoNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="fIBKontoKontoNrSaldo"></a>
# **fIBKontoKontoNrSaldo**
> FIB1Konto17BKontoNr7D1Saldo fIBKontoKontoNrSaldo(contentType, pxSessionId)

FIB/Konto/{KontoNr}/Saldo

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBKontoKontoNrSaldo(contentType, pxSessionId).then(function(data) {
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

[**FIB1Konto17BKontoNr7D1Saldo**](FIB1Konto17BKontoNr7D1Saldo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="fIBKontoSaldoKontotypKontotypNr"></a>
# **fIBKontoSaldoKontotypKontotypNr**
> [FIB1Konto1Saldo1Kontotyp17BKontotypNr7D] fIBKontoSaldoKontotypKontotypNr(periode, vonDatum, bisDatum, contentType, pxSessionId)

FIB/Konto/Saldo/Kontotyp/{KontotypNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var periode = "periode_example"; // String | 

var vonDatum = "vonDatum_example"; // String | 

var bisDatum = "bisDatum_example"; // String | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBKontoSaldoKontotypKontotypNr(periode, vonDatum, bisDatum, contentType, pxSessionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **periode** | **String**|  | 
 **vonDatum** | **String**|  | 
 **bisDatum** | **String**|  | 
 **contentType** | **String**|  | 
 **pxSessionId** | **String**|  | 

### Return type

[**[FIB1Konto1Saldo1Kontotyp17BKontotypNr7D]**](FIB1Konto1Saldo1Kontotyp17BKontotypNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="fIBKontoklasseKontoklasseNr"></a>
# **fIBKontoklasseKontoklasseNr**
> FIB1Kontoklasse17BKontoklasseNr7D fIBKontoklasseKontoklasseNr(contentType, pxSessionId)

FIB/Kontoklasse/{KontoklasseNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBKontoklasseKontoklasseNr(contentType, pxSessionId).then(function(data) {
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

[**FIB1Kontoklasse17BKontoklasseNr7D**](FIB1Kontoklasse17BKontoklasseNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="fIBKostenart"></a>
# **fIBKostenart**
> fIBKostenart(contentType, pxSessionId, body)

FIB/Kostenart

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.FIB1KostenartRequest(); // FIB1KostenartRequest | 

apiInstance.fIBKostenart(contentType, pxSessionId, body).then(function() {
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
 **body** | [**FIB1KostenartRequest**](FIB1KostenartRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fIBKostenartKostenartNr"></a>
# **fIBKostenartKostenartNr**
> fIBKostenartKostenartNr(contentType, pxSessionId)

FIB/Kostenart/{KostenartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBKostenartKostenartNr(contentType, pxSessionId).then(function() {
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

<a name="fIBKostenstelle"></a>
# **fIBKostenstelle**
> fIBKostenstelle(contentType, pxSessionId, body)

FIB/Kostenstelle

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.FIB1KostenstelleRequest(); // FIB1KostenstelleRequest | 

apiInstance.fIBKostenstelle(contentType, pxSessionId, body).then(function() {
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
 **body** | [**FIB1KostenstelleRequest**](FIB1KostenstelleRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fIBKostenstelleKostenstelleNr"></a>
# **fIBKostenstelleKostenstelleNr**
> fIBKostenstelleKostenstelleNr(contentType, pxSessionId)

FIB/Kostenstelle/{KostenstelleNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBKostenstelleKostenstelleNr(contentType, pxSessionId).then(function() {
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

<a name="fIBKostenstellengruppeKostenstellengruppe"></a>
# **fIBKostenstellengruppeKostenstellengruppe**
> fIBKostenstellengruppeKostenstellengruppe(contentType, pxSessionId)

FIB/Kostenstellengruppe/{Kostenstellengruppe}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBKostenstellengruppeKostenstellengruppe(contentType, pxSessionId).then(function() {
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

<a name="fIBKostenstellenklasseKostenstellenklasse"></a>
# **fIBKostenstellenklasseKostenstellenklasse**
> fIBKostenstellenklasseKostenstellenklasse(contentType, pxSessionId)

FIB/Kostenstellenklasse/{Kostenstellenklasse}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBKostenstellenklasseKostenstellenklasse(contentType, pxSessionId).then(function() {
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

<a name="fIBKostenstellenuntergruppeKostenstellenuntergruppe"></a>
# **fIBKostenstellenuntergruppeKostenstellenuntergruppe**
> fIBKostenstellenuntergruppeKostenstellenuntergruppe(contentType, pxSessionId)

FIB/Kostenstellenuntergruppe/{Kostenstellenuntergruppe}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.FIBApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.fIBKostenstellenuntergruppeKostenstellenuntergruppe(contentType, pxSessionId).then(function() {
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

