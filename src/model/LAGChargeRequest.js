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
    define(['ApiClient', 'model/UrsprungsCharge'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UrsprungsCharge'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.LAGChargeRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.UrsprungsCharge);
  }
}(this, function(ApiClient, UrsprungsCharge) {
  'use strict';




  /**
   * The LAGChargeRequest model module.
   * @module model/LAGChargeRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGChargeRequest</code>.
   * @alias module:model/LAGChargeRequest
   * @class
   * @param chargeNr {String} 
   * @param bezeichnung {String} 
   * @param inaktiv {Boolean} 
   * @param auslaufsdatum {String} 
   * @param haltbarkeit {Number} 
   * @param herstelldatum {String} 
   * @param ursprungsCharge {module:model/UrsprungsCharge} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(chargeNr, bezeichnung, inaktiv, auslaufsdatum, haltbarkeit, herstelldatum, ursprungsCharge, zusatzfelder) {
    var _this = this;

    _this['ChargeNr'] = chargeNr;
    _this['Bezeichnung'] = bezeichnung;
    _this['Inaktiv'] = inaktiv;
    _this['Auslaufsdatum'] = auslaufsdatum;
    _this['Haltbarkeit'] = haltbarkeit;
    _this['Herstelldatum'] = herstelldatum;
    _this['UrsprungsCharge'] = ursprungsCharge;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>LAGChargeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGChargeRequest} obj Optional instance to populate.
   * @return {module:model/LAGChargeRequest} The populated <code>LAGChargeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ChargeNr')) {
        obj['ChargeNr'] = ApiClient.convertToType(data['ChargeNr'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('Inaktiv')) {
        obj['Inaktiv'] = ApiClient.convertToType(data['Inaktiv'], 'Boolean');
      }
      if (data.hasOwnProperty('Auslaufsdatum')) {
        obj['Auslaufsdatum'] = ApiClient.convertToType(data['Auslaufsdatum'], 'String');
      }
      if (data.hasOwnProperty('Haltbarkeit')) {
        obj['Haltbarkeit'] = ApiClient.convertToType(data['Haltbarkeit'], 'Number');
      }
      if (data.hasOwnProperty('Herstelldatum')) {
        obj['Herstelldatum'] = ApiClient.convertToType(data['Herstelldatum'], 'String');
      }
      if (data.hasOwnProperty('UrsprungsCharge')) {
        obj['UrsprungsCharge'] = UrsprungsCharge.constructFromObject(data['UrsprungsCharge']);
      }
      if (data.hasOwnProperty('Zusatzfelder')) {
        obj['Zusatzfelder'] = ApiClient.convertToType(data['Zusatzfelder'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ChargeNr
   */
  exports.prototype['ChargeNr'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {Boolean} Inaktiv
   */
  exports.prototype['Inaktiv'] = undefined;
  /**
   * @member {String} Auslaufsdatum
   */
  exports.prototype['Auslaufsdatum'] = undefined;
  /**
   * @member {Number} Haltbarkeit
   */
  exports.prototype['Haltbarkeit'] = undefined;
  /**
   * @member {String} Herstelldatum
   */
  exports.prototype['Herstelldatum'] = undefined;
  /**
   * @member {module:model/UrsprungsCharge} UrsprungsCharge
   */
  exports.prototype['UrsprungsCharge'] = undefined;
  /**
   * @member {Object} Zusatzfelder
   */
  exports.prototype['Zusatzfelder'] = undefined;



  return exports;
}));


