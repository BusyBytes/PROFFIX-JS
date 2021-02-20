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
    define(['ApiClient', 'model/Lagerbewegungen1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Lagerbewegungen1'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.LAGArtikelArtikelNrverschiebungbuchenRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Lagerbewegungen1);
  }
}(this, function(ApiClient, Lagerbewegungen1) {
  'use strict';




  /**
   * The LAGArtikelArtikelNrverschiebungbuchenRequest model module.
   * @module model/LAGArtikelArtikelNrverschiebungbuchenRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGArtikelArtikelNrverschiebungbuchenRequest</code>.
   * @alias module:model/LAGArtikelArtikelNrverschiebungbuchenRequest
   * @class
   * @param datum {String} 
   * @param lagerbewegungen {Array.<module:model/Lagerbewegungen1>} 
   */
  var exports = function(datum, lagerbewegungen) {
    var _this = this;

    _this['Datum'] = datum;
    _this['Lagerbewegungen'] = lagerbewegungen;
  };

  /**
   * Constructs a <code>LAGArtikelArtikelNrverschiebungbuchenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGArtikelArtikelNrverschiebungbuchenRequest} obj Optional instance to populate.
   * @return {module:model/LAGArtikelArtikelNrverschiebungbuchenRequest} The populated <code>LAGArtikelArtikelNrverschiebungbuchenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Datum')) {
        obj['Datum'] = ApiClient.convertToType(data['Datum'], 'String');
      }
      if (data.hasOwnProperty('Lagerbewegungen')) {
        obj['Lagerbewegungen'] = ApiClient.convertToType(data['Lagerbewegungen'], [Lagerbewegungen1]);
      }
    }
    return obj;
  }

  /**
   * @member {String} Datum
   */
  exports.prototype['Datum'] = undefined;
  /**
   * @member {Array.<module:model/Lagerbewegungen1>} Lagerbewegungen
   */
  exports.prototype['Lagerbewegungen'] = undefined;



  return exports;
}));


