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
    instance = new ProffixRestApiRequestSammlung.Kunde7();
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

  describe('Kunde7', function() {
    it('should create an instance of Kunde7', function() {
      // uncomment below and update the code to test Kunde7
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.Kunde7);
    });

    it('should have the property adressNr (base name: "AdressNr")', function() {
      // uncomment below and update the code to test the property adressNr
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property vorname (base name: "Vorname")', function() {
      // uncomment below and update the code to test the property vorname
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property strasse (base name: "Strasse")', function() {
      // uncomment below and update the code to test the property strasse
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property PLZ (base name: "PLZ")', function() {
      // uncomment below and update the code to test the property PLZ
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property ort (base name: "Ort")', function() {
      // uncomment below and update the code to test the property ort
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property geloescht (base name: "Geloescht")', function() {
      // uncomment below and update the code to test the property geloescht
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property adressgruppen (base name: "Adressgruppen")', function() {
      // uncomment below and update the code to test the property adressgruppen
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property anrede (base name: "Anrede")', function() {
      // uncomment below and update the code to test the property anrede
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property bemerkungen (base name: "Bemerkungen")', function() {
      // uncomment below and update the code to test the property bemerkungen
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property eMail (base name: "EMail")', function() {
      // uncomment below and update the code to test the property eMail
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property telDirekt (base name: "TelDirekt")', function() {
      // uncomment below and update the code to test the property telDirekt
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property telZentrale (base name: "TelZentrale")', function() {
      // uncomment below and update the code to test the property telZentrale
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property telPrivat (base name: "TelPrivat")', function() {
      // uncomment below and update the code to test the property telPrivat
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property fax (base name: "Fax")', function() {
      // uncomment below and update the code to test the property fax
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property mobiltelefon (base name: "Mobiltelefon")', function() {
      // uncomment below and update the code to test the property mobiltelefon
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property homepage (base name: "Homepage")', function() {
      // uncomment below and update the code to test the property homepage
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property pLZPostfach (base name: "PLZPostfach")', function() {
      // uncomment below and update the code to test the property pLZPostfach
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property postfach (base name: "Postfach")', function() {
      // uncomment below and update the code to test the property postfach
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "Region")', function() {
      // uncomment below and update the code to test the property region
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property land (base name: "Land")', function() {
      // uncomment below and update the code to test the property land
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "Longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "Latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenSteuercode (base name: "DebitorenSteuercode")', function() {
      // uncomment below and update the code to test the property debitorenSteuercode
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenSteuercodeVerwenden (base name: "DebitorenSteuercodeVerwenden")', function() {
      // uncomment below and update the code to test the property debitorenSteuercodeVerwenden
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenErtragskonto (base name: "DebitorenErtragskonto")', function() {
      // uncomment below and update the code to test the property debitorenErtragskonto
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenErtragskontoVerwenden (base name: "DebitorenErtragskontoVerwenden")', function() {
      // uncomment below and update the code to test the property debitorenErtragskontoVerwenden
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenWaehrung (base name: "DebitorenWaehrung")', function() {
      // uncomment below and update the code to test the property debitorenWaehrung
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenKostenstelle (base name: "DebitorenKostenstelle")', function() {
      // uncomment below and update the code to test the property debitorenKostenstelle
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenKostenstelleVerwenden (base name: "DebitorenKostenstelleVerwenden")', function() {
      // uncomment below and update the code to test the property debitorenKostenstelleVerwenden
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenKostenart (base name: "DebitorenKostenart")', function() {
      // uncomment below and update the code to test the property debitorenKostenart
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenKostenartVerwenden (base name: "DebitorenKostenartVerwenden")', function() {
      // uncomment below and update the code to test the property debitorenKostenartVerwenden
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property debitorenRabatt (base name: "DebitorenRabatt")', function() {
      // uncomment below and update the code to test the property debitorenRabatt
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property vertreter (base name: "Vertreter")', function() {
      // uncomment below and update the code to test the property vertreter
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property lagerpreis (base name: "Lagerpreis")', function() {
      // uncomment below and update the code to test the property lagerpreis
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.Kunde7();
      //expect(instance).to.be();
    });

  });

}));
