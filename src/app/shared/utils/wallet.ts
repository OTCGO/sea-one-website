export function  getWif(encrypted, passphrase) {
    const n = 16384;
    const r = 8;
    const p = 8;
    return new  Promise((resolve, reject) => {
      ThinNeo.Helper.GetPrivateKeyFromNep2(encrypted, passphrase, n, r, p, (info, result) => {
        try {
          if (info === 'finish') {
            const prikey = result as Uint8Array;
            const wif  = ThinNeo.Helper.GetWifFromPrivateKey(prikey);
            resolve({wif, prikey});
          }

          reject('error');
          // console.log('info=' + info)
          // const prikey = result as Uint8Array
          // // console.log('result=' + prikey.toHexString())
          // const pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey)
          // const address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey)
          // console.log('address=' + address)

        } catch (error) {
          reject('error');
          console.log('GetPrivateKeyFromNep2', error);
        }
      });
    });
  }
