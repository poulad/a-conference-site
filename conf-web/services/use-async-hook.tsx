import { DependencyList, useEffect } from "react";

export default function useAsyncHook(
  asyncFunc: (...args: any[]) => Promise<any>,
  setErrorState: (errorState: Error) => void,
  asyncFinallyFunc?: () => void,
  cleanupFunc?: () => void,
  deps: DependencyList = undefined
) {
  useEffect(() => {
    asyncFunc().catch(setErrorState).finally(asyncFinallyFunc);

    if (cleanupFunc) {
      return cleanupFunc;
    }
  }, deps);
}
