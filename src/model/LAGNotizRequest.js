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
    define(['ApiClient', 'model/Artikel', 'model/Mitarbeiter', 'model/Notizart', 'model/Sprache'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Artikel'), require('./Mitarbeiter'), require('./Notizart'), require('./Sprache'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.LAGNotizRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Artikel, root.ProffixRestApiRequestSammlung.Mitarbeiter, root.ProffixRestApiRequestSammlung.Notizart, root.ProffixRestApiRequestSammlung.Sprache);
  }
}(this, function(ApiClient, Artikel, Mitarbeiter, Notizart, Sprache) {
  'use strict';




  /**
   * The LAGNotizRequest model module.
   * @module model/LAGNotizRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGNotizRequest</code>.
   * @alias module:model/LAGNotizRequest
   * @class
   * @param artikel {module:model/Artikel} 
   * @param mitarbeiter {module:model/Mitarbeiter} 
   * @param notizart {module:model/Notizart} 
   * @param datum {String} 
   * @param termin {String} 
   * @param notiz {String} 
   * @param alarmDatumVon {String} 
   * @param alarmDatumBis {String} 
   * @param kundeninstallation {Boolean} 
   * @param auftragsbearbeitung {Boolean} 
   * @param einkauf {Boolean} 
   * @param intern {Boolean} 
   * @param webshop {Boolean} 
   * @param sprache {module:model/Sprache} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(artikel, mitarbeiter, notizart, datum, termin, notiz, alarmDatumVon, alarmDatumBis, kundeninstallation, auftragsbearbeitung, einkauf, intern, webshop, sprache, zusatzfelder) {
    var _this = this;

    _this['Artikel'] = artikel;
    _this['Mitarbeiter'] = mitarbeiter;
    _this['Notizart'] = notizart;
    _this['Datum'] = datum;
    _this['Termin'] = termin;
    _this['Notiz'] = notiz;
    _this['AlarmDatumVon'] = alarmDatumVon;
    _this['AlarmDatumBis'] = alarmDatumBis;
    _this['Kundeninstallation'] = kundeninstallation;
    _this['Auftragsbearbeitung'] = auftragsbearbeitung;
    _this['Einkauf'] = einkauf;
    _this['Intern'] = intern;
    _this['Webshop'] = webshop;
    _this['Sprache'] = sprache;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>LAGNotizRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGNotizRequest} obj Optional instance to populate.
   * @return {module:model/LAGNotizRequest} The populated <code>LAGNotizRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Artikel')) {
        obj['Artikel'] = Artikel.constructFromObject(data['Artikel']);
      }
      if (data.hasOwnProperty('Mitarbeiter')) {
        obj['Mitarbeiter'] = Mitarbeiter.constructFromObject(data['Mitarbeiter']);
      }
      if (data.hasOwnProperty('Notizart')) {
        obj['Notizart'] = Notizart.constructFromObject(data['Notizart']);
      }
      if (data.hasOwnProperty('Datum')) {
        obj['Datum'] = ApiClient.convertToType(data['Datum'], 'String');
      }
      if (data.hasOwnProperty('Termin')) {
        obj['Termin'] = ApiClient.convertToType(data['Termin'], 'String');
      }
      if (data.hasOwnProperty('Notiz')) {
        obj['Notiz'] = ApiClient.convertToType(data['Notiz'], 'String');
      }
      if (data.hasOwnProperty('AlarmDatumVon')) {
        obj['AlarmDatumVon'] = ApiClient.convertToType(data['AlarmDatumVon'], 'String');
      }
      if (data.hasOwnProperty('AlarmDatumBis')) {
        obj['AlarmDatumBis'] = ApiClient.convertToType(data['AlarmDatumBis'], 'String');
      }
      if (data.hasOwnProperty('Kundeninstallation')) {
        obj['Kundeninstallation'] = ApiClient.convertToType(data['Kundeninstallation'], 'Boolean');
      }
      if (data.hasOwnProperty('Auftragsbearbeitung')) {
        obj['Auftragsbearbeitung'] = ApiClient.convertToType(data['Auftragsbearbeitung'], 'Boolean');
      }
      if (data.hasOwnProperty('Einkauf')) {
        obj['Einkauf'] = ApiClient.convertToType(data['Einkauf'], 'Boolean');
      }
      if (data.hasOwnProperty('Intern')) {
        obj['Intern'] = ApiClient.convertToType(data['Intern'], 'Boolean');
      }
      if (data.hasOwnProperty('Webshop')) {
        obj['Webshop'] = ApiClient.convertToType(data['Webshop'], 'Boolean');
      }
      if (data.hasOwnProperty('Sprache')) {
        obj['Sprache'] = Sprache.constructFromObject(data['Sprache']);
      }
      if (data.hasOwnProperty('Zusatzfelder')) {
        obj['Zusatzfelder'] = ApiClient.convertToType(data['Zusatzfelder'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Artikel} Artikel
   */
  exports.prototype['Artikel'] = undefined;
  /**
   * @member {module:model/Mitarbeiter} Mitarbeiter
   */
  exports.prototype['Mitarbeiter'] = undefined;
  /**
   * @member {module:model/Notizart} Notizart
   */
  exports.prototype['Notizart'] = undefined;
  /**
   * @member {String} Datum
   */
  exports.prototype['Datum'] = undefined;
  /**
   * @member {String} Termin
   */
  exports.prototype['Termin'] = undefined;
  /**
   * @member {String} Notiz
   */
  exports.prototype['Notiz'] = undefined;
  /**
   * @member {String} AlarmDatumVon
   */
  exports.prototype['AlarmDatumVon'] = undefined;
  /**
   * @member {String} AlarmDatumBis
   */
  exports.prototype['AlarmDatumBis'] = undefined;
  /**
   * @member {Boolean} Kundeninstallation
   */
  exports.prototype['Kundeninstallation'] = undefined;
  /**
   * @member {Boolean} Auftragsbearbeitung
   */
  exports.prototype['Auftragsbearbeitung'] = undefined;
  /**
   * @member {Boolean} Einkauf
   */
  exports.prototype['Einkauf'] = undefined;
  /**
   * @member {Boolean} Intern
   */
  exports.prototype['Intern'] = undefined;
  /**
   * @member {Boolean} Webshop
   */
  exports.prototype['Webshop'] = undefined;
  /**
   * @member {module:model/Sprache} Sprache
   */
  exports.prototype['Sprache'] = undefined;
  /**
   * @member {Object} Zusatzfelder
   */
  exports.prototype['Zusatzfelder'] = undefined;



  return exports;
}));


