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
    instance = new ProffixRestApiRequestSammlung.Buchungen();
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

  describe('Buchungen', function() {
    it('should create an instance of Buchungen', function() {
      // uncomment below and update the code to test Buchungen
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.Buchungen);
    });

    it('should have the property buchungszeileNr (base name: "BuchungszeileNr")', function() {
      // uncomment below and update the code to test the property buchungszeileNr
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property buchungsart (base name: "Buchungsart")', function() {
      // uncomment below and update the code to test the property buchungsart
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property auftrag (base name: "Auftrag")', function() {
      // uncomment below and update the code to test the property auftrag
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property belegart (base name: "Belegart")', function() {
      // uncomment below and update the code to test the property belegart
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property betraege (base name: "Betraege")', function() {
      // uncomment below and update the code to test the property betraege
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property esrNummer (base name: "EsrNummer")', function() {
      // uncomment below and update the code to test the property esrNummer
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property einzahlungName (base name: "EinzahlungName")', function() {
      // uncomment below and update the code to test the property einzahlungName
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property habenKonto (base name: "HabenKonto")', function() {
      // uncomment below and update the code to test the property habenKonto
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property sollKonto (base name: "SollKonto")', function() {
      // uncomment below and update the code to test the property sollKonto
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property waehrung (base name: "Waehrung")', function() {
      // uncomment below and update the code to test the property waehrung
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property kurs (base name: "Kurs")', function() {
      // uncomment below and update the code to test the property kurs
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property mahnCode (base name: "MahnCode")', function() {
      // uncomment below and update the code to test the property mahnCode
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property mahnDatum (base name: "MahnDatum")', function() {
      // uncomment below and update the code to test the property mahnDatum
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property steuercode (base name: "Steuercode")', function() {
      // uncomment below and update the code to test the property steuercode
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property steuerbetragFW (base name: "SteuerbetragFW")', function() {
      // uncomment below and update the code to test the property steuerbetragFW
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property steuerbetragSW (base name: "SteuerbetragSW")', function() {
      // uncomment below and update the code to test the property steuerbetragSW
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property steuerbuchungFW (base name: "SteuerbuchungFW")', function() {
      // uncomment below and update the code to test the property steuerbuchungFW
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property steuerbuchungSW (base name: "SteuerbuchungSW")', function() {
      // uncomment below and update the code to test the property steuerbuchungSW
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property steuerbetragSaldobesteuerungFW (base name: "SteuerbetragSaldobesteuerungFW")', function() {
      // uncomment below and update the code to test the property steuerbetragSaldobesteuerungFW
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property steuerbetragSaldobesteuerungSW (base name: "SteuerbetragSaldobesteuerungSW")', function() {
      // uncomment below and update the code to test the property steuerbetragSaldobesteuerungSW
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property istSteuerbuchung (base name: "IstSteuerbuchung")', function() {
      // uncomment below and update the code to test the property istSteuerbuchung
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property istErfassteBuchung (base name: "IstErfassteBuchung")', function() {
      // uncomment below and update the code to test the property istErfassteBuchung
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property zahlungsdatum (base name: "Zahlungsdatum")', function() {
      // uncomment below and update the code to test the property zahlungsdatum
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.Buchungen();
      //expect(instance).to.be();
    });

  });

}));
