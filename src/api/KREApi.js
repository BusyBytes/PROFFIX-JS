/**
 * PROFFIX REST API Request Sammlung
 * Dies ist eine Request-Sammlung der PROFFIX REST API, welche das PROFFIX REST API Entwicklerhandbuch unter [https://www.proffix.net/entwickler/restapi/handbuch](https://www.proffix.net/entwickler/restapi/handbuch) ergänzt.
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/KRE1Buchung17BBuchungNr7D', 'model/KRE1BuchungRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/KRE1Buchung17BBuchungNr7D'), require('../model/KRE1BuchungRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.KREApi = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.KRE1Buchung17BBuchungNr7D, root.ProffixRestApiRequestSammlung.KRE1BuchungRequest);
  }
}(this, function(ApiClient, KRE1Buchung17BBuchungNr7D, KRE1BuchungRequest) {
  'use strict';

  /**
   * KRE service.
   * @module api/KREApi
   * @version 1.0
   */

  /**
   * Constructs a new KREApi. 
   * @alias module:api/KREApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * KRE/Buchung
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @param {module:model/KRE1BuchungRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.kREBuchungWithHttpInfo = function(contentType, pxSessionId, body) {
      var postBody = body;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling kREBuchung");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling kREBuchung");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling kREBuchung");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Content-Type': contentType,
        'PxSessionId': pxSessionId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/KRE/Buchung', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * KRE/Buchung
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @param {module:model/KRE1BuchungRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.kREBuchung = function(contentType, pxSessionId, body) {
      return this.kREBuchungWithHttpInfo(contentType, pxSessionId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * KRE/Buchung/{BuchungNr}
     * @param {Number} depth 
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KRE1Buchung17BBuchungNr7D} and HTTP response
     */
    this.kREBuchungBuchungNrWithHttpInfo = function(depth, contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'depth' is set
      if (depth === undefined || depth === null) {
        throw new Error("Missing the required parameter 'depth' when calling kREBuchungBuchungNr");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling kREBuchungBuchungNr");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling kREBuchungBuchungNr");
      }


      var pathParams = {
      };
      var queryParams = {
        'depth': depth,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Content-Type': contentType,
        'PxSessionId': pxSessionId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = KRE1Buchung17BBuchungNr7D;

      return this.apiClient.callApi(
        '/KRE/Buchung/165', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * KRE/Buchung/{BuchungNr}
     * @param {Number} depth 
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KRE1Buchung17BBuchungNr7D}
     */
    this.kREBuchungBuchungNr = function(depth, contentType, pxSessionId) {
      return this.kREBuchungBuchungNrWithHttpInfo(depth, contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
