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
    instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
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

  describe('LAGChargeRequest', function() {
    it('should create an instance of LAGChargeRequest', function() {
      // uncomment below and update the code to test LAGChargeRequest
      //var instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.LAGChargeRequest);
    });

    it('should have the property chargeNr (base name: "ChargeNr")', function() {
      // uncomment below and update the code to test the property chargeNr
      //var instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung (base name: "Bezeichnung")', function() {
      // uncomment below and update the code to test the property bezeichnung
      //var instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
      //expect(instance).to.be();
    });

    it('should have the property inaktiv (base name: "Inaktiv")', function() {
      // uncomment below and update the code to test the property inaktiv
      //var instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
      //expect(instance).to.be();
    });

    it('should have the property auslaufsdatum (base name: "Auslaufsdatum")', function() {
      // uncomment below and update the code to test the property auslaufsdatum
      //var instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
      //expect(instance).to.be();
    });

    it('should have the property haltbarkeit (base name: "Haltbarkeit")', function() {
      // uncomment below and update the code to test the property haltbarkeit
      //var instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
      //expect(instance).to.be();
    });

    it('should have the property herstelldatum (base name: "Herstelldatum")', function() {
      // uncomment below and update the code to test the property herstelldatum
      //var instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
      //expect(instance).to.be();
    });

    it('should have the property ursprungsCharge (base name: "UrsprungsCharge")', function() {
      // uncomment below and update the code to test the property ursprungsCharge
      //var instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.LAGChargeRequest();
      //expect(instance).to.be();
    });

  });

}));
