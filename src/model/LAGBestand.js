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
    define(['ApiClient', 'model/Artikel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Artikel'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.LAGBestand = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Artikel);
  }
}(this, function(ApiClient, Artikel) {
  'use strict';




  /**
   * The LAGBestand model module.
   * @module model/LAGBestand
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGBestand</code>.
   * @alias module:model/LAGBestand
   * @class
   * @param artikel {module:model/Artikel} 
   * @param bestand {Number} 
   * @param bestandVerr {Number} 
   * @param bestandVerfuegbar {Number} 
   * @param lagerort {String} 
   * @param lagerplatz {String} 
   * @param charge {String} 
   * @param reserviert {Number} 
   * @param rueckstand {Number} 
   * @param bestellt {Number} 
   */
  var exports = function(artikel, bestand, bestandVerr, bestandVerfuegbar, lagerort, lagerplatz, charge, reserviert, rueckstand, bestellt) {
    var _this = this;

    _this['Artikel'] = artikel;
    _this['Bestand'] = bestand;
    _this['BestandVerr'] = bestandVerr;
    _this['BestandVerfuegbar'] = bestandVerfuegbar;
    _this['Lagerort'] = lagerort;
    _this['Lagerplatz'] = lagerplatz;
    _this['Charge'] = charge;
    _this['Reserviert'] = reserviert;
    _this['Rueckstand'] = rueckstand;
    _this['Bestellt'] = bestellt;
  };

  /**
   * Constructs a <code>LAGBestand</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGBestand} obj Optional instance to populate.
   * @return {module:model/LAGBestand} The populated <code>LAGBestand</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Artikel')) {
        obj['Artikel'] = Artikel.constructFromObject(data['Artikel']);
      }
      if (data.hasOwnProperty('Bestand')) {
        obj['Bestand'] = ApiClient.convertToType(data['Bestand'], 'Number');
      }
      if (data.hasOwnProperty('BestandVerr')) {
        obj['BestandVerr'] = ApiClient.convertToType(data['BestandVerr'], 'Number');
      }
      if (data.hasOwnProperty('BestandVerfuegbar')) {
        obj['BestandVerfuegbar'] = ApiClient.convertToType(data['BestandVerfuegbar'], 'Number');
      }
      if (data.hasOwnProperty('Lagerort')) {
        obj['Lagerort'] = ApiClient.convertToType(data['Lagerort'], 'String');
      }
      if (data.hasOwnProperty('Lagerplatz')) {
        obj['Lagerplatz'] = ApiClient.convertToType(data['Lagerplatz'], 'String');
      }
      if (data.hasOwnProperty('Charge')) {
        obj['Charge'] = ApiClient.convertToType(data['Charge'], 'String');
      }
      if (data.hasOwnProperty('Reserviert')) {
        obj['Reserviert'] = ApiClient.convertToType(data['Reserviert'], 'Number');
      }
      if (data.hasOwnProperty('Rueckstand')) {
        obj['Rueckstand'] = ApiClient.convertToType(data['Rueckstand'], 'Number');
      }
      if (data.hasOwnProperty('Bestellt')) {
        obj['Bestellt'] = ApiClient.convertToType(data['Bestellt'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Artikel} Artikel
   */
  exports.prototype['Artikel'] = undefined;
  /**
   * @member {Number} Bestand
   */
  exports.prototype['Bestand'] = undefined;
  /**
   * @member {Number} BestandVerr
   */
  exports.prototype['BestandVerr'] = undefined;
  /**
   * @member {Number} BestandVerfuegbar
   */
  exports.prototype['BestandVerfuegbar'] = undefined;
  /**
   * @member {String} Lagerort
   */
  exports.prototype['Lagerort'] = undefined;
  /**
   * @member {String} Lagerplatz
   */
  exports.prototype['Lagerplatz'] = undefined;
  /**
   * @member {String} Charge
   */
  exports.prototype['Charge'] = undefined;
  /**
   * @member {Number} Reserviert
   */
  exports.prototype['Reserviert'] = undefined;
  /**
   * @member {Number} Rueckstand
   */
  exports.prototype['Rueckstand'] = undefined;
  /**
   * @member {Number} Bestellt
   */
  exports.prototype['Bestellt'] = undefined;



  return exports;
}));


