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
    instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
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

  describe('Aufwandskonto', function() {
    it('should create an instance of Aufwandskonto', function() {
      // uncomment below and update the code to test Aufwandskonto
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.Aufwandskonto);
    });

    it('should have the property kontoNr (base name: "KontoNr")', function() {
      // uncomment below and update the code to test the property kontoNr
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung (base name: "Bezeichnung")', function() {
      // uncomment below and update the code to test the property bezeichnung
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property steuercode (base name: "Steuercode")', function() {
      // uncomment below and update the code to test the property steuercode
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property kontoklasse (base name: "Kontoklasse")', function() {
      // uncomment below and update the code to test the property kontoklasse
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property kostenstelle (base name: "Kostenstelle")', function() {
      // uncomment below and update the code to test the property kostenstelle
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property kostenstelleZwingend (base name: "KostenstelleZwingend")', function() {
      // uncomment below and update the code to test the property kostenstelleZwingend
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property kostenstelleFix (base name: "KostenstelleFix")', function() {
      // uncomment below and update the code to test the property kostenstelleFix
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property kostenart (base name: "Kostenart")', function() {
      // uncomment below and update the code to test the property kostenart
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property kostenartZwingend (base name: "KostenartZwingend")', function() {
      // uncomment below and update the code to test the property kostenartZwingend
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property kostenartFix (base name: "KostenartFix")', function() {
      // uncomment below and update the code to test the property kostenartFix
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property waehrung (base name: "Waehrung")', function() {
      // uncomment below and update the code to test the property waehrung
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property auftrag (base name: "Auftrag")', function() {
      // uncomment below and update the code to test the property auftrag
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property auftragZwingend (base name: "AuftragZwingend")', function() {
      // uncomment below and update the code to test the property auftragZwingend
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property auftragFix (base name: "AuftragFix")', function() {
      // uncomment below and update the code to test the property auftragFix
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property lohnart (base name: "Lohnart")', function() {
      // uncomment below and update the code to test the property lohnart
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property lohnartZwingend (base name: "LohnartZwingend")', function() {
      // uncomment below and update the code to test the property lohnartZwingend
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property lohnartFix (base name: "LohnartFix")', function() {
      // uncomment below and update the code to test the property lohnartFix
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property buchenInFinanzbuchhaltung (base name: "BuchenInFinanzbuchhaltung")', function() {
      // uncomment below and update the code to test the property buchenInFinanzbuchhaltung
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property buchenInDebitorenbuchhaltung (base name: "BuchenInDebitorenbuchhaltung")', function() {
      // uncomment below and update the code to test the property buchenInDebitorenbuchhaltung
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property buchenInKreditorenbuchhaltung (base name: "BuchenInKreditorenbuchhaltung")', function() {
      // uncomment below and update the code to test the property buchenInKreditorenbuchhaltung
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property buchenInAuftragsbearbeitung (base name: "BuchenInAuftragsbearbeitung")', function() {
      // uncomment below and update the code to test the property buchenInAuftragsbearbeitung
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property buchenInLeistungsverwaltung (base name: "BuchenInLeistungsverwaltung")', function() {
      // uncomment below and update the code to test the property buchenInLeistungsverwaltung
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property buchenInAnlagekonto (base name: "BuchenInAnlagekonto")', function() {
      // uncomment below and update the code to test the property buchenInAnlagekonto
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property sperre (base name: "Sperre")', function() {
      // uncomment below and update the code to test the property sperre
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.Aufwandskonto();
      //expect(instance).to.be();
    });

  });

}));
