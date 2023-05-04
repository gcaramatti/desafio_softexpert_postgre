export interface IPersistenceSaleSummary {
  id: number;
  created_at: string;
  total_sale: number;
  total_tax_sale: number;
  total_items: number;
}

export interface ISaleSummary {
  id: number;
  createdAt: string;
  totalSale: number;
  totalTaxSale: number;
  totalItems: number;
}

export interface ISaleDetails {
  id: number;
  saleId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
  totalProduct: string;
  totalTax: string;
  tax: number;
  createdAt: string;
  productName: string;
  description: string;
}

export interface IPersistenceSaleDetails {
  id: number;
  sale_id: number;
  product_id: number;
  quantity: number;
  unit_price: number;
  total_product: number;
  total_tax: number;
  tax: number;
  created_at: string;
  product_name: string;
  description: string;
}

export interface ISale {
  productId: string;
  quantity: string;
  price: string;
  tax: string;
  totalTax: string;
  totalProduct: string;
}

export interface ISaleHookForm {
  selledItems: {
    productId: string;
    quantity: string;
    price: string;
    tax: string;
    totalTax: string;
    totalProduct: string;
  }[];
}

export interface IPersistenceSale {
  product_id: number;
  quantity: number;
  price: number;
  tax: number;
  total_tax: number;
  total_product: number;
}
