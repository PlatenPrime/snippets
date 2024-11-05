import { useEffect, useRef } from "react";


export const useUnloadHook = (fn: (event: BeforeUnloadEvent) => void) => {
  const cb = useRef(fn);

  useEffect(() => {
    const onUnload = cb.current;
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [cb]);
};