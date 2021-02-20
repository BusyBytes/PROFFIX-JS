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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProffixRestApiRequestSammlung);
  }
}(this, function(expect, ProffixRestApiRequestSammlung) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ZEIStundenStundenNr', function() {
    it('should create an instance of ZEIStundenStundenNr', function() {
      // uncomment below and update the code to test ZEIStundenStundenNr
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.ZEIStundenStundenNr);
    });

    it('should have the property stundenNr (base name: "StundenNr")', function() {
      // uncomment below and update the code to test the property stundenNr
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property mitarbeiter (base name: "Mitarbeiter")', function() {
      // uncomment below and update the code to test the property mitarbeiter
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property stundenart (base name: "Stundenart")', function() {
      // uncomment below and update the code to test the property stundenart
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property datum (base name: "Datum")', function() {
      // uncomment below and update the code to test the property datum
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property startZeit (base name: "StartZeit")', function() {
      // uncomment below and update the code to test the property startZeit
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property endZeit (base name: "EndZeit")', function() {
      // uncomment below and update the code to test the property endZeit
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property stunden (base name: "Stunden")', function() {
      // uncomment below and update the code to test the property stunden
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property pause (base name: "Pause")', function() {
      // uncomment below and update the code to test the property pause
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property kaWo (base name: "KaWo")', function() {
      // uncomment below and update the code to test the property kaWo
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property quelle (base name: "Quelle")', function() {
      // uncomment below and update the code to test the property quelle
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property quelleStop (base name: "QuelleStop")', function() {
      // uncomment below and update the code to test the property quelleStop
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "Latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "Longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property accuracy (base name: "Accuracy")', function() {
      // uncomment below and update the code to test the property accuracy
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property latitudeStop (base name: "LatitudeStop")', function() {
      // uncomment below and update the code to test the property latitudeStop
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property longitudeStop (base name: "LongitudeStop")', function() {
      // uncomment below and update the code to test the property longitudeStop
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property accuracyStop (base name: "AccuracyStop")', function() {
      // uncomment below and update the code to test the property accuracyStop
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property bemerkungen (base name: "Bemerkungen")', function() {
      // uncomment below and update the code to test the property bemerkungen
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property kuerzung (base name: "Kuerzung")', function() {
      // uncomment below and update the code to test the property kuerzung
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property kuerzungMonat (base name: "KuerzungMonat")', function() {
      // uncomment below and update the code to test the property kuerzungMonat
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property gesperrt (base name: "Gesperrt")', function() {
      // uncomment below and update the code to test the property gesperrt
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.ZEIStundenStundenNr();
      //expect(instance).to.be();
    });

  });

}));
