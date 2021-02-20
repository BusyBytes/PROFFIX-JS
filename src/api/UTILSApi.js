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
    define(['ApiClient', 'model/UTILS1Telefonnummer1formatierenRequest', 'model/UTILS1Text1konvertierenRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UTILS1Telefonnummer1formatierenRequest'), require('../model/UTILS1Text1konvertierenRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.UTILSApi = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.UTILS1Telefonnummer1formatierenRequest, root.ProffixRestApiRequestSammlung.UTILS1Text1konvertierenRequest);
  }
}(this, function(ApiClient, UTILS1Telefonnummer1formatierenRequest, UTILS1Text1konvertierenRequest) {
  'use strict';

  /**
   * UTILS service.
   * @module api/UTILSApi
   * @version 1.0
   */

  /**
   * Constructs a new UTILSApi. 
   * @alias module:api/UTILSApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * UTILS/Telefonnummer/formatieren
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @param {module:model/UTILS1Telefonnummer1formatierenRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.uTILSTelefonnummerformatierenWithHttpInfo = function(contentType, pxSessionId, body) {
      var postBody = body;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling uTILSTelefonnummerformatieren");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling uTILSTelefonnummerformatieren");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uTILSTelefonnummerformatieren");
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
        '/UTILS/Telefonnummer/formatieren', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * UTILS/Telefonnummer/formatieren
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @param {module:model/UTILS1Telefonnummer1formatierenRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.uTILSTelefonnummerformatieren = function(contentType, pxSessionId, body) {
      return this.uTILSTelefonnummerformatierenWithHttpInfo(contentType, pxSessionId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UTILS/Text/konvertieren
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @param {module:model/UTILS1Text1konvertierenRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.uTILSTextkonvertierenWithHttpInfo = function(contentType, pxSessionId, body) {
      var postBody = body;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling uTILSTextkonvertieren");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling uTILSTextkonvertieren");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uTILSTextkonvertieren");
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
        '/UTILS/Text/konvertieren', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * UTILS/Text/konvertieren
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @param {module:model/UTILS1Text1konvertierenRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.uTILSTextkonvertieren = function(contentType, pxSessionId, body) {
      return this.uTILSTextkonvertierenWithHttpInfo(contentType, pxSessionId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UTILS/Transaktion/beginnen
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.uTILSTransaktionbeginnenWithHttpInfo = function(contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling uTILSTransaktionbeginnen");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling uTILSTransaktionbeginnen");
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
        '/UTILS/Transaktion/beginnen', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * UTILS/Transaktion/beginnen
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.uTILSTransaktionbeginnen = function(contentType, pxSessionId) {
      return this.uTILSTransaktionbeginnenWithHttpInfo(contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UTILS/Transaktion/committen
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.uTILSTransaktioncommittenWithHttpInfo = function(contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling uTILSTransaktioncommitten");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling uTILSTransaktioncommitten");
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
        '/UTILS/Transaktion/committen', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * UTILS/Transaktion/committen
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.uTILSTransaktioncommitten = function(contentType, pxSessionId) {
      return this.uTILSTransaktioncommittenWithHttpInfo(contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UTILS/Transaktion/zurueckrollen
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.uTILSTransaktionzurueckrollenWithHttpInfo = function(contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling uTILSTransaktionzurueckrollen");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling uTILSTransaktionzurueckrollen");
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
        '/UTILS/Transaktion/zurueckrollen', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * UTILS/Transaktion/zurueckrollen
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.uTILSTransaktionzurueckrollen = function(contentType, pxSessionId) {
      return this.uTILSTransaktionzurueckrollenWithHttpInfo(contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
