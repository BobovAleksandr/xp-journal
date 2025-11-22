import { useRef } from "react";

export default function useDebounce<TArgs extends unknown[]>(
  func: (...args: TArgs) => unknown,
  delay: number
) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: TArgs): void => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
