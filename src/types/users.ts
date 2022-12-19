export type userRole = 'admin' | 'client';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: userRole;
}

export interface Driver extends User {
  truckID: string;
  companyID: string;
  number?: string;
  note?: string;
}

export interface SigninUser extends User {
  token: string;
}

export type Company = {
  id: string;
  name: string;
  contact: string;
  contactNum: string;
};
