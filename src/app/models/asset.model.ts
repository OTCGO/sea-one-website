export class Asset {
  state: string;
  GLOBAL: GLOBAL[];
  NEP5: NEP5[];
  ONTOLOGY: ONTOLOGY[];
}

export interface GLOBAL {
  admin: string;
  amount: string;  // It supposed to be type of number
  id: string;
  name: GlobalName[];
  owner: string;
  precision: number;
  time: string;
  symbol: string;
  type: string;
}

export interface GlobalName {
  lang: 'zh-CN' | 'en' | 'en-US';
  name: string;
}

export interface NEP5 {
  author: string;
  contract_name: string;
  decimals: string;
  description: string;
  email: string;
  id: string;
  name: string;
  parameter: string[];
  return_type: string;
  symbol: string;
  time: string;
  totalSupply: string;
  type: string;
  use_storage: boolean;
  version: string;
}

export interface ONTOLOGY {
  contract_name: string;
  version: string;
  parameter: string[];
  return_type: string;
  use_storage: boolean;
  dynamic_call: boolean;
  author: string;
  email: string;
  description: string;
  time: string;
  totalSupply: string;
  name: string;
  symbol: string;
  decimals: string;
  type: string;
  id: string;
}

// export class AssetTradeRecord {

  // constructor(
  //   seqno: number,
  //   price: number,
  //   symbol: string,
  //   count: number
  // ) {
  //   this.seqno = seqno;
  //   this.price = price;
  //   this.symbol = symbol;
  //   this.count = count;
  // }

  // seqno: number;
  // price: number;
  // symbol: string;
  // count: number;
// }

// export class AssetMyRecord {
//   constructor(
//     buyin: number,
//     soldout: number,
//     cost: number,
//     income: number,
//     hold: number
//   ) {
//     this.buyin = buyin;
//     this.soldout = soldout;
//     this.cost = cost;
//     this.income = income;
//     this.hold = hold;
//   }

//   buyin: number;
//   soldout: number;
//   cost: number;
//   income: number;
//   hold: number;
// }

// export class AssetMarketRecord {
//   constructor(
//     actionType: number,
//     tradeType: number,
//     unitPrice: number,
//     quantity: number,
//     tradeDate: string,
//     tradeTime: string
//   ) {
//     this.actionType = actionType;
//     this.tradeType = tradeType;
//     this.unitPrice = unitPrice;
//     this.quantity = quantity;
//     this.tradeDate = tradeDate;
//     this.tradeTime = tradeTime;
//   }
//   actionType: number;
//   tradeType: number;
//   unitPrice: number;
//   quantity: number;
//   totalPrice(): number {
//     return this.unitPrice * this.quantity;
//   }
//   tradeDate: string;
//   tradeTime: string;
// }
