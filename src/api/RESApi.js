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
    define(['ApiClient', 'model/RES1PlanobjektRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RES1PlanobjektRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.RESApi = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.RES1PlanobjektRequest);
  }
}(this, function(ApiClient, RES1PlanobjektRequest) {
  'use strict';

  /**
   * RES service.
   * @module api/RESApi
   * @version 1.0
   */

  /**
   * Constructs a new RESApi. 
   * @alias module:api/RESApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * RES/Planobjekt
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @param {module:model/RES1PlanobjektRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.rESPlanobjektWithHttpInfo = function(contentType, pxSessionId, body) {
      var postBody = body;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling rESPlanobjekt");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling rESPlanobjekt");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling rESPlanobjekt");
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
        '/RES/Planobjekt', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * RES/Planobjekt
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @param {module:model/RES1PlanobjektRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.rESPlanobjekt = function(contentType, pxSessionId, body) {
      return this.rESPlanobjektWithHttpInfo(contentType, pxSessionId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * RES/Planobjekt/{PlanobjektNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.rESPlanobjektPlanobjektNrWithHttpInfo = function(contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling rESPlanobjektPlanobjektNr");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling rESPlanobjektPlanobjektNr");
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
        '/RES/Planobjekt/5', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * RES/Planobjekt/{PlanobjektNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.rESPlanobjektPlanobjektNr = function(contentType, pxSessionId) {
      return this.rESPlanobjektPlanobjektNrWithHttpInfo(contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * RES/Planobjektstatus/{PlanobjektstatusNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.rESPlanobjektstatusPlanobjektstatusNrWithHttpInfo = function(contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling rESPlanobjektstatusPlanobjektstatusNr");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling rESPlanobjektstatusPlanobjektstatusNr");
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
        '/RES/Planobjektstatus/1', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * RES/Planobjektstatus/{PlanobjektstatusNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.rESPlanobjektstatusPlanobjektstatusNr = function(contentType, pxSessionId) {
      return this.rESPlanobjektstatusPlanobjektstatusNrWithHttpInfo(contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * RES/Ressource/{RessourceNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.rESRessourceRessourceNrWithHttpInfo = function(contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling rESRessourceRessourceNr");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling rESRessourceRessourceNr");
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
        '/RES/Ressource/1', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * RES/Ressource/{RessourceNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.rESRessourceRessourceNr = function(contentType, pxSessionId) {
      return this.rESRessourceRessourceNrWithHttpInfo(contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * RES/Ressourcengruppe/{RessourcengruppeNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.rESRessourcengruppeRessourcengruppeNrWithHttpInfo = function(contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling rESRessourcengruppeRessourcengruppeNr");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling rESRessourcengruppeRessourcengruppeNr");
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
        '/RES/Ressourcengruppe/1', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * RES/Ressourcengruppe/{RessourcengruppeNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.rESRessourcengruppeRessourcengruppeNr = function(contentType, pxSessionId) {
      return this.rESRessourcengruppeRessourcengruppeNrWithHttpInfo(contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * RES/Ressourcengruppenzuordnung/{RessourcengruppenzuordnungNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.rESRessourcengruppenzuordnungRessourcengruppenzuordnungNrWithHttpInfo = function(contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling rESRessourcengruppenzuordnungRessourcengruppenzuordnungNr");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling rESRessourcengruppenzuordnungRessourcengruppenzuordnungNr");
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
        '/RES/Ressourcengruppenzuordnung/3', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * RES/Ressourcengruppenzuordnung/{RessourcengruppenzuordnungNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.rESRessourcengruppenzuordnungRessourcengruppenzuordnungNr = function(contentType, pxSessionId) {
      return this.rESRessourcengruppenzuordnungRessourcengruppenzuordnungNrWithHttpInfo(contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
