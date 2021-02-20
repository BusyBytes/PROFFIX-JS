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
    define(['ApiClient', 'model/Rapporte'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rapporte'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.STURapportabschliessenRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Rapporte);
  }
}(this, function(ApiClient, Rapporte) {
  'use strict';




  /**
   * The STURapportabschliessenRequest model module.
   * @module model/STURapportabschliessenRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>STURapportabschliessenRequest</code>.
   * @alias module:model/STURapportabschliessenRequest
   * @class
   * @param rapporte {Array.<module:model/Rapporte>} 
   */
  var exports = function(rapporte) {
    var _this = this;

    _this['Rapporte'] = rapporte;
  };

  /**
   * Constructs a <code>STURapportabschliessenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/STURapportabschliessenRequest} obj Optional instance to populate.
   * @return {module:model/STURapportabschliessenRequest} The populated <code>STURapportabschliessenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Rapporte')) {
        obj['Rapporte'] = ApiClient.convertToType(data['Rapporte'], [Rapporte]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Rapporte>} Rapporte
   */
  exports.prototype['Rapporte'] = undefined;



  return exports;
}));


