export interface User {
  id: string;
  name: string;
}

export interface Split {
  userId: string;
  amount: number;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  paidBy: string; // userId
  date: Date;
  splits: Split[];
}

export interface Balance {
  from: string;
  to: string;
  amount: number;
}

export interface Settlement {
  from: User;
  to: User;
  amount: number;
}