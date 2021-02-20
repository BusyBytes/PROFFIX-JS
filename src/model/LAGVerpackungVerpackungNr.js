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
    root.ProffixRestApiRequestSammlung.LAGVerpackungVerpackungNr = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LAGVerpackungVerpackungNr model module.
   * @module model/LAGVerpackungVerpackungNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGVerpackungVerpackungNr</code>.
   * @alias module:model/LAGVerpackungVerpackungNr
   * @class
   * @param verpackungNr {String} 
   * @param bezeichnung {String} 
   * @param beschreibung {String} 
   * @param laenge {Number} 
   * @param breite {Number} 
   * @param hoehe {Number} 
   * @param wandstaerke {Number} 
   * @param gewicht {Number} 
   * @param datei {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(verpackungNr, bezeichnung, beschreibung, laenge, breite, hoehe, wandstaerke, gewicht, datei, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['VerpackungNr'] = verpackungNr;
    _this['Bezeichnung'] = bezeichnung;
    _this['Beschreibung'] = beschreibung;
    _this['Laenge'] = laenge;
    _this['Breite'] = breite;
    _this['Hoehe'] = hoehe;
    _this['Wandstaerke'] = wandstaerke;
    _this['Gewicht'] = gewicht;
    _this['Datei'] = datei;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>LAGVerpackungVerpackungNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGVerpackungVerpackungNr} obj Optional instance to populate.
   * @return {module:model/LAGVerpackungVerpackungNr} The populated <code>LAGVerpackungVerpackungNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('VerpackungNr')) {
        obj['VerpackungNr'] = ApiClient.convertToType(data['VerpackungNr'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('Beschreibung')) {
        obj['Beschreibung'] = ApiClient.convertToType(data['Beschreibung'], 'String');
      }
      if (data.hasOwnProperty('Laenge')) {
        obj['Laenge'] = ApiClient.convertToType(data['Laenge'], 'Number');
      }
      if (data.hasOwnProperty('Breite')) {
        obj['Breite'] = ApiClient.convertToType(data['Breite'], 'Number');
      }
      if (data.hasOwnProperty('Hoehe')) {
        obj['Hoehe'] = ApiClient.convertToType(data['Hoehe'], 'Number');
      }
      if (data.hasOwnProperty('Wandstaerke')) {
        obj['Wandstaerke'] = ApiClient.convertToType(data['Wandstaerke'], 'Number');
      }
      if (data.hasOwnProperty('Gewicht')) {
        obj['Gewicht'] = ApiClient.convertToType(data['Gewicht'], 'Number');
      }
      if (data.hasOwnProperty('Datei')) {
        obj['Datei'] = ApiClient.convertToType(data['Datei'], 'String');
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
   * @member {String} VerpackungNr
   */
  exports.prototype['VerpackungNr'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {String} Beschreibung
   */
  exports.prototype['Beschreibung'] = undefined;
  /**
   * @member {Number} Laenge
   */
  exports.prototype['Laenge'] = undefined;
  /**
   * @member {Number} Breite
   */
  exports.prototype['Breite'] = undefined;
  /**
   * @member {Number} Hoehe
   */
  exports.prototype['Hoehe'] = undefined;
  /**
   * @member {Number} Wandstaerke
   */
  exports.prototype['Wandstaerke'] = undefined;
  /**
   * @member {Number} Gewicht
   */
  exports.prototype['Gewicht'] = undefined;
  /**
   * @member {String} Datei
   */
  exports.prototype['Datei'] = undefined;
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


