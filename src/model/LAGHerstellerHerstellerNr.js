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
    define(['ApiClient', 'model/Land', 'model/Region'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Land'), require('./Region'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.LAGHerstellerHerstellerNr = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Land, root.ProffixRestApiRequestSammlung.Region);
  }
}(this, function(ApiClient, Land, Region) {
  'use strict';




  /**
   * The LAGHerstellerHerstellerNr model module.
   * @module model/LAGHerstellerHerstellerNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGHerstellerHerstellerNr</code>.
   * @alias module:model/LAGHerstellerHerstellerNr
   * @class
   * @param herstellerNr {Number} 
   * @param eMail {String} 
   * @param fax {String} 
   * @param firma {String} 
   * @param homepage {String} 
   * @param region {module:model/Region} 
   * @param land {module:model/Land} 
   * @param ort {String} 
   * @param PLZ {String} 
   * @param strasse {String} 
   * @param telefon {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(herstellerNr, eMail, fax, firma, homepage, region, land, ort, PLZ, strasse, telefon, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['HerstellerNr'] = herstellerNr;
    _this['EMail'] = eMail;
    _this['Fax'] = fax;
    _this['Firma'] = firma;
    _this['Homepage'] = homepage;
    _this['Region'] = region;
    _this['Land'] = land;
    _this['Ort'] = ort;
    _this['PLZ'] = PLZ;
    _this['Strasse'] = strasse;
    _this['Telefon'] = telefon;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>LAGHerstellerHerstellerNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGHerstellerHerstellerNr} obj Optional instance to populate.
   * @return {module:model/LAGHerstellerHerstellerNr} The populated <code>LAGHerstellerHerstellerNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('HerstellerNr')) {
        obj['HerstellerNr'] = ApiClient.convertToType(data['HerstellerNr'], 'Number');
      }
      if (data.hasOwnProperty('EMail')) {
        obj['EMail'] = ApiClient.convertToType(data['EMail'], 'String');
      }
      if (data.hasOwnProperty('Fax')) {
        obj['Fax'] = ApiClient.convertToType(data['Fax'], 'String');
      }
      if (data.hasOwnProperty('Firma')) {
        obj['Firma'] = ApiClient.convertToType(data['Firma'], 'String');
      }
      if (data.hasOwnProperty('Homepage')) {
        obj['Homepage'] = ApiClient.convertToType(data['Homepage'], 'String');
      }
      if (data.hasOwnProperty('Region')) {
        obj['Region'] = Region.constructFromObject(data['Region']);
      }
      if (data.hasOwnProperty('Land')) {
        obj['Land'] = Land.constructFromObject(data['Land']);
      }
      if (data.hasOwnProperty('Ort')) {
        obj['Ort'] = ApiClient.convertToType(data['Ort'], 'String');
      }
      if (data.hasOwnProperty('PLZ')) {
        obj['PLZ'] = ApiClient.convertToType(data['PLZ'], 'String');
      }
      if (data.hasOwnProperty('Strasse')) {
        obj['Strasse'] = ApiClient.convertToType(data['Strasse'], 'String');
      }
      if (data.hasOwnProperty('Telefon')) {
        obj['Telefon'] = ApiClient.convertToType(data['Telefon'], 'String');
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
   * @member {Number} HerstellerNr
   */
  exports.prototype['HerstellerNr'] = undefined;
  /**
   * @member {String} EMail
   */
  exports.prototype['EMail'] = undefined;
  /**
   * @member {String} Fax
   */
  exports.prototype['Fax'] = undefined;
  /**
   * @member {String} Firma
   */
  exports.prototype['Firma'] = undefined;
  /**
   * @member {String} Homepage
   */
  exports.prototype['Homepage'] = undefined;
  /**
   * @member {module:model/Region} Region
   */
  exports.prototype['Region'] = undefined;
  /**
   * @member {module:model/Land} Land
   */
  exports.prototype['Land'] = undefined;
  /**
   * @member {String} Ort
   */
  exports.prototype['Ort'] = undefined;
  /**
   * @member {String} PLZ
   */
  exports.prototype['PLZ'] = undefined;
  /**
   * @member {String} Strasse
   */
  exports.prototype['Strasse'] = undefined;
  /**
   * @member {String} Telefon
   */
  exports.prototype['Telefon'] = undefined;
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


