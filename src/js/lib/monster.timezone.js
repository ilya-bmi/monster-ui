define(function(require) {
	var $ = require('jquery'),
		_ = require('lodash'),
		monster = require('monster');

	require('jstz');

	var timezone = {

		list: [
			'Africa/Abidjan',
			'Africa/Accra',
			'Africa/Addis_Ababa',
			'Africa/Algiers',
			'Africa/Asmera',
			'Africa/Bamako',
			'Africa/Bangui',
			'Africa/Banjul',
			'Africa/Bissau',
			'Africa/Blantyre',
			'Africa/Brazzaville',
			'Africa/Bujumbura',
			'Africa/Cairo',
			'Africa/Casablanca',
			'Africa/Ceuta',
			'Africa/Conakry',
			'Africa/Dakar',
			'Africa/Dar_es_Salaam',
			'Africa/Djibouti',
			'Africa/Douala',
			'Africa/El_Aaiun',
			'Africa/Freetown',
			'Africa/Gaborone',
			'Africa/Harare',
			'Africa/Johannesburg',
			'Africa/Kampala',
			'Africa/Khartoum',
			'Africa/Kigali',
			'Africa/Kinshasa',
			'Africa/Lagos',
			'Africa/Libreville',
			'Africa/Lome',
			'Africa/Luanda',
			'Africa/Lubumbashi',
			'Africa/Lusaka',
			'Africa/Malabo',
			'Africa/Maputo',
			'Africa/Maseru',
			'Africa/Mbabane',
			'Africa/Mogadishu',
			'Africa/Monrovia',
			'Africa/Nairobi',
			'Africa/Ndjamena',
			'Africa/Niamey',
			'Africa/Nouakchott',
			'Africa/Ouagadougou',
			'Africa/Porto-Novo',
			'Africa/Sao_Tome',
			'Africa/Timbuktu',
			'Africa/Tripoli',
			'Africa/Tunis',
			'Africa/Windhoek',
			'America/Adak',
			'America/Anchorage',
			'America/Anguilla',
			'America/Antigua',
			'America/Araguaina',
			'America/Aruba',
			'America/Asuncion',
			'America/Barbados',
			'America/Belem',
			'America/Belize',
			'America/Boa_Vista',
			'America/Bogota',
			'America/Boise',
			'America/Buenos_Aires',
			'America/Cambridge_Bay',
			'America/Cancun',
			'America/Caracas',
			'America/Catamarca',
			'America/Cayenne',
			'America/Cayman',
			'America/Chicago',
			'America/Chihuahua',
			'America/Cordoba',
			'America/Costa_Rica',
			'America/Cuiaba',
			'America/Curacao',
			'America/Danmarkshavn',
			'America/Dawson',
			'America/Dawson_Creek',
			'America/Denver',
			'America/Detroit',
			'America/Dominica',
			'America/Edmonton',
			'America/Eirunepe',
			'America/El_Salvador',
			'America/Fortaleza',
			'America/Glace_Bay',
			'America/Godthab',
			'America/Goose_Bay',
			'America/Grand_Turk',
			'America/Grenada',
			'America/Guadeloupe',
			'America/Guatemala',
			'America/Guayaquil',
			'America/Guyana',
			'America/Halifax',
			'America/Havana',
			'America/Hermosillo',
			'America/Indiana/Indianapolis',
			'America/Indiana/Knox',
			'America/Indiana/Marengo',
			'America/Indiana/Vevay',
			'America/Indianapolis',
			'America/Inuvik',
			'America/Iqaluit',
			'America/Jamaica',
			'America/Jujuy',
			'America/Juneau',
			'America/Kentucky/Louisville',
			'America/Kentucky/Monticello',
			'America/La_Paz',
			'America/Lima',
			'America/Los_Angeles',
			'America/Louisville',
			'America/Maceio',
			'America/Managua',
			'America/Manaus',
			'America/Martinique',
			'America/Mazatlan',
			'America/Mendoza',
			'America/Menominee',
			'America/Merida',
			'America/Mexico_City',
			'America/Miquelon',
			'America/Monterrey',
			'America/Montevideo',
			'America/Montreal',
			'America/Montserrat',
			'America/Nassau',
			'America/New_York',
			'America/Nipigon',
			'America/Nome',
			'America/Noronha',
			'America/North_Dakota/Center',
			'America/Panama',
			'America/Pangnirtung',
			'America/Paramaribo',
			'America/Phoenix',
			'America/Port-au-Prince',
			'America/Port_of_Spain',
			'America/Porto_Velho',
			'America/Puerto_Rico',
			'America/Rainy_River',
			'America/Rankin_Inlet',
			'America/Recife',
			'America/Regina',
			'America/Rio_Branco',
			'America/Rosario',
			'America/Santiago',
			'America/Santo_Domingo',
			'America/Sao_Paulo',
			'America/Scoresbysund',
			'America/Shiprock',
			'America/St_Johns',
			'America/St_Kitts',
			'America/St_Lucia',
			'America/St_Thomas',
			'America/St_Vincent',
			'America/Swift_Current',
			'America/Tegucigalpa',
			'America/Thule',
			'America/Thunder_Bay',
			'America/Tijuana',
			'America/Tortola',
			'America/Vancouver',
			'America/Whitehorse',
			'America/Winnipeg',
			'America/Yakutat',
			'America/Yellowknife',
			'Antarctica/Casey',
			'Antarctica/Davis',
			'Antarctica/DumontDUrville',
			'Antarctica/Mawson',
			'Antarctica/McMurdo',
			'Antarctica/Palmer',
			'Antarctica/South_Pole',
			'Antarctica/Syowa',
			'Antarctica/Vostok',
			'Arctic/Longyearbyen',
			'Asia/Aden',
			'Asia/Almaty',
			'Asia/Amman',
			'Asia/Anadyr',
			'Asia/Aqtau',
			'Asia/Aqtobe',
			'Asia/Ashgabat',
			'Asia/Baghdad',
			'Asia/Bahrain',
			'Asia/Baku',
			'Asia/Bangkok',
			'Asia/Beirut',
			'Asia/Bishkek',
			'Asia/Brunei',
			'Asia/Calcutta',
			'Asia/Choibalsan',
			'Asia/Chongqing',
			'Asia/Colombo',
			'Asia/Damascus',
			'Asia/Dhaka',
			'Asia/Dili',
			'Asia/Dubai',
			'Asia/Dushanbe',
			'Asia/Gaza',
			'Asia/Harbin',
			'Asia/Hong_Kong',
			'Asia/Hovd',
			'Asia/Irkutsk',
			'Asia/Istanbul',
			'Asia/Jakarta',
			'Asia/Jayapura',
			'Asia/Jerusalem',
			'Asia/Kabul',
			'Asia/Kamchatka',
			'Asia/Karachi',
			'Asia/Kashgar',
			'Asia/Katmandu',
			'Asia/Krasnoyarsk',
			'Asia/Kuala_Lumpur',
			'Asia/Kuching',
			'Asia/Kuwait',
			'Asia/Macao',
			'Asia/Macau',
			'Asia/Magadan',
			'Asia/Makassar',
			'Asia/Manila',
			'Asia/Muscat',
			'Asia/Nicosia',
			'Asia/Novosibirsk',
			'Asia/Omsk',
			'Asia/Oral',
			'Asia/Phnom_Penh',
			'Asia/Pontianak',
			'Asia/Pyongyang',
			'Asia/Qyzylorda',
			'Asia/Qatar',
			'Asia/Rangoon',
			'Asia/Riyadh',
			'Asia/Saigon',
			'Asia/Sakhalin',
			'Asia/Samarkand',
			'Asia/Seoul',
			'Asia/Shanghai',
			'Asia/Singapore',
			'Asia/Taipei',
			'Asia/Tashkent',
			'Asia/Tbilisi',
			'Asia/Tehran',
			'Asia/Thimphu',
			'Asia/Tokyo',
			'Asia/Ujung_Pandang',
			'Asia/Ulaanbaatar',
			'Asia/Urumqi',
			'Asia/Vientiane',
			'Asia/Vladivostok',
			'Asia/Yakutsk',
			'Asia/Yekaterinburg',
			'Asia/Yerevan',
			'Atlantic/Azores',
			'Atlantic/Bermuda',
			'Atlantic/Canary',
			'Atlantic/Cape_Verde',
			'Atlantic/Faeroe',
			'Atlantic/Jan_Mayen',
			'Atlantic/Madeira',
			'Atlantic/Reykjavik',
			'Atlantic/South_Georgia',
			'Atlantic/St_Helena',
			'Atlantic/Stanley',
			'Australia/Adelaide',
			'Australia/Brisbane',
			'Australia/Broken_Hill',
			'Australia/Darwin',
			'Australia/Hobart',
			'Australia/Lindeman',
			'Australia/Lord_Howe',
			'Australia/Melbourne',
			'Australia/Perth',
			'Australia/Sydney',
			'Europe/Amsterdam',
			'Europe/Andorra',
			'Europe/Athens',
			'Europe/Belfast',
			'Europe/Belgrade',
			'Europe/Berlin',
			'Europe/Bratislava',
			'Europe/Brussels',
			'Europe/Bucharest',
			'Europe/Budapest',
			'Europe/Chisinau',
			'Europe/Copenhagen',
			'Europe/Dublin',
			'Europe/Gibraltar',
			'Europe/Helsinki',
			'Europe/Istanbul',
			'Europe/Kaliningrad',
			'Europe/Kiev',
			'Europe/Lisbon',
			'Europe/Ljubljana',
			'Europe/London',
			'Europe/Luxembourg',
			'Europe/Madrid',
			'Europe/Malta',
			'Europe/Minsk',
			'Europe/Monaco',
			'Europe/Moscow',
			'Europe/Nicosia',
			'Europe/Oslo',
			'Europe/Paris',
			'Europe/Prague',
			'Europe/Riga',
			'Europe/Rome',
			'Europe/Samara',
			'Europe/San_Marino',
			'Europe/Sarajevo',
			'Europe/Simferopol',
			'Europe/Skopje',
			'Europe/Sofia',
			'Europe/Stockholm',
			'Europe/Tallinn',
			'Europe/Tirane',
			'Europe/Uzhgorod',
			'Europe/Vaduz',
			'Europe/Vatican',
			'Europe/Vienna',
			'Europe/Vilnius',
			'Europe/Warsaw',
			'Europe/Zagreb',
			'Europe/Zaporozhye',
			'Europe/Zurich',
			'Indian/Antananarivo',
			'Indian/Chagos',
			'Indian/Christmas',
			'Indian/Cocos',
			'Indian/Comoro',
			'Indian/Kerguelen',
			'Indian/Mahe',
			'Indian/Maldives',
			'Indian/Mauritius',
			'Indian/Mayotte',
			'Indian/Reunion',
			'Pacific/Apia',
			'Pacific/Auckland',
			'Pacific/Chatham',
			'Pacific/Easter',
			'Pacific/Efate',
			'Pacific/Enderbury',
			'Pacific/Fakaofo',
			'Pacific/Fiji',
			'Pacific/Funafuti',
			'Pacific/Galapagos',
			'Pacific/Gambier',
			'Pacific/Guadalcanal',
			'Pacific/Guam',
			'Pacific/Honolulu',
			'Pacific/Johnston',
			'Pacific/Kiritimati',
			'Pacific/Kosrae',
			'Pacific/Kwajalein',
			'Pacific/Majuro',
			'Pacific/Marquesas',
			'Pacific/Midway',
			'Pacific/Nauru',
			'Pacific/Niue',
			'Pacific/Norfolk',
			'Pacific/Noumea',
			'Pacific/Pago_Pago',
			'Pacific/Palau',
			'Pacific/Pitcairn',
			'Pacific/Ponape',
			'Pacific/Port_Moresby',
			'Pacific/Rarotonga',
			'Pacific/Saipan',
			'Pacific/Tahiti',
			'Pacific/Tarawa',
			'Pacific/Tongatapu',
			'Pacific/Truk',
			'Pacific/Wake',
			'Pacific/Wallis',
			'Pacific/Yap'
		],

		getCountries: function() {
			var self = this,
				i18n = monster.apps.core.i18n.active().monsterCountries,
				// We don't want the list to come from the i18n files
				results = {
					AD: i18n.AD,
					AE: i18n.AE,
					AF: i18n.AF,
					AG: i18n.AG,
					AI: i18n.AI,
					AL: i18n.AL,
					AM: i18n.AM,
					AN: i18n.AN,
					AO: i18n.AO,
					AQ: i18n.AQ,
					AR: i18n.AR,
					AS: i18n.AS,
					AT: i18n.AT,
					AU: i18n.AU,
					AW: i18n.AW,
					AX: i18n.AX,
					AZ: i18n.AZ,
					BA: i18n.BA,
					BB: i18n.BB,
					BD: i18n.BD,
					BE: i18n.BE,
					BF: i18n.BF,
					BG: i18n.BG,
					BH: i18n.BH,
					BI: i18n.BI,
					BJ: i18n.BJ,
					BL: i18n.BL,
					BM: i18n.BM,
					BN: i18n.BN,
					BO: i18n.BO,
					BR: i18n.BR,
					BS: i18n.BS,
					BT: i18n.BT,
					BV: i18n.BV,
					BW: i18n.BW,
					BY: i18n.BY,
					BZ: i18n.BZ,
					CA: i18n.CA,
					CC: i18n.CC,
					CD: i18n.CD,
					CF: i18n.CF,
					CG: i18n.CG,
					CH: i18n.CH,
					CI: i18n.CI,
					CK: i18n.CK,
					CL: i18n.CL,
					CM: i18n.CM,
					CN: i18n.CN,
					CO: i18n.CO,
					CR: i18n.CR,
					CU: i18n.CU,
					CV: i18n.CV,
					CX: i18n.CX,
					CY: i18n.CY,
					CZ: i18n.CZ,
					DE: i18n.DE,
					DJ: i18n.DJ,
					DK: i18n.DK,
					DM: i18n.DM,
					DO: i18n.DO,
					DZ: i18n.DZ,
					EC: i18n.EC,
					EE: i18n.EE,
					EG: i18n.EG,
					EH: i18n.EH,
					ER: i18n.ER,
					ES: i18n.ES,
					ET: i18n.ET,
					FI: i18n.FI,
					FJ: i18n.FJ,
					FK: i18n.FK,
					FM: i18n.FM,
					FO: i18n.FO,
					FR: i18n.FR,
					GA: i18n.GA,
					GB: i18n.GB,
					GD: i18n.GD,
					GE: i18n.GE,
					GF: i18n.GF,
					GG: i18n.GG,
					GH: i18n.GH,
					GI: i18n.GI,
					GL: i18n.GL,
					GM: i18n.GM,
					GN: i18n.GN,
					GP: i18n.GP,
					GQ: i18n.GQ,
					GR: i18n.GR,
					GS: i18n.GS,
					GT: i18n.GT,
					GU: i18n.GU,
					GW: i18n.GW,
					GY: i18n.GY,
					HK: i18n.HK,
					HM: i18n.HM,
					HN: i18n.HN,
					HR: i18n.HR,
					HT: i18n.HT,
					HU: i18n.HU,
					ID: i18n.ID,
					IE: i18n.IE,
					IL: i18n.IL,
					IM: i18n.IM,
					IN: i18n.IN,
					IO: i18n.IO,
					IQ: i18n.IQ,
					IR: i18n.IR,
					IS: i18n.IS,
					IT: i18n.IT,
					JE: i18n.JE,
					JM: i18n.JM,
					JO: i18n.JO,
					JP: i18n.JP,
					KE: i18n.KE,
					KG: i18n.KG,
					KH: i18n.KH,
					KI: i18n.KI,
					KM: i18n.KM,
					KN: i18n.KN,
					KR: i18n.KR,
					KW: i18n.KW,
					KY: i18n.KY,
					KZ: i18n.KZ,
					LA: i18n.LA,
					LB: i18n.LB,
					LC: i18n.LC,
					LI: i18n.LI,
					LK: i18n.LK,
					LR: i18n.LR,
					LS: i18n.LS,
					LT: i18n.LT,
					LU: i18n.LU,
					LV: i18n.LV,
					LY: i18n.LY,
					MA: i18n.MA,
					MC: i18n.MC,
					MD: i18n.MD,
					ME: i18n.ME,
					MF: i18n.MF,
					MG: i18n.MG,
					MH: i18n.MH,
					MK: i18n.MK,
					ML: i18n.ML,
					MM: i18n.MM,
					MN: i18n.MN,
					MO: i18n.MO,
					MP: i18n.MP,
					MQ: i18n.MQ,
					MR: i18n.MR,
					MS: i18n.MS,
					MT: i18n.MT,
					MU: i18n.MU,
					MV: i18n.MV,
					MW: i18n.MW,
					MX: i18n.MX,
					MY: i18n.MY,
					MZ: i18n.MZ,
					NA: i18n.NA,
					NC: i18n.NC,
					NE: i18n.NE,
					NF: i18n.NF,
					NG: i18n.NG,
					NI: i18n.NI,
					NL: i18n.NL,
					NO: i18n.NO,
					NP: i18n.NP,
					NR: i18n.NR,
					NU: i18n.NU,
					NZ: i18n.NZ,
					OM: i18n.OM,
					PA: i18n.PA,
					PE: i18n.PE,
					PF: i18n.PF,
					PG: i18n.PG,
					PH: i18n.PH,
					PK: i18n.PK,
					PL: i18n.PL,
					PM: i18n.PM,
					PN: i18n.PN,
					PR: i18n.PR,
					PS: i18n.PS,
					PT: i18n.PT,
					PW: i18n.PW,
					PY: i18n.PY,
					QA: i18n.QA,
					RE: i18n.RE,
					RO: i18n.RO,
					RS: i18n.RS,
					RU: i18n.RU,
					RW: i18n.RW,
					SA: i18n.SA,
					SB: i18n.SB,
					SC: i18n.SC,
					SD: i18n.SD,
					SE: i18n.SE,
					SG: i18n.SG,
					SH: i18n.SH,
					SI: i18n.SI,
					SJ: i18n.SJ,
					SK: i18n.SK,
					SL: i18n.SL,
					SM: i18n.SM,
					SN: i18n.SN,
					SO: i18n.SO,
					SR: i18n.SR,
					ST: i18n.ST,
					SV: i18n.SV,
					SY: i18n.SY,
					SZ: i18n.SZ,
					TC: i18n.TC,
					TD: i18n.TD,
					TF: i18n.TF,
					TG: i18n.TG,
					TH: i18n.TH,
					TJ: i18n.TJ,
					TK: i18n.TK,
					TL: i18n.TL,
					TM: i18n.TM,
					TN: i18n.TN,
					TO: i18n.TO,
					TR: i18n.TR,
					TT: i18n.TT,
					TV: i18n.TV,
					TW: i18n.TW,
					TZ: i18n.TZ,
					UA: i18n.UA,
					UG: i18n.UG,
					UM: i18n.UM,
					US: i18n.US,
					UY: i18n.UY,
					UZ: i18n.UZ,
					VA: i18n.VA,
					VC: i18n.VC,
					VE: i18n.VE,
					VG: i18n.VG,
					VI: i18n.VI,
					VN: i18n.VN,
					VU: i18n.VU,
					WF: i18n.WF,
					WS: i18n.WS,
					YE: i18n.YE,
					YT: i18n.YT,
					ZA: i18n.ZA,
					ZM: i18n.ZM,
					ZW: i18n.ZW
				};

			return results;
		},

		getCountryName: function(countryCode) {
			var self = this,
				isoCountries = self.getCountries();

			if (isoCountries.hasOwnProperty(countryCode)) {
				return isoCountries[countryCode];
			} else {
				return countryCode;
			}
		},

		populateDropdown: function(dropdown, _selected, extraOptions) {
			var self = this,
				selected = _selected || self.getLocaleTimezone();

			$.each(self.list, function(i, data) {
				if (selected === data) {
					dropdown.append('<option value="' + data + '" selected>' + data + '</option>');
				} else {
					dropdown.append('<option value="' + data + '">' + data + '</option>');
				}
			});

			if (extraOptions) {
				_.each(extraOptions, function(name, value) {
					dropdown.prepend('<option value="' + value + '"' + (selected === value ? 'selected' : '') + '>' + name + '</option>');
				});
			}
		},

		getLocaleTimezone: function() {
			return jstz.determine_timezone().name();
		},

		formatTimezone: function(timezone) {
			return timezone.replace(/(.+)\/([^/]+)/, '$2 ($1)').replace('_', ' ');
		}
	};

	return timezone;
});
