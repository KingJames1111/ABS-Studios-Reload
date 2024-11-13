import { useCallback } from 'react';
//import { DESIGN_SYSTEM } from './index';
import { A11Y_STANDARDS } from '@/lib/core/content-standards';

// Custom hook for accessing design tokens with type safety
export const useDesignSystem = () => {
  const getToken = useCallback(<
    T extends keyof typeof A11Y_STANDARDS,
    K extends keyof typeof A11Y_STANDARDS[T]
  >(
    category: T,
    token: K
  ): typeof A11Y_STANDARDS[T][K] => {
    return A11Y_STANDARDS[category][token];
  }, []);

  return { getToken };
};