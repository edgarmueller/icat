__docu_app_model__ = {
	"name": "partner",
	"description": "Documentation of the EPackage partner.",
	"classes": [
		{
			"name": "DOEmail",
			"description": "Documentation of the EClass DOEmail.",
			"attributes": [
				{
					"name": "AdresseOID",
					"description": "Documentation of the EAttribute AdresseOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Bezeichnung",
					"description": "Documentation of the EAttribute Bezeichnung.",
					"type": "String",
					"many": false
				},
				{
					"name": "DefaultAdresse",
					"description": "Documentation of the EAttribute DefaultAdresse.",
					"type": "String",
					"many": false
				},
				{
					"name": "EmailOID",
					"description": "Documentation of the EAttribute EmailOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "StandardEmpfaenger",
					"description": "Documentation of the EAttribute StandardEmpfaenger.",
					"type": "String",
					"many": false
				},
				{
					"name": "SuchFeld",
					"description": "Documentation of the EAttribute SuchFeld.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOPartnerSuchErgebnisse",
			"description": "Documentation of the EClass DOPartnerSuchErgebnisse.",
			"attributes": [
				{
					"name": "DQL",
					"description": "Documentation of the EAttribute DQL.",
					"type": "String",
					"many": false
				},
				{
					"name": "Message",
					"description": "Documentation of the EAttribute Message.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "PartnerSuchErgebnis",
					"description": "Documentation of the EReference PartnerSuchErgebnis.",
					"type": "DOPartnerSuchErgebnis",
					"many": true
				}
			]
		},
		{
			"name": "DOPartnerSuchErgebnis",
			"description": "Documentation of the EClass DOPartnerSuchErgebnis.",
			"attributes": [
				{
					"name": "Kontengruppe",
					"description": "Documentation of the EAttribute Kontengruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name",
					"description": "Documentation of the EAttribute Name.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name2",
					"description": "Documentation of the EAttribute Name2.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name3",
					"description": "Documentation of the EAttribute Name3.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name4",
					"description": "Documentation of the EAttribute Name4.",
					"type": "String",
					"many": false
				},
				{
					"name": "Ort",
					"description": "Documentation of the EAttribute Ort.",
					"type": "String",
					"many": false
				},
				{
					"name": "Ortsteil",
					"description": "Documentation of the EAttribute Ortsteil.",
					"type": "String",
					"many": false
				},
				{
					"name": "Partnernummer",
					"description": "Documentation of the EAttribute Partnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Partneroid",
					"description": "Documentation of the EAttribute Partneroid.",
					"type": "String",
					"many": false
				},
				{
					"name": "Plz",
					"description": "Documentation of the EAttribute Plz.",
					"type": "String",
					"many": false
				},
				{
					"name": "RowNum",
					"description": "Documentation of the EAttribute RowNum.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "Searchfield",
					"description": "Documentation of the EAttribute Searchfield.",
					"type": "String",
					"many": false
				},
				{
					"name": "Strasseundhausnr",
					"description": "Documentation of the EAttribute Strasseundhausnr.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOCallInfo",
			"description": "Documentation of the EClass DOCallInfo.",
			"attributes": [
				{
					"name": "DQL",
					"description": "Documentation of the EAttribute DQL.",
					"type": "String",
					"many": false
				},
				{
					"name": "ElapTime",
					"description": "Documentation of the EAttribute ElapTime.",
					"type": "Long",
					"many": false
				},
				{
					"name": "IntervalEnd",
					"description": "Documentation of the EAttribute IntervalEnd.",
					"type": "Long",
					"many": false
				},
				{
					"name": "IntervalStart",
					"description": "Documentation of the EAttribute IntervalStart.",
					"type": "Long",
					"many": false
				},
				{
					"name": "Message",
					"description": "Documentation of the EAttribute Message.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOPartnerAdressen",
			"description": "Documentation of the EClass DOPartnerAdressen.",
			"references": [
				{
					"name": "CallInfo",
					"description": "Documentation of the EReference CallInfo.",
					"type": "",
					"many": false
				},
				{
					"name": "Partner",
					"description": "Documentation of the EReference Partner.",
					"type": "DOPartner",
					"many": true
				},
				{
					"name": "PartnerSuchergebnis",
					"description": "Documentation of the EReference PartnerSuchergebnis.",
					"type": "DOPartnerSuchErgebnis",
					"many": true
				}
			]
		},
		{
			"name": "DOPartner",
			"description": "Documentation of the EClass DOPartner.",
			"attributes": [
				{
					"name": "AbweichenderLeistungsempfaenger",
					"description": "Documentation of the EAttribute AbweichenderLeistungsempfaenger.",
					"type": "String",
					"many": false
				},
				{
					"name": "AenderungsDatum",
					"description": "Documentation of the EAttribute AenderungsDatum.",
					"type": "Date",
					"many": false
				},
				{
					"name": "AltePartnerNummer",
					"description": "Documentation of the EAttribute AltePartnerNummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Anrede",
					"description": "Documentation of the EAttribute Anrede.",
					"type": "String",
					"many": false
				},
				{
					"name": "Ansprechpartnernummer",
					"description": "Documentation of the EAttribute Ansprechpartnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Anzeigename",
					"description": "Documentation of the EAttribute Anzeigename.",
					"type": "String",
					"many": false
				},
				{
					"name": "AuditMaengel",
					"description": "Documentation of the EAttribute AuditMaengel.",
					"type": "String",
					"many": false
				},
				{
					"name": "AuditMaengelIO",
					"description": "Documentation of the EAttribute AuditMaengelIO.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "AuftragsSperre",
					"description": "Documentation of the EAttribute AuftragsSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "BehoerdenNummer",
					"description": "Documentation of the EAttribute BehoerdenNummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Bemerkungversand",
					"description": "Documentation of the EAttribute Bemerkungversand.",
					"type": "String",
					"many": false
				},
				{
					"name": "Branche",
					"description": "Documentation of the EAttribute Branche.",
					"type": "String",
					"many": false
				},
				{
					"name": "BuchungsSperre",
					"description": "Documentation of the EAttribute BuchungsSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "CodeGruppeVers",
					"description": "Documentation of the EAttribute CodeGruppeVers.",
					"type": "String",
					"many": false
				},
				{
					"name": "DsnPartnernummer",
					"description": "Documentation of the EAttribute DsnPartnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Eintrittstr",
					"description": "Documentation of the EAttribute Eintrittstr.",
					"type": "String",
					"many": false
				},
				{
					"name": "ElektronischerRechnungsVersand",
					"description": "Documentation of the EAttribute ElektronischerRechnungsVersand.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "FAL",
					"description": "Documentation of the EAttribute FAL.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "FakturaSperre",
					"description": "Documentation of the EAttribute FakturaSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "Funktion",
					"description": "Documentation of the EAttribute Funktion.",
					"type": "String",
					"many": false
				},
				{
					"name": "Geburtsdatum",
					"description": "Documentation of the EAttribute Geburtsdatum.",
					"type": "Date",
					"many": false
				},
				{
					"name": "Geschlecht",
					"description": "Documentation of the EAttribute Geschlecht.",
					"type": "String",
					"many": false
				},
				{
					"name": "Hauptpartnernummer",
					"description": "Documentation of the EAttribute Hauptpartnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "InformationHinweis",
					"description": "Documentation of the EAttribute InformationHinweis.",
					"type": "Long",
					"many": false
				},
				{
					"name": "KnzSammel",
					"description": "Documentation of the EAttribute KnzSammel.",
					"type": "String",
					"many": false
				},
				{
					"name": "KnzSonderKunde",
					"description": "Documentation of the EAttribute KnzSonderKunde.",
					"type": "String",
					"many": false
				},
				{
					"name": "KnzZahlart",
					"description": "Documentation of the EAttribute KnzZahlart.",
					"type": "String",
					"many": false
				},
				{
					"name": "KonditionsGruppeGA",
					"description": "Documentation of the EAttribute KonditionsGruppeGA.",
					"type": "String",
					"many": false
				},
				{
					"name": "KontaktSperre",
					"description": "Documentation of the EAttribute KontaktSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "Kontengruppe",
					"description": "Documentation of the EAttribute Kontengruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "Kundengruppe",
					"description": "Documentation of the EAttribute Kundengruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "LieferSperre",
					"description": "Documentation of the EAttribute LieferSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "LoeschSperre",
					"description": "Documentation of the EAttribute LoeschSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "LoeschVormerkung",
					"description": "Documentation of the EAttribute LoeschVormerkung.",
					"type": "String",
					"many": false
				},
				{
					"name": "Lohnfaktoren",
					"description": "Documentation of the EAttribute Lohnfaktoren.",
					"type": "String",
					"many": false
				},
				{
					"name": "MitarbeiterKreis",
					"description": "Documentation of the EAttribute MitarbeiterKreis.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mithilfe",
					"description": "Documentation of the EAttribute Mithilfe.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mypartner",
					"description": "Documentation of the EAttribute Mypartner.",
					"type": "String",
					"many": false
				},
				{
					"name": "Myprintjob",
					"description": "Documentation of the EAttribute Myprintjob.",
					"type": "String",
					"many": false
				},
				{
					"name": "Myprobjaendauftrag",
					"description": "Documentation of the EAttribute Myprobjaendauftrag.",
					"type": "String",
					"many": false
				},
				{
					"name": "NLL",
					"description": "Documentation of the EAttribute NLL.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "Name",
					"description": "Documentation of the EAttribute Name.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name2",
					"description": "Documentation of the EAttribute Name2.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name3",
					"description": "Documentation of the EAttribute Name3.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name4",
					"description": "Documentation of the EAttribute Name4.",
					"type": "String",
					"many": false
				},
				{
					"name": "OU",
					"description": "Documentation of the EAttribute OU.",
					"type": "String",
					"many": false
				},
				{
					"name": "PartnerOID",
					"description": "Documentation of the EAttribute PartnerOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Partnernummer",
					"description": "Documentation of the EAttribute Partnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "PersonalNummer",
					"description": "Documentation of the EAttribute PersonalNummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Preisgruppe",
					"description": "Documentation of the EAttribute Preisgruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "PreislistenTyp",
					"description": "Documentation of the EAttribute PreislistenTyp.",
					"type": "String",
					"many": false
				},
				{
					"name": "Rentner",
					"description": "Documentation of the EAttribute Rentner.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "RollenTyp",
					"description": "Documentation of the EAttribute RollenTyp.",
					"type": "String",
					"many": false
				},
				{
					"name": "Sepamandat",
					"description": "Documentation of the EAttribute Sepamandat.",
					"type": "String",
					"many": false
				},
				{
					"name": "Sprache",
					"description": "Documentation of the EAttribute Sprache.",
					"type": "String",
					"many": false
				},
				{
					"name": "Steuernummer1",
					"description": "Documentation of the EAttribute Steuernummer1.",
					"type": "String",
					"many": false
				},
				{
					"name": "Titel1",
					"description": "Documentation of the EAttribute Titel1.",
					"type": "String",
					"many": false
				},
				{
					"name": "Titel2",
					"description": "Documentation of the EAttribute Titel2.",
					"type": "String",
					"many": false
				},
				{
					"name": "TitelDekraIntern",
					"description": "Documentation of the EAttribute TitelDekraIntern.",
					"type": "String",
					"many": false
				},
				{
					"name": "TitelDekraIntern2",
					"description": "Documentation of the EAttribute TitelDekraIntern2.",
					"type": "String",
					"many": false
				},
				{
					"name": "UmsatzsteuerIdentNr",
					"description": "Documentation of the EAttribute UmsatzsteuerIdentNr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Unternehmen",
					"description": "Documentation of the EAttribute Unternehmen.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "VerkaeuferGruppe",
					"description": "Documentation of the EAttribute VerkaeuferGruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "VerkaufsBuero",
					"description": "Documentation of the EAttribute VerkaufsBuero.",
					"type": "String",
					"many": false
				},
				{
					"name": "Versandblattart",
					"description": "Documentation of the EAttribute Versandblattart.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "VertriebsText",
					"description": "Documentation of the EAttribute VertriebsText.",
					"type": "String",
					"many": false
				},
				{
					"name": "Verwaltungva",
					"description": "Documentation of the EAttribute Verwaltungva.",
					"type": "String",
					"many": false
				},
				{
					"name": "Vkorg",
					"description": "Documentation of the EAttribute Vkorg.",
					"type": "String",
					"many": false
				},
				{
					"name": "XSIType",
					"description": "Documentation of the EAttribute XSIType.",
					"type": "String",
					"many": false
				},
				{
					"name": "ZahlSperre",
					"description": "Documentation of the EAttribute ZahlSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "ZuordnungsNr",
					"description": "Documentation of the EAttribute ZuordnungsNr.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "Adresse",
					"description": "Documentation of the EReference Adresse.",
					"type": "DOAdresse",
					"many": false
				},
				{
					"name": "Ansprechpartner",
					"description": "Documentation of the EReference Ansprechpartner.",
					"type": "DOAnsprechpartner",
					"many": true
				},
				{
					"name": "DoLohnfaktoren",
					"description": "Documentation of the EReference DoLohnfaktoren.",
					"type": "DOLohnfaktor",
					"many": false
				},
				{
					"name": "FSDZugang",
					"description": "Documentation of the EReference FSDZugang.",
					"type": "DOFSDZugangPartner",
					"many": true
				},
				{
					"name": "Klassifikation",
					"description": "Documentation of the EReference Klassifikation.",
					"type": "DOKlassifikation",
					"many": true
				},
				{
					"name": "Lohnfaktor",
					"description": "Documentation of the EReference Lohnfaktor.",
					"type": "DOLohnfaktor",
					"many": true
				},
				{
					"name": "MahnInfo",
					"description": "Documentation of the EReference MahnInfo.",
					"type": "DOMahnInfo",
					"many": true
				},
				{
					"name": "PA9030",
					"description": "Documentation of the EReference PA9030.",
					"type": "DOPA9030",
					"many": true
				},
				{
					"name": "PartnerStandardRollen",
					"description": "Documentation of the EReference PartnerStandardRollen.",
					"type": "DOPartnerStandardRollen",
					"many": true
				},
				{
					"name": "Steuerinfo",
					"description": "Documentation of the EReference Steuerinfo.",
					"type": "DOSteuerinfo",
					"many": true
				},
				{
					"name": "TechnischeHinterlegung",
					"description": "Documentation of the EReference TechnischeHinterlegung.",
					"type": "DOTechnischeHinterlegung",
					"many": true
				},
				{
					"name": "Vertriebsbereich",
					"description": "Documentation of the EReference Vertriebsbereich.",
					"type": "DOVertriebsbereich",
					"many": false
				}
			]
		},
		{
			"name": "DOAdresse",
			"description": "Documentation of the EClass DOAdresse.",
			"attributes": [
				{
					"name": "AdresseOID",
					"description": "Documentation of the EAttribute AdresseOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Bundesland",
					"description": "Documentation of the EAttribute Bundesland.",
					"type": "String",
					"many": false
				},
				{
					"name": "Gebaeude",
					"description": "Documentation of the EAttribute Gebaeude.",
					"type": "String",
					"many": false
				},
				{
					"name": "Land",
					"description": "Documentation of the EAttribute Land.",
					"type": "String",
					"many": false
				},
				{
					"name": "MobilNummer",
					"description": "Documentation of the EAttribute MobilNummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "MobilNummerAnzeigeKnz",
					"description": "Documentation of the EAttribute MobilNummerAnzeigeKnz.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "Ort",
					"description": "Documentation of the EAttribute Ort.",
					"type": "String",
					"many": false
				},
				{
					"name": "OrtPlz",
					"description": "Documentation of the EAttribute OrtPlz.",
					"type": "String",
					"many": false
				},
				{
					"name": "Ortsteil",
					"description": "Documentation of the EAttribute Ortsteil.",
					"type": "String",
					"many": false
				},
				{
					"name": "Plz",
					"description": "Documentation of the EAttribute Plz.",
					"type": "String",
					"many": false
				},
				{
					"name": "PlzDerFirma",
					"description": "Documentation of the EAttribute PlzDerFirma.",
					"type": "String",
					"many": false
				},
				{
					"name": "PlzDesPostfach",
					"description": "Documentation of the EAttribute PlzDesPostfach.",
					"type": "String",
					"many": false
				},
				{
					"name": "Postfach",
					"description": "Documentation of the EAttribute Postfach.",
					"type": "String",
					"many": false
				},
				{
					"name": "Raumnummer",
					"description": "Documentation of the EAttribute Raumnummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Stockwerk",
					"description": "Documentation of the EAttribute Stockwerk.",
					"type": "String",
					"many": false
				},
				{
					"name": "StrasseUndHausNr",
					"description": "Documentation of the EAttribute StrasseUndHausNr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Telefax",
					"description": "Documentation of the EAttribute Telefax.",
					"type": "String",
					"many": false
				},
				{
					"name": "Telefon1",
					"description": "Documentation of the EAttribute Telefon1.",
					"type": "String",
					"many": false
				},
				{
					"name": "Telefon2",
					"description": "Documentation of the EAttribute Telefon2.",
					"type": "String",
					"many": false
				},
				{
					"name": "TransportZone",
					"description": "Documentation of the EAttribute TransportZone.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "Email",
					"description": "Documentation of the EReference Email.",
					"type": "DOEmail",
					"many": true
				},
				{
					"name": "HomePage",
					"description": "Documentation of the EReference HomePage.",
					"type": "DOHomePage",
					"many": true
				}
			]
		},
		{
			"name": "DOHomePage",
			"description": "Documentation of the EClass DOHomePage.",
			"attributes": [
				{
					"name": "DefaultAdresse",
					"description": "Documentation of the EAttribute DefaultAdresse.",
					"type": "String",
					"many": false
				},
				{
					"name": "HomePageOID",
					"description": "Documentation of the EAttribute HomePageOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Standardempfaenger",
					"description": "Documentation of the EAttribute Standardempfaenger.",
					"type": "String",
					"many": false
				},
				{
					"name": "SuchFeld",
					"description": "Documentation of the EAttribute SuchFeld.",
					"type": "String",
					"many": false
				},
				{
					"name": "UriTyp",
					"description": "Documentation of the EAttribute UriTyp.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOAnsprechpartner",
			"description": "Documentation of the EClass DOAnsprechpartner.",
			"attributes": [
				{
					"name": "AenderungsDatum",
					"description": "Documentation of the EAttribute AenderungsDatum.",
					"type": "Date",
					"many": false
				},
				{
					"name": "AltePartnerNummer",
					"description": "Documentation of the EAttribute AltePartnerNummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Anrede",
					"description": "Documentation of the EAttribute Anrede.",
					"type": "String",
					"many": false
				},
				{
					"name": "Ansprechpartnernummer",
					"description": "Documentation of the EAttribute Ansprechpartnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "AuditMaengel",
					"description": "Documentation of the EAttribute AuditMaengel.",
					"type": "String",
					"many": false
				},
				{
					"name": "AuditMaengelIO",
					"description": "Documentation of the EAttribute AuditMaengelIO.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "AuftragsSperre",
					"description": "Documentation of the EAttribute AuftragsSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "Bemerkungversand",
					"description": "Documentation of the EAttribute Bemerkungversand.",
					"type": "String",
					"many": false
				},
				{
					"name": "Branche",
					"description": "Documentation of the EAttribute Branche.",
					"type": "String",
					"many": false
				},
				{
					"name": "BuchungsSperre",
					"description": "Documentation of the EAttribute BuchungsSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "CodeGruppeVers",
					"description": "Documentation of the EAttribute CodeGruppeVers.",
					"type": "String",
					"many": false
				},
				{
					"name": "DsnPartnernummer",
					"description": "Documentation of the EAttribute DsnPartnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "EintrittStr",
					"description": "Documentation of the EAttribute EintrittStr.",
					"type": "String",
					"many": false
				},
				{
					"name": "FAL",
					"description": "Documentation of the EAttribute FAL.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "FakturaSperre",
					"description": "Documentation of the EAttribute FakturaSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "Funktion",
					"description": "Documentation of the EAttribute Funktion.",
					"type": "String",
					"many": false
				},
				{
					"name": "Geburtsdatum",
					"description": "Documentation of the EAttribute Geburtsdatum.",
					"type": "Date",
					"many": false
				},
				{
					"name": "Geschlecht",
					"description": "Documentation of the EAttribute Geschlecht.",
					"type": "String",
					"many": false
				},
				{
					"name": "InformationHinweis",
					"description": "Documentation of the EAttribute InformationHinweis.",
					"type": "Long",
					"many": false
				},
				{
					"name": "KnzSammel",
					"description": "Documentation of the EAttribute KnzSammel.",
					"type": "String",
					"many": false
				},
				{
					"name": "KnzSonderKunde",
					"description": "Documentation of the EAttribute KnzSonderKunde.",
					"type": "String",
					"many": false
				},
				{
					"name": "KnzZahlart",
					"description": "Documentation of the EAttribute KnzZahlart.",
					"type": "String",
					"many": false
				},
				{
					"name": "KonditionsGruppeGA",
					"description": "Documentation of the EAttribute KonditionsGruppeGA.",
					"type": "String",
					"many": false
				},
				{
					"name": "KontaktSperre",
					"description": "Documentation of the EAttribute KontaktSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "Kontengruppe",
					"description": "Documentation of the EAttribute Kontengruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "Kundengruppe",
					"description": "Documentation of the EAttribute Kundengruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "Kurzbezeichnung",
					"description": "Documentation of the EAttribute Kurzbezeichnung.",
					"type": "String",
					"many": false
				},
				{
					"name": "LieferSperre",
					"description": "Documentation of the EAttribute LieferSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "LoeschSperre",
					"description": "Documentation of the EAttribute LoeschSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "LoeschVormerkung",
					"description": "Documentation of the EAttribute LoeschVormerkung.",
					"type": "String",
					"many": false
				},
				{
					"name": "Lohnfaktoren",
					"description": "Documentation of the EAttribute Lohnfaktoren.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mitarbeiterkreis",
					"description": "Documentation of the EAttribute Mitarbeiterkreis.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mithilfe",
					"description": "Documentation of the EAttribute Mithilfe.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mypartner",
					"description": "Documentation of the EAttribute Mypartner.",
					"type": "String",
					"many": false
				},
				{
					"name": "Myprintjob",
					"description": "Documentation of the EAttribute Myprintjob.",
					"type": "String",
					"many": false
				},
				{
					"name": "Myprobjaendauftrag",
					"description": "Documentation of the EAttribute Myprobjaendauftrag.",
					"type": "String",
					"many": false
				},
				{
					"name": "NLL",
					"description": "Documentation of the EAttribute NLL.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "Name",
					"description": "Documentation of the EAttribute Name.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name2",
					"description": "Documentation of the EAttribute Name2.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name3",
					"description": "Documentation of the EAttribute Name3.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name4",
					"description": "Documentation of the EAttribute Name4.",
					"type": "String",
					"many": false
				},
				{
					"name": "OU",
					"description": "Documentation of the EAttribute OU.",
					"type": "String",
					"many": false
				},
				{
					"name": "PartnerOID",
					"description": "Documentation of the EAttribute PartnerOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Partnernummer",
					"description": "Documentation of the EAttribute Partnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "PersonalNummer",
					"description": "Documentation of the EAttribute PersonalNummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Preisgruppe",
					"description": "Documentation of the EAttribute Preisgruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "PreislistenTyp",
					"description": "Documentation of the EAttribute PreislistenTyp.",
					"type": "String",
					"many": false
				},
				{
					"name": "Rentner",
					"description": "Documentation of the EAttribute Rentner.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "RollenTyp",
					"description": "Documentation of the EAttribute RollenTyp.",
					"type": "String",
					"many": false
				},
				{
					"name": "Sepamandat",
					"description": "Documentation of the EAttribute Sepamandat.",
					"type": "String",
					"many": false
				},
				{
					"name": "Sprache",
					"description": "Documentation of the EAttribute Sprache.",
					"type": "String",
					"many": false
				},
				{
					"name": "Steuernummer1",
					"description": "Documentation of the EAttribute Steuernummer1.",
					"type": "String",
					"many": false
				},
				{
					"name": "Titel1",
					"description": "Documentation of the EAttribute Titel1.",
					"type": "String",
					"many": false
				},
				{
					"name": "Titel2",
					"description": "Documentation of the EAttribute Titel2.",
					"type": "String",
					"many": false
				},
				{
					"name": "Titeldekraintern",
					"description": "Documentation of the EAttribute Titeldekraintern.",
					"type": "String",
					"many": false
				},
				{
					"name": "Titeldekraintern2",
					"description": "Documentation of the EAttribute Titeldekraintern2.",
					"type": "String",
					"many": false
				},
				{
					"name": "Umsatzsteueridentnr",
					"description": "Documentation of the EAttribute Umsatzsteueridentnr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Unternehmen",
					"description": "Documentation of the EAttribute Unternehmen.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "VerkaeuferGruppe",
					"description": "Documentation of the EAttribute VerkaeuferGruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "VerkaufsBuero",
					"description": "Documentation of the EAttribute VerkaufsBuero.",
					"type": "String",
					"many": false
				},
				{
					"name": "Versandblattart",
					"description": "Documentation of the EAttribute Versandblattart.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "Vertriebstext",
					"description": "Documentation of the EAttribute Vertriebstext.",
					"type": "String",
					"many": false
				},
				{
					"name": "Vkorg",
					"description": "Documentation of the EAttribute Vkorg.",
					"type": "String",
					"many": false
				},
				{
					"name": "XSIType",
					"description": "Documentation of the EAttribute XSIType.",
					"type": "String",
					"many": false
				},
				{
					"name": "ZahlSperre",
					"description": "Documentation of the EAttribute ZahlSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "ZuordnungsNr",
					"description": "Documentation of the EAttribute ZuordnungsNr.",
					"type": "Long",
					"many": false
				}
			],
			"references": [
				{
					"name": "Adresse",
					"description": "Documentation of the EReference Adresse.",
					"type": "DOAnsprechpartnerAdresse",
					"many": false
				}
			]
		},
		{
			"name": "DOAnsprechpartnerAdresse",
			"description": "Documentation of the EClass DOAnsprechpartnerAdresse.",
			"attributes": [
				{
					"name": "AdresseOID",
					"description": "Documentation of the EAttribute AdresseOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Bundesland",
					"description": "Documentation of the EAttribute Bundesland.",
					"type": "String",
					"many": false
				},
				{
					"name": "Gebaeude",
					"description": "Documentation of the EAttribute Gebaeude.",
					"type": "String",
					"many": false
				},
				{
					"name": "Land",
					"description": "Documentation of the EAttribute Land.",
					"type": "String",
					"many": false
				},
				{
					"name": "MobilNummer",
					"description": "Documentation of the EAttribute MobilNummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "MobilNummerAnzeigeKnz",
					"description": "Documentation of the EAttribute MobilNummerAnzeigeKnz.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "Ort",
					"description": "Documentation of the EAttribute Ort.",
					"type": "String",
					"many": false
				},
				{
					"name": "OrtPlz",
					"description": "Documentation of the EAttribute OrtPlz.",
					"type": "String",
					"many": false
				},
				{
					"name": "Ortsteil",
					"description": "Documentation of the EAttribute Ortsteil.",
					"type": "String",
					"many": false
				},
				{
					"name": "Plz",
					"description": "Documentation of the EAttribute Plz.",
					"type": "String",
					"many": false
				},
				{
					"name": "PlzDerFirma",
					"description": "Documentation of the EAttribute PlzDerFirma.",
					"type": "String",
					"many": false
				},
				{
					"name": "PlzDesPostfach",
					"description": "Documentation of the EAttribute PlzDesPostfach.",
					"type": "String",
					"many": false
				},
				{
					"name": "Postfach",
					"description": "Documentation of the EAttribute Postfach.",
					"type": "String",
					"many": false
				},
				{
					"name": "Raumnummer",
					"description": "Documentation of the EAttribute Raumnummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Stockwerk",
					"description": "Documentation of the EAttribute Stockwerk.",
					"type": "String",
					"many": false
				},
				{
					"name": "StrasseUndHausNr",
					"description": "Documentation of the EAttribute StrasseUndHausNr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Telefax",
					"description": "Documentation of the EAttribute Telefax.",
					"type": "String",
					"many": false
				},
				{
					"name": "Telefon1",
					"description": "Documentation of the EAttribute Telefon1.",
					"type": "String",
					"many": false
				},
				{
					"name": "Telefon2",
					"description": "Documentation of the EAttribute Telefon2.",
					"type": "String",
					"many": false
				},
				{
					"name": "TransportZone",
					"description": "Documentation of the EAttribute TransportZone.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "Email",
					"description": "Documentation of the EReference Email.",
					"type": "DOEmail",
					"many": true
				},
				{
					"name": "HomePage",
					"description": "Documentation of the EReference HomePage.",
					"type": "DOAnsprechpartnerHomePage",
					"many": true
				}
			]
		},
		{
			"name": "DOAnsprechpartnerHomePage",
			"description": "Documentation of the EClass DOAnsprechpartnerHomePage.",
			"attributes": [
				{
					"name": "DefaultAdresse",
					"description": "Documentation of the EAttribute DefaultAdresse.",
					"type": "String",
					"many": false
				},
				{
					"name": "HomePageOID",
					"description": "Documentation of the EAttribute HomePageOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Standardempfaenger",
					"description": "Documentation of the EAttribute Standardempfaenger.",
					"type": "String",
					"many": false
				},
				{
					"name": "SuchFeld",
					"description": "Documentation of the EAttribute SuchFeld.",
					"type": "String",
					"many": false
				},
				{
					"name": "UriTyp",
					"description": "Documentation of the EAttribute UriTyp.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOLohnfaktor",
			"description": "Documentation of the EClass DOLohnfaktor.",
			"attributes": [
				{
					"name": "AendDate",
					"description": "Documentation of the EAttribute AendDate.",
					"type": "Date",
					"many": false
				},
				{
					"name": "AendPers",
					"description": "Documentation of the EAttribute AendPers.",
					"type": "String",
					"many": false
				},
				{
					"name": "AenderbarDurchSv",
					"description": "Documentation of the EAttribute AenderbarDurchSv.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "CaravanGlatt",
					"description": "Documentation of the EAttribute CaravanGlatt.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "CaravanInstandset",
					"description": "Documentation of the EAttribute CaravanInstandset.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "CaravanLackieren",
					"description": "Documentation of the EAttribute CaravanLackieren.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "CaravanStrukturiert",
					"description": "Documentation of the EAttribute CaravanStrukturiert.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "CaravanUPE",
					"description": "Documentation of the EAttribute CaravanUPE.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "CaravanVerbringung",
					"description": "Documentation of the EAttribute CaravanVerbringung.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "Fahrzeugart",
					"description": "Documentation of the EAttribute Fahrzeugart.",
					"type": "Integer",
					"many": false
				},
				{
					"name": "Hersteller",
					"description": "Documentation of the EAttribute Hersteller.",
					"type": "String",
					"many": false
				},
				{
					"name": "Herstellercode",
					"description": "Documentation of the EAttribute Herstellercode.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "KraftradHerstellerFlaeche",
					"description": "Documentation of the EAttribute KraftradHerstellerFlaeche.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "KraftradKlasse1",
					"description": "Documentation of the EAttribute KraftradKlasse1.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "KraftradMetalic",
					"description": "Documentation of the EAttribute KraftradMetalic.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "KraftradPerl",
					"description": "Documentation of the EAttribute KraftradPerl.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "KraftradUPE",
					"description": "Documentation of the EAttribute KraftradUPE.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "KraftradUni",
					"description": "Documentation of the EAttribute KraftradUni.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "KraftradVerbringung",
					"description": "Documentation of the EAttribute KraftradVerbringung.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "Kurzbeschreibung",
					"description": "Documentation of the EAttribute Kurzbeschreibung.",
					"type": "String",
					"many": false
				},
				{
					"name": "LkwAZT",
					"description": "Documentation of the EAttribute LkwAZT.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwAufschlagMinEff",
					"description": "Documentation of the EAttribute LkwAufschlagMinEff.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwFlaeche",
					"description": "Documentation of the EAttribute LkwFlaeche.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwHerst",
					"description": "Documentation of the EAttribute LkwHerst.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwHerstellerFlaeche",
					"description": "Documentation of the EAttribute LkwHerstellerFlaeche.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwKlasse1",
					"description": "Documentation of the EAttribute LkwKlasse1.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwKlasse2",
					"description": "Documentation of the EAttribute LkwKlasse2.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwKlasse3",
					"description": "Documentation of the EAttribute LkwKlasse3.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwKlasse5",
					"description": "Documentation of the EAttribute LkwKlasse5.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwLackierungMaterial",
					"description": "Documentation of the EAttribute LkwLackierungMaterial.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwMaterialMet",
					"description": "Documentation of the EAttribute LkwMaterialMet.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwMaterialPerl",
					"description": "Documentation of the EAttribute LkwMaterialPerl.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwMaterialUni",
					"description": "Documentation of the EAttribute LkwMaterialUni.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwUPE",
					"description": "Documentation of the EAttribute LkwUPE.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LkwVerbringung",
					"description": "Documentation of the EAttribute LkwVerbringung.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "Lohnfaktorart",
					"description": "Documentation of the EAttribute Lohnfaktorart.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "LohnfaktorenOID",
					"description": "Documentation of the EAttribute LohnfaktorenOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "PkwAZT",
					"description": "Documentation of the EAttribute PkwAZT.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwAufschlagMinEff",
					"description": "Documentation of the EAttribute PkwAufschlagMinEff.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwFlaeche",
					"description": "Documentation of the EAttribute PkwFlaeche.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwHerst",
					"description": "Documentation of the EAttribute PkwHerst.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwHerstellerFlaeche",
					"description": "Documentation of the EAttribute PkwHerstellerFlaeche.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwKlasse1",
					"description": "Documentation of the EAttribute PkwKlasse1.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwKlasse2",
					"description": "Documentation of the EAttribute PkwKlasse2.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwKlasse3",
					"description": "Documentation of the EAttribute PkwKlasse3.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwKlasse5",
					"description": "Documentation of the EAttribute PkwKlasse5.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwLackierungMaterial",
					"description": "Documentation of the EAttribute PkwLackierungMaterial.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwMaterialMet",
					"description": "Documentation of the EAttribute PkwMaterialMet.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwMaterialPerl",
					"description": "Documentation of the EAttribute PkwMaterialPerl.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwMaterialUni",
					"description": "Documentation of the EAttribute PkwMaterialUni.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwUPE",
					"description": "Documentation of the EAttribute PkwUPE.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "PkwVerbringung",
					"description": "Documentation of the EAttribute PkwVerbringung.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "ProductKey",
					"description": "Documentation of the EAttribute ProductKey.",
					"type": "String",
					"many": false
				},
				{
					"name": "VertragspartnerNr",
					"description": "Documentation of the EAttribute VertragspartnerNr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Zertifizierung",
					"description": "Documentation of the EAttribute Zertifizierung.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "RandfahnenCode",
					"description": "Documentation of the EReference RandfahnenCode.",
					"type": "DORandfahnenCode",
					"many": true
				}
			]
		},
		{
			"name": "DORandfahnenCode",
			"description": "Documentation of the EClass DORandfahnenCode.",
			"attributes": [
				{
					"name": "FahrzeugArt",
					"description": "Documentation of the EAttribute FahrzeugArt.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "Oid",
					"description": "Documentation of the EAttribute Oid.",
					"type": "String",
					"many": false
				},
				{
					"name": "RandfahnenCode",
					"description": "Documentation of the EAttribute RandfahnenCode.",
					"type": "String",
					"many": false
				},
				{
					"name": "Wert",
					"description": "Documentation of the EAttribute Wert.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOFSDZugangPartner",
			"description": "Documentation of the EClass DOFSDZugangPartner.",
			"attributes": [
				{
					"name": "Fsdkennung",
					"description": "Documentation of the EAttribute Fsdkennung.",
					"type": "String",
					"many": false
				},
				{
					"name": "Fsdkennungabstr",
					"description": "Documentation of the EAttribute Fsdkennungabstr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Fsdkennungbisstr",
					"description": "Documentation of the EAttribute Fsdkennungbisstr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Lfdnr",
					"description": "Documentation of the EAttribute Lfdnr.",
					"type": "Integer",
					"many": false
				},
				{
					"name": "Nname",
					"description": "Documentation of the EAttribute Nname.",
					"type": "String",
					"many": false
				},
				{
					"name": "Oid",
					"description": "Documentation of the EAttribute Oid.",
					"type": "String",
					"many": false
				},
				{
					"name": "Vname",
					"description": "Documentation of the EAttribute Vname.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOKlassifikation",
			"description": "Documentation of the EClass DOKlassifikation.",
			"attributes": [
				{
					"name": "AtWrt",
					"description": "Documentation of the EAttribute AtWrt.",
					"type": "String",
					"many": false
				},
				{
					"name": "ClassType",
					"description": "Documentation of the EAttribute ClassType.",
					"type": "String",
					"many": false
				},
				{
					"name": "InternerFliesskommaWert",
					"description": "Documentation of the EAttribute InternerFliesskommaWert.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "KlassifikationClass",
					"description": "Documentation of the EAttribute KlassifikationClass.",
					"type": "String",
					"many": false
				},
				{
					"name": "KlassifikationOID",
					"description": "Documentation of the EAttribute KlassifikationOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "MassEinheit",
					"description": "Documentation of the EAttribute MassEinheit.",
					"type": "String",
					"many": false
				},
				{
					"name": "MassEinheitBis",
					"description": "Documentation of the EAttribute MassEinheitBis.",
					"type": "String",
					"many": false
				},
				{
					"name": "MaterialNummerVuG",
					"description": "Documentation of the EAttribute MaterialNummerVuG.",
					"type": "String",
					"many": false
				},
				{
					"name": "MerkmalBezeichnung",
					"description": "Documentation of the EAttribute MerkmalBezeichnung.",
					"type": "String",
					"many": false
				},
				{
					"name": "MerkmalName",
					"description": "Documentation of the EAttribute MerkmalName.",
					"type": "String",
					"many": false
				},
				{
					"name": "MerkmalWert",
					"description": "Documentation of the EAttribute MerkmalWert.",
					"type": "String",
					"many": false
				},
				{
					"name": "MerkmalWertBis",
					"description": "Documentation of the EAttribute MerkmalWertBis.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mypartner",
					"description": "Documentation of the EAttribute Mypartner.",
					"type": "String",
					"many": false
				},
				{
					"name": "OperandWertBis",
					"description": "Documentation of the EAttribute OperandWertBis.",
					"type": "String",
					"many": false
				},
				{
					"name": "OperandWertVon",
					"description": "Documentation of the EAttribute OperandWertVon.",
					"type": "String",
					"many": false
				},
				{
					"name": "ZaehlerAusprWert",
					"description": "Documentation of the EAttribute ZaehlerAusprWert.",
					"type": "BigDecimal",
					"many": false
				}
			]
		},
		{
			"name": "DOMahnInfo",
			"description": "Documentation of the EClass DOMahnInfo.",
			"attributes": [
				{
					"name": "Buchungskreis",
					"description": "Documentation of the EAttribute Buchungskreis.",
					"type": "String",
					"many": false
				},
				{
					"name": "DatumGerichtlMahnverfahrenStr",
					"description": "Documentation of the EAttribute DatumGerichtlMahnverfahrenStr.",
					"type": "String",
					"many": false
				},
				{
					"name": "DatumLetzteMahnung",
					"description": "Documentation of the EAttribute DatumLetzteMahnung.",
					"type": "Date",
					"many": false
				},
				{
					"name": "Mahnbereich",
					"description": "Documentation of the EAttribute Mahnbereich.",
					"type": "String",
					"many": false
				},
				{
					"name": "MahninfoOID",
					"description": "Documentation of the EAttribute MahninfoOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mahnsperre",
					"description": "Documentation of the EAttribute Mahnsperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mahnstufe",
					"description": "Documentation of the EAttribute Mahnstufe.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mahnverfahren",
					"description": "Documentation of the EAttribute Mahnverfahren.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mypartner",
					"description": "Documentation of the EAttribute Mypartner.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOPA9030",
			"description": "Documentation of the EClass DOPA9030.",
			"attributes": [
				{
					"name": "Hauptverantwortlicher",
					"description": "Documentation of the EAttribute Hauptverantwortlicher.",
					"type": "Boolean",
					"many": false
				},
				{
					"name": "OID",
					"description": "Documentation of the EAttribute OID.",
					"type": "String",
					"many": false
				},
				{
					"name": "ObjektID",
					"description": "Documentation of the EAttribute ObjektID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Objektbezeichnung",
					"description": "Documentation of the EAttribute Objektbezeichnung.",
					"type": "String",
					"many": false
				},
				{
					"name": "Objektkuerzel",
					"description": "Documentation of the EAttribute Objektkuerzel.",
					"type": "String",
					"many": false
				},
				{
					"name": "Verkaufergruppe",
					"description": "Documentation of the EAttribute Verkaufergruppe.",
					"type": "String",
					"many": false
				},
				{
					"name": "Verkaufsbuero",
					"description": "Documentation of the EAttribute Verkaufsbuero.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOPartnerStandardRollen",
			"description": "Documentation of the EClass DOPartnerStandardRollen.",
			"attributes": [
				{
					"name": "Kuerzel",
					"description": "Documentation of the EAttribute Kuerzel.",
					"type": "String",
					"many": false
				},
				{
					"name": "Owner",
					"description": "Documentation of the EAttribute Owner.",
					"type": "String",
					"many": false
				},
				{
					"name": "PartnerStandardRollenOID",
					"description": "Documentation of the EAttribute PartnerStandardRollenOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Partnernummer",
					"description": "Documentation of the EAttribute Partnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Sparte",
					"description": "Documentation of the EAttribute Sparte.",
					"type": "String",
					"many": false
				},
				{
					"name": "Verkaufsorganisation",
					"description": "Documentation of the EAttribute Verkaufsorganisation.",
					"type": "String",
					"many": false
				},
				{
					"name": "Vertriebsweg",
					"description": "Documentation of the EAttribute Vertriebsweg.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "Vertriebsbereich",
					"description": "Documentation of the EReference Vertriebsbereich.",
					"type": "DOVertriebsbereich",
					"many": false
				}
			]
		},
		{
			"name": "DOVertriebsbereich",
			"description": "Documentation of the EClass DOVertriebsbereich.",
			"attributes": [
				{
					"name": "AuftragsSperre",
					"description": "Documentation of the EAttribute AuftragsSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "BuchungsSperre",
					"description": "Documentation of the EAttribute BuchungsSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "FakturaSperre",
					"description": "Documentation of the EAttribute FakturaSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "KonditionsArt",
					"description": "Documentation of the EAttribute KonditionsArt.",
					"type": "String",
					"many": false
				},
				{
					"name": "KontaktSperre",
					"description": "Documentation of the EAttribute KontaktSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "LieferSperre",
					"description": "Documentation of the EAttribute LieferSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "LoeschSperre",
					"description": "Documentation of the EAttribute LoeschSperre.",
					"type": "String",
					"many": false
				},
				{
					"name": "LoeschVormerkung",
					"description": "Documentation of the EAttribute LoeschVormerkung.",
					"type": "String",
					"many": false
				},
				{
					"name": "Sparte",
					"description": "Documentation of the EAttribute Sparte.",
					"type": "String",
					"many": false
				},
				{
					"name": "VerkaufsOrganisation",
					"description": "Documentation of the EAttribute VerkaufsOrganisation.",
					"type": "String",
					"many": false
				},
				{
					"name": "VertriebsbereichOID",
					"description": "Documentation of the EAttribute VertriebsbereichOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Vertriebsweg",
					"description": "Documentation of the EAttribute Vertriebsweg.",
					"type": "String",
					"many": false
				},
				{
					"name": "ZahlSperre",
					"description": "Documentation of the EAttribute ZahlSperre.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOSteuerinfo",
			"description": "Documentation of the EClass DOSteuerinfo.",
			"attributes": [
				{
					"name": "LieferndesLand",
					"description": "Documentation of the EAttribute LieferndesLand.",
					"type": "String",
					"many": false
				},
				{
					"name": "SteuerKlassifikation",
					"description": "Documentation of the EAttribute SteuerKlassifikation.",
					"type": "String",
					"many": false
				},
				{
					"name": "SteuerinfoOID",
					"description": "Documentation of the EAttribute SteuerinfoOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "Steuertyp",
					"description": "Documentation of the EAttribute Steuertyp.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOTechnischeHinterlegung",
			"description": "Documentation of the EClass DOTechnischeHinterlegung.",
			"attributes": [
				{
					"name": "AtWrt",
					"description": "Documentation of the EAttribute AtWrt.",
					"type": "String",
					"many": false
				},
				{
					"name": "InternerFliesskommaWert",
					"description": "Documentation of the EAttribute InternerFliesskommaWert.",
					"type": "BigDecimal",
					"many": false
				},
				{
					"name": "MassEinheit",
					"description": "Documentation of the EAttribute MassEinheit.",
					"type": "String",
					"many": false
				},
				{
					"name": "MassEinheitBis",
					"description": "Documentation of the EAttribute MassEinheitBis.",
					"type": "String",
					"many": false
				},
				{
					"name": "MaterialNummerVuG",
					"description": "Documentation of the EAttribute MaterialNummerVuG.",
					"type": "String",
					"many": false
				},
				{
					"name": "MerkmalBezeichnung",
					"description": "Documentation of the EAttribute MerkmalBezeichnung.",
					"type": "String",
					"many": false
				},
				{
					"name": "MerkmalName",
					"description": "Documentation of the EAttribute MerkmalName.",
					"type": "String",
					"many": false
				},
				{
					"name": "MerkmalWert",
					"description": "Documentation of the EAttribute MerkmalWert.",
					"type": "String",
					"many": false
				},
				{
					"name": "MerkmalWertBis",
					"description": "Documentation of the EAttribute MerkmalWertBis.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mypartner",
					"description": "Documentation of the EAttribute Mypartner.",
					"type": "String",
					"many": false
				},
				{
					"name": "OperandWertBis",
					"description": "Documentation of the EAttribute OperandWertBis.",
					"type": "String",
					"many": false
				},
				{
					"name": "OperandWertVon",
					"description": "Documentation of the EAttribute OperandWertVon.",
					"type": "String",
					"many": false
				},
				{
					"name": "TechnischeHinterlegungOID",
					"description": "Documentation of the EAttribute TechnischeHinterlegungOID.",
					"type": "String",
					"many": false
				},
				{
					"name": "ZaehlerAusprWert",
					"description": "Documentation of the EAttribute ZaehlerAusprWert.",
					"type": "BigDecimal",
					"many": false
				}
			]
		},
		{
			"name": "DOPartnerRefType",
			"description": "Documentation of the EClass DOPartnerRefType.",
			"attributes": [
				{
					"name": "Partnernummer",
					"description": "Documentation of the EAttribute Partnernummer.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "Vertriebsbereich",
					"description": "Documentation of the EReference Vertriebsbereich.",
					"type": "DOVertriebsbereichType",
					"many": false
				}
			]
		},
		{
			"name": "DOVertriebsbereichType",
			"description": "Documentation of the EClass DOVertriebsbereichType.",
			"attributes": [
				{
					"name": "Sparte",
					"description": "Documentation of the EAttribute Sparte.",
					"type": "String",
					"many": false
				},
				{
					"name": "VerkaufsOrganisation",
					"description": "Documentation of the EAttribute VerkaufsOrganisation.",
					"type": "String",
					"many": false
				},
				{
					"name": "Vertriebsweg",
					"description": "Documentation of the EAttribute Vertriebsweg.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOPartnerData",
			"description": "Documentation of the EClass DOPartnerData.",
			"references": [
				{
					"name": "Partner",
					"description": "Documentation of the EReference Partner.",
					"type": "DOPartner",
					"many": true
				}
			]
		},
		{
			"name": "CallInfo",
			"description": "Documentation of the EClass CallInfo.",
			"attributes": [
				{
					"name": "DQL",
					"description": "Documentation of the EAttribute DQL.",
					"type": "String",
					"many": false
				},
				{
					"name": "ElapTime",
					"description": "Documentation of the EAttribute ElapTime.",
					"type": "String",
					"many": false
				},
				{
					"name": "Message",
					"description": "Documentation of the EAttribute Message.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOLohnfaktorenRandfahnenCode",
			"description": "Documentation of the EClass DOLohnfaktorenRandfahnenCode.",
			"attributes": [
				{
					"name": "Oid",
					"description": "Documentation of the EAttribute Oid.",
					"type": "String",
					"many": false
				},
				{
					"name": "RandfahnenCode",
					"description": "Documentation of the EAttribute RandfahnenCode.",
					"type": "String",
					"many": false
				},
				{
					"name": "Wert",
					"description": "Documentation of the EAttribute Wert.",
					"type": "String",
					"many": false
				},
				{
					"name": "FahrzeugArt",
					"description": "Documentation of the EAttribute FahrzeugArt.",
					"type": "Integer",
					"many": false
				},
				{
					"name": "Myaplohnfaktoren",
					"description": "Documentation of the EAttribute Myaplohnfaktoren.",
					"type": "String",
					"many": false
				},
				{
					"name": "Myapplohnfaktoren",
					"description": "Documentation of the EAttribute Myapplohnfaktoren.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOPHierarchy",
			"description": "Documentation of the EClass DOPHierarchy.",
			"attributes": [
				{
					"name": "GueltigAb",
					"description": "Documentation of the EAttribute GueltigAb.",
					"type": "Date",
					"many": false
				},
				{
					"name": "GueltigBis",
					"description": "Documentation of the EAttribute GueltigBis.",
					"type": "Date",
					"many": false
				},
				{
					"name": "HKunnr",
					"description": "Documentation of the EAttribute HKunnr.",
					"type": "String",
					"many": false
				},
				{
					"name": "HSpart",
					"description": "Documentation of the EAttribute HSpart.",
					"type": "String",
					"many": false
				},
				{
					"name": "HVkOrg",
					"description": "Documentation of the EAttribute HVkOrg.",
					"type": "String",
					"many": false
				},
				{
					"name": "HVtWeg",
					"description": "Documentation of the EAttribute HVtWeg.",
					"type": "String",
					"many": false
				},
				{
					"name": "Kennzeichnungknoten",
					"description": "Documentation of the EAttribute Kennzeichnungknoten.",
					"type": "String",
					"many": false
				},
				{
					"name": "Kunnr",
					"description": "Documentation of the EAttribute Kunnr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mandant",
					"description": "Documentation of the EAttribute Mandant.",
					"type": "String",
					"many": false
				},
				{
					"name": "Oid",
					"description": "Documentation of the EAttribute Oid.",
					"type": "String",
					"many": false
				},
				{
					"name": "ParentPartnerOid",
					"description": "Documentation of the EAttribute ParentPartnerOid.",
					"type": "String",
					"many": false
				},
				{
					"name": "PartnerOid",
					"description": "Documentation of the EAttribute PartnerOid.",
					"type": "String",
					"many": false
				},
				{
					"name": "Spart",
					"description": "Documentation of the EAttribute Spart.",
					"type": "String",
					"many": false
				},
				{
					"name": "Type",
					"description": "Documentation of the EAttribute Type.",
					"type": "String",
					"many": false
				},
				{
					"name": "VkOrg",
					"description": "Documentation of the EAttribute VkOrg.",
					"type": "String",
					"many": false
				},
				{
					"name": "VtWeg",
					"description": "Documentation of the EAttribute VtWeg.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOLohnfaktorenMaterialNummer",
			"description": "Documentation of the EClass DOLohnfaktorenMaterialNummer.",
			"attributes": [
				{
					"name": "Oid",
					"description": "Documentation of the EAttribute Oid.",
					"type": "String",
					"many": false
				},
				{
					"name": "MaterialNummer",
					"description": "Documentation of the EAttribute MaterialNummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "Myaplohnfaktoren",
					"description": "Documentation of the EAttribute Myaplohnfaktoren.",
					"type": "String",
					"many": false
				},
				{
					"name": "Myapplohnfaktoren",
					"description": "Documentation of the EAttribute Myapplohnfaktoren.",
					"type": "String",
					"many": false
				}
			]
		},
		{
			"name": "DOHierarchyPartner",
			"description": "Documentation of the EClass DOHierarchyPartner.",
			"attributes": [
				{
					"name": "Name",
					"description": "Documentation of the EAttribute Name.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name2",
					"description": "Documentation of the EAttribute Name2.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name3",
					"description": "Documentation of the EAttribute Name3.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name4",
					"description": "Documentation of the EAttribute Name4.",
					"type": "String",
					"many": false
				},
				{
					"name": "Ort",
					"description": "Documentation of the EAttribute Ort.",
					"type": "String",
					"many": false
				},
				{
					"name": "Partnernummer",
					"description": "Documentation of the EAttribute Partnernummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "RollenTyp",
					"description": "Documentation of the EAttribute RollenTyp.",
					"type": "String",
					"many": false
				},
				{
					"name": "StrasseUndHausNr",
					"description": "Documentation of the EAttribute StrasseUndHausNr.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "Parent",
					"description": "Documentation of the EReference Parent.",
					"type": "DOHierarchyPartner",
					"many": false
				}
			]
		},
		{
			"name": "DOPartnerHierarchie",
			"description": "Documentation of the EClass DOPartnerHierarchie.",
			"attributes": [
				{
					"name": "AnzeigenameGWM",
					"description": "Documentation of the EAttribute AnzeigenameGWM.",
					"type": "String",
					"many": false
				},
				{
					"name": "Kennzeichnungknoten",
					"description": "Documentation of the EAttribute Kennzeichnungknoten.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name",
					"description": "Documentation of the EAttribute Name.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name2",
					"description": "Documentation of the EAttribute Name2.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name3",
					"description": "Documentation of the EAttribute Name3.",
					"type": "String",
					"many": false
				},
				{
					"name": "Name4",
					"description": "Documentation of the EAttribute Name4.",
					"type": "String",
					"many": false
				},
				{
					"name": "PartnerNummer",
					"description": "Documentation of the EAttribute PartnerNummer.",
					"type": "String",
					"many": false
				},
				{
					"name": "PartnerOid",
					"description": "Documentation of the EAttribute PartnerOid.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "Adresse",
					"description": "Documentation of the EReference Adresse.",
					"type": "DOAdresse",
					"many": false
				},
				{
					"name": "CallInfo",
					"description": "Documentation of the EReference CallInfo.",
					"type": "",
					"many": false
				},
				{
					"name": "Partner",
					"description": "Documentation of the EReference Partner.",
					"type": "DOPartnerHierarchie",
					"many": true
				}
			]
		},
		{
			"name": "DOHierarchyElement",
			"description": "Documentation of the EClass DOHierarchyElement.",
			"attributes": [
				{
					"name": "CompoundKey",
					"description": "Documentation of the EAttribute CompoundKey.",
					"type": "String",
					"many": false
				},
				{
					"name": "GueltigAb",
					"description": "Documentation of the EAttribute GueltigAb.",
					"type": "Date",
					"many": false
				},
				{
					"name": "GueltigBis",
					"description": "Documentation of the EAttribute GueltigBis.",
					"type": "Date",
					"many": false
				},
				{
					"name": "HierarchyType",
					"description": "Documentation of the EAttribute HierarchyType.",
					"type": "String",
					"many": false
				},
				{
					"name": "Kennzeichnungknoten",
					"description": "Documentation of the EAttribute Kennzeichnungknoten.",
					"type": "String",
					"many": false
				},
				{
					"name": "Mandant",
					"description": "Documentation of the EAttribute Mandant.",
					"type": "String",
					"many": false
				}
			],
			"references": [
				{
					"name": "Child",
					"description": "Documentation of the EReference Child.",
					"type": "DOPartnerRefType",
					"many": false
				},
				{
					"name": "Parent",
					"description": "Documentation of the EReference Parent.",
					"type": "DOPartnerRefType",
					"many": false
				}
			]
		},
		{
			"name": "DOPartnerHierarchies",
			"description": "Documentation of the EClass DOPartnerHierarchies.",
			"references": [
				{
					"name": "CallInfo",
					"description": "Documentation of the EReference CallInfo.",
					"type": "",
					"many": false
				},
				{
					"name": "HierarchyElement",
					"description": "Documentation of the EReference HierarchyElement.",
					"type": "DOHierarchyElement",
					"many": true
				},
				{
					"name": "PartnerHierarchie",
					"description": "Documentation of the EReference PartnerHierarchie.",
					"type": "DOPartnerHierarchie",
					"many": true
				}
			]
		},
		{
			"name": "DOFSDZugang",
			"description": "Documentation of the EClass DOFSDZugang.",
			"attributes": [
				{
					"name": "Fsdkennung",
					"description": "Documentation of the EAttribute Fsdkennung.",
					"type": "String",
					"many": false
				},
				{
					"name": "Fsdkennungabstr",
					"description": "Documentation of the EAttribute Fsdkennungabstr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Fsdkennungbisstr",
					"description": "Documentation of the EAttribute Fsdkennungbisstr.",
					"type": "String",
					"many": false
				},
				{
					"name": "Lfdnr",
					"description": "Documentation of the EAttribute Lfdnr.",
					"type": "Integer",
					"many": false
				},
				{
					"name": "Nname",
					"description": "Documentation of the EAttribute Nname.",
					"type": "String",
					"many": false
				},
				{
					"name": "Oid",
					"description": "Documentation of the EAttribute Oid.",
					"type": "String",
					"many": false
				},
				{
					"name": "Vname",
					"description": "Documentation of the EAttribute Vname.",
					"type": "String",
					"many": false
				}
			]
		}
	]
}