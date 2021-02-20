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
    define(['ApiClient', 'model/Adresse', 'model/Dokumenttyp', 'model/Positionen2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Adresse'), require('./Dokumenttyp'), require('./Positionen2'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.AUFDokumentDokumentNrumwandelnRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Adresse, root.ProffixRestApiRequestSammlung.Dokumenttyp, root.ProffixRestApiRequestSammlung.Positionen2);
  }
}(this, function(ApiClient, Adresse, Dokumenttyp, Positionen2) {
  'use strict';




  /**
   * The AUFDokumentDokumentNrumwandelnRequest model module.
   * @module model/AUFDokumentDokumentNrumwandelnRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>AUFDokumentDokumentNrumwandelnRequest</code>.
   * @alias module:model/AUFDokumentDokumentNrumwandelnRequest
   * @class
   * @param dokumentNr {Number} 
   * @param adresse {module:model/Adresse} 
   * @param dokumenttyp {module:model/Dokumenttyp} 
   * @param datum {String} 
   * @param positionen {Array.<module:model/Positionen2>} 
   */
  var exports = function(dokumentNr, adresse, dokumenttyp, datum, positionen) {
    var _this = this;

    _this['DokumentNr'] = dokumentNr;
    _this['Adresse'] = adresse;
    _this['Dokumenttyp'] = dokumenttyp;
    _this['Datum'] = datum;
    _this['Positionen'] = positionen;
  };

  /**
   * Constructs a <code>AUFDokumentDokumentNrumwandelnRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AUFDokumentDokumentNrumwandelnRequest} obj Optional instance to populate.
   * @return {module:model/AUFDokumentDokumentNrumwandelnRequest} The populated <code>AUFDokumentDokumentNrumwandelnRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DokumentNr')) {
        obj['DokumentNr'] = ApiClient.convertToType(data['DokumentNr'], 'Number');
      }
      if (data.hasOwnProperty('Adresse')) {
        obj['Adresse'] = Adresse.constructFromObject(data['Adresse']);
      }
      if (data.hasOwnProperty('Dokumenttyp')) {
        obj['Dokumenttyp'] = Dokumenttyp.constructFromObject(data['Dokumenttyp']);
      }
      if (data.hasOwnProperty('Datum')) {
        obj['Datum'] = ApiClient.convertToType(data['Datum'], 'String');
      }
      if (data.hasOwnProperty('Positionen')) {
        obj['Positionen'] = ApiClient.convertToType(data['Positionen'], [Positionen2]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} DokumentNr
   */
  exports.prototype['DokumentNr'] = undefined;
  /**
   * @member {module:model/Adresse} Adresse
   */
  exports.prototype['Adresse'] = undefined;
  /**
   * @member {module:model/Dokumenttyp} Dokumenttyp
   */
  exports.prototype['Dokumenttyp'] = undefined;
  /**
   * @member {String} Datum
   */
  exports.prototype['Datum'] = undefined;
  /**
   * @member {Array.<module:model/Positionen2>} Positionen
   */
  exports.prototype['Positionen'] = undefined;



  return exports;
}));


