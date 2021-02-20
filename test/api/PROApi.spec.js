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
    instance = new ProffixRestApiRequestSammlung.PROApi();
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

  describe('PROApi', function() {
    describe('pROAuftrag', function() {
      it('should call pROAuftrag successfully', function(done) {
        //uncomment below and update the code to test pROAuftrag
        //instance.pROAuftrag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROAuftragAuftragNr', function() {
      it('should call pROAuftragAuftragNr successfully', function(done) {
        //uncomment below and update the code to test pROAuftragAuftragNr
        //instance.pROAuftragAuftragNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROBankBankNr', function() {
      it('should call pROBankBankNr successfully', function(done) {
        //uncomment below and update the code to test pROBankBankNr
        //instance.pROBankBankNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROBelegartBelegartNr', function() {
      it('should call pROBelegartBelegartNr successfully', function(done) {
        //uncomment below and update the code to test pROBelegartBelegartNr
        //instance.pROBelegartBelegartNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROBenutzereinstellung', function() {
      it('should call pROBenutzereinstellung successfully', function(done) {
        //uncomment below and update the code to test pROBenutzereinstellung
        //instance.pROBenutzereinstellung(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROBenutzereinstellungBenutzereinstellungNr', function() {
      it('should call pROBenutzereinstellungBenutzereinstellungNr successfully', function(done) {
        //uncomment below and update the code to test pROBenutzereinstellungBenutzereinstellungNr
        //instance.pROBenutzereinstellungBenutzereinstellungNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROBenutzergruppeBenutzergruppeNr', function() {
      it('should call pROBenutzergruppeBenutzergruppeNr successfully', function(done) {
        //uncomment below and update the code to test pROBenutzergruppeBenutzergruppeNr
        //instance.pROBenutzergruppeBenutzergruppeNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROBerechtigung', function() {
      it('should call pROBerechtigung successfully', function(done) {
        //uncomment below and update the code to test pROBerechtigung
        //instance.pROBerechtigung(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROBerechtigungBerechtigungNr', function() {
      it('should call pROBerechtigungBerechtigungNr successfully', function(done) {
        //uncomment below and update the code to test pROBerechtigungBerechtigungNr
        //instance.pROBerechtigungBerechtigungNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROBriefanredeBriefanredeNr', function() {
      it('should call pROBriefanredeBriefanredeNr successfully', function(done) {
        //uncomment below and update the code to test pROBriefanredeBriefanredeNr
        //instance.pROBriefanredeBriefanredeNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROBuchungstext', function() {
      it('should call pROBuchungstext successfully', function(done) {
        //uncomment below and update the code to test pROBuchungstext
        //instance.pROBuchungstext(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pRODatei', function() {
      it('should call pRODatei successfully', function(done) {
        //uncomment below and update the code to test pRODatei
        //instance.pRODatei(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pRODateiDateiNr', function() {
      it('should call pRODateiDateiNr successfully', function(done) {
        //uncomment below and update the code to test pRODateiDateiNr
        //instance.pRODateiDateiNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pRODatenbankkeyPassword', function() {
      it('should call pRODatenbankkeyPassword successfully', function(done) {
        //uncomment below and update the code to test pRODatenbankkeyPassword
        //instance.pRODatenbankkeyPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pRODruckerDruckerNr', function() {
      it('should call pRODruckerDruckerNr successfully', function(done) {
        //uncomment below and update the code to test pRODruckerDruckerNr
        //instance.pRODruckerDruckerNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROEinheitEinheitNr', function() {
      it('should call pROEinheitEinheitNr successfully', function(done) {
        //uncomment below and update the code to test pROEinheitEinheitNr
        //instance.pROEinheitEinheitNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROEinheitsmatrixEinheitLager', function() {
      it('should call pROEinheitsmatrixEinheitLager successfully', function(done) {
        //uncomment below and update the code to test pROEinheitsmatrixEinheitLager
        //instance.pROEinheitsmatrixEinheitLager(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROEinheitsmatrixEinheitLagerEinheitRechnung', function() {
      it('should call pROEinheitsmatrixEinheitLagerEinheitRechnung successfully', function(done) {
        //uncomment below and update the code to test pROEinheitsmatrixEinheitLagerEinheitRechnung
        //instance.pROEinheitsmatrixEinheitLagerEinheitRechnung(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROEinstellungModulSection', function() {
      it('should call pROEinstellungModulSection successfully', function(done) {
        //uncomment below and update the code to test pROEinstellungModulSection
        //instance.pROEinstellungModulSection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROFeiertagFeiertagNr', function() {
      it('should call pROFeiertagFeiertagNr successfully', function(done) {
        //uncomment below and update the code to test pROFeiertagFeiertagNr
        //instance.pROFeiertagFeiertagNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROFelddefinition', function() {
      it('should call pROFelddefinition successfully', function(done) {
        //uncomment below and update the code to test pROFelddefinition
        //instance.pROFelddefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROFelddefinitionTabellennameFeldname', function() {
      it('should call pROFelddefinitionTabellennameFeldname successfully', function(done) {
        //uncomment below and update the code to test pROFelddefinitionTabellennameFeldname
        //instance.pROFelddefinitionTabellennameFeldname(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROFunktionFunktionNr', function() {
      it('should call pROFunktionFunktionNr successfully', function(done) {
        //uncomment below and update the code to test pROFunktionFunktionNr
        //instance.pROFunktionFunktionNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROInfo', function() {
      it('should call pROInfo successfully', function(done) {
        //uncomment below and update the code to test pROInfo
        //instance.pROInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROKonditionKonditionNr', function() {
      it('should call pROKonditionKonditionNr successfully', function(done) {
        //uncomment below and update the code to test pROKonditionKonditionNr
        //instance.pROKonditionKonditionNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROLandLandNr', function() {
      it('should call pROLandLandNr successfully', function(done) {
        //uncomment below and update the code to test pROLandLandNr
        //instance.pROLandLandNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROLieferartLieferartNr', function() {
      it('should call pROLieferartLieferartNr successfully', function(done) {
        //uncomment below and update the code to test pROLieferartLieferartNr
        //instance.pROLieferartLieferartNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROListeListeNr', function() {
      it('should call pROListeListeNr successfully', function(done) {
        //uncomment below and update the code to test pROListeListeNr
        //instance.pROListeListeNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROListeListeNrDokumentDokumentNrzugferdgenerieren', function() {
      it('should call pROListeListeNrDokumentDokumentNrzugferdgenerieren successfully', function(done) {
        //uncomment below and update the code to test pROListeListeNrDokumentDokumentNrzugferdgenerieren
        //instance.pROListeListeNrDokumentDokumentNrzugferdgenerieren(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROListeListeNrDruckerDruckerNr', function() {
      it('should call pROListeListeNrDruckerDruckerNr successfully', function(done) {
        //uncomment below and update the code to test pROListeListeNrDruckerDruckerNr
        //instance.pROListeListeNrDruckerDruckerNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROListeListeNrgenerieren', function() {
      it('should call pROListeListeNrgenerieren successfully', function(done) {
        //uncomment below and update the code to test pROListeListeNrgenerieren
        //instance.pROListeListeNrgenerieren(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROLogin', function() {
      it('should call pROLogin successfully', function(done) {
        //uncomment below and update the code to test pROLogin
        //instance.pROLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROMitarbeiter', function() {
      it('should call pROMitarbeiter successfully', function(done) {
        //uncomment below and update the code to test pROMitarbeiter
        //instance.pROMitarbeiter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROMitarbeiterMitarbeiterNr', function() {
      it('should call pROMitarbeiterMitarbeiterNr successfully', function(done) {
        //uncomment below and update the code to test pROMitarbeiterMitarbeiterNr
        //instance.pROMitarbeiterMitarbeiterNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROMitarbeiterMitarbeiterNrBenutzer', function() {
      it('should call pROMitarbeiterMitarbeiterNrBenutzer successfully', function(done) {
        //uncomment below and update the code to test pROMitarbeiterMitarbeiterNrBenutzer
        //instance.pROMitarbeiterMitarbeiterNrBenutzer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pRORahmenvertragRahmenvertragNr', function() {
      it('should call pRORahmenvertragRahmenvertragNr successfully', function(done) {
        //uncomment below and update the code to test pRORahmenvertragRahmenvertragNr
        //instance.pRORahmenvertragRahmenvertragNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pRORechtModul', function() {
      it('should call pRORechtModul successfully', function(done) {
        //uncomment below and update the code to test pRORechtModul
        //instance.pRORechtModul(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pRORechtModulForm', function() {
      it('should call pRORechtModulForm successfully', function(done) {
        //uncomment below and update the code to test pRORechtModulForm
        //instance.pRORechtModulForm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pRORechtModulFormMenu', function() {
      it('should call pRORechtModulFormMenu successfully', function(done) {
        //uncomment below and update the code to test pRORechtModulFormMenu
        //instance.pRORechtModulFormMenu(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pRORegionRegionNr', function() {
      it('should call pRORegionRegionNr successfully', function(done) {
        //uncomment below and update the code to test pRORegionRegionNr
        //instance.pRORegionRegionNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROSollstundenplanHistorySollstundenplanHistoryNr', function() {
      it('should call pROSollstundenplanHistorySollstundenplanHistoryNr successfully', function(done) {
        //uncomment below and update the code to test pROSollstundenplanHistorySollstundenplanHistoryNr
        //instance.pROSollstundenplanHistorySollstundenplanHistoryNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROSollstundenplanSollstundenplanNr', function() {
      it('should call pROSollstundenplanSollstundenplanNr successfully', function(done) {
        //uncomment below and update the code to test pROSollstundenplanSollstundenplanNr
        //instance.pROSollstundenplanSollstundenplanNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROSpracheSpracheNr', function() {
      it('should call pROSpracheSpracheNr successfully', function(done) {
        //uncomment below and update the code to test pROSpracheSpracheNr
        //instance.pROSpracheSpracheNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROStammdaten', function() {
      it('should call pROStammdaten successfully', function(done) {
        //uncomment below and update the code to test pROStammdaten
        //instance.pROStammdaten(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROSteuercodeSteuercodeNr', function() {
      it('should call pROSteuercodeSteuercodeNr successfully', function(done) {
        //uncomment below and update the code to test pROSteuercodeSteuercodeNr
        //instance.pROSteuercodeSteuercodeNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROVertreterVertreterNr', function() {
      it('should call pROVertreterVertreterNr successfully', function(done) {
        //uncomment below and update the code to test pROVertreterVertreterNr
        //instance.pROVertreterVertreterNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROWaehrungStandard', function() {
      it('should call pROWaehrungStandard successfully', function(done) {
        //uncomment below and update the code to test pROWaehrungStandard
        //instance.pROWaehrungStandard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROWaehrungWaehrungNr', function() {
      it('should call pROWaehrungWaehrungNr successfully', function(done) {
        //uncomment below and update the code to test pROWaehrungWaehrungNr
        //instance.pROWaehrungWaehrungNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROWaehrungkurseaktualisieren', function() {
      it('should call pROWaehrungkurseaktualisieren successfully', function(done) {
        //uncomment below and update the code to test pROWaehrungkurseaktualisieren
        //instance.pROWaehrungkurseaktualisieren(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROZusatztabelleZusatztabellenname', function() {
      it('should call pROZusatztabelleZusatztabellenname successfully', function(done) {
        //uncomment below and update the code to test pROZusatztabelleZusatztabellenname
        //instance.pROZusatztabelleZusatztabellenname(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pROZusatztabelleZusatztabellennameSchlssel', function() {
      it('should call pROZusatztabelleZusatztabellennameSchlssel successfully', function(done) {
        //uncomment below and update the code to test pROZusatztabelleZusatztabellennameSchlssel
        //instance.pROZusatztabelleZusatztabellennameSchlssel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postPROZusatztabelleZusatztabellenname', function() {
      it('should call postPROZusatztabelleZusatztabellenname successfully', function(done) {
        //uncomment below and update the code to test postPROZusatztabelleZusatztabellenname
        //instance.postPROZusatztabelleZusatztabellenname(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
