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
    define(['ApiClient', 'model/Teilleistungsgruppe', 'model/Teilleistungstyp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Teilleistungsgruppe'), require('./Teilleistungstyp'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.STUTeilleistungTeilleistungNr = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Teilleistungsgruppe, root.ProffixRestApiRequestSammlung.Teilleistungstyp);
  }
}(this, function(ApiClient, Teilleistungsgruppe, Teilleistungstyp) {
  'use strict';




  /**
   * The STUTeilleistungTeilleistungNr model module.
   * @module model/STUTeilleistungTeilleistungNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>STUTeilleistungTeilleistungNr</code>.
   * @alias module:model/STUTeilleistungTeilleistungNr
   * @class
   * @param teilleistungNr {Number} 
   * @param anteil {Number} 
   * @param bezeichnung {String} 
   * @param gliederung {String} 
   * @param teilleistungsgruppe {module:model/Teilleistungsgruppe} 
   * @param teilleistungstyp {module:model/Teilleistungstyp} 
   * @param teilleistungsuntergruppe {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(teilleistungNr, anteil, bezeichnung, gliederung, teilleistungsgruppe, teilleistungstyp, teilleistungsuntergruppe, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['TeilleistungNr'] = teilleistungNr;
    _this['Anteil'] = anteil;
    _this['Bezeichnung'] = bezeichnung;
    _this['Gliederung'] = gliederung;
    _this['Teilleistungsgruppe'] = teilleistungsgruppe;
    _this['Teilleistungstyp'] = teilleistungstyp;
    _this['Teilleistungsuntergruppe'] = teilleistungsuntergruppe;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>STUTeilleistungTeilleistungNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/STUTeilleistungTeilleistungNr} obj Optional instance to populate.
   * @return {module:model/STUTeilleistungTeilleistungNr} The populated <code>STUTeilleistungTeilleistungNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TeilleistungNr')) {
        obj['TeilleistungNr'] = ApiClient.convertToType(data['TeilleistungNr'], 'Number');
      }
      if (data.hasOwnProperty('Anteil')) {
        obj['Anteil'] = ApiClient.convertToType(data['Anteil'], 'Number');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('Gliederung')) {
        obj['Gliederung'] = ApiClient.convertToType(data['Gliederung'], 'String');
      }
      if (data.hasOwnProperty('Teilleistungsgruppe')) {
        obj['Teilleistungsgruppe'] = Teilleistungsgruppe.constructFromObject(data['Teilleistungsgruppe']);
      }
      if (data.hasOwnProperty('Teilleistungstyp')) {
        obj['Teilleistungstyp'] = Teilleistungstyp.constructFromObject(data['Teilleistungstyp']);
      }
      if (data.hasOwnProperty('Teilleistungsuntergruppe')) {
        obj['Teilleistungsuntergruppe'] = ApiClient.convertToType(data['Teilleistungsuntergruppe'], 'String');
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
   * @member {Number} TeilleistungNr
   */
  exports.prototype['TeilleistungNr'] = undefined;
  /**
   * @member {Number} Anteil
   */
  exports.prototype['Anteil'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {String} Gliederung
   */
  exports.prototype['Gliederung'] = undefined;
  /**
   * @member {module:model/Teilleistungsgruppe} Teilleistungsgruppe
   */
  exports.prototype['Teilleistungsgruppe'] = undefined;
  /**
   * @member {module:model/Teilleistungstyp} Teilleistungstyp
   */
  exports.prototype['Teilleistungstyp'] = undefined;
  /**
   * @member {String} Teilleistungsuntergruppe
   */
  exports.prototype['Teilleistungsuntergruppe'] = undefined;
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


