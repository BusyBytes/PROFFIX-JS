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
    root.ProffixRestApiRequestSammlung.PROZusatztabelleZusatztabellenname = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PROZusatztabelleZusatztabellenname model module.
   * @module model/PROZusatztabelleZusatztabellenname
   * @version 1.0
   */

  /**
   * Constructs a new <code>PROZusatztabelleZusatztabellenname</code>.
   * @alias module:model/PROZusatztabelleZusatztabellenname
   * @class
   * @param dVDNr {Number} 
   * @param bezeichnung {String} 
   * @param regie {String} 
   * @param dauer {Number} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   */
  var exports = function(dVDNr, bezeichnung, regie, dauer, erstelltAm, erstelltVon, geaendertAm, geaendertVon) {
    var _this = this;

    _this['DVD_Nr'] = dVDNr;
    _this['Bezeichnung'] = bezeichnung;
    _this['Regie'] = regie;
    _this['Dauer'] = dauer;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
  };

  /**
   * Constructs a <code>PROZusatztabelleZusatztabellenname</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PROZusatztabelleZusatztabellenname} obj Optional instance to populate.
   * @return {module:model/PROZusatztabelleZusatztabellenname} The populated <code>PROZusatztabelleZusatztabellenname</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DVD_Nr')) {
        obj['DVD_Nr'] = ApiClient.convertToType(data['DVD_Nr'], 'Number');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('Regie')) {
        obj['Regie'] = ApiClient.convertToType(data['Regie'], 'String');
      }
      if (data.hasOwnProperty('Dauer')) {
        obj['Dauer'] = ApiClient.convertToType(data['Dauer'], 'Number');
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
    }
    return obj;
  }

  /**
   * @member {Number} DVD_Nr
   */
  exports.prototype['DVD_Nr'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {String} Regie
   */
  exports.prototype['Regie'] = undefined;
  /**
   * @member {Number} Dauer
   */
  exports.prototype['Dauer'] = undefined;
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



  return exports;
}));


