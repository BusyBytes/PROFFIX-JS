# ProffixRestApiRequestSammlung.PROApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pROAuftrag**](PROApi.md#pROAuftrag) | **POST** /PRO/Auftrag | PRO/Auftrag
[**pROAuftragAuftragNr**](PROApi.md#pROAuftragAuftragNr) | **GET** /PRO/Auftrag/1 | PRO/Auftrag/{AuftragNr}
[**pROBankBankNr**](PROApi.md#pROBankBankNr) | **GET** /PRO/Bank/1 | PRO/Bank/{BankNr}
[**pROBelegartBelegartNr**](PROApi.md#pROBelegartBelegartNr) | **GET** /PRO/Belegart/AB | PRO/Belegart/{BelegartNr}
[**pROBenutzereinstellung**](PROApi.md#pROBenutzereinstellung) | **POST** /PRO/Benutzereinstellung | PRO/Benutzereinstellung
[**pROBenutzereinstellungBenutzereinstellungNr**](PROApi.md#pROBenutzereinstellungBenutzereinstellungNr) | **GET** /PRO/Benutzereinstellung/Test | PRO/Benutzereinstellung/{BenutzereinstellungNr}
[**pROBenutzergruppeBenutzergruppeNr**](PROApi.md#pROBenutzergruppeBenutzergruppeNr) | **GET** /PRO/Benutzergruppe/ADMIN | PRO/Benutzergruppe/{BenutzergruppeNr}
[**pROBerechtigung**](PROApi.md#pROBerechtigung) | **POST** /PRO/Berechtigung | PRO/Berechtigung
[**pROBerechtigungBerechtigungNr**](PROApi.md#pROBerechtigungBerechtigungNr) | **GET** /PRO/Berechtigung/5885 | PRO/Berechtigung/{BerechtigungNr}
[**pROBriefanredeBriefanredeNr**](PROApi.md#pROBriefanredeBriefanredeNr) | **GET** /PRO/Briefanrede/1 | PRO/Briefanrede/{BriefanredeNr}
[**pROBuchungstext**](PROApi.md#pROBuchungstext) | **GET** /PRO/Buchungstext | PRO/Buchungstext
[**pRODatei**](PROApi.md#pRODatei) | **POST** /PRO/Datei | PRO/Datei
[**pRODateiDateiNr**](PROApi.md#pRODateiDateiNr) | **GET** /PRO/Datei/nsDznl0xSe4O9JXzDHA-Z_yQA3WWNivrjo2SyJL4yTpky1sZuTHjftyedVi_pO1F5ZlThroG0fMxxZOg_KgOWwLh31jnvfpjykU19-m_GzE | PRO/Datei/{DateiNr}
[**pRODatenbankkeyPassword**](PROApi.md#pRODatenbankkeyPassword) | **GET** /PRO/Datenbank | PRO/Datenbank?key&#x3D;{Password}
[**pRODruckerDruckerNr**](PROApi.md#pRODruckerDruckerNr) | **GET** /PRO/Drucker/e16c568058e994d7a0bb27219e48e11e8b87d0c5dd79e7d8805b9ffd6f0ef649 | PRO/Drucker/{DruckerNr}
[**pROEinheitEinheitNr**](PROApi.md#pROEinheitEinheitNr) | **GET** /PRO/Einheit/STK | PRO/Einheit/{EinheitNr}
[**pROEinheitsmatrixEinheitLager**](PROApi.md#pROEinheitsmatrixEinheitLager) | **GET** /PRO/Einheitsmatrix/STK | PRO/Einheitsmatrix/{EinheitLager}
[**pROEinheitsmatrixEinheitLagerEinheitRechnung**](PROApi.md#pROEinheitsmatrixEinheitLagerEinheitRechnung) | **GET** /PRO/Einheitsmatrix/STK/M2 | PRO/Einheitsmatrix/{EinheitLager}/{EinheitRechnung}
[**pROEinstellungModulSection**](PROApi.md#pROEinstellungModulSection) | **GET** /PRO/Einstellung/PXSTUNDEN/DefRapportMobile | PRO/Einstellung/{Modul}/{Section}
[**pROFeiertagFeiertagNr**](PROApi.md#pROFeiertagFeiertagNr) | **GET** /PRO/Feiertag/1 | PRO/Feiertag/{FeiertagNr}
[**pROFelddefinition**](PROApi.md#pROFelddefinition) | **GET** / | PRO/Felddefinition
[**pROFelddefinitionTabellennameFeldname**](PROApi.md#pROFelddefinitionTabellennameFeldname) | **GET** /PRO/Felddefinition/ADR_AdressDef/AuftErtrag | PRO/Felddefinition/{Tabellenname}/{Feldname}
[**pROFunktionFunktionNr**](PROApi.md#pROFunktionFunktionNr) | **GET** /PRO/Funktion/1 | PRO/Funktion/{FunktionNr}
[**pROInfo**](PROApi.md#pROInfo) | **GET** /PRO/Info | PRO/Info
[**pROKonditionKonditionNr**](PROApi.md#pROKonditionKonditionNr) | **GET** /PRO/Kondition/1 | PRO/Kondition/{KonditionNr}
[**pROLandLandNr**](PROApi.md#pROLandLandNr) | **GET** /PRO/Land/CH | PRO/Land/{LandNr}
[**pROLieferartLieferartNr**](PROApi.md#pROLieferartLieferartNr) | **GET** /PRO/Lieferart/Kurier | PRO/Lieferart/{LieferartNr}
[**pROListeListeNr**](PROApi.md#pROListeListeNr) | **GET** /PRO/Liste/2376 | PRO/Liste/{ListeNr}
[**pROListeListeNrDokumentDokumentNrzugferdgenerieren**](PROApi.md#pROListeListeNrDokumentDokumentNrzugferdgenerieren) | **POST** /PRO/Liste/13030/Dokument/600028/zugferdgenerieren | PRO/Liste/{ListeNr}/Dokument/{DokumentNr}/zugferdgenerieren
[**pROListeListeNrDruckerDruckerNr**](PROApi.md#pROListeListeNrDruckerDruckerNr) | **POST** /PRO/Liste/12869/Drucker/e16c568058e994d7a0bb27219e48e11e8b87d0c5dd79e7d8805b9ffd6f0ef649/drucken | PRO/Liste/{ListeNr}/Drucker/{DruckerNr}
[**pROListeListeNrgenerieren**](PROApi.md#pROListeListeNrgenerieren) | **POST** /PRO/Liste/2376/generieren | PRO/Liste/{ListeNr}/generieren
[**pROLogin**](PROApi.md#pROLogin) | **POST** /PRO/Login | PRO/Login
[**pROMitarbeiter**](PROApi.md#pROMitarbeiter) | **POST** /PRO/Mitarbeiter | PRO/Mitarbeiter
[**pROMitarbeiterMitarbeiterNr**](PROApi.md#pROMitarbeiterMitarbeiterNr) | **GET** /PRO/Mitarbeiter/1 | PRO/Mitarbeiter/{MitarbeiterNr}
[**pROMitarbeiterMitarbeiterNrBenutzer**](PROApi.md#pROMitarbeiterMitarbeiterNrBenutzer) | **POST** /PRO/Mitarbeiter/1/Benutzer | PRO/Mitarbeiter/{MitarbeiterNr}/Benutzer
[**pRORahmenvertragRahmenvertragNr**](PROApi.md#pRORahmenvertragRahmenvertragNr) | **GET** /PRO/Rahmenvertrag/1 | PRO/Rahmenvertrag/{RahmenvertragNr}
[**pRORechtModul**](PROApi.md#pRORechtModul) | **GET** /PRO/Recht/PXRESOURCE | PRO/Recht/{Modul}
[**pRORechtModulForm**](PROApi.md#pRORechtModulForm) | **GET** /PRO/Recht/PXRESOURCE/FRMHAUPT | PRO/Recht/{Modul}/{Form}
[**pRORechtModulFormMenu**](PROApi.md#pRORechtModulFormMenu) | **GET** /PRO/Recht/PXRESOURCE/FRMHAUPT/KALENDER | PRO/Recht/{Modul}/{Form}/{Menu}
[**pRORegionRegionNr**](PROApi.md#pRORegionRegionNr) | **GET** /PRO/Region/SG | PRO/Region/{RegionNr}
[**pROSollstundenplanHistorySollstundenplanHistoryNr**](PROApi.md#pROSollstundenplanHistorySollstundenplanHistoryNr) | **GET** /PRO/SollstundenplanHistory/1 | PRO/SollstundenplanHistory/{SollstundenplanHistoryNr}
[**pROSollstundenplanSollstundenplanNr**](PROApi.md#pROSollstundenplanSollstundenplanNr) | **GET** /PRO/Sollstundenplan/1 | PRO/Sollstundenplan/{SollstundenplanNr}
[**pROSpracheSpracheNr**](PROApi.md#pROSpracheSpracheNr) | **GET** /PRO/Sprache/D | PRO/Sprache/{SpracheNr}
[**pROStammdaten**](PROApi.md#pROStammdaten) | **GET** /PRO/Stammdaten | PRO/Stammdaten
[**pROSteuercodeSteuercodeNr**](PROApi.md#pROSteuercodeSteuercodeNr) | **GET** /PRO/Steuercode/1 | PRO/Steuercode/{SteuercodeNr}
[**pROVertreterVertreterNr**](PROApi.md#pROVertreterVertreterNr) | **GET** /PRO/Vertreter/FV | PRO/Vertreter/{VertreterNr}
[**pROWaehrungStandard**](PROApi.md#pROWaehrungStandard) | **GET** /PRO/Waehrung/Standard | PRO/Waehrung/Standard
[**pROWaehrungWaehrungNr**](PROApi.md#pROWaehrungWaehrungNr) | **GET** /PRO/Waehrung/CHF | PRO/Waehrung/{WaehrungNr}
[**pROWaehrungkurseaktualisieren**](PROApi.md#pROWaehrungkurseaktualisieren) | **POST** /PRO/Waehrung/kurseaktualisieren | PRO/Waehrung/kurseaktualisieren
[**pROZusatztabelleZusatztabellenname**](PROApi.md#pROZusatztabelleZusatztabellenname) | **GET** /PRO/Zusatztabelle/ZUS_DVD_Sammlung | PRO/Zusatztabelle/{Zusatztabellenname}
[**pROZusatztabelleZusatztabellennameSchlssel**](PROApi.md#pROZusatztabelleZusatztabellennameSchlssel) | **GET** /PRO/Zusatztabelle/ZUS_DVD_Sammlung/1 | PRO/Zusatztabelle/{Zusatztabellenname}/{Schlüssel}
[**postPROZusatztabelleZusatztabellenname**](PROApi.md#postPROZusatztabelleZusatztabellenname) | **POST** /PRO/Zusatztabelle/ZUS_DVD_Sammlung/1 | PRO/Zusatztabelle/{Zusatztabellenname}


<a name="pROAuftrag"></a>
# **pROAuftrag**
> pROAuftrag(contentType, pxSessionId, body)

PRO/Auftrag

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.PRO1AuftragRequest(); // PRO1AuftragRequest | 

apiInstance.pROAuftrag(contentType, pxSessionId, body).then(function() {
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
 **body** | [**PRO1AuftragRequest**](PRO1AuftragRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pROAuftragAuftragNr"></a>
# **pROAuftragAuftragNr**
> PRO1Auftrag17BAuftragNr7D pROAuftragAuftragNr(depth, contentType, pxSessionId)

PRO/Auftrag/{AuftragNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROAuftragAuftragNr(depth, contentType, pxSessionId).then(function(data) {
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

[**PRO1Auftrag17BAuftragNr7D**](PRO1Auftrag17BAuftragNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROBankBankNr"></a>
# **pROBankBankNr**
> PRO1Bank17BBankNr7D pROBankBankNr(depth, contentType, pxSessionId)

PRO/Bank/{BankNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROBankBankNr(depth, contentType, pxSessionId).then(function(data) {
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

[**PRO1Bank17BBankNr7D**](PRO1Bank17BBankNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROBelegartBelegartNr"></a>
# **pROBelegartBelegartNr**
> PRO1Belegart17BBelegartNr7D pROBelegartBelegartNr(contentType, pxSessionId)

PRO/Belegart/{BelegartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROBelegartBelegartNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Belegart17BBelegartNr7D**](PRO1Belegart17BBelegartNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROBenutzereinstellung"></a>
# **pROBenutzereinstellung**
> pROBenutzereinstellung(contentType, pxSessionId, body)

PRO/Benutzereinstellung

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.PRO1BenutzereinstellungRequest(); // PRO1BenutzereinstellungRequest | 

apiInstance.pROBenutzereinstellung(contentType, pxSessionId, body).then(function() {
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
 **body** | [**PRO1BenutzereinstellungRequest**](PRO1BenutzereinstellungRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pROBenutzereinstellungBenutzereinstellungNr"></a>
# **pROBenutzereinstellungBenutzereinstellungNr**
> PRO1Benutzereinstellung17BBenutzereinstellungNr7D pROBenutzereinstellungBenutzereinstellungNr(contentType, pxSessionId)

PRO/Benutzereinstellung/{BenutzereinstellungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROBenutzereinstellungBenutzereinstellungNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Benutzereinstellung17BBenutzereinstellungNr7D**](PRO1Benutzereinstellung17BBenutzereinstellungNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROBenutzergruppeBenutzergruppeNr"></a>
# **pROBenutzergruppeBenutzergruppeNr**
> PRO1Benutzergruppe17BBenutzergruppeNr7D pROBenutzergruppeBenutzergruppeNr(contentType, pxSessionId)

PRO/Benutzergruppe/{BenutzergruppeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROBenutzergruppeBenutzergruppeNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Benutzergruppe17BBenutzergruppeNr7D**](PRO1Benutzergruppe17BBenutzergruppeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROBerechtigung"></a>
# **pROBerechtigung**
> pROBerechtigung(contentType, pxSessionId, body)

PRO/Berechtigung

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.PRO1BerechtigungRequest(); // PRO1BerechtigungRequest | 

apiInstance.pROBerechtigung(contentType, pxSessionId, body).then(function() {
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
 **body** | [**PRO1BerechtigungRequest**](PRO1BerechtigungRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pROBerechtigungBerechtigungNr"></a>
# **pROBerechtigungBerechtigungNr**
> pROBerechtigungBerechtigungNr(contentType, pxSessionId)

PRO/Berechtigung/{BerechtigungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROBerechtigungBerechtigungNr(contentType, pxSessionId).then(function() {
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

<a name="pROBriefanredeBriefanredeNr"></a>
# **pROBriefanredeBriefanredeNr**
> pROBriefanredeBriefanredeNr(contentType, pxSessionId)

PRO/Briefanrede/{BriefanredeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROBriefanredeBriefanredeNr(contentType, pxSessionId).then(function() {
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

<a name="pROBuchungstext"></a>
# **pROBuchungstext**
> [PRO1Buchungstext] pROBuchungstext(contentType, pxSessionId)

PRO/Buchungstext

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROBuchungstext(contentType, pxSessionId).then(function(data) {
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

[**[PRO1Buchungstext]**](PRO1Buchungstext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pRODatei"></a>
# **pRODatei**
> pRODatei(contentType, pxSessionId, file)

PRO/Datei

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var file = "/path/to/file.txt"; // File | 

apiInstance.pRODatei(contentType, pxSessionId, file).then(function() {
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
 **file** | **File**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="pRODateiDateiNr"></a>
# **pRODateiDateiNr**
> pRODateiDateiNr(contentType, pxSessionId)

PRO/Datei/{DateiNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pRODateiDateiNr(contentType, pxSessionId).then(function() {
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

<a name="pRODatenbankkeyPassword"></a>
# **pRODatenbankkeyPassword**
> [PRO1Datenbank3Fkey3D7BPassword7D] pRODatenbankkeyPassword(key, contentType, pxSessionId)

PRO/Datenbank?key&#x3D;{Password}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var key = "key_example"; // String | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pRODatenbankkeyPassword(key, contentType, pxSessionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**|  | 
 **contentType** | **String**|  | 
 **pxSessionId** | **String**|  | 

### Return type

[**[PRO1Datenbank3Fkey3D7BPassword7D]**](PRO1Datenbank3Fkey3D7BPassword7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pRODruckerDruckerNr"></a>
# **pRODruckerDruckerNr**
> pRODruckerDruckerNr(contentType, pxSessionId)

PRO/Drucker/{DruckerNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pRODruckerDruckerNr(contentType, pxSessionId).then(function() {
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

<a name="pROEinheitEinheitNr"></a>
# **pROEinheitEinheitNr**
> PRO1Einheit17BEinheitNr7D pROEinheitEinheitNr(contentType, pxSessionId)

PRO/Einheit/{EinheitNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROEinheitEinheitNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Einheit17BEinheitNr7D**](PRO1Einheit17BEinheitNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROEinheitsmatrixEinheitLager"></a>
# **pROEinheitsmatrixEinheitLager**
> [PRO1Einheitsmatrix17BEinheitLager7D] pROEinheitsmatrixEinheitLager(depth, contentType, pxSessionId)

PRO/Einheitsmatrix/{EinheitLager}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROEinheitsmatrixEinheitLager(depth, contentType, pxSessionId).then(function(data) {
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

[**[PRO1Einheitsmatrix17BEinheitLager7D]**](PRO1Einheitsmatrix17BEinheitLager7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROEinheitsmatrixEinheitLagerEinheitRechnung"></a>
# **pROEinheitsmatrixEinheitLagerEinheitRechnung**
> PRO1Einheitsmatrix17BEinheitLager7D17BEinheitRechnung7D pROEinheitsmatrixEinheitLagerEinheitRechnung(contentType, pxSessionId)

PRO/Einheitsmatrix/{EinheitLager}/{EinheitRechnung}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROEinheitsmatrixEinheitLagerEinheitRechnung(contentType, pxSessionId).then(function(data) {
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

[**PRO1Einheitsmatrix17BEinheitLager7D17BEinheitRechnung7D**](PRO1Einheitsmatrix17BEinheitLager7D17BEinheitRechnung7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROEinstellungModulSection"></a>
# **pROEinstellungModulSection**
> PRO1Einstellung17BModul7D17BSection7D pROEinstellungModulSection(contentType, pxSessionId)

PRO/Einstellung/{Modul}/{Section}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROEinstellungModulSection(contentType, pxSessionId).then(function(data) {
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

[**PRO1Einstellung17BModul7D17BSection7D**](PRO1Einstellung17BModul7D17BSection7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROFeiertagFeiertagNr"></a>
# **pROFeiertagFeiertagNr**
> pROFeiertagFeiertagNr(contentType, pxSessionId)

PRO/Feiertag/{FeiertagNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROFeiertagFeiertagNr(contentType, pxSessionId).then(function() {
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

<a name="pROFelddefinition"></a>
# **pROFelddefinition**
> pROFelddefinition()

PRO/Felddefinition

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();
apiInstance.pROFelddefinition().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pROFelddefinitionTabellennameFeldname"></a>
# **pROFelddefinitionTabellennameFeldname**
> PRO1Felddefinition17BTabellenname7D17BFeldname7D pROFelddefinitionTabellennameFeldname(contentType, pxSessionId)

PRO/Felddefinition/{Tabellenname}/{Feldname}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROFelddefinitionTabellennameFeldname(contentType, pxSessionId).then(function(data) {
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

[**PRO1Felddefinition17BTabellenname7D17BFeldname7D**](PRO1Felddefinition17BTabellenname7D17BFeldname7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROFunktionFunktionNr"></a>
# **pROFunktionFunktionNr**
> PRO1Funktion17BFunktionNr7D pROFunktionFunktionNr(contentType, pxSessionId)

PRO/Funktion/{FunktionNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROFunktionFunktionNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Funktion17BFunktionNr7D**](PRO1Funktion17BFunktionNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROInfo"></a>
# **pROInfo**
> pROInfo(key, contentType, pxSessionId)

PRO/Info

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var key = "key_example"; // String | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROInfo(key, contentType, pxSessionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**|  | 
 **contentType** | **String**|  | 
 **pxSessionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pROKonditionKonditionNr"></a>
# **pROKonditionKonditionNr**
> PRO1Kondition17BKonditionNr7D pROKonditionKonditionNr(contentType, pxSessionId)

PRO/Kondition/{KonditionNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROKonditionKonditionNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Kondition17BKonditionNr7D**](PRO1Kondition17BKonditionNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROLandLandNr"></a>
# **pROLandLandNr**
> PRO1Land17BLandNr7D pROLandLandNr(depth, contentType, pxSessionId)

PRO/Land/{LandNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROLandLandNr(depth, contentType, pxSessionId).then(function(data) {
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

[**PRO1Land17BLandNr7D**](PRO1Land17BLandNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROLieferartLieferartNr"></a>
# **pROLieferartLieferartNr**
> PRO1Lieferart17BLieferartNr7D pROLieferartLieferartNr(contentType, pxSessionId)

PRO/Lieferart/{LieferartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROLieferartLieferartNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Lieferart17BLieferartNr7D**](PRO1Lieferart17BLieferartNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROListeListeNr"></a>
# **pROListeListeNr**
> PRO1Liste17BListeNr7D pROListeListeNr(contentType, pxSessionId)

PRO/Liste/{ListeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROListeListeNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Liste17BListeNr7D**](PRO1Liste17BListeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROListeListeNrDokumentDokumentNrzugferdgenerieren"></a>
# **pROListeListeNrDokumentDokumentNrzugferdgenerieren**
> pROListeListeNrDokumentDokumentNrzugferdgenerieren(contentType, pxSessionId)

PRO/Liste/{ListeNr}/Dokument/{DokumentNr}/zugferdgenerieren

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROListeListeNrDokumentDokumentNrzugferdgenerieren(contentType, pxSessionId).then(function() {
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

<a name="pROListeListeNrDruckerDruckerNr"></a>
# **pROListeListeNrDruckerDruckerNr**
> pROListeListeNrDruckerDruckerNr(contentType, pxSessionId, body)

PRO/Liste/{ListeNr}/Drucker/{DruckerNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.PRO1Liste17BListeNr7D1Drucker17BDruckerNr7DRequest(); // PRO1Liste17BListeNr7D1Drucker17BDruckerNr7DRequest | 

apiInstance.pROListeListeNrDruckerDruckerNr(contentType, pxSessionId, body).then(function() {
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
 **body** | [**PRO1Liste17BListeNr7D1Drucker17BDruckerNr7DRequest**](PRO1Liste17BListeNr7D1Drucker17BDruckerNr7DRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pROListeListeNrgenerieren"></a>
# **pROListeListeNrgenerieren**
> pROListeListeNrgenerieren(contentType, pxSessionId, body)

PRO/Liste/{ListeNr}/generieren

als Body mindestens ein leeres JSON Object senden &#x3D; {}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.PRO1Liste17BListeNr7D1generierenRequest(); // PRO1Liste17BListeNr7D1generierenRequest | 

apiInstance.pROListeListeNrgenerieren(contentType, pxSessionId, body).then(function() {
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
 **body** | [**PRO1Liste17BListeNr7D1generierenRequest**](PRO1Liste17BListeNr7D1generierenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pROLogin"></a>
# **pROLogin**
> pROLogin(contentType, pxSessionId, body)

PRO/Login

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.PRO1LoginRequest(); // PRO1LoginRequest | 

apiInstance.pROLogin(contentType, pxSessionId, body).then(function() {
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
 **body** | [**PRO1LoginRequest**](PRO1LoginRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pROMitarbeiter"></a>
# **pROMitarbeiter**
> pROMitarbeiter(contentType, pxSessionId, body)

PRO/Mitarbeiter

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.PRO1MitarbeiterRequest(); // PRO1MitarbeiterRequest | 

apiInstance.pROMitarbeiter(contentType, pxSessionId, body).then(function() {
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
 **body** | [**PRO1MitarbeiterRequest**](PRO1MitarbeiterRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pROMitarbeiterMitarbeiterNr"></a>
# **pROMitarbeiterMitarbeiterNr**
> PRO1Mitarbeiter17BMitarbeiterNr7D pROMitarbeiterMitarbeiterNr(depth, contentType, pxSessionId)

PRO/Mitarbeiter/{MitarbeiterNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROMitarbeiterMitarbeiterNr(depth, contentType, pxSessionId).then(function(data) {
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

[**PRO1Mitarbeiter17BMitarbeiterNr7D**](PRO1Mitarbeiter17BMitarbeiterNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROMitarbeiterMitarbeiterNrBenutzer"></a>
# **pROMitarbeiterMitarbeiterNrBenutzer**
> pROMitarbeiterMitarbeiterNrBenutzer(contentType, pxSessionId, body)

PRO/Mitarbeiter/{MitarbeiterNr}/Benutzer

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.PRO1Mitarbeiter17BMitarbeiterNr7D1BenutzerRequest(); // PRO1Mitarbeiter17BMitarbeiterNr7D1BenutzerRequest | 

apiInstance.pROMitarbeiterMitarbeiterNrBenutzer(contentType, pxSessionId, body).then(function() {
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
 **body** | [**PRO1Mitarbeiter17BMitarbeiterNr7D1BenutzerRequest**](PRO1Mitarbeiter17BMitarbeiterNr7D1BenutzerRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pRORahmenvertragRahmenvertragNr"></a>
# **pRORahmenvertragRahmenvertragNr**
> PRO1Rahmenvertrag17BRahmenvertragNr7D pRORahmenvertragRahmenvertragNr(contentType, pxSessionId)

PRO/Rahmenvertrag/{RahmenvertragNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pRORahmenvertragRahmenvertragNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Rahmenvertrag17BRahmenvertragNr7D**](PRO1Rahmenvertrag17BRahmenvertragNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pRORechtModul"></a>
# **pRORechtModul**
> [PRO1Recht17BModul7D] pRORechtModul(contentType, pxSessionId)

PRO/Recht/{Modul}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pRORechtModul(contentType, pxSessionId).then(function(data) {
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

[**[PRO1Recht17BModul7D]**](PRO1Recht17BModul7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pRORechtModulForm"></a>
# **pRORechtModulForm**
> [PRO1Recht17BModul7D17BForm7D] pRORechtModulForm(contentType, pxSessionId)

PRO/Recht/{Modul}/{Form}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pRORechtModulForm(contentType, pxSessionId).then(function(data) {
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

[**[PRO1Recht17BModul7D17BForm7D]**](PRO1Recht17BModul7D17BForm7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pRORechtModulFormMenu"></a>
# **pRORechtModulFormMenu**
> PRO1Recht17BModul7D17BForm7D17BMenu7D pRORechtModulFormMenu(contentType, pxSessionId)

PRO/Recht/{Modul}/{Form}/{Menu}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pRORechtModulFormMenu(contentType, pxSessionId).then(function(data) {
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

[**PRO1Recht17BModul7D17BForm7D17BMenu7D**](PRO1Recht17BModul7D17BForm7D17BMenu7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pRORegionRegionNr"></a>
# **pRORegionRegionNr**
> PRO1Region17BRegionNr7D pRORegionRegionNr(depth, contentType, pxSessionId)

PRO/Region/{RegionNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pRORegionRegionNr(depth, contentType, pxSessionId).then(function(data) {
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

[**PRO1Region17BRegionNr7D**](PRO1Region17BRegionNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROSollstundenplanHistorySollstundenplanHistoryNr"></a>
# **pROSollstundenplanHistorySollstundenplanHistoryNr**
> pROSollstundenplanHistorySollstundenplanHistoryNr(contentType, pxSessionId)

PRO/SollstundenplanHistory/{SollstundenplanHistoryNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROSollstundenplanHistorySollstundenplanHistoryNr(contentType, pxSessionId).then(function() {
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

<a name="pROSollstundenplanSollstundenplanNr"></a>
# **pROSollstundenplanSollstundenplanNr**
> pROSollstundenplanSollstundenplanNr(contentType, pxSessionId)

PRO/Sollstundenplan/{SollstundenplanNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROSollstundenplanSollstundenplanNr(contentType, pxSessionId).then(function() {
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

<a name="pROSpracheSpracheNr"></a>
# **pROSpracheSpracheNr**
> PRO1Sprache17BSpracheNr7D pROSpracheSpracheNr(contentType, pxSessionId)

PRO/Sprache/{SpracheNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROSpracheSpracheNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Sprache17BSpracheNr7D**](PRO1Sprache17BSpracheNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROStammdaten"></a>
# **pROStammdaten**
> PRO1Stammdaten pROStammdaten(contentType, pxSessionId)

PRO/Stammdaten

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROStammdaten(contentType, pxSessionId).then(function(data) {
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

[**PRO1Stammdaten**](PRO1Stammdaten.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROSteuercodeSteuercodeNr"></a>
# **pROSteuercodeSteuercodeNr**
> PRO1Steuercode17BSteuercodeNr7D pROSteuercodeSteuercodeNr(depth, contentType, pxSessionId)

PRO/Steuercode/{SteuercodeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROSteuercodeSteuercodeNr(depth, contentType, pxSessionId).then(function(data) {
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

[**PRO1Steuercode17BSteuercodeNr7D**](PRO1Steuercode17BSteuercodeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROVertreterVertreterNr"></a>
# **pROVertreterVertreterNr**
> PRO1Vertreter17BVertreterNr7D pROVertreterVertreterNr(depth, contentType, pxSessionId)

PRO/Vertreter/{VertreterNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROVertreterVertreterNr(depth, contentType, pxSessionId).then(function(data) {
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

[**PRO1Vertreter17BVertreterNr7D**](PRO1Vertreter17BVertreterNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROWaehrungStandard"></a>
# **pROWaehrungStandard**
> PRO1Waehrung1Standard pROWaehrungStandard(contentType, pxSessionId)

PRO/Waehrung/Standard

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROWaehrungStandard(contentType, pxSessionId).then(function(data) {
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

[**PRO1Waehrung1Standard**](PRO1Waehrung1Standard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROWaehrungWaehrungNr"></a>
# **pROWaehrungWaehrungNr**
> PRO1Waehrung17BWaehrungNr7D pROWaehrungWaehrungNr(contentType, pxSessionId)

PRO/Waehrung/{WaehrungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROWaehrungWaehrungNr(contentType, pxSessionId).then(function(data) {
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

[**PRO1Waehrung17BWaehrungNr7D**](PRO1Waehrung17BWaehrungNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROWaehrungkurseaktualisieren"></a>
# **pROWaehrungkurseaktualisieren**
> pROWaehrungkurseaktualisieren(contentType, pxSessionId)

PRO/Waehrung/kurseaktualisieren

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROWaehrungkurseaktualisieren(contentType, pxSessionId).then(function() {
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

<a name="pROZusatztabelleZusatztabellenname"></a>
# **pROZusatztabelleZusatztabellenname**
> [PRO1Zusatztabelle17BZusatztabellenname7D] pROZusatztabelleZusatztabellenname(contentType, pxSessionId)

PRO/Zusatztabelle/{Zusatztabellenname}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROZusatztabelleZusatztabellenname(contentType, pxSessionId).then(function(data) {
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

[**[PRO1Zusatztabelle17BZusatztabellenname7D]**](PRO1Zusatztabelle17BZusatztabellenname7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="pROZusatztabelleZusatztabellennameSchlssel"></a>
# **pROZusatztabelleZusatztabellennameSchlssel**
> PRO1Zusatztabelle17BZusatztabellenname7D17BSchlC3BCssel7D pROZusatztabelleZusatztabellennameSchlssel(contentType, pxSessionId)

PRO/Zusatztabelle/{Zusatztabellenname}/{Schlüssel}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.pROZusatztabelleZusatztabellennameSchlssel(contentType, pxSessionId).then(function(data) {
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

[**PRO1Zusatztabelle17BZusatztabellenname7D17BSchlC3BCssel7D**](PRO1Zusatztabelle17BZusatztabellenname7D17BSchlC3BCssel7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="postPROZusatztabelleZusatztabellenname"></a>
# **postPROZusatztabelleZusatztabellenname**
> postPROZusatztabelleZusatztabellenname(contentType, pxSessionId, body)

PRO/Zusatztabelle/{Zusatztabellenname}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.PROApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.PRO1Zusatztabelle17BZusatztabellenname7DRequest(); // PRO1Zusatztabelle17BZusatztabellenname7DRequest | 

apiInstance.postPROZusatztabelleZusatztabellenname(contentType, pxSessionId, body).then(function() {
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
 **body** | [**PRO1Zusatztabelle17BZusatztabellenname7DRequest**](PRO1Zusatztabelle17BZusatztabellenname7DRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

