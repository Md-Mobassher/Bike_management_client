import { TBike } from "./bike.type";

export type TSale = {
  _id: string;
  sellerId: string;
  bikeId: TBike;
  quantity: number;
  buyerName: string;
  salesDate: string;
  isPaymentComplete: boolean;
  totalAmount: number;
};

export type TInvoiceProps = {
  sales: TSale[];
};
