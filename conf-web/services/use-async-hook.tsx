import { DependencyList, useEffect } from "react";

type Options = {
  doFinally?: () => void;
  doCleanup?: () => void;
  deps: DependencyList;
};

export default function useAsyncHook(
  doAsync: (...args: any[]) => Promise<any>,
  setErrorState: (errorState: Error) => void,
  options?: Options
) {
  useEffect(() => {
    doAsync().catch(setErrorState).finally(options?.doFinally);

    if (options?.doCleanup) {
      return options.doCleanup;
    }
  }, options?.deps);
}
