# ProffixRestApiRequestSammlung.ADRApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aDRAdressdokument**](ADRApi.md#aDRAdressdokument) | **POST** /ADR/Adressdokument | ADR/Adressdokument
[**aDRAdressdokumentAdressDokumentNr**](ADRApi.md#aDRAdressdokumentAdressDokumentNr) | **GET** /ADR/Adressdokument/1 | ADR/Adressdokument/{AdressDokumentNr}
[**aDRAdresse**](ADRApi.md#aDRAdresse) | **POST** /ADR/Adresse | ADR/Adresse
[**aDRAdresseAdressNr**](ADRApi.md#aDRAdresseAdressNr) | **GET** /ADR/Adresse/1 | ADR/Adresse/{AdressNr}
[**aDRAdressgruppe**](ADRApi.md#aDRAdressgruppe) | **POST** /ADR/Adressgruppe | ADR/Adressgruppe
[**aDRAdressgruppeAdressgruppeNr**](ADRApi.md#aDRAdressgruppeAdressgruppeNr) | **GET** /ADR/Adressgruppe/INTE | ADR/Adressgruppe/{AdressgruppeNr}
[**aDRKommunikation**](ADRApi.md#aDRKommunikation) | **POST** /ADR/Kommunikation | ADR/Kommunikation
[**aDRKommunikationKommunikationNr**](ADRApi.md#aDRKommunikationKommunikationNr) | **GET** /ADR/Kommunikation/1 | ADR/Kommunikation/{KommunikationNr}
[**aDRKontakt**](ADRApi.md#aDRKontakt) | **POST** /ADR/Kontakt | ADR/Kontakt
[**aDRKontaktKontaktNr**](ADRApi.md#aDRKontaktKontaktNr) | **GET** /ADR/Kontakt/2 | ADR/Kontakt/{KontaktNr}
[**aDRKontakttypKontakttypNr**](ADRApi.md#aDRKontakttypKontakttypNr) | **GET** /ADR/Kontakttyp/DIR | ADR/Kontakttyp/{KontakttypNr}
[**aDRNotiz**](ADRApi.md#aDRNotiz) | **POST** /ADR/Notiz | ADR/Notiz
[**aDRNotizNotizNr**](ADRApi.md#aDRNotizNotizNr) | **GET** /ADR/Notiz/1 | ADR/Notiz/{NotizNr}
[**aDRNotizartNotizartNr**](ADRApi.md#aDRNotizartNotizartNr) | **GET** /ADR/Notizart/ALARM | ADR/Notizart/{NotizartNr}
[**aDRZahlungsart**](ADRApi.md#aDRZahlungsart) | **POST** /ADR/Zahlungsart | ADR/Zahlungsart
[**aDRZahlungsartZahlungsartNr**](ADRApi.md#aDRZahlungsartZahlungsartNr) | **GET** /ADR/Zahlungsart/2 | ADR/Zahlungsart/{ZahlungsartNr}


<a name="aDRAdressdokument"></a>
# **aDRAdressdokument**
> aDRAdressdokument(contentType, pxSessionId, body)

ADR/Adressdokument

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.ADR1AdressdokumentRequest(); // ADR1AdressdokumentRequest | 

apiInstance.aDRAdressdokument(contentType, pxSessionId, body).then(function() {
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
 **body** | [**ADR1AdressdokumentRequest**](ADR1AdressdokumentRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aDRAdressdokumentAdressDokumentNr"></a>
# **aDRAdressdokumentAdressDokumentNr**
> aDRAdressdokumentAdressDokumentNr(contentType, pxSessionId)

ADR/Adressdokument/{AdressDokumentNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRAdressdokumentAdressDokumentNr(contentType, pxSessionId).then(function() {
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

<a name="aDRAdresse"></a>
# **aDRAdresse**
> aDRAdresse(contentType, pxSessionId)

ADR/Adresse

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRAdresse(contentType, pxSessionId).then(function() {
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

<a name="aDRAdresseAdressNr"></a>
# **aDRAdresseAdressNr**
> ADR1Adresse17BAdressNr7D aDRAdresseAdressNr(depth, contentType, pxSessionId)

ADR/Adresse/{AdressNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRAdresseAdressNr(depth, contentType, pxSessionId).then(function(data) {
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

[**ADR1Adresse17BAdressNr7D**](ADR1Adresse17BAdressNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aDRAdressgruppe"></a>
# **aDRAdressgruppe**
> aDRAdressgruppe(contentType, pxSessionId, body)

ADR/Adressgruppe

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.ADR1AdressgruppeRequest(); // ADR1AdressgruppeRequest | 

apiInstance.aDRAdressgruppe(contentType, pxSessionId, body).then(function() {
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
 **body** | [**ADR1AdressgruppeRequest**](ADR1AdressgruppeRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aDRAdressgruppeAdressgruppeNr"></a>
# **aDRAdressgruppeAdressgruppeNr**
> ADR1Adressgruppe17BAdressgruppeNr7D aDRAdressgruppeAdressgruppeNr(contentType, pxSessionId)

ADR/Adressgruppe/{AdressgruppeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRAdressgruppeAdressgruppeNr(contentType, pxSessionId).then(function(data) {
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

[**ADR1Adressgruppe17BAdressgruppeNr7D**](ADR1Adressgruppe17BAdressgruppeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aDRKommunikation"></a>
# **aDRKommunikation**
> aDRKommunikation(contentType, pxSessionId, body)

ADR/Kommunikation

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.ADR1KommunikationRequest(); // ADR1KommunikationRequest | 

apiInstance.aDRKommunikation(contentType, pxSessionId, body).then(function() {
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
 **body** | [**ADR1KommunikationRequest**](ADR1KommunikationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aDRKommunikationKommunikationNr"></a>
# **aDRKommunikationKommunikationNr**
> aDRKommunikationKommunikationNr(contentType, pxSessionId)

ADR/Kommunikation/{KommunikationNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRKommunikationKommunikationNr(contentType, pxSessionId).then(function() {
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

<a name="aDRKontakt"></a>
# **aDRKontakt**
> aDRKontakt(contentType, pxSessionId, body)

ADR/Kontakt

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.ADR1KontaktRequest(); // ADR1KontaktRequest | 

apiInstance.aDRKontakt(contentType, pxSessionId, body).then(function() {
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
 **body** | [**ADR1KontaktRequest**](ADR1KontaktRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aDRKontaktKontaktNr"></a>
# **aDRKontaktKontaktNr**
> ADR1Kontakt17BKontaktNr7D aDRKontaktKontaktNr(depth, contentType, pxSessionId)

ADR/Kontakt/{KontaktNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRKontaktKontaktNr(depth, contentType, pxSessionId).then(function(data) {
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

[**ADR1Kontakt17BKontaktNr7D**](ADR1Kontakt17BKontaktNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aDRKontakttypKontakttypNr"></a>
# **aDRKontakttypKontakttypNr**
> ADR1Kontakttyp17BKontakttypNr7D aDRKontakttypKontakttypNr(contentType, pxSessionId)

ADR/Kontakttyp/{KontakttypNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRKontakttypKontakttypNr(contentType, pxSessionId).then(function(data) {
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

[**ADR1Kontakttyp17BKontakttypNr7D**](ADR1Kontakttyp17BKontakttypNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aDRNotiz"></a>
# **aDRNotiz**
> aDRNotiz(contentType, pxSessionId, body)

ADR/Notiz

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.ADR1NotizRequest(); // ADR1NotizRequest | 

apiInstance.aDRNotiz(contentType, pxSessionId, body).then(function() {
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
 **body** | [**ADR1NotizRequest**](ADR1NotizRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aDRNotizNotizNr"></a>
# **aDRNotizNotizNr**
> ADR1Notiz17BNotizNr7D aDRNotizNotizNr(depth, contentType, pxSessionId)

ADR/Notiz/{NotizNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRNotizNotizNr(depth, contentType, pxSessionId).then(function(data) {
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

[**ADR1Notiz17BNotizNr7D**](ADR1Notiz17BNotizNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aDRNotizartNotizartNr"></a>
# **aDRNotizartNotizartNr**
> ADR1Notizart17BNotizartNr7D aDRNotizartNotizartNr(contentType, pxSessionId)

ADR/Notizart/{NotizartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRNotizartNotizartNr(contentType, pxSessionId).then(function(data) {
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

[**ADR1Notizart17BNotizartNr7D**](ADR1Notizart17BNotizartNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aDRZahlungsart"></a>
# **aDRZahlungsart**
> aDRZahlungsart(contentType, pxSessionId, body)

ADR/Zahlungsart

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.ADR1ZahlungsartRequest(); // ADR1ZahlungsartRequest | 

apiInstance.aDRZahlungsart(contentType, pxSessionId, body).then(function() {
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
 **body** | [**ADR1ZahlungsartRequest**](ADR1ZahlungsartRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aDRZahlungsartZahlungsartNr"></a>
# **aDRZahlungsartZahlungsartNr**
> ADR1Zahlungsart17BZahlungsartNr7D aDRZahlungsartZahlungsartNr(depth, contentType, pxSessionId)

ADR/Zahlungsart/{ZahlungsartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.ADRApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aDRZahlungsartZahlungsartNr(depth, contentType, pxSessionId).then(function(data) {
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

[**ADR1Zahlungsart17BZahlungsartNr7D**](ADR1Zahlungsart17BZahlungsartNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

