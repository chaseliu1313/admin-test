import { CoreActions, CoreActionTypes } from './CoreContext.action';
import { CoreState } from './CoreContext.interface';

export const coreStateReducers = (state: CoreState, action: CoreActions): CoreState => {
  switch (action.type) {
    case CoreActionTypes.SET_USER:
      return { ...state, token: action.payload.token };
    default:
      return { ...state };
  }
};
