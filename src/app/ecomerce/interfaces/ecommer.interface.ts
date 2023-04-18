export interface IItem {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      Rating;
}

export interface IItemCart {
  productTitle: string;
  productId: string;
  totalPrice: number;
  quantity: number;
}

export interface ICart {
  userId: number;
  date: string;
  products: IProductCart[]
}

export interface IProductCart {
  productId: number;
  quantity: number;
}

export interface Rating {
  rate:  number;
  count: number;
}
