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
    instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
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

  describe('FIBBuchungsartBuchungsartNr', function() {
    it('should create an instance of FIBBuchungsartBuchungsartNr', function() {
      // uncomment below and update the code to test FIBBuchungsartBuchungsartNr
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr);
    });

    it('should have the property buchungsartNr (base name: "BuchungsartNr")', function() {
      // uncomment below and update the code to test the property buchungsartNr
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung (base name: "Bezeichnung")', function() {
      // uncomment below and update the code to test the property bezeichnung
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property bereich (base name: "Bereich")', function() {
      // uncomment below and update the code to test the property bereich
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property typ (base name: "Typ")', function() {
      // uncomment below and update the code to test the property typ
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property betragsvorschlagFw (base name: "BetragsvorschlagFw")', function() {
      // uncomment below and update the code to test the property betragsvorschlagFw
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property belegart (base name: "Belegart")', function() {
      // uncomment below and update the code to test the property belegart
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property buchungVorzeichen (base name: "BuchungVorzeichen")', function() {
      // uncomment below and update the code to test the property buchungVorzeichen
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property buchungstextvorschlag (base name: "Buchungstextvorschlag")', function() {
      // uncomment below and update the code to test the property buchungstextvorschlag
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property eroeffnungsbuchung (base name: "Eroeffnungsbuchung")', function() {
      // uncomment below and update the code to test the property eroeffnungsbuchung
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property hauptbuchungsart (base name: "Hauptbuchungsart")', function() {
      // uncomment below and update the code to test the property hauptbuchungsart
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property inaktiv (base name: "Inaktiv")', function() {
      // uncomment below and update the code to test the property inaktiv
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property keinKontoVorschlag (base name: "KeinKontoVorschlag")', function() {
      // uncomment below and update the code to test the property keinKontoVorschlag
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property sammelbuchung (base name: "Sammelbuchung")', function() {
      // uncomment below and update the code to test the property sammelbuchung
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property sammelbuchungBuchungsart (base name: "SammelbuchungBuchungsart")', function() {
      // uncomment below and update the code to test the property sammelbuchungBuchungsart
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property skontoRueckbuchung (base name: "SkontoRueckbuchung")', function() {
      // uncomment below and update the code to test the property skontoRueckbuchung
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property steuercode (base name: "Steuercode")', function() {
      // uncomment below and update the code to test the property steuercode
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property steuerRueckbuchung (base name: "SteuerRueckbuchung")', function() {
      // uncomment below and update the code to test the property steuerRueckbuchung
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property umsatzBuchung (base name: "UmsatzBuchung")', function() {
      // uncomment below and update the code to test the property umsatzBuchung
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property buchungsartenKonten (base name: "BuchungsartenKonten")', function() {
      // uncomment below and update the code to test the property buchungsartenKonten
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.FIBBuchungsartBuchungsartNr();
      //expect(instance).to.be();
    });

  });

}));
