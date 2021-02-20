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
    define(['ApiClient', 'model/Artikel', 'model/Option'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Artikel'), require('./Option'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.LAGArtikeloptionRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Artikel, root.ProffixRestApiRequestSammlung.Option);
  }
}(this, function(ApiClient, Artikel, Option) {
  'use strict';




  /**
   * The LAGArtikeloptionRequest model module.
   * @module model/LAGArtikeloptionRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGArtikeloptionRequest</code>.
   * @alias module:model/LAGArtikeloptionRequest
   * @class
   * @param artikeloptionNr {Number} 
   * @param anzahl {Number} 
   * @param artikel {module:model/Artikel} 
   * @param bemerkungen {String} 
   * @param bemerkungenRTF {String} 
   * @param option {module:model/Option} 
   * @param sprache {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(artikeloptionNr, anzahl, artikel, bemerkungen, bemerkungenRTF, option, sprache, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['ArtikeloptionNr'] = artikeloptionNr;
    _this['Anzahl'] = anzahl;
    _this['Artikel'] = artikel;
    _this['Bemerkungen'] = bemerkungen;
    _this['BemerkungenRTF'] = bemerkungenRTF;
    _this['Option'] = option;
    _this['Sprache'] = sprache;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>LAGArtikeloptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGArtikeloptionRequest} obj Optional instance to populate.
   * @return {module:model/LAGArtikeloptionRequest} The populated <code>LAGArtikeloptionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ArtikeloptionNr')) {
        obj['ArtikeloptionNr'] = ApiClient.convertToType(data['ArtikeloptionNr'], 'Number');
      }
      if (data.hasOwnProperty('Anzahl')) {
        obj['Anzahl'] = ApiClient.convertToType(data['Anzahl'], 'Number');
      }
      if (data.hasOwnProperty('Artikel')) {
        obj['Artikel'] = Artikel.constructFromObject(data['Artikel']);
      }
      if (data.hasOwnProperty('Bemerkungen')) {
        obj['Bemerkungen'] = ApiClient.convertToType(data['Bemerkungen'], 'String');
      }
      if (data.hasOwnProperty('BemerkungenRTF')) {
        obj['BemerkungenRTF'] = ApiClient.convertToType(data['BemerkungenRTF'], 'String');
      }
      if (data.hasOwnProperty('Option')) {
        obj['Option'] = Option.constructFromObject(data['Option']);
      }
      if (data.hasOwnProperty('Sprache')) {
        obj['Sprache'] = ApiClient.convertToType(data['Sprache'], 'String');
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
   * @member {Number} ArtikeloptionNr
   */
  exports.prototype['ArtikeloptionNr'] = undefined;
  /**
   * @member {Number} Anzahl
   */
  exports.prototype['Anzahl'] = undefined;
  /**
   * @member {module:model/Artikel} Artikel
   */
  exports.prototype['Artikel'] = undefined;
  /**
   * @member {String} Bemerkungen
   */
  exports.prototype['Bemerkungen'] = undefined;
  /**
   * @member {String} BemerkungenRTF
   */
  exports.prototype['BemerkungenRTF'] = undefined;
  /**
   * @member {module:model/Option} Option
   */
  exports.prototype['Option'] = undefined;
  /**
   * @member {String} Sprache
   */
  exports.prototype['Sprache'] = undefined;
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


