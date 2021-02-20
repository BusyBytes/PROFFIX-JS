# ProffixRestApiRequestSammlung.LOHApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lOHAbteilungAbteilungNr**](LOHApi.md#lOHAbteilungAbteilungNr) | **GET** /LOH/Abteilung/1 | LOH/Abteilung/{AbteilungNr}
[**lOHKindKindNr**](LOHApi.md#lOHKindKindNr) | **GET** /LOH/Kind/1 | LOH/Kind/{KindNr}
[**lOHKinderzulageKinderzulageNr**](LOHApi.md#lOHKinderzulageKinderzulageNr) | **GET** /LOH/Kinderzulage/1 | LOH/Kinderzulage/{KinderzulageNr}
[**lOHKrankentaggeldversicherungscodeKrankentaggeldversicherungscodeNr**](LOHApi.md#lOHKrankentaggeldversicherungscodeKrankentaggeldversicherungscodeNr) | **GET** /LOH/Krankentaggeldversicherungscode/A0 | LOH/Krankentaggeldversicherungscode/{KrankentaggeldversicherungscodeNr}
[**lOHLohnabrechnungLohnabrechnungNr**](LOHApi.md#lOHLohnabrechnungLohnabrechnungNr) | **GET** /LOH/Lohnabrechnung/2274 | LOH/Lohnabrechnung/{LohnabrechnungNr}
[**lOHLohnartLohnartNr**](LOHApi.md#lOHLohnartLohnartNr) | **GET** /LOH/Lohnart/1000.1 | LOH/Lohnart/{LohnartNr}
[**lOHLohnbewegung**](LOHApi.md#lOHLohnbewegung) | **POST** /LOH/Lohnbewegung | LOH/Lohnbewegung
[**lOHLohnbewegungLohnbewegungNr**](LOHApi.md#lOHLohnbewegungLohnbewegungNr) | **GET** /LOH/Lohnbewegung/2274 | LOH/Lohnbewegung/{LohnbewegungNr}
[**lOHMitarbeiter**](LOHApi.md#lOHMitarbeiter) | **POST** /LOH/Mitarbeiter | LOH/Mitarbeiter
[**lOHMitarbeiterMitarbeiterNr**](LOHApi.md#lOHMitarbeiterMitarbeiterNr) | **GET** /LOH/Mitarbeiter/1 | LOH/Mitarbeiter/{MitarbeiterNr}
[**lOHQuellensteuerQuellensteuerNr**](LOHApi.md#lOHQuellensteuerQuellensteuerNr) | **GET** /LOH/Quellensteuer/100000 | LOH/Quellensteuer/{QuellensteuerNr}
[**lOHUnfallversicherungscodeUnfallversicherungscodeNr**](LOHApi.md#lOHUnfallversicherungscodeUnfallversicherungscodeNr) | **GET** /LOH/Unfallversicherungscode/A0 | LOH/Unfallversicherungscode/{UnfallversicherungscodeNr}
[**lOHUnfallzusatzversicherungscodeUnfallzusatzversicherungscodeNr**](LOHApi.md#lOHUnfallzusatzversicherungscodeUnfallzusatzversicherungscodeNr) | **GET** /LOH/Unfallzusatzversicherungscode/A0 | LOH/Unfallzusatzversicherungscode/{UnfallzusatzversicherungscodeNr}
[**lOHZivilstandZivilstandNr**](LOHApi.md#lOHZivilstandZivilstandNr) | **GET** /LOH/Zivilstand/1 | LOH/Zivilstand/{ZivilstandNr}


<a name="lOHAbteilungAbteilungNr"></a>
# **lOHAbteilungAbteilungNr**
> LOH1Abteilung17BAbteilungNr7D lOHAbteilungAbteilungNr(contentType, pxSessionId)

LOH/Abteilung/{AbteilungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHAbteilungAbteilungNr(contentType, pxSessionId).then(function(data) {
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

[**LOH1Abteilung17BAbteilungNr7D**](LOH1Abteilung17BAbteilungNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="lOHKindKindNr"></a>
# **lOHKindKindNr**
> LOH1Kind17BKindNr7D lOHKindKindNr(depth, contentType, pxSessionId)

LOH/Kind/{KindNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHKindKindNr(depth, contentType, pxSessionId).then(function(data) {
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

[**LOH1Kind17BKindNr7D**](LOH1Kind17BKindNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="lOHKinderzulageKinderzulageNr"></a>
# **lOHKinderzulageKinderzulageNr**
> lOHKinderzulageKinderzulageNr(contentType, pxSessionId)

LOH/Kinderzulage/{KinderzulageNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHKinderzulageKinderzulageNr(contentType, pxSessionId).then(function() {
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

<a name="lOHKrankentaggeldversicherungscodeKrankentaggeldversicherungscodeNr"></a>
# **lOHKrankentaggeldversicherungscodeKrankentaggeldversicherungscodeNr**
> LOH1Krankentaggeldversicherungscode17BKrankentaggeldversicherungscodeNr7D lOHKrankentaggeldversicherungscodeKrankentaggeldversicherungscodeNr(contentType, pxSessionId)

LOH/Krankentaggeldversicherungscode/{KrankentaggeldversicherungscodeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHKrankentaggeldversicherungscodeKrankentaggeldversicherungscodeNr(contentType, pxSessionId).then(function(data) {
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

[**LOH1Krankentaggeldversicherungscode17BKrankentaggeldversicherungscodeNr7D**](LOH1Krankentaggeldversicherungscode17BKrankentaggeldversicherungscodeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="lOHLohnabrechnungLohnabrechnungNr"></a>
# **lOHLohnabrechnungLohnabrechnungNr**
> lOHLohnabrechnungLohnabrechnungNr(contentType, pxSessionId)

LOH/Lohnabrechnung/{LohnabrechnungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHLohnabrechnungLohnabrechnungNr(contentType, pxSessionId).then(function() {
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

<a name="lOHLohnartLohnartNr"></a>
# **lOHLohnartLohnartNr**
> LOH1Lohnart17BLohnartNr7D lOHLohnartLohnartNr(contentType, pxSessionId)

LOH/Lohnart/{LohnartNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHLohnartLohnartNr(contentType, pxSessionId).then(function(data) {
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

[**LOH1Lohnart17BLohnartNr7D**](LOH1Lohnart17BLohnartNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="lOHLohnbewegung"></a>
# **lOHLohnbewegung**
> lOHLohnbewegung(contentType, pxSessionId, body)

LOH/Lohnbewegung

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.LOH1LohnbewegungRequest(); // LOH1LohnbewegungRequest | 

apiInstance.lOHLohnbewegung(contentType, pxSessionId, body).then(function() {
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
 **body** | [**LOH1LohnbewegungRequest**](LOH1LohnbewegungRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lOHLohnbewegungLohnbewegungNr"></a>
# **lOHLohnbewegungLohnbewegungNr**
> LOH1Lohnbewegung17BLohnbewegungNr7D lOHLohnbewegungLohnbewegungNr(depth, contentType, pxSessionId)

LOH/Lohnbewegung/{LohnbewegungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHLohnbewegungLohnbewegungNr(depth, contentType, pxSessionId).then(function(data) {
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

[**LOH1Lohnbewegung17BLohnbewegungNr7D**](LOH1Lohnbewegung17BLohnbewegungNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="lOHMitarbeiter"></a>
# **lOHMitarbeiter**
> lOHMitarbeiter(contentType, pxSessionId, body)

LOH/Mitarbeiter

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.LOH1MitarbeiterRequest(); // LOH1MitarbeiterRequest | 

apiInstance.lOHMitarbeiter(contentType, pxSessionId, body).then(function() {
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
 **body** | [**LOH1MitarbeiterRequest**](LOH1MitarbeiterRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lOHMitarbeiterMitarbeiterNr"></a>
# **lOHMitarbeiterMitarbeiterNr**
> LOH1Mitarbeiter17BMitarbeiterNr7D lOHMitarbeiterMitarbeiterNr(depth, contentType, pxSessionId)

LOH/Mitarbeiter/{MitarbeiterNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var depth = 56; // Number | 

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHMitarbeiterMitarbeiterNr(depth, contentType, pxSessionId).then(function(data) {
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

[**LOH1Mitarbeiter17BMitarbeiterNr7D**](LOH1Mitarbeiter17BMitarbeiterNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="lOHQuellensteuerQuellensteuerNr"></a>
# **lOHQuellensteuerQuellensteuerNr**
> LOH1Quellensteuer17BQuellensteuerNr7D lOHQuellensteuerQuellensteuerNr(contentType, pxSessionId)

LOH/Quellensteuer/{QuellensteuerNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHQuellensteuerQuellensteuerNr(contentType, pxSessionId).then(function(data) {
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

[**LOH1Quellensteuer17BQuellensteuerNr7D**](LOH1Quellensteuer17BQuellensteuerNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="lOHUnfallversicherungscodeUnfallversicherungscodeNr"></a>
# **lOHUnfallversicherungscodeUnfallversicherungscodeNr**
> LOH1Unfallversicherungscode17BUnfallversicherungscodeNr7D lOHUnfallversicherungscodeUnfallversicherungscodeNr(contentType, pxSessionId)

LOH/Unfallversicherungscode/{UnfallversicherungscodeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHUnfallversicherungscodeUnfallversicherungscodeNr(contentType, pxSessionId).then(function(data) {
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

[**LOH1Unfallversicherungscode17BUnfallversicherungscodeNr7D**](LOH1Unfallversicherungscode17BUnfallversicherungscodeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="lOHUnfallzusatzversicherungscodeUnfallzusatzversicherungscodeNr"></a>
# **lOHUnfallzusatzversicherungscodeUnfallzusatzversicherungscodeNr**
> LOH1Unfallzusatzversicherungscode17BUnfallzusatzversicherungscodeNr7D lOHUnfallzusatzversicherungscodeUnfallzusatzversicherungscodeNr(contentType, pxSessionId)

LOH/Unfallzusatzversicherungscode/{UnfallzusatzversicherungscodeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHUnfallzusatzversicherungscodeUnfallzusatzversicherungscodeNr(contentType, pxSessionId).then(function(data) {
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

[**LOH1Unfallzusatzversicherungscode17BUnfallzusatzversicherungscodeNr7D**](LOH1Unfallzusatzversicherungscode17BUnfallzusatzversicherungscodeNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="lOHZivilstandZivilstandNr"></a>
# **lOHZivilstandZivilstandNr**
> LOH1Zivilstand17BZivilstandNr7D lOHZivilstandZivilstandNr(contentType, pxSessionId)

LOH/Zivilstand/{ZivilstandNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.LOHApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.lOHZivilstandZivilstandNr(contentType, pxSessionId).then(function(data) {
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

[**LOH1Zivilstand17BZivilstandNr7D**](LOH1Zivilstand17BZivilstandNr7D.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

