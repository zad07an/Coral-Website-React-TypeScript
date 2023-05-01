export interface IProducts {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number | null;
  sale: boolean;
  hot: boolean;
  category: string;
  image: string;
}

export interface INavlinks {
  pathname: string;
  path: string;
}

export interface IBrands {
  image: string;
}

export interface IFooterLinks {
  path: string;
  pathname: string;
}

export interface ICartItems extends IProducts {
  quantity: number;
}