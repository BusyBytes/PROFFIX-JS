# ProffixRestApiRequestSammlung.AUFApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aUFDokument**](AUFApi.md#aUFDokument) | **POST** /AUF/Dokument | AUF/Dokument
[**aUFDokumentDokumentNr**](AUFApi.md#aUFDokumentDokumentNr) | **GET** /AUF/Dokument/100018 | AUF/Dokument/{DokumentNr}
[**aUFDokumentDokumentNrentsperren**](AUFApi.md#aUFDokumentDokumentNrentsperren) | **POST** /AUF/Dokument/1/entsperren | AUF/Dokument/{DokumentNr}/entsperren
[**aUFDokumentDokumentNrstatusentfernen**](AUFApi.md#aUFDokumentDokumentNrstatusentfernen) | **POST** /AUF/Dokument/1/statusentfernen | AUF/Dokument/{DokumentNr}/statusentfernen
[**aUFDokumentDokumentNrteilrechnungerstellen**](AUFApi.md#aUFDokumentDokumentNrteilrechnungerstellen) | **POST** /AUF/Dokument/100018/teilrechnungerstellen | AUF/Dokument/{DokumentNr}/teilrechnungerstellen
[**aUFDokumentDokumentNrumwandeln**](AUFApi.md#aUFDokumentDokumentNrumwandeln) | **POST** /AUF/Dokument/100037/umwandeln | AUF/Dokument/{DokumentNr}/umwandeln
[**aUFDokumentstatusDokumentstatusNr**](AUFApi.md#aUFDokumentstatusDokumentstatusNr) | **GET** /AUF/Dokumentstatus/A | AUF/Dokumentstatus/{DokumentstatusNr}
[**aUFDokumenttypDokumenttypNr**](AUFApi.md#aUFDokumenttypDokumenttypNr) | **GET** /AUF/Dokumenttyp/TR | AUF/Dokumenttyp/{DokumenttypNr}
[**aUFDokumentverknuepfungDokumentverknuepfungNr**](AUFApi.md#aUFDokumentverknuepfungDokumentverknuepfungNr) | **GET** /AUF/Dokumentverknuepfung/1 | AUF/Dokumentverknuepfung/{DokumentverknuepfungNr}
[**aUFESRNummerESRNr**](AUFApi.md#aUFESRNummerESRNr) | **GET** /AUF/ESRNummer/1 | AUF/ESRNummer/{ESRNr}
[**aUFGutschein**](AUFApi.md#aUFGutschein) | **POST** /AUF/Gutschein | AUF/Gutschein
[**aUFGutscheinGutscheinNr**](AUFApi.md#aUFGutscheinGutscheinNr) | **GET** /AUF/Gutschein/KRUDT-3ISTL-VGTH7 | AUF/Gutschein/{GutscheinNr}
[**aUFGutscheingutscheinnrgenerieren**](AUFApi.md#aUFGutscheingutscheinnrgenerieren) | **POST** /AUF/Gutschein/gutscheinnrgenerieren | AUF/Gutschein/gutscheinnrgenerieren
[**aUFOccasionsobjektOccasionsobjektNr**](AUFApi.md#aUFOccasionsobjektOccasionsobjektNr) | **GET** /AUF/Occasionsobjekt/3 | AUF/Occasionsobjekt/{OccasionsobjektNr}
[**aUFTextTextNr**](AUFApi.md#aUFTextTextNr) | **GET** /AUF/Text/T | AUF/Text/{TextNr}
[**aUFZuschlagZuschlagNr**](AUFApi.md#aUFZuschlagZuschlagNr) | **GET** /AUF/Zuschlag/1 | AUF/Zuschlag/{ZuschlagNr}


<a name="aUFDokument"></a>
# **aUFDokument**
> aUFDokument(contentType, pxSessionId, body)

AUF/Dokument

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.AUF1DokumentRequest(); // AUF1DokumentRequest | 

apiInstance.aUFDokument(contentType, pxSessionId, body).then(function() {
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
 **body** | [**AUF1DokumentRequest**](AUF1DokumentRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aUFDokumentDokumentNr"></a>
# **aUFDokumentDokumentNr**
> AUF1Dokument17BDokumentNr7D aUFDokumentDokumentNr(depth, contentType, pxSessionId)

AUF/Dokument/{DokumentNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFDokumentDokumentNr(depth, contentType, pxSessionId).then(function(data) {
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

[**AUF1Dokument17BDokumentNr7D**](AUF1Dokument17BDokumentNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aUFDokumentDokumentNrentsperren"></a>
# **aUFDokumentDokumentNrentsperren**
> aUFDokumentDokumentNrentsperren(contentType, pxSessionId, body)

AUF/Dokument/{DokumentNr}/entsperren

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.AUF1Dokument17BDokumentNr7D1entsperrenRequest(); // AUF1Dokument17BDokumentNr7D1entsperrenRequest | 

apiInstance.aUFDokumentDokumentNrentsperren(contentType, pxSessionId, body).then(function() {
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
 **body** | [**AUF1Dokument17BDokumentNr7D1entsperrenRequest**](AUF1Dokument17BDokumentNr7D1entsperrenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aUFDokumentDokumentNrstatusentfernen"></a>
# **aUFDokumentDokumentNrstatusentfernen**
> aUFDokumentDokumentNrstatusentfernen(contentType, pxSessionId, body)

AUF/Dokument/{DokumentNr}/statusentfernen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.AUF1Dokument17BDokumentNr7D1statusentfernenRequest(); // AUF1Dokument17BDokumentNr7D1statusentfernenRequest | 

apiInstance.aUFDokumentDokumentNrstatusentfernen(contentType, pxSessionId, body).then(function() {
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
 **body** | [**AUF1Dokument17BDokumentNr7D1statusentfernenRequest**](AUF1Dokument17BDokumentNr7D1statusentfernenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aUFDokumentDokumentNrteilrechnungerstellen"></a>
# **aUFDokumentDokumentNrteilrechnungerstellen**
> aUFDokumentDokumentNrteilrechnungerstellen(contentType, pxSessionId, body)

AUF/Dokument/{DokumentNr}/teilrechnungerstellen

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.AUF1Dokument17BDokumentNr7D1teilrechnungerstellenRequest(); // AUF1Dokument17BDokumentNr7D1teilrechnungerstellenRequest | 

apiInstance.aUFDokumentDokumentNrteilrechnungerstellen(contentType, pxSessionId, body).then(function() {
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
 **body** | [**AUF1Dokument17BDokumentNr7D1teilrechnungerstellenRequest**](AUF1Dokument17BDokumentNr7D1teilrechnungerstellenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aUFDokumentDokumentNrumwandeln"></a>
# **aUFDokumentDokumentNrumwandeln**
> aUFDokumentDokumentNrumwandeln(contentType, pxSessionId, body)

AUF/Dokument/{DokumentNr}/umwandeln

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.AUF1Dokument17BDokumentNr7D1umwandelnRequest(); // AUF1Dokument17BDokumentNr7D1umwandelnRequest | 

apiInstance.aUFDokumentDokumentNrumwandeln(contentType, pxSessionId, body).then(function() {
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
 **body** | [**AUF1Dokument17BDokumentNr7D1umwandelnRequest**](AUF1Dokument17BDokumentNr7D1umwandelnRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aUFDokumentstatusDokumentstatusNr"></a>
# **aUFDokumentstatusDokumentstatusNr**
> AUF1Dokumentstatus17BDokumentstatusNr7D aUFDokumentstatusDokumentstatusNr(contentType, pxSessionId)

AUF/Dokumentstatus/{DokumentstatusNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFDokumentstatusDokumentstatusNr(contentType, pxSessionId).then(function(data) {
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

[**AUF1Dokumentstatus17BDokumentstatusNr7D**](AUF1Dokumentstatus17BDokumentstatusNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aUFDokumenttypDokumenttypNr"></a>
# **aUFDokumenttypDokumenttypNr**
> AUF1Dokumenttyp17BDokumenttypNr7D aUFDokumenttypDokumenttypNr(contentType, pxSessionId)

AUF/Dokumenttyp/{DokumenttypNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFDokumenttypDokumenttypNr(contentType, pxSessionId).then(function(data) {
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

[**AUF1Dokumenttyp17BDokumenttypNr7D**](AUF1Dokumenttyp17BDokumenttypNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aUFDokumentverknuepfungDokumentverknuepfungNr"></a>
# **aUFDokumentverknuepfungDokumentverknuepfungNr**
> aUFDokumentverknuepfungDokumentverknuepfungNr(contentType, pxSessionId)

AUF/Dokumentverknuepfung/{DokumentverknuepfungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFDokumentverknuepfungDokumentverknuepfungNr(contentType, pxSessionId).then(function() {
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

<a name="aUFESRNummerESRNr"></a>
# **aUFESRNummerESRNr**
> AUF1ESRNummer17BESRNr7D aUFESRNummerESRNr(contentType, pxSessionId)

AUF/ESRNummer/{ESRNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFESRNummerESRNr(contentType, pxSessionId).then(function(data) {
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

[**AUF1ESRNummer17BESRNr7D**](AUF1ESRNummer17BESRNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aUFGutschein"></a>
# **aUFGutschein**
> aUFGutschein(contentType, pxSessionId, body)

AUF/Gutschein

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.AUF1GutscheinRequest(); // AUF1GutscheinRequest | 

apiInstance.aUFGutschein(contentType, pxSessionId, body).then(function() {
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
 **body** | [**AUF1GutscheinRequest**](AUF1GutscheinRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aUFGutscheinGutscheinNr"></a>
# **aUFGutscheinGutscheinNr**
> AUF1Gutschein17BGutscheinNr7D aUFGutscheinGutscheinNr(depth, contentType, pxSessionId)

AUF/Gutschein/{GutscheinNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFGutscheinGutscheinNr(depth, contentType, pxSessionId).then(function(data) {
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

[**AUF1Gutschein17BGutscheinNr7D**](AUF1Gutschein17BGutscheinNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aUFGutscheingutscheinnrgenerieren"></a>
# **aUFGutscheingutscheinnrgenerieren**
> AUF1Gutschein1gutscheinnrgenerieren aUFGutscheingutscheinnrgenerieren(contentType, pxSessionId)

AUF/Gutschein/gutscheinnrgenerieren

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFGutscheingutscheinnrgenerieren(contentType, pxSessionId).then(function(data) {
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

[**AUF1Gutschein1gutscheinnrgenerieren**](AUF1Gutschein1gutscheinnrgenerieren.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="aUFOccasionsobjektOccasionsobjektNr"></a>
# **aUFOccasionsobjektOccasionsobjektNr**
> AUF1Occasionsobjekt17BOccasionsobjektNr7D aUFOccasionsobjektOccasionsobjektNr(depth, contentType, pxSessionId)

AUF/Occasionsobjekt/{OccasionsobjektNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFOccasionsobjektOccasionsobjektNr(depth, contentType, pxSessionId).then(function(data) {
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

[**AUF1Occasionsobjekt17BOccasionsobjektNr7D**](AUF1Occasionsobjekt17BOccasionsobjektNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="aUFTextTextNr"></a>
# **aUFTextTextNr**
> aUFTextTextNr(contentType, pxSessionId)

AUF/Text/{TextNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFTextTextNr(contentType, pxSessionId).then(function() {
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

<a name="aUFZuschlagZuschlagNr"></a>
# **aUFZuschlagZuschlagNr**
> AUF1Zuschlag17BZuschlagNr7D aUFZuschlagZuschlagNr(contentType, pxSessionId)

AUF/Zuschlag/{ZuschlagNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.AUFApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.aUFZuschlagZuschlagNr(contentType, pxSessionId).then(function(data) {
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

[**AUF1Zuschlag17BZuschlagNr7D**](AUF1Zuschlag17BZuschlagNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

