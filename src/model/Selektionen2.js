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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.Selektionen2 = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Selektionen2 model module.
   * @module model/Selektionen2
   * @version 1.0
   */

  /**
   * Constructs a new <code>Selektionen2</code>.
   * @alias module:model/Selektionen2
   * @class
   * @param feldname {String} 
   * @param wert {String} 
   * @param operation {String} 
   */
  var exports = function(feldname, wert, operation) {
    var _this = this;

    _this['Feldname'] = feldname;
    _this['Wert'] = wert;
    _this['Operation'] = operation;
  };

  /**
   * Constructs a <code>Selektionen2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Selektionen2} obj Optional instance to populate.
   * @return {module:model/Selektionen2} The populated <code>Selektionen2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Feldname')) {
        obj['Feldname'] = ApiClient.convertToType(data['Feldname'], 'String');
      }
      if (data.hasOwnProperty('Wert')) {
        obj['Wert'] = ApiClient.convertToType(data['Wert'], 'String');
      }
      if (data.hasOwnProperty('Operation')) {
        obj['Operation'] = ApiClient.convertToType(data['Operation'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Feldname
   */
  exports.prototype['Feldname'] = undefined;
  /**
   * @member {String} Wert
   */
  exports.prototype['Wert'] = undefined;
  /**
   * @member {String} Operation
   */
  exports.prototype['Operation'] = undefined;



  return exports;
}));


