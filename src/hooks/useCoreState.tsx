import { Dispatch, useContext } from 'react';
import { CoreActions, CoreState } from '../context';
import { CoreContext } from './coreContext';

export default function useUser(): {
  coreState: CoreState;
  updateCoreState: Dispatch<CoreActions>;
} {
  const { coreState, updateCoreState } = useContext(CoreContext);
  return { coreState, updateCoreState };
}
