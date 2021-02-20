# ProffixRestApiRequestSammlung.STUApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sTUAbrechnungsartAbrechnungsartNr**](STUApi.md#sTUAbrechnungsartAbrechnungsartNr) | **GET** /STU/Abrechnungsart/1 | STU/Abrechnungsart/{AbrechnungsartNr}
[**sTUGebaeudeartGebaeudeartNr**](STUApi.md#sTUGebaeudeartGebaeudeartNr) | **GET** /STU/Gebaeudeart/1 | STU/Gebaeudeart/{GebaeudeartNr}
[**sTUOffenerRapport**](STUApi.md#sTUOffenerRapport) | **POST** /STU/OffenerRapport | STU/OffenerRapport
[**sTUOffenerRapportRapportNr**](STUApi.md#sTUOffenerRapportRapportNr) | **GET** /STU/OffenerRapport/1 | STU/OffenerRapport/{RapportNr}
[**sTUOffenerRapportRapportNrabschliessen**](STUApi.md#sTUOffenerRapportRapportNrabschliessen) | **POST** /STU/OffenerRapport/1/abschliessen | STU/OffenerRapport/{RapportNr}/abschliessen
[**sTUOffenerRapportRapportNrstarten**](STUApi.md#sTUOffenerRapportRapportNrstarten) | **POST** /STU/OffenerRapport/1/starten | STU/OffenerRapport/{RapportNr}/starten
[**sTUOffenerRapportRapportNrstoppen**](STUApi.md#sTUOffenerRapportRapportNrstoppen) | **POST** /STU/OffenerRapport/1/stoppen | STU/OffenerRapport/{RapportNr}/stoppen
[**sTUPositionsartPositionsartNr**](STUApi.md#sTUPositionsartPositionsartNr) | **GET** /STU/Positionsart/1 | STU/Positionsart/{PositionsartNr}
[**sTUProjektProjektNr**](STUApi.md#sTUProjektProjektNr) | **GET** /STU/Projekt/3 | STU/Projekt/{ProjektNr}
[**sTURapport**](STUApi.md#sTURapport) | **POST** /STU/Rapport | STU/Rapport
[**sTURapportRapportNr**](STUApi.md#sTURapportRapportNr) | **GET** /STU/Rapport/1 | STU/Rapport/{RapportNr}
[**sTURapportabschliessen**](STUApi.md#sTURapportabschliessen) | **POST** /STU/Rapport/abschliessen | STU/Rapport/abschliessen
[**sTURapportdokument**](STUApi.md#sTURapportdokument) | **POST** /STU/Rapportdokument | STU/Rapportdokument
[**sTURapportdokumentRapportdokumentNr**](STUApi.md#sTURapportdokumentRapportdokumentNr) | **GET** /STU/Rapportdokument/1 | STU/Rapportdokument/{RapportdokumentNr}
[**sTURapportfreigeben**](STUApi.md#sTURapportfreigeben) | **POST** /STU/Rapport/freigeben | STU/Rapport/freigeben
[**sTUSpesenartSpesenartNr**](STUApi.md#sTUSpesenartSpesenartNr) | **GET** /STU/Spesenart/1 | STU/Spesenart/{SpesenartNr}
[**sTUStatusartStatusartNr**](STUApi.md#sTUStatusartStatusartNr) | **GET** /STU/Statusart/1 | STU/Statusart/{StatusartNr}
[**sTUTeilleistungTeilleistungNr**](STUApi.md#sTUTeilleistungTeilleistungNr) | **GET** /STU/Teilleistung/1 | STU/Teilleistung/{TeilleistungNr}
[**sTUTeilleistungsgruppeTeilleistungsgruppeNr**](STUApi.md#sTUTeilleistungsgruppeTeilleistungsgruppeNr) | **GET** /STU/Teilleistungsgruppe/1 | STU/Teilleistungsgruppe/{TeilleistungsgruppeNr}
[**sTUTeilleistungstypTeilleistungstypNr**](STUApi.md#sTUTeilleistungstypTeilleistungstypNr) | **GET** /STU/Teilleistungstyp/1 | STU/Teilleistungstyp/{TeilleistungstypNr}
[**sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr**](STUApi.md#sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr) | **GET** /STU/Teilleistungsuntergruppe/1 | STU/Teilleistungsuntergruppe/{TeilleistungsuntergruppeNr}


<a name="sTUAbrechnungsartAbrechnungsartNr"></a>
# **sTUAbrechnungsartAbrechnungsartNr**
> sTUAbrechnungsartAbrechnungsartNr(contentType, pxSessionId)

STU/Abrechnungsart/{AbrechnungsartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUAbrechnungsartAbrechnungsartNr(contentType, pxSessionId).then(function() {
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

<a name="sTUGebaeudeartGebaeudeartNr"></a>
# **sTUGebaeudeartGebaeudeartNr**
> sTUGebaeudeartGebaeudeartNr(contentType, pxSessionId)

STU/Gebaeudeart/{GebaeudeartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUGebaeudeartGebaeudeartNr(contentType, pxSessionId).then(function() {
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

<a name="sTUOffenerRapport"></a>
# **sTUOffenerRapport**
> sTUOffenerRapport(contentType, pxSessionId, body)

STU/OffenerRapport

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.STU1OffenerRapportRequest(); // STU1OffenerRapportRequest | 

apiInstance.sTUOffenerRapport(contentType, pxSessionId, body).then(function() {
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
 **body** | [**STU1OffenerRapportRequest**](STU1OffenerRapportRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sTUOffenerRapportRapportNr"></a>
# **sTUOffenerRapportRapportNr**
> STU1OffenerRapport17BRapportNr7D sTUOffenerRapportRapportNr(depth, contentType, pxSessionId)

STU/OffenerRapport/{RapportNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUOffenerRapportRapportNr(depth, contentType, pxSessionId).then(function(data) {
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

[**STU1OffenerRapport17BRapportNr7D**](STU1OffenerRapport17BRapportNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sTUOffenerRapportRapportNrabschliessen"></a>
# **sTUOffenerRapportRapportNrabschliessen**
> sTUOffenerRapportRapportNrabschliessen(contentType, pxSessionId)

STU/OffenerRapport/{RapportNr}/abschliessen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUOffenerRapportRapportNrabschliessen(contentType, pxSessionId).then(function() {
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

<a name="sTUOffenerRapportRapportNrstarten"></a>
# **sTUOffenerRapportRapportNrstarten**
> sTUOffenerRapportRapportNrstarten(contentType, pxSessionId)

STU/OffenerRapport/{RapportNr}/starten

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUOffenerRapportRapportNrstarten(contentType, pxSessionId).then(function() {
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

<a name="sTUOffenerRapportRapportNrstoppen"></a>
# **sTUOffenerRapportRapportNrstoppen**
> sTUOffenerRapportRapportNrstoppen(contentType, pxSessionId)

STU/OffenerRapport/{RapportNr}/stoppen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUOffenerRapportRapportNrstoppen(contentType, pxSessionId).then(function() {
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

<a name="sTUPositionsartPositionsartNr"></a>
# **sTUPositionsartPositionsartNr**
> STU1Positionsart17BPositionsartNr7D sTUPositionsartPositionsartNr(depth, contentType, pxSessionId)

STU/Positionsart/{PositionsartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUPositionsartPositionsartNr(depth, contentType, pxSessionId).then(function(data) {
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

[**STU1Positionsart17BPositionsartNr7D**](STU1Positionsart17BPositionsartNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sTUProjektProjektNr"></a>
# **sTUProjektProjektNr**
> STU1Projekt17BProjektNr7D sTUProjektProjektNr(depth, contentType, pxSessionId)

STU/Projekt/{ProjektNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUProjektProjektNr(depth, contentType, pxSessionId).then(function(data) {
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

[**STU1Projekt17BProjektNr7D**](STU1Projekt17BProjektNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sTURapport"></a>
# **sTURapport**
> sTURapport(contentType, pxSessionId, body)

STU/Rapport

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.STU1RapportRequest(); // STU1RapportRequest | 

apiInstance.sTURapport(contentType, pxSessionId, body).then(function() {
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
 **body** | [**STU1RapportRequest**](STU1RapportRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sTURapportRapportNr"></a>
# **sTURapportRapportNr**
> STU1Rapport17BRapportNr7D sTURapportRapportNr(depth, contentType, pxSessionId)

STU/Rapport/{RapportNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTURapportRapportNr(depth, contentType, pxSessionId).then(function(data) {
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

[**STU1Rapport17BRapportNr7D**](STU1Rapport17BRapportNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sTURapportabschliessen"></a>
# **sTURapportabschliessen**
> sTURapportabschliessen(contentType, pxSessionId, body)

STU/Rapport/abschliessen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.STU1Rapport1abschliessenRequest(); // STU1Rapport1abschliessenRequest | 

apiInstance.sTURapportabschliessen(contentType, pxSessionId, body).then(function() {
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
 **body** | [**STU1Rapport1abschliessenRequest**](STU1Rapport1abschliessenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sTURapportdokument"></a>
# **sTURapportdokument**
> sTURapportdokument(contentType, pxSessionId, body)

STU/Rapportdokument

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.STU1RapportdokumentRequest(); // STU1RapportdokumentRequest | 

apiInstance.sTURapportdokument(contentType, pxSessionId, body).then(function() {
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
 **body** | [**STU1RapportdokumentRequest**](STU1RapportdokumentRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sTURapportdokumentRapportdokumentNr"></a>
# **sTURapportdokumentRapportdokumentNr**
> sTURapportdokumentRapportdokumentNr(contentType, pxSessionId)

STU/Rapportdokument/{RapportdokumentNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTURapportdokumentRapportdokumentNr(contentType, pxSessionId).then(function() {
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

<a name="sTURapportfreigeben"></a>
# **sTURapportfreigeben**
> sTURapportfreigeben(contentType, pxSessionId, body)

STU/Rapport/freigeben

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.STU1Rapport1freigebenRequest(); // STU1Rapport1freigebenRequest | 

apiInstance.sTURapportfreigeben(contentType, pxSessionId, body).then(function() {
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
 **body** | [**STU1Rapport1freigebenRequest**](STU1Rapport1freigebenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sTUSpesenartSpesenartNr"></a>
# **sTUSpesenartSpesenartNr**
> STU1Spesenart17BSpesenartNr7D sTUSpesenartSpesenartNr(depth, contentType, pxSessionId)

STU/Spesenart/{SpesenartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUSpesenartSpesenartNr(depth, contentType, pxSessionId).then(function(data) {
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

[**STU1Spesenart17BSpesenartNr7D**](STU1Spesenart17BSpesenartNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sTUStatusartStatusartNr"></a>
# **sTUStatusartStatusartNr**
> sTUStatusartStatusartNr(contentType, pxSessionId)

STU/Statusart/{StatusartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUStatusartStatusartNr(contentType, pxSessionId).then(function() {
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

<a name="sTUTeilleistungTeilleistungNr"></a>
# **sTUTeilleistungTeilleistungNr**
> STU1Teilleistung17BTeilleistungNr7D sTUTeilleistungTeilleistungNr(depth, contentType, pxSessionId)

STU/Teilleistung/{TeilleistungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUTeilleistungTeilleistungNr(depth, contentType, pxSessionId).then(function(data) {
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

[**STU1Teilleistung17BTeilleistungNr7D**](STU1Teilleistung17BTeilleistungNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sTUTeilleistungsgruppeTeilleistungsgruppeNr"></a>
# **sTUTeilleistungsgruppeTeilleistungsgruppeNr**
> STU1Teilleistungsgruppe17BTeilleistungsgruppeNr7D sTUTeilleistungsgruppeTeilleistungsgruppeNr(contentType, pxSessionId)

STU/Teilleistungsgruppe/{TeilleistungsgruppeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUTeilleistungsgruppeTeilleistungsgruppeNr(contentType, pxSessionId).then(function(data) {
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

[**STU1Teilleistungsgruppe17BTeilleistungsgruppeNr7D**](STU1Teilleistungsgruppe17BTeilleistungsgruppeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sTUTeilleistungstypTeilleistungstypNr"></a>
# **sTUTeilleistungstypTeilleistungstypNr**
> STU1Teilleistungstyp17BTeilleistungstypNr7D sTUTeilleistungstypTeilleistungstypNr(contentType, pxSessionId)

STU/Teilleistungstyp/{TeilleistungstypNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUTeilleistungstypTeilleistungstypNr(contentType, pxSessionId).then(function(data) {
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

[**STU1Teilleistungstyp17BTeilleistungstypNr7D**](STU1Teilleistungstyp17BTeilleistungstypNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr"></a>
# **sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr**
> sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr(contentType, pxSessionId)

STU/Teilleistungsuntergruppe/{TeilleistungsuntergruppeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.STUApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr(contentType, pxSessionId).then(function() {
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

