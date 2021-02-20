# ProffixRestApiRequestSammlung.RESApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rESPlanobjekt**](RESApi.md#rESPlanobjekt) | **POST** /RES/Planobjekt | RES/Planobjekt
[**rESPlanobjektPlanobjektNr**](RESApi.md#rESPlanobjektPlanobjektNr) | **GET** /RES/Planobjekt/5 | RES/Planobjekt/{PlanobjektNr}
[**rESPlanobjektstatusPlanobjektstatusNr**](RESApi.md#rESPlanobjektstatusPlanobjektstatusNr) | **GET** /RES/Planobjektstatus/1 | RES/Planobjektstatus/{PlanobjektstatusNr}
[**rESRessourceRessourceNr**](RESApi.md#rESRessourceRessourceNr) | **GET** /RES/Ressource/1 | RES/Ressource/{RessourceNr}
[**rESRessourcengruppeRessourcengruppeNr**](RESApi.md#rESRessourcengruppeRessourcengruppeNr) | **GET** /RES/Ressourcengruppe/1 | RES/Ressourcengruppe/{RessourcengruppeNr}
[**rESRessourcengruppenzuordnungRessourcengruppenzuordnungNr**](RESApi.md#rESRessourcengruppenzuordnungRessourcengruppenzuordnungNr) | **GET** /RES/Ressourcengruppenzuordnung/3 | RES/Ressourcengruppenzuordnung/{RessourcengruppenzuordnungNr}


<a name="rESPlanobjekt"></a>
# **rESPlanobjekt**
> rESPlanobjekt(contentType, pxSessionId, body)

RES/Planobjekt

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.RESApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

var body = new ProffixRestApiRequestSammlung.RES1PlanobjektRequest(); // RES1PlanobjektRequest | 

apiInstance.rESPlanobjekt(contentType, pxSessionId, body).then(function() {
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
 **body** | [**RES1PlanobjektRequest**](RES1PlanobjektRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rESPlanobjektPlanobjektNr"></a>
# **rESPlanobjektPlanobjektNr**
> rESPlanobjektPlanobjektNr(contentType, pxSessionId)

RES/Planobjekt/{PlanobjektNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.RESApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.rESPlanobjektPlanobjektNr(contentType, pxSessionId).then(function() {
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

<a name="rESPlanobjektstatusPlanobjektstatusNr"></a>
# **rESPlanobjektstatusPlanobjektstatusNr**
> rESPlanobjektstatusPlanobjektstatusNr(contentType, pxSessionId)

RES/Planobjektstatus/{PlanobjektstatusNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.RESApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.rESPlanobjektstatusPlanobjektstatusNr(contentType, pxSessionId).then(function() {
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

<a name="rESRessourceRessourceNr"></a>
# **rESRessourceRessourceNr**
> rESRessourceRessourceNr(contentType, pxSessionId)

RES/Ressource/{RessourceNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.RESApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.rESRessourceRessourceNr(contentType, pxSessionId).then(function() {
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

<a name="rESRessourcengruppeRessourcengruppeNr"></a>
# **rESRessourcengruppeRessourcengruppeNr**
> rESRessourcengruppeRessourcengruppeNr(contentType, pxSessionId)

RES/Ressourcengruppe/{RessourcengruppeNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.RESApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.rESRessourcengruppeRessourcengruppeNr(contentType, pxSessionId).then(function() {
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

<a name="rESRessourcengruppenzuordnungRessourcengruppenzuordnungNr"></a>
# **rESRessourcengruppenzuordnungRessourcengruppenzuordnungNr**
> rESRessourcengruppenzuordnungRessourcengruppenzuordnungNr(contentType, pxSessionId)

RES/Ressourcengruppenzuordnung/{RessourcengruppenzuordnungNr}

### Example
```javascript
var ProffixRestApiRequestSammlung = require('proffix_rest_api_request_sammlung');

var apiInstance = new ProffixRestApiRequestSammlung.RESApi();

var contentType = "contentType_example"; // String | 

var pxSessionId = "pxSessionId_example"; // String | 

apiInstance.rESRessourcengruppenzuordnungRessourcengruppenzuordnungNr(contentType, pxSessionId).then(function() {
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

