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
    define(['ApiClient', 'model/Betraege1', 'model/Buchungsart', 'model/HabenKonto1', 'model/SollKonto1', 'model/Steuercode1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Betraege1'), require('./Buchungsart'), require('./HabenKonto1'), require('./SollKonto1'), require('./Steuercode1'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.Buchungen1 = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Betraege1, root.ProffixRestApiRequestSammlung.Buchungsart, root.ProffixRestApiRequestSammlung.HabenKonto1, root.ProffixRestApiRequestSammlung.SollKonto1, root.ProffixRestApiRequestSammlung.Steuercode1);
  }
}(this, function(ApiClient, Betraege1, Buchungsart, HabenKonto1, SollKonto1, Steuercode1) {
  'use strict';




  /**
   * The Buchungen1 model module.
   * @module model/Buchungen1
   * @version 1.0
   */

  /**
   * Constructs a new <code>Buchungen1</code>.
   * @alias module:model/Buchungen1
   * @class
   * @param buchungsart {module:model/Buchungsart} 
   * @param betraege {Array.<module:model/Betraege1>} 
   */
  var exports = function(buchungsart, betraege) {
    var _this = this;

    _this['Buchungsart'] = buchungsart;

    _this['Betraege'] = betraege;


  };

  /**
   * Constructs a <code>Buchungen1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Buchungen1} obj Optional instance to populate.
   * @return {module:model/Buchungen1} The populated <code>Buchungen1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Buchungsart')) {
        obj['Buchungsart'] = Buchungsart.constructFromObject(data['Buchungsart']);
      }
      if (data.hasOwnProperty('HabenKonto')) {
        obj['HabenKonto'] = HabenKonto1.constructFromObject(data['HabenKonto']);
      }
      if (data.hasOwnProperty('Betraege')) {
        obj['Betraege'] = ApiClient.convertToType(data['Betraege'], [Betraege1]);
      }
      if (data.hasOwnProperty('SollKonto')) {
        obj['SollKonto'] = SollKonto1.constructFromObject(data['SollKonto']);
      }
      if (data.hasOwnProperty('Steuercode')) {
        obj['Steuercode'] = Steuercode1.constructFromObject(data['Steuercode']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Buchungsart} Buchungsart
   */
  exports.prototype['Buchungsart'] = undefined;
  /**
   * @member {module:model/HabenKonto1} HabenKonto
   */
  exports.prototype['HabenKonto'] = undefined;
  /**
   * @member {Array.<module:model/Betraege1>} Betraege
   */
  exports.prototype['Betraege'] = undefined;
  /**
   * @member {module:model/SollKonto1} SollKonto
   */
  exports.prototype['SollKonto'] = undefined;
  /**
   * @member {module:model/Steuercode1} Steuercode
   */
  exports.prototype['Steuercode'] = undefined;



  return exports;
}));


