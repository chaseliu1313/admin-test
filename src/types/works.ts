import { Company } from './users';

export type Truck = {
  companyID: string;
  id: string;
  plate: string;
  capacity: number;
  note?: string;
  image?: string[];
};

export type SiteType = 'source' | 'receiver';

export interface Site {
  id: string;
  name: string;
  type: SiteType;
  contact?: string;
  materialZone?: [number, number];
}

export type Load = {
  id: string;
  loadNum: number;
  inTime: string;
  outTime: string;
  outSite: Site;
  receiveSite: Site;
  note?: string;
  truckID: string;
  driverID: string;
};
