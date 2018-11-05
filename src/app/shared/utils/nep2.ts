// import * as CryptoJS from 'crypto-js';
// import { KJUR } from 'jsrsasign';

// /**
//  *
//  *
//  * @export
//  * @class Nep2
//  */
// export class Nep2 {
//   /**
//    *
//    *
//    * @param {any} enckey
//    * @param {any} pwd
//    * @returns
//    * @memberof Nep2
//    */
//   decrypt(enckey, pwd) {
//     return CryptoJS.AES
//       .decrypt(enckey, pwd)
//       .toString(CryptoJS.enc.Utf8);
//   }

//   /**
//    *
//    *
//    * @param {any} prvkey
//    * @param {any} msg
//    * @returns
//    * @memberof Nep2
//    */
//   doSign(prvkey, msg) {
//     const sig = new KJUR.crypto.Signature({ 'alg': 'SHA256withECDSA' });
//     sig.initSign({
//       'ecprvhex': prvkey,
//       'eccurvename': 'secp256r1'
//     });
//     sig.updateString(msg);
//     return sig.sign();
//   }

//   /**
//    *
//    *
//    * @param {any} pubkey
//    * @param {any} msg
//    * @param {any} sigval
//    * @returns
//    * @memberof Nep2
//    */
//   doVerify(pubkey, msg, sigval) {
//     const sig = new KJUR.crypto.Signature({
//       'alg': 'SHA256withECDSA',
//       'prov': 'cryptojs/jsrsa'
//     });
//     sig.initVerifyByPublicKey({
//       'ecpubhex': pubkey,
//       'eccurvename': 'secp256r1'
//     });
//     sig.updateString(msg);
//     return sig.verify(sigval);
//   }

//   /**
//    *
//    *
//    * @param {any} prvkey
//    * @param {any} pubkey
//    * @returns
//    * @memberof Nep2
//    */
//   doValidatePwd(prvkey, pubkey) {
//     if (prvkey.length === 0) { return false; }
//     const msg = 'aaa';
//     const sigval = this.doSign(prvkey, msg);
//     return this.doVerify(pubkey, msg, sigval);
//   }


//   /**
//    *
//    *
//    * @param {any} pubhex
//    * @returns
//    * @memberof Nep2
//    */
//   getCompressedPubHex(pubhex) {
//     const ec = new KJUR.crypto.ECDSA({
//       'curve': 'secp256r1',
//       'pub': pubhex
//     });
//     console.log('ec', ec);
//     const result = ec.getPublicKeyXYHex();
//     // const y = result['y'];
//     // const prefix = parseInt('0x' + y[y.length - 1], 16) % 2 ? '03' : '02';
//     // return prefix + result['x'];
//   }

//   /**
//    *
//    *
//    * @returns
//    * @memberof Nep2
//    */
//   genKeyPairHex() {
//     const keypair = new KJUR.crypto.ECDSA({
//       'curve': 'secp256r1'
//     }).generateKeyPairHex();
//     return {
//       'publicKey': keypair.ecpubhex,
//       'privateKey': keypair.ecprvhex
//     };
//   }

//   /**
//    *
//    *
//    * @param {any} prvkey
//    * @param {any} pwd
//    * @memberof Nep2
//    */
//   encryptPrivateKey(prvkey, pwd) {
//     return CryptoJS.AES.encrypt(prvkey, pwd).toString();
//   }

//   // isWIF(wif: string) {
//   //   try {
//   //     if (wif.length !== 52) { return false; }
//   //     const hexStr = this.ab2hexstring(Base58.decode(wif));
//   //     if (hexStr.substr(0, 2) !== '80' && hexStr.substr(hexStr.length - 10, 2) !== '01') { return false; }
//   //     const shaChecksum = CryptoJS.hash256(hexStr.substr(0, hexStr.length - 8)).toString().substr(0, 8);
//   //     return shaChecksum === hexStr.substr(hexStr.length - 8, 8);
//   //   } catch (e) {
//   //     console.log('e', e);
//   //     return false;
//   //   }
//   // }

// }




