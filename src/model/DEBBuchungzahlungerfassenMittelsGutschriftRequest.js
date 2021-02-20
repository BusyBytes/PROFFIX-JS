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
    define(['ApiClient', 'model/Adresse', 'model/Belege'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Adresse'), require('./Belege'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.DEBBuchungzahlungerfassenMittelsGutschriftRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Adresse, root.ProffixRestApiRequestSammlung.Belege);
  }
}(this, function(ApiClient, Adresse, Belege) {
  'use strict';




  /**
   * The DEBBuchungzahlungerfassenMittelsGutschriftRequest model module.
   * @module model/DEBBuchungzahlungerfassenMittelsGutschriftRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>DEBBuchungzahlungerfassenMittelsGutschriftRequest</code>.
   * @alias module:model/DEBBuchungzahlungerfassenMittelsGutschriftRequest
   * @class
   * @param buchungsdatum {String} 
   * @param adresse {module:model/Adresse} 
   * @param buchungen {Array.<String>} 
   * @param belege {Array.<module:model/Belege>} 
   */
  var exports = function(buchungsdatum, adresse, buchungen, belege) {
    var _this = this;

    _this['Buchungsdatum'] = buchungsdatum;
    _this['Adresse'] = adresse;
    _this['Buchungen'] = buchungen;
    _this['Belege'] = belege;
  };

  /**
   * Constructs a <code>DEBBuchungzahlungerfassenMittelsGutschriftRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DEBBuchungzahlungerfassenMittelsGutschriftRequest} obj Optional instance to populate.
   * @return {module:model/DEBBuchungzahlungerfassenMittelsGutschriftRequest} The populated <code>DEBBuchungzahlungerfassenMittelsGutschriftRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Buchungsdatum')) {
        obj['Buchungsdatum'] = ApiClient.convertToType(data['Buchungsdatum'], 'String');
      }
      if (data.hasOwnProperty('Adresse')) {
        obj['Adresse'] = Adresse.constructFromObject(data['Adresse']);
      }
      if (data.hasOwnProperty('Buchungen')) {
        obj['Buchungen'] = ApiClient.convertToType(data['Buchungen'], ['String']);
      }
      if (data.hasOwnProperty('Belege')) {
        obj['Belege'] = ApiClient.convertToType(data['Belege'], [Belege]);
      }
    }
    return obj;
  }

  /**
   * @member {String} Buchungsdatum
   */
  exports.prototype['Buchungsdatum'] = undefined;
  /**
   * @member {module:model/Adresse} Adresse
   */
  exports.prototype['Adresse'] = undefined;
  /**
   * @member {Array.<String>} Buchungen
   */
  exports.prototype['Buchungen'] = undefined;
  /**
   * @member {Array.<module:model/Belege>} Belege
   */
  exports.prototype['Belege'] = undefined;



  return exports;
}));


