export interface Article {
  _id?: any;
  name: string;
  description: string;
  cost: number;
  stock: number;
  dateAdded?: string;
  photo?: string;
  active?: boolean;
}
