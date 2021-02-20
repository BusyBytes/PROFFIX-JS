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
    root.ProffixRestApiRequestSammlung.Zusatzfelder13 = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Zusatzfelder13 model module.
   * @module model/Zusatzfelder13
   * @version 1.0
   */

  /**
   * Constructs a new <code>Zusatzfelder13</code>.
   * @alias module:model/Zusatzfelder13
   * @class
   * @param zDezimal {Number} 
   * @param zText {String} 
   */
  var exports = function(zDezimal, zText) {
    var _this = this;

    _this['Z_Dezimal'] = zDezimal;
    _this['Z_Text'] = zText;
  };

  /**
   * Constructs a <code>Zusatzfelder13</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Zusatzfelder13} obj Optional instance to populate.
   * @return {module:model/Zusatzfelder13} The populated <code>Zusatzfelder13</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Z_Dezimal')) {
        obj['Z_Dezimal'] = ApiClient.convertToType(data['Z_Dezimal'], 'Number');
      }
      if (data.hasOwnProperty('Z_Text')) {
        obj['Z_Text'] = ApiClient.convertToType(data['Z_Text'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Z_Dezimal
   */
  exports.prototype['Z_Dezimal'] = undefined;
  /**
   * @member {String} Z_Text
   */
  exports.prototype['Z_Text'] = undefined;



  return exports;
}));


