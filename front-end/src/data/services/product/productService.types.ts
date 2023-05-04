export interface IProduct {
  id: number;
  categoryId: number;
  description: string;
  name: string;
  price: number;
  tax: number;
  categoryName: string;
}

export interface IPersistenceProduct {
  id: number;
  description: string;
  name: string;
  price: number;
  tax: number;
  category_id: number;
  category_name: string;
}

export type IPersistenceStoreProductType = Omit<
  IPersistenceProduct,
  'id' | 'category_name'
>;

export interface ICreateProductForm {
  categoryId: string;
  description: string;
  name: string;
  price: string;
  tax: string;
}

export interface IUpdateProductForm {
  id: number;
  data: ICreateProductForm;
}
