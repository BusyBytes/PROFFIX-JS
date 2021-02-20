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
    instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
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

  describe('BASInstallationInstallationNr', function() {
    it('should create an instance of BASInstallationInstallationNr', function() {
      // uncomment below and update the code to test BASInstallationInstallationNr
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.BASInstallationInstallationNr);
    });

    it('should have the property installationNr (base name: "InstallationNr")', function() {
      // uncomment below and update the code to test the property installationNr
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property standort (base name: "Standort")', function() {
      // uncomment below and update the code to test the property standort
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property betreueradresse (base name: "Betreueradresse")', function() {
      // uncomment below and update the code to test the property betreueradresse
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property externadresse (base name: "Externadresse")', function() {
      // uncomment below and update the code to test the property externadresse
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property prioritaet (base name: "Prioritaet")', function() {
      // uncomment below and update the code to test the property prioritaet
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property artikel (base name: "Artikel")', function() {
      // uncomment below and update the code to test the property artikel
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung1 (base name: "Bezeichnung1")', function() {
      // uncomment below and update the code to test the property bezeichnung1
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung2 (base name: "Bezeichnung2")', function() {
      // uncomment below and update the code to test the property bezeichnung2
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung3 (base name: "Bezeichnung3")', function() {
      // uncomment below and update the code to test the property bezeichnung3
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung4 (base name: "Bezeichnung4")', function() {
      // uncomment below and update the code to test the property bezeichnung4
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung5 (base name: "Bezeichnung5")', function() {
      // uncomment below and update the code to test the property bezeichnung5
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property gewicht (base name: "Gewicht")', function() {
      // uncomment below and update the code to test the property gewicht
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property seriennummer (base name: "Seriennummer")', function() {
      // uncomment below and update the code to test the property seriennummer
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property konfigurationsID (base name: "KonfigurationsID")', function() {
      // uncomment below and update the code to test the property konfigurationsID
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property produktNr (base name: "ProduktNr")', function() {
      // uncomment below and update the code to test the property produktNr
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property installationstermin (base name: "Installationstermin")', function() {
      // uncomment below and update the code to test the property installationstermin
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property garantieende (base name: "Garantieende")', function() {
      // uncomment below and update the code to test the property garantieende
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property garantiezusatz (base name: "Garantiezusatz")', function() {
      // uncomment below and update the code to test the property garantiezusatz
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property auftrag (base name: "Auftrag")', function() {
      // uncomment below and update the code to test the property auftrag
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property vertragstyp (base name: "Vertragstyp")', function() {
      // uncomment below and update the code to test the property vertragstyp
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property herstellervertrag (base name: "Herstellervertrag")', function() {
      // uncomment below and update the code to test the property herstellervertrag
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property suchfeld (base name: "Suchfeld")', function() {
      // uncomment below and update the code to test the property suchfeld
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property artikelklasse (base name: "Artikelklasse")', function() {
      // uncomment below and update the code to test the property artikelklasse
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property artikelgruppe (base name: "Artikelgruppe")', function() {
      // uncomment below and update the code to test the property artikelgruppe
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property artikeluntergruppe (base name: "Artikeluntergruppe")', function() {
      // uncomment below and update the code to test the property artikeluntergruppe
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property menge (base name: "Menge")', function() {
      // uncomment below and update the code to test the property menge
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property anlage (base name: "Anlage")', function() {
      // uncomment below and update the code to test the property anlage
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property inhaber (base name: "Inhaber")', function() {
      // uncomment below and update the code to test the property inhaber
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property istLagerinstallation (base name: "IstLagerinstallation")', function() {
      // uncomment below and update the code to test the property istLagerinstallation
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property geloescht (base name: "Geloescht")', function() {
      // uncomment below and update the code to test the property geloescht
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property global (base name: "Global")', function() {
      // uncomment below and update the code to test the property global
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property standard (base name: "Standard")', function() {
      // uncomment below and update the code to test the property standard
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.BASInstallationInstallationNr();
      //expect(instance).to.be();
    });

  });

}));
