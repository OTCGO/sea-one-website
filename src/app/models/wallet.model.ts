export class Wallet {
  isLogin: boolean;
  privateKey?: string;
  encrypted?: string;
  address?: string;
  publicKey?: string;
  scriptHash?: string;
  wif?: string;
  publicKeyCompressed: string;
  privateKeyEncrypted: string;

  constructor({ ...arg }) {
    this.isLogin = arg.isLogin;
    this.privateKey = arg.privateKey;
    this.encrypted = arg.encrypted;
    this.address = arg.address;
    this.publicKey = arg.publicKey;
    this.scriptHash = arg.scriptHash;
    this.wif = arg.wif;
    this.publicKeyCompressed = arg.publicKeyCompressed;
    this.privateKeyEncrypted = arg.privateKeyEncrypted;
  }
}
