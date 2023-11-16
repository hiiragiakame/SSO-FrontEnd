import { useEffect } from "react";

export default function useEnterKeyEvent(dependencies, fn) {
  useEffect(() => {
    const onEnterKeyEvent = (e) => {
      if (e.key === "Enter") {
        fn();
      }
    };

    document.addEventListener("keypress", onEnterKeyEvent);
    return () => {
      document.removeEventListener("keypress", onEnterKeyEvent);
    };
  }, dependencies);
}
