export interface IFlags {
	getFlag: (key: string) => any;
	getAllFlags: () => object;
};

export class Flags implements IFlags {
	private static exist: boolean;
	private static instance: Flags;
	private readonly flags!: any;

	constructor() {
		if (Flags.exist) {
			return Flags.instance;
		}
		Flags.exist = true;

		this.flags = {
			IO: require('./png_flags/IO.png'),
			BV: require('./png_flags/BV.png'),
			GP: require('./png_flags/GP.png'),
			RE: require('./png_flags/RE.png'),
			SJ: require('./png_flags/SJ.png'),
			PM: require('./png_flags/PM.png'),
			UM: require('./png_flags/UM.png'),
			AD: require('./png_flags/AD.png'),
			AE: require('./png_flags/AE.png'),
			AF: require('./png_flags/AF.png'),
			AG: require('./png_flags/AG.png'),
			AI: require('./png_flags/AI.png'),
			AL: require('./png_flags/AL.png'),
			AM: require('./png_flags/AM.png'),
			AN: require('./png_flags/AN.png'),
			AO: require('./png_flags/AO.png'),
			AQ: require('./png_flags/AQ.png'),
			AR: require('./png_flags/AR.png'),
			AS: require('./png_flags/AS.png'),
			AT: require('./png_flags/AT.png'),
			AU: require('./png_flags/AU.png'),
			AW: require('./png_flags/AW.png'),
			AX: require('./png_flags/AX.png'),
			AZ: require('./png_flags/AZ.png'),
			BA: require('./png_flags/BA.png'),
			BB: require('./png_flags/BB.png'),
			BD: require('./png_flags/BD.png'),
			BE: require('./png_flags/BE.png'),
			BF: require('./png_flags/BF.png'),
			BG: require('./png_flags/BG.png'),
			BH: require('./png_flags/BH.png'),
			BI: require('./png_flags/BI.png'),
			BJ: require('./png_flags/BJ.png'),
			BL: require('./png_flags/BL.png'),
			BM: require('./png_flags/BM.png'),
			BN: require('./png_flags/BN.png'),
			BO: require('./png_flags/BO.png'),
			BR: require('./png_flags/BR.png'),
			BS: require('./png_flags/BS.png'),
			BT: require('./png_flags/BT.png'),
			BW: require('./png_flags/BW.png'),
			BY: require('./png_flags/BY.png'),
			BZ: require('./png_flags/BZ.png'),
			CA: require('./png_flags/CA.png'),
			CC: require('./png_flags/CC.png'),
			CD: require('./png_flags/CD.png'),
			CF: require('./png_flags/CF.png'),
			CG: require('./png_flags/CG.png'),
			CH: require('./png_flags/CH.png'),
			CI: require('./png_flags/CI.png'),
			CK: require('./png_flags/CK.png'),
			CL: require('./png_flags/CL.png'),
			CM: require('./png_flags/CM.png'),
			CN: require('./png_flags/CN.png'),
			CO: require('./png_flags/CO.png'),
			CR: require('./png_flags/CR.png'),
			CU: require('./png_flags/CU.png'),
			CV: require('./png_flags/CV.png'),
			CW: require('./png_flags/CW.png'),
			CX: require('./png_flags/CX.png'),
			CY: require('./png_flags/CY.png'),
			CZ: require('./png_flags/CZ.png'),
			DE: require('./png_flags/DE.png'),
			DJ: require('./png_flags/DJ.png'),
			DK: require('./png_flags/DK.png'),
			DM: require('./png_flags/DM.png'),
			DO: require('./png_flags/DO.png'),
			DZ: require('./png_flags/DZ.png'),
			EC: require('./png_flags/EC.png'),
			EE: require('./png_flags/EE.png'),
			EG: require('./png_flags/EG.png'),
			EH: require('./png_flags/EH.png'),
			ER: require('./png_flags/ER.png'),
			ES: require('./png_flags/ES.png'),
			ET: require('./png_flags/ET.png'),
			EU: require('./png_flags/EU.png'),
			FI: require('./png_flags/FI.png'),
			FJ: require('./png_flags/FJ.png'),
			FK: require('./png_flags/FK.png'),
			FM: require('./png_flags/FM.png'),
			FO: require('./png_flags/FO.png'),
			FR: require('./png_flags/FR.png'),
			GA: require('./png_flags/GA.png'),
			GB: require('./png_flags/GB.png'),
			GD: require('./png_flags/GD.png'),
			GE: require('./png_flags/GE.png'),
			GG: require('./png_flags/GG.png'),
			GH: require('./png_flags/GH.png'),
			GI: require('./png_flags/GI.png'),
			GL: require('./png_flags/GL.png'),
			GM: require('./png_flags/GM.png'),
			GN: require('./png_flags/GN.png'),
			GQ: require('./png_flags/GQ.png'),
			GR: require('./png_flags/GR.png'),
			GS: require('./png_flags/GS.png'),
			GT: require('./png_flags/GT.png'),
			GU: require('./png_flags/GU.png'),
			GW: require('./png_flags/GW.png'),
			GY: require('./png_flags/GY.png'),
			HK: require('./png_flags/HK.png'),
			HN: require('./png_flags/HN.png'),
			HR: require('./png_flags/HR.png'),
			HT: require('./png_flags/HT.png'),
			HU: require('./png_flags/HU.png'),
			IC: require('./png_flags/IC.png'),
			ID: require('./png_flags/ID.png'),
			IE: require('./png_flags/IE.png'),
			IL: require('./png_flags/IL.png'),
			IM: require('./png_flags/IM.png'),
			IN: require('./png_flags/IN.png'),
			IQ: require('./png_flags/IQ.png'),
			IR: require('./png_flags/IR.png'),
			IS: require('./png_flags/IS.png'),
			IT: require('./png_flags/IT.png'),
			JE: require('./png_flags/JE.png'),
			JM: require('./png_flags/JM.png'),
			JO: require('./png_flags/JO.png'),
			JP: require('./png_flags/JP.png'),
			KE: require('./png_flags/KE.png'),
			KG: require('./png_flags/KG.png'),
			KH: require('./png_flags/KH.png'),
			KI: require('./png_flags/KI.png'),
			KM: require('./png_flags/KM.png'),
			KN: require('./png_flags/KN.png'),
			KP: require('./png_flags/KP.png'),
			KR: require('./png_flags/KR.png'),
			KW: require('./png_flags/KW.png'),
			KY: require('./png_flags/KY.png'),
			KZ: require('./png_flags/KZ.png'),
			LA: require('./png_flags/LA.png'),
			LB: require('./png_flags/LB.png'),
			LC: require('./png_flags/LC.png'),
			LI: require('./png_flags/LI.png'),
			LK: require('./png_flags/LK.png'),
			LR: require('./png_flags/LR.png'),
			LS: require('./png_flags/LS.png'),
			LT: require('./png_flags/LT.png'),
			LU: require('./png_flags/LU.png'),
			LV: require('./png_flags/LV.png'),
			LY: require('./png_flags/LY.png'),
			MA: require('./png_flags/MA.png'),
			MC: require('./png_flags/MC.png'),
			MD: require('./png_flags/MD.png'),
			ME: require('./png_flags/ME.png'),
			MF: require('./png_flags/MF.png'),
			MG: require('./png_flags/MG.png'),
			MH: require('./png_flags/MH.png'),
			MK: require('./png_flags/MK.png'),
			ML: require('./png_flags/ML.png'),
			MM: require('./png_flags/MM.png'),
			MN: require('./png_flags/MN.png'),
			MO: require('./png_flags/MO.png'),
			MP: require('./png_flags/MP.png'),
			MQ: require('./png_flags/MQ.png'),
			MR: require('./png_flags/MR.png'),
			MS: require('./png_flags/MS.png'),
			MT: require('./png_flags/MT.png'),
			MU: require('./png_flags/MU.png'),
			MV: require('./png_flags/MV.png'),
			MW: require('./png_flags/MW.png'),
			MX: require('./png_flags/MX.png'),
			MY: require('./png_flags/MY.png'),
			MZ: require('./png_flags/MZ.png'),
			NA: require('./png_flags/NA.png'),
			NC: require('./png_flags/NC.png'),
			NE: require('./png_flags/NE.png'),
			NF: require('./png_flags/NF.png'),
			NG: require('./png_flags/NG.png'),
			NI: require('./png_flags/NI.png'),
			NL: require('./png_flags/NL.png'),
			NO: require('./png_flags/NO.png'),
			NP: require('./png_flags/NP.png'),
			NR: require('./png_flags/NR.png'),
			NU: require('./png_flags/NU.png'),
			NZ: require('./png_flags/NZ.png'),
			OM: require('./png_flags/OM.png'),
			PA: require('./png_flags/PA.png'),
			PE: require('./png_flags/PE.png'),
			PF: require('./png_flags/PF.png'),
			PG: require('./png_flags/PG.png'),
			PH: require('./png_flags/PH.png'),
			PK: require('./png_flags/PK.png'),
			PL: require('./png_flags/PL.png'),
			PN: require('./png_flags/PN.png'),
			PR: require('./png_flags/PR.png'),
			PS: require('./png_flags/PS.png'),
			PT: require('./png_flags/PT.png'),
			PW: require('./png_flags/PW.png'),
			PY: require('./png_flags/PY.png'),
			QA: require('./png_flags/QA.png'),
			RO: require('./png_flags/RO.png'),
			RS: require('./png_flags/RS.png'),
			RU: require('./png_flags/RU.png'),
			RW: require('./png_flags/RW.png'),
			SA: require('./png_flags/SA.png'),
			SB: require('./png_flags/SB.png'),
			SC: require('./png_flags/SC.png'),
			SD: require('./png_flags/SD.png'),
			SE: require('./png_flags/SE.png'),
			SG: require('./png_flags/SG.png'),
			SH: require('./png_flags/SH.png'),
			SI: require('./png_flags/SI.png'),
			SK: require('./png_flags/SK.png'),
			SL: require('./png_flags/SL.png'),
			SM: require('./png_flags/SM.png'),
			SN: require('./png_flags/SN.png'),
			SO: require('./png_flags/SO.png'),
			SR: require('./png_flags/SR.png'),
			SS: require('./png_flags/SS.png'),
			ST: require('./png_flags/ST.png'),
			SV: require('./png_flags/SV.png'),
			SY: require('./png_flags/SY.png'),
			SZ: require('./png_flags/SZ.png'),
			TC: require('./png_flags/TC.png'),
			TD: require('./png_flags/TD.png'),
			TF: require('./png_flags/TF.png'),
			TG: require('./png_flags/TG.png'),
			TH: require('./png_flags/TH.png'),
			TJ: require('./png_flags/TJ.png'),
			TK: require('./png_flags/TK.png'),
			TL: require('./png_flags/TL.png'),
			TM: require('./png_flags/TM.png'),
			TN: require('./png_flags/TN.png'),
			TO: require('./png_flags/TO.png'),
			TR: require('./png_flags/TR.png'),
			TT: require('./png_flags/TT.png'),
			TV: require('./png_flags/TV.png'),
			TW: require('./png_flags/TW.png'),
			TZ: require('./png_flags/TZ.png'),
			UA: require('./png_flags/UA.png'),
			UG: require('./png_flags/UG.png'),
			US: require('./png_flags/US.png'),
			UY: require('./png_flags/UY.png'),
			UZ: require('./png_flags/UZ.png'),
			VA: require('./png_flags/VA.png'),
			VC: require('./png_flags/VC.png'),
			VE: require('./png_flags/VE.png'),
			VG: require('./png_flags/VG.png'),
			VI: require('./png_flags/VI.png'),
			VN: require('./png_flags/VN.png'),
			VU: require('./png_flags/VU.png'),
			WF: require('./png_flags/WF.png'),
			WS: require('./png_flags/WS.png'),
			YE: require('./png_flags/YE.png'),
			YT: require('./png_flags/YT.png'),
			ZA: require('./png_flags/ZA.png'),
			ZM: require('./png_flags/ZM.png'),
			ZW: require('./png_flags/ZW.png'),
			GF: require('./png_flags/FR.png'),
			HM: require('./png_flags/AU.png'),
		};
	};

	getFlag = (key: string) => {
		return this.flags[key.toUpperCase()];
	};
	getAllFlags = () => {
		return this.flags;
	};
};
