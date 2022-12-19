import { CoreState } from './CoreContext.interface';

export enum CoreActionTypes {
  SET_USER = 'SET_USER'
}

export interface CoreActions {
  type: CoreActionTypes;
  payload: CoreState;
}
