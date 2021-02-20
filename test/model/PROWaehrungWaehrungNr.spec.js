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
    instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
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

  describe('PROWaehrungWaehrungNr', function() {
    it('should create an instance of PROWaehrungWaehrungNr', function() {
      // uncomment below and update the code to test PROWaehrungWaehrungNr
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr);
    });

    it('should have the property waehrungNr (base name: "WaehrungNr")', function() {
      // uncomment below and update the code to test the property waehrungNr
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung (base name: "Bezeichnung")', function() {
      // uncomment below and update the code to test the property bezeichnung
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

    it('should have the property kurs (base name: "Kurs")', function() {
      // uncomment below and update the code to test the property kurs
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

    it('should have the property verhaeltnis (base name: "Verhaeltnis")', function() {
      // uncomment below and update the code to test the property verhaeltnis
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

    it('should have the property rundung (base name: "Rundung")', function() {
      // uncomment below and update the code to test the property rundung
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.PROWaehrungWaehrungNr();
      //expect(instance).to.be();
    });

  });

}));
