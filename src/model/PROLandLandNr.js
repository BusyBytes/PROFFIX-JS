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
    define(['ApiClient', 'model/Waehrung'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Waehrung'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.PROLandLandNr = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Waehrung);
  }
}(this, function(ApiClient, Waehrung) {
  'use strict';




  /**
   * The PROLandLandNr model module.
   * @module model/PROLandLandNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>PROLandLandNr</code>.
   * @alias module:model/PROLandLandNr
   * @class
   * @param landNr {String} 
   * @param bezeichnung {String} 
   * @param vorwahl {String} 
   * @param waehrung {module:model/Waehrung} 
   * @param sADCode {Number} 
   * @param codePost {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(landNr, bezeichnung, vorwahl, waehrung, sADCode, codePost, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['LandNr'] = landNr;
    _this['Bezeichnung'] = bezeichnung;
    _this['Vorwahl'] = vorwahl;
    _this['Waehrung'] = waehrung;
    _this['SADCode'] = sADCode;
    _this['CodePost'] = codePost;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>PROLandLandNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PROLandLandNr} obj Optional instance to populate.
   * @return {module:model/PROLandLandNr} The populated <code>PROLandLandNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('LandNr')) {
        obj['LandNr'] = ApiClient.convertToType(data['LandNr'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('Vorwahl')) {
        obj['Vorwahl'] = ApiClient.convertToType(data['Vorwahl'], 'String');
      }
      if (data.hasOwnProperty('Waehrung')) {
        obj['Waehrung'] = Waehrung.constructFromObject(data['Waehrung']);
      }
      if (data.hasOwnProperty('SADCode')) {
        obj['SADCode'] = ApiClient.convertToType(data['SADCode'], 'Number');
      }
      if (data.hasOwnProperty('CodePost')) {
        obj['CodePost'] = ApiClient.convertToType(data['CodePost'], 'String');
      }
      if (data.hasOwnProperty('ErstelltAm')) {
        obj['ErstelltAm'] = ApiClient.convertToType(data['ErstelltAm'], 'String');
      }
      if (data.hasOwnProperty('ErstelltVon')) {
        obj['ErstelltVon'] = ApiClient.convertToType(data['ErstelltVon'], 'String');
      }
      if (data.hasOwnProperty('GeaendertAm')) {
        obj['GeaendertAm'] = ApiClient.convertToType(data['GeaendertAm'], 'String');
      }
      if (data.hasOwnProperty('GeaendertVon')) {
        obj['GeaendertVon'] = ApiClient.convertToType(data['GeaendertVon'], 'String');
      }
      if (data.hasOwnProperty('Zusatzfelder')) {
        obj['Zusatzfelder'] = ApiClient.convertToType(data['Zusatzfelder'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} LandNr
   */
  exports.prototype['LandNr'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {String} Vorwahl
   */
  exports.prototype['Vorwahl'] = undefined;
  /**
   * @member {module:model/Waehrung} Waehrung
   */
  exports.prototype['Waehrung'] = undefined;
  /**
   * @member {Number} SADCode
   */
  exports.prototype['SADCode'] = undefined;
  /**
   * @member {String} CodePost
   */
  exports.prototype['CodePost'] = undefined;
  /**
   * @member {String} ErstelltAm
   */
  exports.prototype['ErstelltAm'] = undefined;
  /**
   * @member {String} ErstelltVon
   */
  exports.prototype['ErstelltVon'] = undefined;
  /**
   * @member {String} GeaendertAm
   */
  exports.prototype['GeaendertAm'] = undefined;
  /**
   * @member {String} GeaendertVon
   */
  exports.prototype['GeaendertVon'] = undefined;
  /**
   * @member {Object} Zusatzfelder
   */
  exports.prototype['Zusatzfelder'] = undefined;



  return exports;
}));


