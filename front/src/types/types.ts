export interface CardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}


export interface category {
  name: string;
}

export interface loginProp {
  email: string;
  password: string;
}

export interface loginPropError {
  email?: string;
  password?: string;
}

export interface registerProp {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface registerPropError {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
}

export interface userSession {
  token: string;
  userData: {
    address: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    role: string;
    order: [];
  };
}

export interface IOrder {
  id: number;
  status: string;
  date: Date;
  products: CardProps[];
}

export interface IProducts {
  products: number[];
}
